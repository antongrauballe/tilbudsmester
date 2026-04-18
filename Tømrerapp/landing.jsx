// landing.jsx — Marketing landing page for TilbudsMester
function Landing() {
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', fontFamily: 'var(--tm-sans)' }}>
      {/* Nav */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px', maxWidth: 1280, margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name="logo" size={32}/>
          <span style={{ fontFamily: 'var(--tm-display)', fontSize: 22, fontWeight: 600, color: 'var(--tm-ink)' }}>
            TilbudsMester
          </span>
        </div>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center', fontSize: 14, color: 'var(--tm-ink-2)' }}>
          <a style={navLinkStyle}>Funktioner</a>
          <a style={navLinkStyle}>Priser</a>
          <a style={navLinkStyle}>Kundeudtalelser</a>
          <a style={navLinkStyle}>Hjælp</a>
          <button className="tm-btn tm-btn--ghost" style={{ padding: '8px 16px', fontSize: 14 }}>Log ind</button>
          <button className="tm-btn tm-btn--primary" style={{ padding: '10px 18px', fontSize: 14 }}>Start gratis</button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 48px 80px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div className="tm-chip" style={{ marginBottom: 24 }}>
            <Icon name="sparkles" size={14}/> AI til håndværkere
          </div>
          <h1 style={{
            fontFamily: 'var(--tm-display)', fontSize: 68, lineHeight: 1.05,
            fontWeight: 500, letterSpacing: -0.02 + 'em', margin: '0 0 20px', color: 'var(--tm-ink)',
          }}>
            Skriv professionelle tilbud <em style={{ color: 'var(--tm-orange)', fontStyle: 'italic' }}>på 60 sekunder</em>.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--tm-ink-2)', maxWidth: 520, margin: '0 0 32px' }}>
            Tag et billede, skriv hvad kunden vil have — TilbudsMester formulerer, prissætter og sender et flot tilbud i dit firmanavn. Bygget til tømrere, af tømrere.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button className="tm-btn tm-btn--primary" style={{ padding: '14px 22px', fontSize: 16 }}>
              Prøv 14 dage gratis <Icon name="arrow-right" size={16}/>
            </button>
            <button className="tm-btn tm-btn--ghost" style={{ padding: '14px 22px', fontSize: 16 }}>
              Se demo
            </button>
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 28, fontSize: 13, color: 'var(--tm-ink-3)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="check" size={14} color="var(--tm-green)"/> Intet kreditkort
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="check" size={14} color="var(--tm-green)"/> Dansk support
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="check" size={14} color="var(--tm-green)"/> Opsig når du vil
            </span>
          </div>
        </div>

        {/* Hero illustration — stacked cards */}
        <div style={{ position: 'relative', height: 480 }}>
          <div style={{
            position: 'absolute', top: 40, right: 60, width: 280,
            background: 'var(--tm-paper)', borderRadius: 16, padding: 20,
            border: '1px solid var(--tm-line)', boxShadow: 'var(--tm-shadow-lg)',
            transform: 'rotate(-4deg)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Icon name="sparkles" size={16} color="var(--tm-orange)"/>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--tm-orange)' }}>AI genererer…</span>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--tm-ink-2)' }}>
              "Udskiftning af 4 vinduer i stueetagen, inkl. fjernelse af gamle karme, isolering og…"
            </div>
            <div style={{ height: 6, background: 'var(--tm-line)', borderRadius: 3, marginTop: 14, overflow: 'hidden' }}>
              <div style={{ width: '72%', height: '100%', background: 'var(--tm-orange)' }}/>
            </div>
          </div>

          <div style={{
            position: 'absolute', bottom: 20, left: 10, width: 320,
            background: 'var(--tm-paper)', borderRadius: 16, padding: 24,
            border: '1px solid var(--tm-line)', boxShadow: 'var(--tm-shadow-lg)',
            transform: 'rotate(3deg)',
          }}>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
              Tilbud #2847
            </div>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginBottom: 16 }}>Henrik Sørensen · Rødovre</div>
            <div style={{ borderTop: '1px solid var(--tm-line)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['Nedtagning 4 vinduer', 'Nye Velfac-karme', 'Isolering & afslutning', 'Levering & kørsel'].map(t => (
                <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                  <span style={{ color: 'var(--tm-ink-2)' }}>{t}</span>
                  <span style={{ color: 'var(--tm-ink-3)', fontFamily: 'var(--tm-mono)' }}>•••</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--tm-line)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>I alt</span>
              <span style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>48.750 kr</span>
            </div>
          </div>

          {/* tool badges */}
          <div style={{ position: 'absolute', top: 10, left: 40, transform: 'rotate(-12deg)' }}>
            <Illustration name="hammer" size={80}/>
          </div>
          <div style={{ position: 'absolute', bottom: 140, right: 10, transform: 'rotate(8deg)' }}>
            <Illustration name="level" size={80}/>
          </div>
        </div>
      </section>

      {/* Logo bar */}
      <section style={{ padding: '32px 48px', borderTop: '1px solid var(--tm-line)', borderBottom: '1px solid var(--tm-line)', background: 'var(--tm-cream-2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <span style={{ fontSize: 13, color: 'var(--tm-ink-3)', whiteSpace: 'nowrap' }}>Bruges af 2.400+ håndværkere i Danmark</span>
          <div style={{ display: 'flex', gap: 48, opacity: 0.5, fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600, color: 'var(--tm-ink-2)' }}>
            <span>Petersen & Søn</span>
            <span style={{ fontStyle: 'italic' }}>Nørrebro Tømrer</span>
            <span>HANSEN</span>
            <span>Byghuset A/S</span>
            <span style={{ letterSpacing: '0.1em' }}>JYDSK · TØMRER</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="tm-chip" style={{ marginBottom: 16 }}>3 trin</div>
          <h2 style={{ fontFamily: 'var(--tm-display)', fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
            Fra kundeopkald til tilbud — <br/>uden skrivebord.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { n: '01', ill: 'camera', t: 'Tag et billede', d: 'Fotografer opgaven på stedet. Appen identificerer materialer og omfang.' },
            { n: '02', ill: 'hammer', t: 'Beskriv opgaven', d: 'Skriv eller indtal hvad der skal laves. Jo mere detaljeret, jo bedre tilbud.' },
            { n: '03', ill: 'saw', t: 'AI skriver tilbuddet', d: 'TilbudsMester prissætter, formulerer og sender tilbuddet — i dit firmanavn.' },
          ].map((s, i) => (
            <div key={i} className="tm-card" style={{ padding: 28 }}>
              <div style={{ fontFamily: 'var(--tm-mono)', fontSize: 12, color: 'var(--tm-orange)', marginBottom: 20 }}>{s.n}</div>
              <Illustration name={s.ill} size={100}/>
              <h3 style={{ fontFamily: 'var(--tm-display)', fontSize: 24, fontWeight: 500, margin: '20px 0 8px' }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: 'var(--tm-ink-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section style={{ background: 'var(--tm-cream-2)', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'var(--tm-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
              Alt du skal bruge. Intet af det du ikke skal bruge.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--tm-ink-2)', lineHeight: 1.6, margin: 0, alignSelf: 'end' }}>
              Lavet specifikt til tømrere og mindre byggefirmaer. Ingen tung ERP. Ingen seks-måneders onboarding. Bare hurtige, flotte tilbud der lander jobs.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { i: 'sparkles', t: 'AI-drevne tilbud', d: 'Beskriv opgaven naturligt — få tilbuddet retur på dansk.' },
              { i: 'camera', t: 'Foto-analyse', d: 'Upload billeder af opgaven. AI genkender materialer og omfang.' },
              { i: 'template', t: 'Skabeloner', d: '20+ færdige skabeloner til vinduer, tage, gulve, tilbygninger.' },
              { i: 'users', t: 'Kundekartotek', d: 'Gem kunder, tidligere tilbud og noter — alt ét sted.' },
              { i: 'chart', t: 'Indtjenings-overblik', d: 'Se hvilke tilbud der lander, og hvilke der ikke gør.' },
              { i: 'mail', t: 'Send direkte', d: 'PDF til mail, SMS eller upload til Dinero/Billy.' },
            ].map(f => (
              <div key={f.t} className="tm-card" style={{ padding: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--tm-orange-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={f.i} size={20} color="var(--tm-orange)"/>
                </div>
                <h3 style={{ fontFamily: 'var(--tm-display)', fontSize: 20, fontWeight: 600, margin: '0 0 6px' }}>{f.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--tm-ink-2)', lineHeight: 1.5, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '96px 48px', textAlign: 'center' }}>
        <Icon name="sparkles" size={24} color="var(--tm-orange)"/>
        <blockquote style={{
          fontFamily: 'var(--tm-display)', fontSize: 36, fontWeight: 400,
          letterSpacing: '-0.01em', lineHeight: 1.3, color: 'var(--tm-ink)',
          margin: '16px 0 32px', fontStyle: 'italic',
        }}>
          "Jeg brugte 4 timer om ugen på tilbud. Nu tager det 20 minutter. TilbudsMester betaler sig selv på den første dag i måneden."
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--tm-display)', fontWeight: 600, color: 'var(--tm-terracotta)' }}>MP</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Morten Pedersen</div>
            <div style={{ fontSize: 13, color: 'var(--tm-ink-3)' }}>Pedersen Tømrerfirma · Aarhus</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ background: 'var(--tm-ink)', color: '#fff', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="tm-chip" style={{ marginBottom: 16, background: 'rgba(255,74,0,0.2)', color: '#FFB58F' }}>Priser</div>
            <h2 style={{ fontFamily: 'var(--tm-display)', fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
              Én pris. Alt inkluderet.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 800, margin: '0 auto' }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, padding: 32,
            }}>
              <div style={{ fontSize: 14, color: '#FFB58F', marginBottom: 8, fontWeight: 600 }}>PRØVE</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--tm-display)', fontSize: 56, fontWeight: 500 }}>0</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>kr</span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>Gratis i 14 dage</div>
              <button className="tm-btn tm-btn--ghost" style={{ width: '100%', justifyContent: 'center', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Start gratis prøve
              </button>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Fuld adgang i 14 dage', 'Ubegrænsede tilbud', 'Intet kreditkort krævet'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                    <Icon name="check" size={16} color="#FFB58F"/>{f}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--tm-orange)', borderRadius: 20, padding: 32,
              position: 'relative', boxShadow: '0 24px 60px -12px rgba(255,74,0,0.5)',
            }}>
              <div style={{
                position: 'absolute', top: -12, right: 24,
                background: 'var(--tm-ink)', color: '#FFB58F',
                padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600,
              }}>POPULÆR</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)', marginBottom: 8, fontWeight: 600 }}>PRO</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--tm-display)', fontSize: 56, fontWeight: 500 }}>199</span>
                <span>kr / md</span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Ekskl. moms · opsig når som helst</div>
              <button className="tm-btn" style={{ width: '100%', justifyContent: 'center', background: '#fff', color: 'var(--tm-ink)' }}>
                Kom i gang <Icon name="arrow-right" size={16}/>
              </button>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Ubegrænsede AI-tilbud',
                  'Foto-analyse & skabeloner',
                  'Kundekartotek & historik',
                  'PDF-eksport med eget logo',
                  'Integration med Dinero & Billy',
                  'Dansk support via telefon',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#fff' }}>
                    <Icon name="check" size={16} color="#fff"/>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 48px', textAlign: 'center', background: 'var(--tm-cream-2)' }}>
        <h2 style={{ fontFamily: 'var(--tm-display)', fontSize: 56, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
          Land flere jobs. <em style={{ color: 'var(--tm-orange)', fontStyle: 'italic' }}>I morgen.</em>
        </h2>
        <p style={{ fontSize: 18, color: 'var(--tm-ink-2)', margin: '0 0 32px' }}>
          14 dage gratis. Ingen forpligtelser.
        </p>
        <button className="tm-btn tm-btn--primary" style={{ padding: '16px 28px', fontSize: 16 }}>
          Kom i gang nu <Icon name="arrow-right" size={16}/>
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 48px', borderTop: '1px solid var(--tm-line)', fontSize: 13, color: 'var(--tm-ink-3)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="logo" size={24}/>
            <span>© 2026 TilbudsMester ApS — Vi bygger bedre tilbud.</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a style={navLinkStyle}>Vilkår</a>
            <a style={navLinkStyle}>Privatliv</a>
            <a style={navLinkStyle}>Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const navLinkStyle = { color: 'var(--tm-ink-2)', textDecoration: 'none', cursor: 'pointer' };

Object.assign(window, { Landing });
