"use client";

import { AppHeader } from "@/components/app-header";
import { Icon } from "@/components/icon";

const customers = [
  {
    i: "HS",
    n: "Henrik Sørensen",
    e: "henrik@example.dk",
    t: "+45 22 18 47 92",
    a: "Rødovrevej 41, 2610 Rødovre",
    q: 6,
    tot: "182.300",
    last: "18.04.2026",
    color: "#FF4A00",
  },
  {
    i: "AL",
    n: "Anne Larsen",
    e: "anne@example.dk",
    t: "+45 33 14 22 67",
    a: "Vesterbrogade 12, 1620 København V",
    q: 3,
    tot: "84.600",
    last: "17.04.2026",
    color: "#E55B3A",
  },
  {
    i: "BA",
    n: "Byghuset A/S",
    e: "info@byghuset.dk",
    t: "+45 70 10 20 30",
    a: "Industrivej 8, 8200 Aarhus N",
    q: 11,
    tot: "435.700",
    last: "15.04.2026",
    color: "#B85C38",
  },
  {
    i: "JH",
    n: "Jens Holm",
    e: "jens@holm.dk",
    t: "+45 28 44 19 03",
    a: "Bakkevej 19, 5000 Odense C",
    q: 2,
    tot: "36.800",
    last: "12.04.2026",
    color: "#7B6560",
  },
  {
    i: "KM",
    n: "Kirsten Mortensen",
    e: "kirsten.m@example.dk",
    t: "+45 61 72 38 15",
    a: "Skovvej 5, 3400 Hillerød",
    q: 4,
    tot: "95.200",
    last: "10.04.2026",
    color: "#C75B39",
  },
  {
    i: "PA",
    n: "Peter Andersen",
    e: "peter.a@example.dk",
    t: "+45 31 88 24 66",
    a: "Nørrebrogade 112, 2200 København N",
    q: 1,
    tot: "34.800",
    last: "08.04.2026",
    color: "#A36B50",
  },
  {
    i: "MH",
    n: "Mette Hansen",
    e: "mette@hansen.dk",
    t: "+45 42 55 13 91",
    a: "Solbjerg Have 16, 2000 Frederiksberg",
    q: 5,
    tot: "210.400",
    last: "05.04.2026",
    color: "#D4603E",
  },
  {
    i: "ON",
    n: "Ole Nielsen",
    e: "ole.n@example.dk",
    t: "+45 29 76 50 28",
    a: "Havnevej 3, 7100 Vejle",
    q: 3,
    tot: "89.600",
    last: "03.04.2026",
    color: "#8B6E5E",
  },
];

export default function CustomersPage() {
  return (
    <>
      <AppHeader title="Kunder">
        <button className="px-4 py-2 text-sm tm-btn tm-btn--primary">
          + Ny kunde
        </button>
      </AppHeader>
      <main className="flex-1 bg-tm-cream overflow-auto">
        <div className="p-8">
          <div className="gap-4 grid grid-cols-2 xl:grid-cols-3">
            {customers.map((c) => (
              <div
                key={c.i}
                className="hover:shadow-md p-5 transition-shadow cursor-pointer tm-card"
              >
                <div className="flex items-start gap-3 mb-3.5">
                  <div
                    className="flex justify-center items-center rounded-full w-10 h-10 font-display font-semibold text-white text-sm shrink-0"
                    style={{ background: c.color }}
                  >
                    {c.i}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{c.n}</div>
                    <div className="text-tm-ink-3 text-xs truncate">{c.e}</div>
                  </div>
                </div>

                <div className="mb-3 text-tm-ink-3 text-xs leading-relaxed">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon
                      name="phone"
                      size={12}
                      color="var(--color-tm-ink-3)"
                    />{" "}
                    {c.t}
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Icon
                      name="map-pin"
                      size={12}
                      color="var(--color-tm-ink-3)"
                      className="mt-0.5 shrink-0"
                    />{" "}
                    {c.a}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-tm-line border-t text-xs">
                  <div>
                    <span className="text-tm-ink-3">Tilbud: </span>
                    <span className="font-semibold">{c.q}</span>
                  </div>
                  <div>
                    <span className="text-tm-ink-3">Total: </span>
                    <span className="font-mono font-semibold">{c.tot} kr</span>
                  </div>
                  <div className="text-tm-ink-3">Senest {c.last}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
