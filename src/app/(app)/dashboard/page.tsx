"use client";

import { AppHeader } from "@/components/app-header";
import { StatusBadge } from "@/components/status-badge";
import Link from "next/link";

const kpis = [
  {
    l: "Omsætning denne md.",
    v: "142.300",
    u: "kr",
    t: "+24%",
    positive: true,
  },
  { l: "Aktive tilbud", v: "7", u: "stk", t: "+2", positive: true },
  { l: "Accept-rate", v: "68", u: "%", t: "+4%", positive: true },
  { l: "Gns. tilbuds-værdi", v: "32.400", u: "kr", t: "−8%", positive: false },
];

const chartData = [
  { month: "Nov", value: 62 },
  { month: "Dec", value: 88 },
  { month: "Jan", value: 74 },
  { month: "Feb", value: 110 },
  { month: "Mar", value: 92 },
  { month: "Apr", value: 142 },
];

const pipelineData = [
  { s: "Kladder", n: 3, w: 30, color: "var(--color-tm-muted)" },
  { s: "Sendt", n: 7, w: 70, color: "var(--color-tm-orange)" },
  { s: "Godkendt", n: 12, w: 100, color: "var(--color-tm-green)" },
  { s: "Afvist", n: 2, w: 18, color: "var(--color-tm-red)" },
];

const recentQuotes = [
  {
    n: "#2847",
    k: "Henrik Sørensen",
    o: "Udskiftning af 4 vinduer",
    a: "48.750",
    s: "sendt",
    d: "I dag",
  },
  {
    n: "#2846",
    k: "Anne Larsen",
    o: "Nyt køkkengulv 22 m²",
    a: "28.400",
    s: "godkendt",
    d: "I går",
  },
  {
    n: "#2845",
    k: "Byghuset A/S",
    o: "Tagrender hus 1 & 2",
    a: "15.200",
    s: "kladde",
    d: "15. apr",
  },
  {
    n: "#2844",
    k: "Jens Holm",
    o: "Indbygget garderobe",
    a: "18.400",
    s: "godkendt",
    d: "12. apr",
  },
  {
    n: "#2843",
    k: "Kirsten Mortensen",
    o: "Terrassebrædder 30 m²",
    a: "22.950",
    s: "afvist",
    d: "10. apr",
  },
];

export default function DashboardPage() {
  return (
    <>
      <AppHeader title="Oversigt" />
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          {/* KPI row */}
          <div className="gap-4 grid grid-cols-4 mb-6">
            {kpis.map((k) => (
              <div key={k.l} className="p-5 tm-card">
                <div className="mb-2 text-tm-ink-3 text-xs">{k.l}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-semibold text-[32px]">
                    {k.v}
                  </span>
                  <span className="text-[13px] text-tm-ink-3">{k.u}</span>
                </div>
                <div
                  className="mt-1 font-semibold text-xs"
                  style={{
                    color: k.positive
                      ? "var(--color-tm-green)"
                      : "var(--color-tm-red)",
                  }}
                >
                  {k.t} vs sidste md.
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Pipeline */}
          <div className="gap-4 grid grid-cols-[2fr_1fr] mb-4">
            <div className="p-6 tm-card">
              <div className="flex justify-between mb-5">
                <div>
                  <div className="font-display font-semibold text-lg">
                    Omsætning
                  </div>
                  <div className="text-tm-ink-3 text-xs">Seneste 6 måneder</div>
                </div>
                <select
                  className="bg-tm-paper px-2.5 py-1.5 border border-tm-line rounded-lg outline-none text-[13px]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <option>6 måneder</option>
                </select>
              </div>
              <div
                className="flex items-end gap-3 pb-6 border-tm-line border-b"
                style={{ height: 220 }}
              >
                {chartData.map((d, i) => {
                  const pct = (d.value / 142) * 100;
                  return (
                    <div
                      key={i}
                      className="flex flex-col flex-1 items-center gap-1.5"
                    >
                      <div className="font-mono text-[10px] text-tm-ink-3">
                        {d.value}k
                      </div>
                      <div
                        className="rounded-t-md w-full"
                        style={{
                          height: `${pct}%`,
                          background:
                            i === chartData.length - 1
                              ? "var(--color-tm-orange)"
                              : "var(--color-tm-orange-100)",
                        }}
                      />
                      <div className="mt-1 text-[11px] text-tm-ink-3">
                        {d.month}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 tm-card">
              <div className="mb-4 font-display font-semibold text-lg">
                Pipeline
              </div>
              {pipelineData.map((p) => (
                <div key={p.s} className="mb-3.5">
                  <div className="flex justify-between mb-1">
                    <span className="text-[13px] text-tm-ink-2">{p.s}</span>
                    <span className="font-semibold text-[13px]">{p.n}</span>
                  </div>
                  <div className="bg-tm-cream-2 rounded-sm h-1.5 overflow-hidden">
                    <div
                      className="rounded-sm h-full"
                      style={{ width: `${p.w}%`, background: p.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent quotes table */}
          <div className="overflow-hidden tm-card">
            <div className="flex justify-between items-center px-6 py-5 border-tm-line border-b">
              <div className="font-display font-semibold text-lg">
                Seneste tilbud
              </div>
              <Link
                href="/quotes"
                className="font-semibold text-[13px] text-tm-orange hover:underline no-underline"
              >
                Vis alle →
              </Link>
            </div>
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
                {recentQuotes.map((r) => (
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
