"use client";

import { Suspense } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LOOP_DETECTION_KEY = "signin_attempt_ts";
const LOOP_THRESHOLD_MS = 30000;

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-tm-ink-2">Indlæser…</div>
        </div>
      }
    >
      <SignIn />
    </Suspense>
  );
}

function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const loginAttempted = useRef(false);
  const [showError, setShowError] = useState(false);

  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    if (status === "loading") return;

    if (session && !session.error) {
      sessionStorage.removeItem(LOOP_DETECTION_KEY);
      router.replace(callbackUrl);
      return;
    }

    if (error) {
      setShowError(true);
      return;
    }

    if (loginAttempted.current) return;

    const lastAttempt = sessionStorage.getItem(LOOP_DETECTION_KEY);
    if (lastAttempt) {
      const elapsed = Date.now() - parseInt(lastAttempt, 10);
      if (elapsed < LOOP_THRESHOLD_MS) {
        setShowError(true);
        sessionStorage.removeItem(LOOP_DETECTION_KEY);
        return;
      }
    }

    loginAttempted.current = true;
    sessionStorage.setItem(LOOP_DETECTION_KEY, Date.now().toString());
    signIn("keycloak", { callbackUrl });
  }, [session, status, router, callbackUrl, error]);

  const errorMessages: Record<string, { title: string; description: string }> =
    {
      SessionExpired: {
        title: "Session udløbet",
        description: "Din session er udløbet. Log venligst ind igen.",
      },
      OAuthSignin: {
        title: "Login fejlede",
        description:
          "Kunne ikke forbinde til login-serveren. Prøv venligst igen senere.",
      },
      OAuthCallback: {
        title: "Login fejlede",
        description: "Noget gik galt under login. Prøv venligst igen.",
      },
    };

  const defaultError = {
    title: "Login fejlede",
    description: "En uventet fejl opstod. Prøv venligst igen.",
  };

  const errorInfo = errorMessages[error ?? ""] ?? defaultError;

  if (showError) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
        <div className="space-y-4 px-4 max-w-md text-center">
          <h1 className="font-bold text-2xl">{errorInfo.title}</h1>
          <p className="text-tm-ink-2">{errorInfo.description}</p>
          <button
            onClick={() => {
              setShowError(false);
              loginAttempted.current = false;
              sessionStorage.removeItem(LOOP_DETECTION_KEY);
              signIn("keycloak", { callbackUrl });
            }}
            className="px-5 py-2.5 text-sm tm-btn tm-btn--primary"
          >
            Log ind
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-tm-ink-2">Logger ind…</div>
    </div>
  );
}
