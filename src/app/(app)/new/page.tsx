"use client";

import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { Icon } from "@/components/icon";

const templates = [
  { id: "vinduer", icon: "◫", name: "Vinduer" },
  { id: "gulv", icon: "▤", name: "Gulve" },
  { id: "vaeg", icon: "▥", name: "Vægge" },
  { id: "tag", icon: "△", name: "Tag" },
  { id: "doere", icon: "▯", name: "Døre" },
  { id: "koekken", icon: "⊞", name: "Køkken" },
  { id: "isolering", icon: "≋", name: "Isolering" },
];

export default function NewQuotePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const selected = templates.find((t) => t.id === selectedTemplate);

  return (
    <>
      <AppHeader title="Nyt tilbud" />
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8 max-w-[720px]">
          {/* ── 1. Kunde ── */}
          <section>
            <label className="block mb-3 font-semibold text-[11px] text-tm-ink-3 uppercase tracking-[0.5px]">
              Kunde
            </label>
            <div className="flex items-center gap-3 bg-tm-paper p-3.5 border border-tm-line rounded-[10px]">
              <div className="flex justify-center items-center bg-tm-sand rounded-full w-9 h-9 font-display font-semibold text-tm-terracotta text-xs">
                HS
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm leading-tight">
                  Henrik Sørensen
                </div>
                <div className="mt-0.5 text-tm-ink-3 text-xs">
                  Rødovrevej 41 · 2610 Rødovre
                </div>
              </div>
              <button className="bg-transparent border-none font-semibold text-[13px] text-tm-orange cursor-pointer">
                Skift
              </button>
            </div>
          </section>

          {/* ── 2. Opgavebeskrivelse ── */}
          <section className="mt-10">
            <label className="block mb-3 font-semibold text-[11px] text-tm-ink-3 uppercase tracking-[0.5px]">
              Beskriv opgaven
            </label>
            <div className="bg-tm-paper border border-tm-line rounded-xl">
              <textarea
                className="bg-transparent p-5 border-none outline-none w-full text-[15px] text-tm-ink leading-relaxed resize-vertical"
                style={{ minHeight: 180, fontFamily: "var(--font-sans)" }}
                placeholder="Beskriv opgaven så præcist som muligt — antal, størrelser, materialeønsker, særlige forhold..."
                defaultValue="Udskiftning af 4 trævinduer i stueetagen mod gaden. Velfac-standard, hvidmalet. Skal fjerne gamle karme, efterisolere omkring og malerbehandle indvendigt. Kunden ønsker start inden 1. maj."
              />
              <div className="flex items-center gap-2 px-5 py-3 border-tm-line border-t">
                <button className="flex items-center gap-1.5 bg-tm-orange-50 px-3 py-1.5 border border-tm-line rounded-full font-semibold text-tm-orange-600 text-xs cursor-pointer">
                  <Icon name="sparkles" size={13} /> Indtal i stedet
                </button>
                <div className="flex-1" />
                <span className="text-[11px] text-tm-muted">
                  Jo mere du beskriver, jo bedre udkast
                </span>
              </div>
            </div>
          </section>

          {/* ── 3. Skabelon ── */}
          <section className="mt-10">
            <label className="block mb-3 font-semibold text-[11px] text-tm-ink-3 uppercase tracking-[0.5px]">
              Skabelon{" "}
              <span className="font-normal text-tm-muted normal-case">
                (valgfri)
              </span>
            </label>
            <div className="flex flex-wrap gap-2">
              {templates.map((t) => {
                const isSelected = selectedTemplate === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() =>
                      setSelectedTemplate(isSelected ? null : t.id)
                    }
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? "border-tm-green bg-tm-green-50"
                        : "border-tm-line bg-tm-paper hover:border-tm-line-strong"
                    }`}
                  >
                    <span className="text-base leading-none">{t.icon}</span>
                    <span
                      className={`font-medium text-[13px] ${
                        isSelected ? "text-tm-green" : "text-tm-ink-2"
                      }`}
                    >
                      {t.name}
                    </span>
                    {isSelected && (
                      <span className="font-semibold text-[11px] text-tm-green">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Actions ── */}
          <div className="flex gap-3 mt-12 pt-8 border-tm-line border-t">
            <button className="px-5 py-2.5 text-sm tm-btn tm-btn--primary">
              <Icon name="sparkles" size={16} /> Generer med AI
            </button>
            <button className="px-5 py-2.5 text-sm tm-btn tm-btn--ghost">
              Gem som kladde
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
