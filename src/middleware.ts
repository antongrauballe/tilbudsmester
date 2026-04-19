import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    if (token?.error === "RefreshAccessTokenError") {
      const signinUrl = new URL("/auth/signin", req.url);
      signinUrl.searchParams.set("error", "SessionExpired");
      return NextResponse.redirect(signinUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/auth/signin",
    },
  },
);

export const config = {
  // Protect app routes — add paths here as you build them
  matcher: [
    "/dashboard/:path*",
    "/new/:path*",
    "/preview/:path*",
    "/quotes/:path*",
    "/customers/:path*",
    "/templates/:path*",
    "/stats/:path*",
    "/settings/:path*",
  ],
};
