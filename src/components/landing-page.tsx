"use client";

import { Icon } from "@/components/icon";
import { Illustration } from "@/components/illustration";
import { Header } from "@/components/header";
import { useAuth } from "@/hooks/useAuth";

export function LandingPage() {
  const { login } = useAuth();
  return (
    <div className="min-h-full" style={{ fontFamily: "var(--font-sans)" }}>
      {/* ── Nav ── */}
      <Header />

      {/* ── Hero ── */}
      <section className="items-center gap-10 lg:gap-20 grid lg:grid-cols-[1.1fr_0.9fr] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 max-w-[1280px]">
        <div>
          <div className="mb-5 sm:mb-6 tm-chip">
            <Icon name="sparkles" size={14} /> AI til håndværkere
          </div>
          <h1 className="mb-4 sm:mb-5 font-display font-medium text-[clamp(36px,6vw,68px)] text-tm-ink leading-[1.05] tracking-[-0.02em]">
            Skriv professionelle tilbud{" "}
            <em className="text-tm-orange italic">på 60 sekunder</em>.
          </h1>
          <p className="mb-6 sm:mb-8 max-w-[520px] text-tm-ink-2 text-base sm:text-lg leading-relaxed">
            Tag et billede, skriv hvad kunden vil have — TilbudsMester
            formulerer, prissætter og sender et flot tilbud i dit firmanavn.
            Bygget til tømrere, af tømrere.
          </p>
          <div className="flex sm:flex-row flex-col flex-wrap items-stretch sm:items-center gap-3">
            <button
              onClick={() => login("/dashboard")}
              className="justify-center sm:justify-start px-5 sm:px-[22px] py-3.5 text-base tm-btn tm-btn--primary"
            >
              Prøv 14 dage gratis <Icon name="arrow-right" size={16} />
            </button>
            <button className="justify-center sm:justify-start px-5 sm:px-[22px] py-3.5 text-base tm-btn tm-btn--ghost">
              Se demo
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-5 mt-6 sm:mt-7 text-[13px] text-tm-ink-3">
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={14} color="var(--color-tm-green)" />{" "}
              Intet kreditkort
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={14} color="var(--color-tm-green)" />{" "}
              Dansk support
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={14} color="var(--color-tm-green)" />{" "}
              Opsig når du vil
            </span>
          </div>
        </div>

        {/* Hero illustration – stacked cards */}
        <div className="hidden lg:block relative h-[480px]">
          {/* AI card */}
          <div
            className="top-10 right-[60px] absolute bg-tm-paper p-5 border border-tm-line rounded-2xl w-[280px]"
            style={{
              boxShadow:
                "0 20px 40px -8px rgba(30,20,10,0.12), 0 8px 16px -4px rgba(30,20,10,0.06)",
              transform: "rotate(-4deg)",
            }}
          >
            <div className="flex items-center gap-2 mb-3.5">
              <Icon name="sparkles" size={16} color="var(--color-tm-orange)" />
              <span className="font-semibold text-[13px] text-tm-orange">
                AI genererer…
              </span>
            </div>
            <div className="text-tm-ink-2 text-sm leading-relaxed">
              &ldquo;Udskiftning af 4 vinduer i stueetagen, inkl. fjernelse af
              gamle karme, isolering og…&rdquo;
            </div>
            <div className="bg-tm-line mt-3.5 rounded-full h-1.5 overflow-hidden">
              <div className="bg-tm-orange rounded-full w-[72%] h-full" />
            </div>
          </div>

          {/* Offer card */}
          <div
            className="bottom-5 left-2.5 absolute bg-tm-paper p-6 border border-tm-line rounded-2xl w-[320px]"
            style={{
              boxShadow:
                "0 20px 40px -8px rgba(30,20,10,0.12), 0 8px 16px -4px rgba(30,20,10,0.06)",
              transform: "rotate(3deg)",
            }}
          >
            <div className="mb-1 font-display font-semibold text-base">
              Tilbud #2847
            </div>
            <div className="mb-4 text-tm-ink-3 text-xs">
              Henrik Sørensen · Rødovre
            </div>
            <div className="flex flex-col gap-2 pt-3.5 border-tm-line border-t">
              {[
                "Nedtagning 4 vinduer",
                "Nye Velfac-karme",
                "Isolering & afslutning",
                "Levering & kørsel",
              ].map((t) => (
                <div key={t} className="flex justify-between text-[13px]">
                  <span className="text-tm-ink-2">{t}</span>
                  <span className="font-mono text-tm-ink-3">•••</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 pt-3.5 border-tm-line border-t">
              <span className="font-semibold text-[13px]">I alt</span>
              <span className="font-display font-semibold text-lg">
                48.750 kr
              </span>
            </div>
          </div>

          {/* Tool badges */}
          <div
            className="top-2.5 left-10 absolute"
            style={{ transform: "rotate(-12deg)" }}
          >
            <Illustration name="hammer" size={80} />
          </div>
          <div
            className="right-2.5 bottom-[140px] absolute"
            style={{ transform: "rotate(8deg)" }}
          >
            <Illustration name="level" size={80} />
          </div>
        </div>
      </section>

      {/* ── Logo bar ── */}
      <section className="bg-tm-cream-2 px-5 sm:px-8 lg:px-12 py-6 sm:py-8 border-tm-line border-t border-b">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 sm:gap-6 mx-auto max-w-[1280px]">
          <span className="text-[13px] text-tm-ink-3 whitespace-nowrap">
            Bruges af 2.400+ håndværkere i Danmark
          </span>
          <div className="hidden sm:flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 opacity-50 font-display font-semibold text-tm-ink-2 text-base lg:text-lg">
            <span>Petersen &amp; Søn</span>
            <span className="italic">Nørrebro Tømrer</span>
            <span>HANSEN</span>
            <span className="hidden md:inline">Byghuset A/S</span>
            <span className="hidden lg:inline tracking-widest">
              JYDSK · TØMRER
            </span>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20 max-w-[1280px]">
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <div className="mb-4 tm-chip">3 trin</div>
          <h2 className="font-display font-medium text-[clamp(28px,4vw,48px)] tracking-[-0.02em]">
            Fra kundeopkald til tilbud — <br className="hidden sm:block" />
            uden skrivebord.
          </h2>
        </div>
        <div className="gap-5 sm:gap-6 lg:gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              n: "01",
              ill: "camera" as const,
              t: "Tag et billede",
              d: "Fotografer opgaven på stedet. Appen identificerer materialer og omfang.",
            },
            {
              n: "02",
              ill: "pencil" as const,
              t: "Beskriv opgaven",
              d: "Skriv eller indtal hvad der skal laves. Jo mere detaljeret, jo bedre tilbud.",
            },
            {
              n: "03",
              ill: "wand" as const,
              t: "AI skriver tilbuddet",
              d: "TilbudsMester prissætter, formulerer og sender tilbuddet — i dit firmanavn.",
            },
          ].map((s) => (
            <div key={s.n} className="p-5 sm:p-7 tm-card">
              <div className="mb-4 sm:mb-5 font-mono text-tm-orange text-xs">
                {s.n}
              </div>
              <Illustration name={s.ill} size={100} />
              <h3 className="mt-4 sm:mt-5 mb-2 font-display font-medium text-xl sm:text-2xl">
                {s.t}
              </h3>
              <p className="text-tm-ink-2 sm:text-[15px] text-sm leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features grid ── */}
      <section
        id="funktioner"
        className="bg-tm-cream-2 px-5 sm:px-8 lg:px-12 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="gap-6 sm:gap-8 lg:gap-16 grid lg:grid-cols-[1fr_1.2fr] mb-10 sm:mb-12 lg:mb-16">
            <h2 className="font-display font-medium text-[clamp(26px,3.5vw,44px)] tracking-[-0.02em]">
              Alt du skal bruge. Intet af det du ikke skal bruge.
            </h2>
            <p className="self-end text-tm-ink-2 sm:text-[17px] text-base leading-relaxed">
              Lavet specifikt til tømrere og mindre byggefirmaer. Ingen tung
              ERP. Ingen seks-måneders onboarding. Bare hurtige, flotte tilbud
              der lander jobs.
            </p>
          </div>
          <div className="gap-4 sm:gap-5 grid sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                i: "sparkles",
                t: "AI-drevne tilbud",
                d: "Beskriv opgaven naturligt — få tilbuddet retur på dansk.",
              },
              {
                i: "camera",
                t: "Foto-analyse",
                d: "Upload billeder af opgaven. AI genkender materialer og omfang.",
              },
              {
                i: "template",
                t: "Skabeloner",
                d: "20+ færdige skabeloner til vinduer, tage, gulve, tilbygninger.",
              },
              {
                i: "users",
                t: "Kundekartotek",
                d: "Gem kunder, tidligere tilbud og noter — alt ét sted.",
              },
              {
                i: "chart",
                t: "Indtjenings-overblik",
                d: "Se hvilke tilbud der lander, og hvilke der ikke gør.",
              },
              {
                i: "mail",
                t: "Send direkte",
                d: "PDF til mail, SMS eller upload til Dinero/Billy.",
              },
            ].map((f) => (
              <div key={f.t} className="p-5 sm:p-6 tm-card">
                <div
                  className="flex justify-center items-center mb-3 sm:mb-4 rounded-lg w-10 h-10"
                  style={{ background: "#fffefb", border: "1px solid #c5c0b1" }}
                >
                  <Icon name={f.i} size={18} color="#201515" />
                </div>
                <h3 className="mb-1.5 font-display font-semibold text-lg sm:text-xl">
                  {f.t}
                </h3>
                <p className="text-tm-ink-2 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section
        id="testimonial"
        className="mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20 max-w-[960px] text-center"
      >
        <Icon name="sparkles" size={24} color="var(--color-tm-orange)" />
        <blockquote className="mt-4 mb-6 sm:mb-8 font-display font-normal text-[clamp(22px,3.5vw,36px)] text-tm-ink italic leading-[1.3] tracking-[-0.01em]">
          &ldquo;Jeg brugte 4 timer om ugen på tilbud. Nu tager det 20 minutter.
          TilbudsMester betaler sig selv på den første dag i måneden.&rdquo;
        </blockquote>
        <div className="flex justify-center items-center gap-3.5">
          <div className="flex justify-center items-center bg-tm-sand rounded-full w-12 h-12 font-display font-semibold text-tm-terracotta">
            MP
          </div>
          <div className="text-left">
            <div className="font-semibold text-[15px]">Morten Pedersen</div>
            <div className="text-[13px] text-tm-ink-3">
              Pedersen Tømrerfirma · Aarhus
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="bg-tm-ink px-5 sm:px-8 lg:px-12 py-16 lg:py-20 text-white"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-10 sm:mb-14 text-center">
            <div
              className="mb-4 tm-chip"
              style={{ background: "rgba(255,74,0,0.2)", color: "#FFB58F" }}
            >
              Priser
            </div>
            <h2 className="font-display font-medium text-[clamp(28px,4vw,48px)] tracking-[-0.02em]">
              Én pris. Alt inkluderet.
            </h2>
          </div>
          <div className="gap-5 sm:gap-6 grid sm:grid-cols-2 mx-auto max-w-[800px]">
            {/* Free tier */}
            <div
              className="p-6 sm:p-8 rounded-[20px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="mb-2 font-semibold text-[#FFB58F] text-sm">
                PRØVE
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display font-medium text-[40px] sm:text-[56px]">
                  0
                </span>
                <span className="text-white/60">kr</span>
              </div>
              <div className="mb-5 sm:mb-6 text-white/60 text-sm">
                Gratis i 14 dage
              </div>
              <button
                onClick={() => login("/dashboard")}
                className="justify-center w-full tm-btn tm-btn--ghost-dark"
              >
                Start gratis prøve
              </button>
              <div className="flex flex-col gap-2.5 mt-5 sm:mt-6">
                {[
                  "Fuld adgang i 14 dage",
                  "Ubegrænsede tilbud",
                  "Intet kreditkort krævet",
                ].map((f) => (
                  <div key={f} className="flex gap-2.5 text-white/80 text-sm">
                    <Icon name="check" size={16} color="#FFB58F" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro tier */}
            <div
              className="relative bg-tm-orange p-6 sm:p-8 rounded-[20px]"
              style={{ boxShadow: "0 24px 60px -12px rgba(255,74,0,0.5)" }}
            >
              <div className="-top-3 right-6 absolute bg-tm-ink px-3 py-1 rounded-full font-semibold text-[#FFB58F] text-xs">
                POPULÆR
              </div>
              <div className="mb-2 font-semibold text-white/90 text-sm">
                PRO
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display font-medium text-[40px] sm:text-[56px]">
                  199
                </span>
                <span>kr / md</span>
              </div>
              <div className="mb-5 sm:mb-6 text-white/85 text-sm">
                Ekskl. moms · opsig når som helst
              </div>
              <button
                onClick={() => login("/dashboard")}
                className="justify-center w-full tm-btn tm-btn--white"
              >
                Kom i gang <Icon name="arrow-right" size={16} />
              </button>
              <div className="flex flex-col gap-2.5 mt-5 sm:mt-6">
                {[
                  "Ubegrænsede AI-tilbud",
                  "Foto-analyse & skabeloner",
                  "Kundekartotek & historik",
                  "PDF-eksport med eget logo",
                  "Integration med Dinero & Billy",
                  "Dansk support via telefon",
                ].map((f) => (
                  <div key={f} className="flex gap-2.5 text-white text-sm">
                    <Icon name="check" size={16} color="#fff" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-tm-cream-2 px-5 sm:px-8 lg:px-12 py-16 lg:py-20 text-center">
        <h2 className="mb-4 font-display font-medium text-[clamp(32px,5vw,56px)] tracking-[-0.02em]">
          Land flere jobs. <em className="text-tm-orange italic">I morgen.</em>
        </h2>
        <p className="mb-6 sm:mb-8 text-tm-ink-2 text-base sm:text-lg">
          14 dage gratis. Ingen forpligtelser.
        </p>
        <button
          onClick={() => login("/dashboard")}
          className="px-6 sm:px-7 py-3.5 sm:py-4 text-base tm-btn tm-btn--primary"
        >
          Kom i gang nu <Icon name="arrow-right" size={16} />
        </button>
      </section>

      {/* ── Footer ── */}
      <footer className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 border-tm-line border-t text-[13px] text-tm-ink-3">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto max-w-[1280px]">
          <div className="flex items-center gap-2.5">
            <Icon name="logo" size={24} />
            <span>© 2026 TilbudsMester ApS — Vi bygger bedre tilbud.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-tm-ink transition-colors">
              Vilkår
            </a>
            <a href="#" className="hover:text-tm-ink transition-colors">
              Privatliv
            </a>
            <a href="#" className="hover:text-tm-ink transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
