import { getSession, signOut } from "next-auth/react";

let isLoggingOut = false;

export async function performLogout(): Promise<void> {
  if (isLoggingOut) return;
  isLoggingOut = true;

  try {
    const session = await getSession();
    const idToken = session?.idToken;

    await signOut({ redirect: false });

    if (idToken) {
      const response = await fetch("/api/auth/logout");
      const data = await response.json();

      if (data.logoutUrl) {
        const redirectUri = `${window.location.origin}/auth/signin`;
        const params = new URLSearchParams();
        params.append("post_logout_redirect_uri", redirectUri);
        params.append("id_token_hint", idToken);

        window.location.href = `${data.logoutUrl}?${params.toString()}`;
        return;
      }
    }

    window.location.href = "/auth/signin";
  } catch (error) {
    console.error("Logout error:", error);
    window.location.href = "/auth/signin";
  } finally {
    setTimeout(() => {
      isLoggingOut = false;
    }, 5000);
  }
}
