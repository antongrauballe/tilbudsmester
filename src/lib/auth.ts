import { jwtDecode } from "jwt-decode";
import { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: `${process.env.KEYCLOAK_ISSUER_BASEURL}/realms/${process.env.KEYCLOAK_REALM_NAME}`,
      authorization: {
        params: {
          scope: "openid",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user, trigger }) {
      if (trigger === "update") {
        return refreshAccessToken(token);
      }

      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.idToken = account.id_token;
        token.expiresAt =
          account.expires_at ?? Math.floor(Date.now() / 1000) + 300;
      }

      if (user) {
        token.user = user;
      }

      // Refresh token 60 seconds before it expires
      if (Date.now() < ((token.expiresAt as number) - 60) * 1000) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.idToken = token.idToken as string;
      session.user = token.user as User;
      session.error = token.error as string;
      session.expiresAt = token.expiresAt as number;
      return session;
    },
  },

  events: {
    async signOut({ token }) {
      if (token?.idToken) {
        const issuerUrl = `${process.env.KEYCLOAK_ISSUER_BASEURL}/realms/${process.env.KEYCLOAK_REALM_NAME}`;
        const logOutUrl = new URL(
          `${issuerUrl}/protocol/openid-connect/logout`,
        );
        logOutUrl.searchParams.set("id_token_hint", token.idToken as string);
        logOutUrl.searchParams.set("scope", "openid");

        try {
          await fetch(logOutUrl.toString());
        } catch (error) {
          console.error("Error during Keycloak logout:", error);
        }
      }
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
};

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const issuerUrl = `${process.env.KEYCLOAK_ISSUER_BASEURL}/realms/${process.env.KEYCLOAK_REALM_NAME}`;
    const tokenUrl = `${issuerUrl}/protocol/openid-connect/token`;
    const clientId = process.env.KEYCLOAK_CLIENT_ID!;
    const clientSecret = process.env.KEYCLOAK_CLIENT_SECRET!;

    if (token.refreshToken) {
      try {
        const decodedRefresh = jwtDecode(token.refreshToken as string) as {
          exp?: number;
        };
        const now = Math.floor(Date.now() / 1000);
        if (decodedRefresh.exp && decodedRefresh.exp <= now) {
          console.error("Refresh token expired");
          return {
            ...token,
            accessToken: undefined,
            refreshToken: undefined,
            expiresAt: 0,
            error: "RefreshAccessTokenError",
          };
        }
      } catch {
        // If we can't decode, try the refresh anyway
      }
    } else {
      return { ...token, error: "RefreshAccessTokenError" };
    }

    const body = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: token.refreshToken as string,
    });

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to refresh access token:", data);
      return {
        ...token,
        accessToken: undefined,
        refreshToken: undefined,
        expiresAt: 0,
        error: "RefreshAccessTokenError",
      };
    }

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? token.refreshToken,
      idToken: data.id_token ?? token.idToken,
      expiresAt: Math.floor(Date.now() / 1000) + (data.expires_in || 300),
      error: undefined,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}
