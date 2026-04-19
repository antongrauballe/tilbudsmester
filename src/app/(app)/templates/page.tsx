"use client";

import { AppHeader } from "@/components/app-header";
import { Icon } from "@/components/icon";
import Link from "next/link";

const templates = [
  {
    emoji: "🪟",
    n: "Vindue-udskiftning",
    d: "Standard tilbud til private vinduer",
    uses: 24,
    price: "42.000 – 68.000",
  },
  {
    emoji: "🏠",
    n: "Tag & tagrender",
    d: "Tagreparation, tagrender og inddækning",
    uses: 18,
    price: "15.000 – 85.000",
  },
  {
    emoji: "🪵",
    n: "Gulve & trægulv",
    d: "Lægning og slibning af trægulve",
    uses: 15,
    price: "22.000 – 55.000",
  },
  {
    emoji: "🚪",
    n: "Døre & karme",
    d: "Montering af indvendige og udvendige døre",
    uses: 12,
    price: "8.000 – 35.000",
  },
  {
    emoji: "🏗️",
    n: "Udestue / tilbygning",
    d: "Komplet tilbygning i træ inkl. fundament",
    uses: 8,
    price: "95.000 – 250.000",
  },
  {
    emoji: "🛠️",
    n: "Køkken-renovering",
    d: "Nedrivning, el, VVS og montage",
    uses: 9,
    price: "45.000 – 120.000",
  },
  {
    emoji: "🧱",
    n: "Isolering",
    d: "Hulmur, loft eller gulv",
    uses: 11,
    price: "18.000 – 65.000",
  },
  {
    emoji: "🪜",
    n: "Altan & terrasse",
    d: "Trækonstruktion, gelænder og overfladebehandling",
    uses: 7,
    price: "30.000 – 90.000",
  },
  {
    emoji: "📐",
    n: "Tøm blank skabelon",
    d: "Start fra bunden med en tom skabelon",
    uses: 0,
    price: "—",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <AppHeader title="Skabeloner">
        <button className="px-4 py-2 text-sm tm-btn tm-btn--ghost">
          + Ny skabelon
        </button>
      </AppHeader>
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          <div className="gap-4 grid grid-cols-3">
            {templates.map((t) => (
              <Link
                href="/new"
                key={t.n}
                className="group hover:shadow-md p-6 text-tm-ink no-underline transition-shadow cursor-pointer tm-card"
              >
                <div className="mb-3 text-3xl">{t.emoji}</div>
                <div className="mb-1 font-display font-semibold group-hover:text-tm-orange text-base transition-colors">
                  {t.n}
                </div>
                <div className="mb-4 text-tm-ink-3 text-xs leading-relaxed">
                  {t.d}
                </div>
                <div className="flex justify-between items-center pt-3 border-tm-line border-t">
                  <div className="text-tm-ink-3 text-xs">
                    {t.uses > 0 ? (
                      <>
                        <Icon
                          name="file-text"
                          size={12}
                          className="inline mr-1"
                        />{" "}
                        Brugt {t.uses}×
                      </>
                    ) : (
                      "Ny"
                    )}
                  </div>
                  <div className="font-mono font-semibold text-tm-ink-2 text-xs">
                    {t.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
