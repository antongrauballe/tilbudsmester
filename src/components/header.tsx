"use client";

import { Icon } from "@/components/icon";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { isAuthenticated, userName, login, logout } = useAuth();

  return (
    <header>
      <div className="flex justify-between items-center mx-auto px-5 sm:px-8 lg:px-12 py-5 max-w-[1280px]">
        <div className="flex items-center gap-2.5">
          <Icon name="logo" size={32} />
          <span className="font-display font-semibold text-[22px] text-tm-ink">
            TilbudsMester
          </span>
        </div>

        <nav className="flex items-center text-tm-ink-2 text-sm">
          <div className="hidden sm:flex items-center gap-6 md:gap-8 mr-6 md:mr-8">
            <a
              href="#funktioner"
              className="hover:text-tm-ink transition-colors"
            >
              Funktioner
            </a>
            <a href="#pricing" className="hover:text-tm-ink transition-colors">
              Priser
            </a>
            <a
              href="#testimonial"
              className="hidden md:inline hover:text-tm-ink transition-colors"
            >
              Kundeudtalelser
            </a>
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="hidden sm:inline text-tm-ink-2 text-sm">
                  {userName}
                </span>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 text-sm tm-btn tm-btn--ghost"
                >
                  Log ud
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => login("/")}
                  className="px-4 py-2 text-sm tm-btn tm-btn--ghost"
                >
                  Log ind
                </button>
                <button
                  onClick={() => login("/")}
                  className="px-[18px] py-2.5 text-sm tm-btn tm-btn--primary"
                >
                  Start gratis
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
