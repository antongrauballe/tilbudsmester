"use client";

import { AppHeader } from "@/components/app-header";

const kpis = [
  { l: "Total omsætning", v: "847.200", u: "kr", sub: "Seneste 12 måneder" },
  { l: "Antal tilbud", v: "124", u: "stk", sub: "Seneste 12 måneder" },
  { l: "Accept-rate", v: "68", u: "%", sub: "+4% vs året før" },
];

const categories = [
  {
    n: "Vinduer & døre",
    v: "284.600",
    pct: 34,
    color: "var(--color-tm-orange)",
  },
  {
    n: "Tag & tagrender",
    v: "186.200",
    pct: 22,
    color: "var(--color-tm-terracotta)",
  },
  {
    n: "Gulve & trægulv",
    v: "152.800",
    pct: 18,
    color: "var(--color-tm-sand)",
  },
  {
    n: "Udestuer & tilbygning",
    v: "110.400",
    pct: 13,
    color: "var(--color-tm-muted)",
  },
  { n: "Andet", v: "113.200", pct: 13, color: "var(--color-tm-line-strong)" },
];

const months = [
  { m: "Okt", v: 54 },
  { m: "Nov", v: 62 },
  { m: "Dec", v: 88 },
  { m: "Jan", v: 74 },
  { m: "Feb", v: 110 },
  { m: "Mar", v: 92 },
  { m: "Apr", v: 142 },
  { m: "Maj", v: 98 },
  { m: "Jun", v: 68 },
  { m: "Jul", v: 45 },
  { m: "Aug", v: 82 },
  { m: "Sep", v: 116 },
];

export default function StatsPage() {
  const maxV = Math.max(...months.map((m) => m.v));

  return (
    <>
      <AppHeader title="Statistik">
        <select
          className="bg-tm-paper px-3 py-2 border border-tm-line rounded-[10px] outline-none text-[13px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <option>Seneste 12 måneder</option>
          <option>Seneste 6 måneder</option>
          <option>I år</option>
        </select>
      </AppHeader>
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          {/* KPI row */}
          <div className="gap-4 grid grid-cols-3 mb-6">
            {kpis.map((k) => (
              <div key={k.l} className="p-6 text-center tm-card">
                <div className="mb-2 text-tm-ink-3 text-xs">{k.l}</div>
                <div className="flex justify-center items-baseline gap-1.5">
                  <span className="font-display font-semibold text-[36px]">
                    {k.v}
                  </span>
                  <span className="text-[13px] text-tm-ink-3">{k.u}</span>
                </div>
                <div className="mt-1 text-tm-ink-3 text-xs">{k.sub}</div>
              </div>
            ))}
          </div>

          <div className="gap-4 grid grid-cols-[2fr_1fr]">
            {/* Monthly chart */}
            <div className="p-6 tm-card">
              <div className="mb-1 font-display font-semibold text-lg">
                Omsætning pr. måned
              </div>
              <div className="mb-5 text-tm-ink-3 text-xs">
                Seneste 12 måneder (1.000 kr)
              </div>
              <div
                className="flex items-end gap-2 pb-4 border-tm-line border-b"
                style={{ height: 240 }}
              >
                {months.map((d, i) => {
                  const pct = (d.v / maxV) * 100;
                  return (
                    <div
                      key={i}
                      className="flex flex-col flex-1 items-center gap-1.5"
                    >
                      <div className="font-mono text-[10px] text-tm-ink-3">
                        {d.v}k
                      </div>
                      <div
                        className="rounded-t-md w-full transition-all"
                        style={{
                          height: `${pct}%`,
                          background:
                            i === 6
                              ? "var(--color-tm-orange)"
                              : "var(--color-tm-orange-100)",
                        }}
                      />
                      <div className="mt-1 text-[10px] text-tm-ink-3">
                        {d.m}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category breakdown */}
            <div className="p-6 tm-card">
              <div className="mb-1 font-display font-semibold text-lg">
                Fordeling pr. kategori
              </div>
              <div className="mb-5 text-tm-ink-3 text-xs">Omsætning i kr</div>
              {categories.map((c) => (
                <div key={c.n} className="mb-4">
                  <div className="flex justify-between mb-1 text-[13px]">
                    <span className="text-tm-ink-2">{c.n}</span>
                    <span className="font-mono font-semibold">{c.v} kr</span>
                  </div>
                  <div className="bg-tm-cream-2 rounded-sm h-2 overflow-hidden">
                    <div
                      className="rounded-sm h-full transition-all"
                      style={{ width: `${c.pct}%`, background: c.color }}
                    />
                  </div>
                  <div className="mt-0.5 text-[10px] text-tm-ink-3 text-right">
                    {c.pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
