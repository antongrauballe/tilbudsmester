"use client";

import { Icon } from "@/components/icon";

interface AppHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function AppHeader({ title, children }: AppHeaderProps) {
  return (
    <header className="top-0 z-10 sticky flex justify-between items-center bg-tm-cream px-8 py-5 border-tm-line border-b shrink-0">
      <div className="font-display font-semibold text-[22px]">{title}</div>
      <div className="flex items-center gap-2.5">
        {children}
        <div className="relative">
          <input
            placeholder="Søg…"
            className="bg-tm-paper py-2 pr-3 pl-9 border border-tm-line focus:border-tm-orange rounded-[10px] outline-none w-60 text-[13px] transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          />
          <div className="top-2.5 left-2.5 absolute">
            <Icon name="search" size={16} color="var(--color-tm-ink-3)" />
          </div>
        </div>
        <button className="flex justify-center items-center bg-tm-paper hover:bg-tm-cream-2 border border-tm-line rounded-[10px] w-9 h-9 transition-colors cursor-pointer">
          <Icon name="bell" size={16} />
        </button>
      </div>
    </header>
  );
}
