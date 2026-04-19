"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { id: "dashboard", href: "/dashboard", icon: "home", label: "Oversigt" },
  { id: "quotes", href: "/quotes", icon: "file", label: "Tilbud" },
  { id: "customers", href: "/customers", icon: "users", label: "Kunder" },
  {
    id: "templates",
    href: "/templates",
    icon: "template",
    label: "Skabeloner",
  },
  { id: "stats", href: "/stats", icon: "chart", label: "Statistik" },
  {
    id: "settings",
    href: "/settings",
    icon: "settings",
    label: "Indstillinger",
  },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout, userName, userEmail } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const initials = (userName ?? "?")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const activeId =
    navItems.find((n) => pathname.startsWith(n.href))?.id ?? "dashboard";

  return (
    <div className="flex h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* ── Sidebar ── */}
      <aside className="hidden md:flex flex-col bg-tm-paper p-[20px_14px] border-tm-line border-r w-[240px] shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 px-2 pb-6 no-underline"
        >
          <Icon name="logo" size={28} />
          <span className="font-display font-semibold text-tm-ink text-lg">
            TilbudsMester
          </span>
        </Link>

        <Link
          href="/new"
          className="justify-center mb-4 text-sm no-underline tm-btn tm-btn--primary"
        >
          <Icon name="plus" size={16} /> Nyt tilbud
        </Link>

        <nav className="flex flex-col gap-0.5">
          {navItems.map((n) => {
            const isActive = activeId === n.id;
            return (
              <Link
                key={n.id}
                href={n.href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] text-sm no-underline transition-colors"
                style={{
                  background: isActive
                    ? "var(--color-tm-orange-50)"
                    : "transparent",
                  color: isActive
                    ? "var(--color-tm-orange-600)"
                    : "var(--color-tm-ink-2)",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <Icon
                  name={n.icon}
                  size={18}
                  color={
                    isActive
                      ? "var(--color-tm-orange)"
                      : "var(--color-tm-ink-3)"
                  }
                />
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative mt-auto">
          <button
            onClick={() => setUserMenuOpen((v) => !v)}
            className="bg-tm-cream-2 hover:bg-tm-sand p-3 border-none rounded-xl w-full text-left transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center bg-tm-sand rounded-full w-7 h-7 font-display font-semibold text-[11px] text-tm-terracotta">
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs truncate">
                  {userName ?? "Bruger"}
                </div>
                <div className="text-[10px] text-tm-ink-3 truncate">
                  Pro · 199 kr/md
                </div>
              </div>
            </div>
          </button>

          {userMenuOpen && (
            <>
              <div
                className="z-20 fixed inset-0"
                onClick={() => setUserMenuOpen(false)}
              />
              <div
                ref={menuRef}
                className="right-0 bottom-full left-0 z-30 absolute bg-tm-paper shadow-lg mb-1.5 border border-tm-line rounded-xl overflow-hidden"
              >
                <Link
                  href="/settings"
                  onClick={() => setUserMenuOpen(false)}
                  className="flex items-center gap-2.5 hover:bg-tm-cream-2 px-4 py-2.5 text-[13px] text-tm-ink-2 no-underline transition-colors"
                >
                  <Icon
                    name="settings"
                    size={14}
                    color="var(--color-tm-ink-3)"
                  />{" "}
                  Indstillinger
                </Link>
                <button
                  onClick={() => logout()}
                  className="flex items-center gap-2.5 bg-transparent hover:bg-tm-red-50 px-4 py-2.5 border-tm-line border-t border-none w-full text-[13px] text-tm-red transition-colors cursor-pointer"
                >
                  <Icon name="logout" size={14} /> Log ud
                </button>
              </div>
            </>
          )}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
