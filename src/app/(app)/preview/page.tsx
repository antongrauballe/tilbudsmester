"use client";

import { AppHeader } from "@/components/app-header";
import { Icon } from "@/components/icon";
import { StatusBadge } from "@/components/status-badge";

const lines = [
  { t: "Nedtagning af 4 stk. trævinduer", q: "4 stk", rate: "700", p: "2.800" },
  {
    t: "Velfac Classic trævinduer, hvidmalet",
    q: "4 stk",
    rate: "4.650",
    p: "18.600",
  },
  { t: "Efterisolering omkring karme", q: "16 lbm", rate: "150", p: "2.400" },
  { t: "Malerbehandling indvendigt", q: "12 m²", rate: "267", p: "3.200" },
  { t: "Arbejdsløn & montage", q: "22 timer", rate: "825", p: "18.150" },
  { t: "Levering, kørsel & affald", q: "—", rate: "—", p: "3.600" },
];

export default function PreviewPage() {
  return (
    <>
      <AppHeader title="Tilbud #2847" />
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          <div className="gap-6 grid grid-cols-[1fr_340px]">
            {/* Document */}
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <Icon
                  name="sparkles"
                  size={14}
                  color="var(--color-tm-orange)"
                />
                <span className="font-semibold text-tm-orange text-xs">
                  AI-genereret · Rediger felter hvis nødvendigt
                </span>
              </div>

              <div className="bg-tm-paper p-12 tm-card">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="font-display font-semibold text-2xl">
                      Pedersen Tømrerfirma
                    </div>
                    <div className="mt-1 text-tm-ink-3 text-xs leading-relaxed">
                      CVR 12345678 · Tømrervej 3 · 8000 Aarhus C
                      <br />
                      morten@pedersen-toemrer.dk · +45 26 42 18 90
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-medium text-4xl tracking-tight">
                      Tilbud
                    </div>
                    <div className="font-mono text-[13px] text-tm-ink-3">
                      #2847 · 18.04.2026
                    </div>
                  </div>
                </div>

                {/* Client + Validity */}
                <div className="gap-6 grid grid-cols-2 py-5 border-tm-line border-t border-b">
                  <div>
                    <div className="mb-1 text-[11px] text-tm-ink-3 uppercase tracking-wider">
                      Til
                    </div>
                    <div className="font-semibold text-sm">Henrik Sørensen</div>
                    <div className="text-[13px] text-tm-ink-2 leading-relaxed">
                      Rødovrevej 41
                      <br />
                      2610 Rødovre
                      <br />
                      +45 22 18 47 92
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-[11px] text-tm-ink-3 uppercase tracking-wider">
                      Gyldighed
                    </div>
                    <div className="text-[13px] text-tm-ink-2 leading-relaxed">
                      14 dage fra udstedelse
                      <br />
                      Estimeret start: 28.04.2026
                      <br />
                      Estimeret varighed: 3-4 dage
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="py-5 border-tm-line border-b text-tm-ink-2 text-sm leading-relaxed">
                  Tak for henvendelsen. Hermed tilbud på udskiftning af 4
                  trævinduer i stueetagen mod gaden, inkl. fjernelse af
                  eksisterende karme, efterisolering og malerbehandling
                  indvendigt. Alle materialer lever op til gældende
                  bygningsreglement.
                </div>

                {/* Line items */}
                <table className="mt-4 w-full border-collapse">
                  <thead>
                    <tr className="text-[11px] text-tm-ink-3 uppercase tracking-wider">
                      <th className="py-2.5 font-semibold text-left">
                        Beskrivelse
                      </th>
                      <th className="py-2.5 w-20 font-semibold text-right">
                        Mængde
                      </th>
                      <th className="py-2.5 w-20 font-semibold text-right">
                        Pris
                      </th>
                      <th className="py-2.5 w-24 font-semibold text-right">
                        I alt
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lines.map((l, i) => (
                      <tr key={i} className="border-tm-line border-t text-sm">
                        <td className="py-3">{l.t}</td>
                        <td className="py-3 font-mono text-[13px] text-tm-ink-3 text-right">
                          {l.q}
                        </td>
                        <td className="py-3 font-mono text-[13px] text-tm-ink-3 text-right">
                          {l.rate}
                        </td>
                        <td className="py-3 font-mono font-semibold text-right">
                          {l.p} kr
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end mt-5 pt-5 border-tm-ink border-t-2">
                  <div className="min-w-[260px]">
                    <div className="flex justify-between py-1 text-[13px] text-tm-ink-2">
                      <span>Subtotal</span>
                      <span className="font-mono">48.750 kr</span>
                    </div>
                    <div className="flex justify-between py-1 text-[13px] text-tm-ink-2">
                      <span>Moms (25%)</span>
                      <span className="font-mono">12.188 kr</span>
                    </div>
                    <div className="flex justify-between mt-2.5 pt-2.5 border-tm-line border-t">
                      <span className="font-display font-semibold text-base">
                        I alt inkl. moms
                      </span>
                      <span className="font-display font-semibold text-2xl">
                        60.938 kr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side panel */}
            <div className="flex flex-col gap-4">
              <div className="p-5 tm-card">
                <div className="mb-3 font-semibold text-[13px]">Handlinger</div>
                <button className="justify-center mb-2 w-full text-sm tm-btn tm-btn--primary">
                  <Icon name="send" size={16} /> Send til kunde
                </button>
                <button className="justify-center mb-2 w-full text-sm tm-btn tm-btn--ghost">
                  <Icon name="download" size={16} /> Download PDF
                </button>
                <button className="justify-center w-full text-sm tm-btn tm-btn--ghost">
                  <Icon name="edit" size={16} /> Rediger
                </button>
              </div>

              <div className="p-5 tm-card">
                <div className="mb-3 font-semibold text-[13px]">Status</div>
                <StatusBadge status="sendt" />
                <div className="mt-3.5 text-tm-ink-3 text-xs leading-relaxed">
                  Sendt til henrik@example.dk
                  <br />I dag kl. 09:14
                </div>
              </div>

              <div className="p-5 tm-card">
                <div className="flex items-center gap-1.5 mb-3 font-semibold text-[13px]">
                  <Icon
                    name="sparkles"
                    size={14}
                    color="var(--color-tm-orange)"
                  />{" "}
                  AI-foreslået
                </div>
                <div className="text-tm-ink-2 text-xs leading-relaxed">
                  Baseret på tidligere vindue-jobs kan du evt. tilføje{" "}
                  <strong>fugtspærre (800 kr)</strong> som separat linje — det
                  accepteres typisk.
                </div>
                <button className="bg-transparent mt-2.5 p-0 border-none font-semibold text-tm-orange text-xs cursor-pointer">
                  + Tilføj linje
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
