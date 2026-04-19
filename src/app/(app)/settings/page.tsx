"use client";

import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { Icon } from "@/components/icon";

const settingsNav = [
  { k: "abo", l: "Abonnement" },
  { k: "firma", l: "Firmaoplysninger" },
  { k: "brugere", l: "Brugere" },
  { k: "notif", l: "Notifikationer" },
];

const invoices = [
  { d: "01.04.2026", a: "299 kr", s: "Betalt" },
  { d: "01.03.2026", a: "299 kr", s: "Betalt" },
  { d: "01.02.2026", a: "299 kr", s: "Betalt" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("abo");

  return (
    <>
      <AppHeader title="Indstillinger" />
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          <div className="gap-6 grid grid-cols-[200px_1fr]">
            {/* Settings nav */}
            <nav className="flex flex-col gap-1">
              {settingsNav.map((s) => (
                <button
                  key={s.k}
                  onClick={() => setActiveTab(s.k)}
                  className="px-3 py-2 border-none rounded-[10px] font-medium text-sm text-left transition-colors cursor-pointer"
                  style={{
                    background:
                      activeTab === s.k
                        ? "var(--color-tm-orange-50)"
                        : "transparent",
                    color:
                      activeTab === s.k
                        ? "var(--color-tm-orange)"
                        : "var(--color-tm-ink-2)",
                  }}
                >
                  {s.l}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div>
              {activeTab === "abo" && (
                <div>
                  {/* Subscription card */}
                  <div
                    className="mb-6 p-7 rounded-[18px] text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF4A00 0%, #E55B3A 50%, #B85C38 100%)",
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="opacity-80 font-semibold text-[11px] uppercase tracking-wider">
                          Dit abonnement
                        </div>
                        <div className="mt-1 font-display font-semibold text-2xl">
                          TilbudsMester Pro
                        </div>
                        <div className="opacity-80 mt-1 text-sm">
                          Ubegrænsede tilbud · AI-assistent · Prioriteret
                          support
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-semibold text-3xl">
                          299 kr
                        </div>
                        <div className="opacity-70 text-xs">
                          pr. måned ekskl. moms
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-5">
                      <button className="bg-white/15 hover:bg-white/25 px-4 py-2 border border-white/30 rounded-[10px] font-semibold text-white text-sm transition-colors cursor-pointer">
                        Skift plan
                      </button>
                      <button className="bg-transparent hover:bg-white/10 px-4 py-2 border border-white/30 rounded-[10px] text-white/80 text-sm transition-colors cursor-pointer">
                        Opsig
                      </button>
                    </div>
                  </div>

                  {/* Usage */}
                  <div className="mb-6 p-6 tm-card">
                    <div className="mb-4 font-display font-semibold text-base">
                      Forbrug denne måned
                    </div>
                    <div className="gap-6 grid grid-cols-3">
                      <div>
                        <div className="mb-1 text-tm-ink-3 text-xs">
                          AI-genereringer
                        </div>
                        <div className="font-display font-semibold text-xl">
                          18 / ∞
                        </div>
                        <div className="bg-tm-cream-2 mt-2 rounded-sm h-1.5 overflow-hidden">
                          <div
                            className="bg-tm-orange rounded-sm h-full"
                            style={{ width: "35%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 text-tm-ink-3 text-xs">
                          Sendte tilbud
                        </div>
                        <div className="font-display font-semibold text-xl">
                          7 / ∞
                        </div>
                        <div className="bg-tm-cream-2 mt-2 rounded-sm h-1.5 overflow-hidden">
                          <div
                            className="bg-tm-green rounded-sm h-full"
                            style={{ width: "20%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 text-tm-ink-3 text-xs">
                          Lagerplads
                        </div>
                        <div className="font-display font-semibold text-xl">
                          1.2 GB
                        </div>
                        <div className="bg-tm-cream-2 mt-2 rounded-sm h-1.5 overflow-hidden">
                          <div
                            className="rounded-sm h-full"
                            style={{
                              width: "12%",
                              background: "var(--color-tm-muted)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Invoices */}
                  <div className="overflow-hidden tm-card">
                    <div className="px-6 py-4 border-tm-line border-b">
                      <div className="font-display font-semibold text-base">
                        Faktura-historik
                      </div>
                    </div>
                    <table className="w-full text-[13px] border-collapse">
                      <thead>
                        <tr className="bg-tm-cream-2 text-[11px] text-tm-ink-3 uppercase tracking-wider">
                          <th className="px-6 py-2.5 font-semibold text-left">
                            Dato
                          </th>
                          <th className="px-6 py-2.5 font-semibold text-left">
                            Beløb
                          </th>
                          <th className="px-6 py-2.5 font-semibold text-left">
                            Status
                          </th>
                          <th className="px-6 py-2.5 font-semibold text-right"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoices.map((inv, i) => (
                          <tr key={i} className="border-tm-line border-b">
                            <td className="px-6 py-3">{inv.d}</td>
                            <td className="px-6 py-3 font-mono font-semibold">
                              {inv.a}
                            </td>
                            <td className="px-6 py-3">
                              <span
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full font-semibold text-[11px]"
                                style={{
                                  background: "var(--color-tm-green-50)",
                                  color: "var(--color-tm-green)",
                                }}
                              >
                                {inv.s}
                              </span>
                            </td>
                            <td className="px-6 py-3 text-right">
                              <button className="bg-transparent border-none font-semibold text-tm-orange text-xs cursor-pointer">
                                <Icon name="download" size={14} /> PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "firma" && (
                <div className="p-6 tm-card">
                  <div className="mb-5 font-display font-semibold text-base">
                    Firmaoplysninger
                  </div>
                  <div className="gap-x-6 gap-y-4 grid grid-cols-2 max-w-[600px]">
                    {[
                      { l: "Firmanavn", v: "Pedersen Tømrerfirma" },
                      { l: "CVR-nummer", v: "12345678" },
                      { l: "Adresse", v: "Tømrervej 3, 8000 Aarhus C" },
                      { l: "Telefon", v: "+45 26 42 18 90" },
                      { l: "E-mail", v: "morten@pedersen-toemrer.dk" },
                      { l: "Bankkonto", v: "1234 00012345678" },
                    ].map((f) => (
                      <div key={f.l}>
                        <label className="block mb-1.5 font-semibold text-tm-ink-3 text-xs">
                          {f.l}
                        </label>
                        <input
                          defaultValue={f.v}
                          className="bg-tm-paper px-3 py-2 border border-tm-line focus:border-tm-orange rounded-[10px] outline-none w-full text-sm transition-colors"
                          style={{ fontFamily: "var(--font-sans)" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 px-5 py-2.5 text-sm tm-btn tm-btn--primary">
                    Gem ændringer
                  </button>
                </div>
              )}

              {activeTab === "brugere" && (
                <div className="p-6 tm-card">
                  <div className="flex justify-between items-center mb-5">
                    <div className="font-display font-semibold text-base">
                      Brugere
                    </div>
                    <button className="px-4 py-2 text-sm tm-btn tm-btn--ghost">
                      + Inviter bruger
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-tm-line rounded-xl">
                    <div className="flex justify-center items-center bg-tm-orange rounded-full w-10 h-10 font-display font-semibold text-white text-sm">
                      MP
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">
                        Morten Pedersen
                      </div>
                      <div className="text-tm-ink-3 text-xs">
                        morten@pedersen-toemrer.dk
                      </div>
                    </div>
                    <span className="bg-tm-orange-50 px-2.5 py-0.5 rounded-full font-semibold text-[11px] text-tm-orange-600">
                      Admin
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "notif" && (
                <div className="p-6 tm-card">
                  <div className="mb-5 font-display font-semibold text-base">
                    Notifikationer
                  </div>
                  {[
                    {
                      l: "Tilbud godkendt",
                      d: "Modtag besked når en kunde accepterer",
                    },
                    {
                      l: "Tilbud afvist",
                      d: "Modtag besked når en kunde afviser",
                    },
                    {
                      l: "Påmindelse om kladder",
                      d: "Daglig reminder om ufærdige tilbud",
                    },
                    {
                      l: "Nyhedsbrev",
                      d: "Tips, opdateringer og nye funktioner",
                    },
                  ].map((n) => (
                    <div
                      key={n.l}
                      className="flex justify-between items-center py-3 border-tm-line border-b last:border-none"
                    >
                      <div>
                        <div className="font-semibold text-sm">{n.l}</div>
                        <div className="text-tm-ink-3 text-xs">{n.d}</div>
                      </div>
                      <label className="inline-flex relative items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="after:top-0.5 after:left-0.5 after:absolute bg-tm-line-strong after:bg-white peer-checked:bg-tm-orange rounded-full after:rounded-full w-10 after:w-4 h-5 after:h-4 after:content-[''] transition-colors after:transition-all peer-checked:after:translate-x-5" />
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
