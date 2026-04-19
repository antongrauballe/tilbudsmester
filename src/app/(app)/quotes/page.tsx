"use client";

import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { StatusBadge } from "@/components/status-badge";
import Link from "next/link";

const tabs = [
  { k: "alle", l: "Alle", n: 24 },
  { k: "sendt", l: "Sendt", n: 7 },
  { k: "kladde", l: "Kladder", n: 3 },
  { k: "godkendt", l: "Godkendt", n: 12 },
  { k: "afvist", l: "Afvist", n: 2 },
];

const quotes = [
  {
    n: "#2847",
    k: "Henrik Sørensen",
    o: "Udskiftning af 4 vinduer",
    a: "48.750",
    s: "sendt",
    d: "18.04.2026",
  },
  {
    n: "#2846",
    k: "Anne Larsen",
    o: "Nyt køkkengulv 22 m²",
    a: "28.400",
    s: "godkendt",
    d: "17.04.2026",
  },
  {
    n: "#2845",
    k: "Byghuset A/S",
    o: "Tagrender hus 1 & 2",
    a: "15.200",
    s: "kladde",
    d: "15.04.2026",
  },
  {
    n: "#2844",
    k: "Jens Holm",
    o: "Indbygget garderobe",
    a: "18.400",
    s: "godkendt",
    d: "12.04.2026",
  },
  {
    n: "#2843",
    k: "Kirsten Mortensen",
    o: "Terrassebrædder 30 m²",
    a: "22.950",
    s: "afvist",
    d: "10.04.2026",
  },
  {
    n: "#2842",
    k: "Peter Andersen",
    o: "Isolering af loft 85 m²",
    a: "34.800",
    s: "sendt",
    d: "08.04.2026",
  },
  {
    n: "#2841",
    k: "Mette Hansen",
    o: "Udestue i lærk 3×4 m",
    a: "65.200",
    s: "godkendt",
    d: "05.04.2026",
  },
  {
    n: "#2840",
    k: "Ole Nielsen",
    o: "Altandæk + gelænder",
    a: "42.100",
    s: "sendt",
    d: "03.04.2026",
  },
  {
    n: "#2839",
    k: "Susanne Kjær",
    o: "Trappetrin & håndliste",
    a: "12.600",
    s: "godkendt",
    d: "01.04.2026",
  },
  {
    n: "#2838",
    k: "Lars Jensen",
    o: "Sternbrædder hele huset",
    a: "19.800",
    s: "kladde",
    d: "28.03.2026",
  },
];

export default function QuotesPage() {
  const [active, setActive] = useState("alle");
  const filtered =
    active === "alle" ? quotes : quotes.filter((q) => q.s === active);

  return (
    <>
      <AppHeader title="Tilbud">
        <Link
          href="/new"
          className="px-4 py-2 text-sm no-underline tm-btn tm-btn--primary"
        >
          + Nyt tilbud
        </Link>
      </AppHeader>
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          {/* Tabs */}
          <div className="flex gap-1 mb-4 border-tm-line border-b">
            {tabs.map((t) => (
              <button
                key={t.k}
                onClick={() => setActive(t.k)}
                className="bg-transparent px-4 py-2.5 border-none font-semibold text-[13px] transition-colors cursor-pointer"
                style={{
                  color:
                    active === t.k
                      ? "var(--color-tm-orange)"
                      : "var(--color-tm-ink-3)",
                  borderBottom:
                    active === t.k
                      ? "2px solid var(--color-tm-orange)"
                      : "2px solid transparent",
                }}
              >
                {t.l}{" "}
                <span
                  className="ml-1 px-1.5 py-0.5 rounded-full text-[10px]"
                  style={{
                    background:
                      active === t.k
                        ? "var(--color-tm-orange-50)"
                        : "var(--color-tm-cream-2)",
                    color:
                      active === t.k
                        ? "var(--color-tm-orange)"
                        : "var(--color-tm-ink-3)",
                  }}
                >
                  {t.n}
                </span>
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-hidden tm-card">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="bg-tm-cream-2 text-[11px] text-tm-ink-3 uppercase tracking-wider">
                  <th className="px-6 py-3 font-semibold text-left">Nr.</th>
                  <th className="px-6 py-3 font-semibold text-left">Kunde</th>
                  <th className="px-6 py-3 font-semibold text-left">Opgave</th>
                  <th className="px-6 py-3 font-semibold text-left">Beløb</th>
                  <th className="px-6 py-3 font-semibold text-left">Status</th>
                  <th className="px-6 py-3 font-semibold text-left">Dato</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr
                    key={r.n}
                    className="hover:bg-tm-cream-2 border-tm-line border-b transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-3.5 font-mono text-tm-ink-3">
                      {r.n}
                    </td>
                    <td className="px-6 py-3.5 font-semibold">{r.k}</td>
                    <td className="px-6 py-3.5 text-tm-ink-2">{r.o}</td>
                    <td className="px-6 py-3.5 font-mono font-semibold">
                      {r.a} kr
                    </td>
                    <td className="px-6 py-3.5">
                      <StatusBadge status={r.s} />
                    </td>
                    <td className="px-6 py-3.5 text-tm-ink-3">{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
