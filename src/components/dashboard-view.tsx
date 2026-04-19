"use client";

import { Icon } from "@/components/icon";
import { useAuth } from "@/hooks/useAuth";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string; label: string }> = {
    sendt: {
      bg: "var(--color-tm-orange-50)",
      color: "var(--color-tm-orange-600)",
      label: "Sendt",
    },
    godkendt: {
      bg: "var(--color-tm-green-50)",
      color: "var(--color-tm-green)",
      label: "Godkendt",
    },
    kladde: {
      bg: "var(--color-tm-cream-2)",
      color: "var(--color-tm-ink-3)",
      label: "Kladde",
    },
    afvist: {
      bg: "var(--color-tm-red-50)",
      color: "var(--color-tm-red)",
      label: "Afvist",
    },
  };
  const s = styles[status] ?? styles.kladde;
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full font-semibold text-[11px]"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}

const navItems = [
  { id: "dashboard", icon: "home", label: "Oversigt" },
  { id: "quotes", icon: "file", label: "Tilbud" },
  { id: "customers", icon: "users", label: "Kunder" },
  { id: "templates", icon: "template", label: "Skabeloner" },
  { id: "stats", icon: "chart", label: "Statistik" },
  { id: "settings", icon: "settings", label: "Indstillinger" },
];

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

const chartData = [
  { month: "Nov", value: 62 },
  { month: "Dec", value: 88 },
  { month: "Jan", value: 74 },
  { month: "Feb", value: 110 },
  { month: "Mar", value: 92 },
  { month: "Apr", value: 142 },
];

export function DashboardView() {
  const { userName, userEmail, logout } = useAuth();
  const active = "dashboard";

  const initials = userName
    ? userName
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return (
    <div className="flex h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      {/* ── Sidebar ── */}
      <aside className="flex flex-col bg-tm-paper p-[20px_14px] border-tm-line border-r w-[240px] shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-2 pb-6">
          <Icon name="logo" size={28} />
          <span className="font-display font-semibold text-lg">
            TilbudsMester
          </span>
        </div>

        {/* New quote button */}
        <button className="justify-center mb-4 text-sm tm-btn tm-btn--primary">
          <Icon name="plus" size={16} /> Nyt tilbud
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-0.5">
          {navItems.map((n) => (
            <button
              key={n.id}
              className="flex items-center gap-2.5 px-3 py-2.5 border-none rounded-[10px] text-sm text-left transition-colors cursor-pointer"
              style={{
                background:
                  active === n.id ? "var(--color-tm-orange-50)" : "transparent",
                color:
                  active === n.id
                    ? "var(--color-tm-orange-600)"
                    : "var(--color-tm-ink-2)",
                fontWeight: active === n.id ? 600 : 500,
              }}
            >
              <Icon
                name={n.icon}
                size={18}
                color={
                  active === n.id
                    ? "var(--color-tm-orange)"
                    : "var(--color-tm-ink-3)"
                }
              />
              {n.label}
            </button>
          ))}
        </nav>

        {/* User card at bottom */}
        <div className="bg-tm-cream-2 mt-auto p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex justify-center items-center bg-tm-sand rounded-full w-7 h-7 font-display font-semibold text-[11px] text-tm-terracotta">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-xs truncate">
                {userName || "Bruger"}
              </div>
              <div className="text-[10px] text-tm-ink-3 truncate">
                {userEmail || ""}
              </div>
            </div>
          </div>
          <button
            onClick={() => logout()}
            className="flex items-center gap-1.5 bg-transparent mt-1 p-0 border-none text-[11px] text-tm-ink-3 hover:text-tm-red transition-colors cursor-pointer"
          >
            <Icon name="logout" size={12} /> Log ud
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 bg-tm-cream overflow-auto">
        {/* Top header */}
        <header className="top-0 z-10 sticky flex justify-between items-center bg-tm-cream px-8 py-5 border-tm-line border-b">
          <div className="font-display font-semibold text-[22px]">Oversigt</div>
          <div className="flex items-center gap-2.5">
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

        <div className="p-8">
          {/* ── KPI row ── */}
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

          {/* ── Chart + Pipeline ── */}
          <div className="gap-4 grid grid-cols-[2fr_1fr] mb-4">
            {/* Chart */}
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

            {/* Pipeline */}
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

          {/* ── Recent quotes table ── */}
          <div className="overflow-hidden tm-card">
            <div className="flex justify-between items-center px-6 py-5 border-tm-line border-b">
              <div className="font-display font-semibold text-lg">
                Seneste tilbud
              </div>
              <button className="bg-transparent border-none font-semibold text-[13px] text-tm-orange hover:underline cursor-pointer">
                Vis alle →
              </button>
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
    </div>
  );
}
