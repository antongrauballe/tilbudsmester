"use client";

import { AppHeader } from "@/components/app-header";
import { Icon } from "@/components/icon";
import { Illustration } from "@/components/illustration";

export default function NewQuotePage() {
  return (
    <>
      <AppHeader title="Nyt tilbud" />
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          <div className="gap-6 grid grid-cols-2" style={{ minHeight: 600 }}>
            {/* Input side */}
            <div className="p-7 tm-card">
              <div className="mb-2 font-semibold text-tm-ink-3 text-xs uppercase tracking-wider">
                Kunde
              </div>
              <div className="flex items-center gap-2.5 mb-5 p-3 border border-tm-line rounded-[10px]">
                <div className="flex justify-center items-center bg-tm-sand rounded-full w-8 h-8 font-display font-semibold text-tm-terracotta text-xs">
                  HS
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">Henrik Sørensen</div>
                  <div className="text-tm-ink-3 text-xs">
                    Rødovrevej 41 · 2610 Rødovre
                  </div>
                </div>
                <button className="bg-transparent border-none font-semibold text-[13px] text-tm-orange cursor-pointer">
                  Skift
                </button>
              </div>

              <div className="mb-2 font-semibold text-tm-ink-3 text-xs uppercase tracking-wider">
                Beskriv opgaven
              </div>
              <div className="bg-tm-paper p-4 border border-tm-line rounded-xl">
                <textarea
                  className="bg-transparent border-none outline-none w-full text-tm-ink text-sm leading-relaxed resize-vertical"
                  style={{ minHeight: 140, fontFamily: "var(--font-sans)" }}
                  defaultValue="Udskiftning af 4 trævinduer i stueetagen mod gaden. Velfac-standard, hvidmalet. Skal fjerne gamle karme, efterisolere omkring og malerbehandle indvendigt. Kunden ønsker start inden 1. maj."
                />
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-tm-line border-t">
                  <button className="flex items-center gap-1.5 bg-tm-orange-50 px-3 py-1.5 border border-tm-line rounded-full font-semibold text-tm-orange-600 text-xs cursor-pointer">
                    <Icon name="sparkles" size={13} /> Indtal i stedet
                  </button>
                  <div className="flex-1" />
                  {["🪟 Vinduer", "🏠 Tag", "🪵 Gulv", "🚪 Døre"].map((t) => (
                    <button
                      key={t}
                      className="bg-tm-cream-2 hover:bg-tm-sand px-3 py-1.5 border border-tm-line rounded-full font-medium text-xs transition-colors cursor-pointer"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2.5 mt-5">
                <button className="px-4 py-2.5 text-sm tm-btn tm-btn--ghost">
                  Gem som kladde
                </button>
                <button className="px-4 py-2.5 text-sm tm-btn tm-btn--primary">
                  <Icon name="sparkles" size={16} /> Generer med AI
                </button>
              </div>
            </div>

            {/* Preview placeholder */}
            <div className="flex flex-col justify-center items-center bg-tm-cream-2 p-7 border-2 border-tm-line-strong border-dashed rounded-[18px] text-center">
              <Illustration name="ruler" size={120} />
              <div className="mt-4 font-display font-semibold text-tm-ink-2 text-xl">
                Live preview
              </div>
              <div className="mt-1.5 max-w-[280px] text-tm-ink-3 text-sm">
                Generer for at se dit tilbud dukke op her — lige som kunden vil
                se det.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
