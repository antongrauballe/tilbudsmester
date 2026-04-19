"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect, useMemo, useCallback, useRef } from "react";
import { DefaultUser } from "next-auth";
import { performLogout } from "@/lib/logout";

export const useAuth = () => {
  const { data: session, status, update } = useSession();
  const logoutTriggeredRef = useRef(false);

  useEffect(() => {
    if (
      session?.error === "RefreshAccessTokenError" &&
      !logoutTriggeredRef.current
    ) {
      logoutTriggeredRef.current = true;
      performLogout();
    }
  }, [session?.error]);

  const login = useCallback(async (callbackUrl = "/") => {
    await signIn("keycloak", { callbackUrl });
  }, []);

  const logout = useCallback(async () => {
    await performLogout();
  }, []);

  const refreshSession = useCallback(async () => {
    await update();
  }, [update]);

  return useMemo(() => {
    const user = session?.user as DefaultUser | undefined;
    const accessToken = session?.accessToken as string | undefined;

    return {
      session,
      user,
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      accessToken,
      isAuthenticated: !!session && !session?.error,
      isLoading: status === "loading",
      isUnauthenticated: status === "unauthenticated",
      login,
      logout,
      refreshSession,
    };
  }, [session, status, login, logout, refreshSession]);
};
