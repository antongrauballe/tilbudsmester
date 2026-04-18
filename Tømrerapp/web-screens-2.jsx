// web-screens-2.jsx — Additional web screens

function WebPreview({ onNav }) {
  const lines = [
    { t: 'Nedtagning af 4 stk. trævinduer', q: '4 stk', rate: '700', p: '2.800' },
    { t: 'Velfac Classic trævinduer, hvidmalet', q: '4 stk', rate: '4.650', p: '18.600' },
    { t: 'Efterisolering omkring karme', q: '16 lbm', rate: '150', p: '2.400' },
    { t: 'Malerbehandling indvendigt', q: '12 m²', rate: '267', p: '3.200' },
    { t: 'Arbejdsløn & montage', q: '22 timer', rate: '825', p: '18.150' },
    { t: 'Levering, kørsel & affald', q: '—', rate: '—', p: '3.600' },
  ];
  return (
    <WebLayout active="quotes" onNav={onNav} title="Tilbud #2847">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
        {/* Document */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Icon name="sparkles" size={14} color="var(--tm-orange)"/>
            <span style={{ fontSize: 12, color: 'var(--tm-orange)', fontWeight: 600 }}>AI-genereret · Rediger felter hvis nødvendigt</span>
          </div>
          <div className="tm-card" style={{ padding: 48, background: 'var(--tm-paper)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
              <div>
                <div style={{ fontFamily: 'var(--tm-display)', fontSize: 24, fontWeight: 600 }}>Pedersen Tømrerfirma</div>
                <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginTop: 4, lineHeight: 1.6 }}>CVR 12345678 · Tømrervej 3 · 8000 Aarhus C<br/>morten@pedersen-toemrer.dk · +45 26 42 18 90</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--tm-display)', fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em' }}>Tilbud</div>
                <div style={{ fontSize: 13, color: 'var(--tm-ink-3)', fontFamily: 'var(--tm-mono)' }}>#2847 · 18.04.2026</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: '20px 0', borderTop: '1px solid var(--tm-line)', borderBottom: '1px solid var(--tm-line)' }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Til</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Henrik Sørensen</div>
                <div style={{ fontSize: 13, color: 'var(--tm-ink-2)', lineHeight: 1.5 }}>Rødovrevej 41<br/>2610 Rødovre<br/>+45 22 18 47 92</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Gyldighed</div>
                <div style={{ fontSize: 13, color: 'var(--tm-ink-2)', lineHeight: 1.5 }}>14 dage fra udstedelse<br/>Estimeret start: 28.04.2026<br/>Estimeret varighed: 3-4 dage</div>
              </div>
            </div>

            <div style={{ padding: '20px 0', fontSize: 14, lineHeight: 1.6, color: 'var(--tm-ink-2)', borderBottom: '1px solid var(--tm-line)' }}>
              Tak for henvendelsen. Hermed tilbud på udskiftning af 4 trævinduer i stueetagen mod gaden, inkl. fjernelse af eksisterende karme, efterisolering og malerbehandling indvendigt. Alle materialer lever op til gældende bygningsreglement.
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
              <thead>
                <tr style={{ fontSize: 11, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <th style={{ textAlign: 'left', padding: '10px 0', fontWeight: 600 }}>Beskrivelse</th>
                  <th style={{ textAlign: 'right', padding: '10px 0', fontWeight: 600, width: 80 }}>Mængde</th>
                  <th style={{ textAlign: 'right', padding: '10px 0', fontWeight: 600, width: 80 }}>Pris</th>
                  <th style={{ textAlign: 'right', padding: '10px 0', fontWeight: 600, width: 100 }}>I alt</th>
                </tr>
              </thead>
              <tbody>
                {lines.map((l, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--tm-line)', fontSize: 14 }}>
                    <td style={{ padding: '12px 0' }}>{l.t}</td>
                    <td style={{ padding: '12px 0', textAlign: 'right', color: 'var(--tm-ink-3)', fontFamily: 'var(--tm-mono)', fontSize: 13 }}>{l.q}</td>
                    <td style={{ padding: '12px 0', textAlign: 'right', color: 'var(--tm-ink-3)', fontFamily: 'var(--tm-mono)', fontSize: 13 }}>{l.rate}</td>
                    <td style={{ padding: '12px 0', textAlign: 'right', fontFamily: 'var(--tm-mono)', fontWeight: 600 }}>{l.p} kr</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: 20, paddingTop: 20, borderTop: '2px solid var(--tm-ink)', display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ minWidth: 260 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 13, color: 'var(--tm-ink-2)' }}>
                  <span>Subtotal</span><span style={{ fontFamily: 'var(--tm-mono)' }}>48.750 kr</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 13, color: 'var(--tm-ink-2)' }}>
                  <span>Moms (25%)</span><span style={{ fontFamily: 'var(--tm-mono)' }}>12.188 kr</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, marginTop: 10, borderTop: '1px solid var(--tm-line)' }}>
                  <span style={{ fontFamily: 'var(--tm-display)', fontSize: 16, fontWeight: 600 }}>I alt inkl. moms</span>
                  <span style={{ fontFamily: 'var(--tm-display)', fontSize: 24, fontWeight: 600 }}>60.938 kr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="tm-card" style={{ padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Handlinger</div>
            <button className="tm-btn tm-btn--primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}>
              <Icon name="send" size={16}/> Send til kunde
            </button>
            <button className="tm-btn tm-btn--ghost" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}>
              <Icon name="download" size={16}/> Download PDF
            </button>
            <button className="tm-btn tm-btn--ghost" style={{ width: '100%', justifyContent: 'center' }}>
              <Icon name="edit" size={16}/> Rediger
            </button>
          </div>
          <div className="tm-card" style={{ padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Status</div>
            <StatusBadge status="sendt"/>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginTop: 14, lineHeight: 1.5 }}>
              Sendt til henrik@example.dk<br/>I dag kl. 09:14
            </div>
          </div>
          <div className="tm-card" style={{ padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="sparkles" size={14} color="var(--tm-orange)"/> AI-foreslået
            </div>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-2)', lineHeight: 1.5 }}>
              Baseret på tidligere vindue-jobs kan du evt. tilføje <strong>fugtspærre (800 kr)</strong> som separat linje — det accepteres typisk.
            </div>
            <button style={{ marginTop: 10, background: 'none', border: 'none', color: 'var(--tm-orange)', fontSize: 12, fontWeight: 600, cursor: 'pointer', padding: 0 }}>+ Tilføj linje</button>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}

function WebQuotes({ onNav }) {
  const quotes = [
    { n: '#2847', k: 'Henrik Sørensen', o: 'Udskiftning af 4 vinduer', a: '48.750', s: 'sendt', d: 'I dag' },
    { n: '#2846', k: 'Anne Larsen', o: 'Nyt køkkengulv 22 m²', a: '28.400', s: 'godkendt', d: 'I går' },
    { n: '#2845', k: 'Byghuset A/S', o: 'Tagrender hus 1 & 2', a: '15.200', s: 'kladde', d: '15. apr' },
    { n: '#2844', k: 'Jens Holm', o: 'Indbygget garderobe', a: '18.400', s: 'godkendt', d: '12. apr' },
    { n: '#2843', k: 'Kirsten Mortensen', o: 'Terrassebrædder 30 m²', a: '22.950', s: 'afvist', d: '10. apr' },
    { n: '#2842', k: 'Pia Jensen', o: 'Reparation af tagkonstruktion', a: '62.300', s: 'godkendt', d: '8. apr' },
    { n: '#2841', k: 'Byghuset A/S', o: 'Ny trappe indvendigt', a: '34.500', s: 'sendt', d: '5. apr' },
  ];
  return (
    <WebLayout active="quotes" onNav={onNav} title="Tilbud">
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['Alle (32)', 'Kladder (3)', 'Sendt (7)', 'Godkendt (12)', 'Afvist (2)'].map((t, i) => (
          <button key={t} style={{
            padding: '8px 14px', borderRadius: 999, border: '1px solid var(--tm-line)',
            background: i === 0 ? 'var(--tm-ink)' : 'var(--tm-paper)',
            color: i === 0 ? '#fff' : 'var(--tm-ink-2)',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>{t}</button>
        ))}
      </div>
      <div className="tm-card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--tm-cream-2)', color: 'var(--tm-ink-3)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={thStyle2}>Nr.</th><th style={thStyle2}>Kunde</th><th style={thStyle2}>Opgave</th><th style={thStyle2}>Beløb</th><th style={thStyle2}>Status</th><th style={thStyle2}>Dato</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(r => (
              <tr key={r.n} onClick={() => onNav('preview')} style={{ borderBottom: '1px solid var(--tm-line)', cursor: 'pointer' }}>
                <td style={tdStyle2}><span style={{ fontFamily: 'var(--tm-mono)', color: 'var(--tm-ink-3)' }}>{r.n}</span></td>
                <td style={tdStyle2}><strong>{r.k}</strong></td>
                <td style={tdStyle2}>{r.o}</td>
                <td style={tdStyle2}><span style={{ fontFamily: 'var(--tm-mono)', fontWeight: 600 }}>{r.a} kr</span></td>
                <td style={tdStyle2}><StatusBadge status={r.s}/></td>
                <td style={{ ...tdStyle2, color: 'var(--tm-ink-3)' }}>{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WebLayout>
  );
}

const thStyle2 = { textAlign: 'left', padding: '12px 20px', fontWeight: 600 };
const tdStyle2 = { padding: '14px 20px' };

function WebTemplates({ onNav }) {
  const templates = [
    { name: 'Udskiftning af vinduer', icon: '🪟', uses: 47, price: 'Fra 12.000 kr' },
    { name: 'Nyt tag (fuld udskiftning)', icon: '🏠', uses: 12, price: 'Fra 180.000 kr' },
    { name: 'Trægulv 20-40 m²', icon: '🪵', uses: 23, price: 'Fra 18.000 kr' },
    { name: 'Indbygget garderobe', icon: '🚪', uses: 18, price: 'Fra 14.000 kr' },
    { name: 'Terrasse (brædder + stolper)', icon: '🌳', uses: 9, price: 'Fra 22.000 kr' },
    { name: 'Tilbygning / drivhus', icon: '🧱', uses: 4, price: 'Fra 85.000 kr' },
    { name: 'Reparation af tagrender', icon: '💧', uses: 31, price: 'Fra 3.500 kr' },
    { name: 'Trappe indvendigt', icon: '🪜', uses: 6, price: 'Fra 28.000 kr' },
  ];
  return (
    <WebLayout active="templates" onNav={onNav} title="Skabeloner">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <button className="tm-card" style={{ padding: 24, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, border: '2px dashed var(--tm-line-strong)', background: 'var(--tm-cream-2)', textAlign: 'left' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tm-orange-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="plus" size={22} color="var(--tm-orange)"/>
          </div>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>Opret skabelon</div>
          <div style={{ fontSize: 13, color: 'var(--tm-ink-3)' }}>Baseret på et tidligere tilbud eller fra bunden.</div>
        </button>
        {templates.map(t => (
          <div key={t.name} className="tm-card" style={{ padding: 24, cursor: 'pointer' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{t.name}</div>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginBottom: 14 }}>{t.uses} gange brugt</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid var(--tm-line)' }}>
              <span style={{ fontSize: 13, fontFamily: 'var(--tm-mono)', color: 'var(--tm-ink-2)' }}>{t.price}</span>
              <span style={{ fontSize: 12, color: 'var(--tm-orange)', fontWeight: 600 }}>Brug →</span>
            </div>
          </div>
        ))}
      </div>
    </WebLayout>
  );
}

function WebStats({ onNav }) {
  return (
    <WebLayout active="stats" onNav={onNav} title="Statistik">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { l: 'Total omsætning 2026', v: '486.200 kr' },
          { l: 'Gns. accept-rate', v: '68%' },
          { l: 'Tidsbesparelse', v: '84 timer' },
        ].map(k => (
          <div key={k.l} className="tm-card" style={{ padding: 24 }}>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginBottom: 8 }}>{k.l}</div>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 36, fontWeight: 600 }}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className="tm-card" style={{ padding: 28 }}>
        <div style={{ fontFamily: 'var(--tm-display)', fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Omsætning pr. kategori</div>
        {[
          { cat: 'Vinduer & døre', v: 178400, pct: 78 },
          { cat: 'Tag & tagrender', v: 124200, pct: 54 },
          { cat: 'Gulv & trappe', v: 96800, pct: 42 },
          { cat: 'Tilbygning', v: 54400, pct: 24 },
          { cat: 'Øvrigt', v: 32400, pct: 14 },
        ].map(r => (
          <div key={r.cat} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{r.cat}</span>
              <span style={{ fontFamily: 'var(--tm-mono)', fontSize: 13 }}>{r.v.toLocaleString('da-DK')} kr</span>
            </div>
            <div style={{ height: 8, background: 'var(--tm-cream-2)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: `${r.pct}%`, height: '100%', background: 'var(--tm-orange)' }}/>
            </div>
          </div>
        ))}
      </div>
    </WebLayout>
  );
}

function WebSettings({ onNav }) {
  return (
    <WebLayout active="settings" onNav={onNav} title="Indstillinger">
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24 }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['Firma', 'AI & tone', 'Priser', 'Skabeloner', 'Integrationer', 'Abonnement', 'Brugere'].map((t, i) => (
            <button key={t} style={{
              padding: '10px 12px', border: 'none', cursor: 'pointer', textAlign: 'left', borderRadius: 8,
              background: i === 5 ? 'var(--tm-orange-50)' : 'transparent',
              color: i === 5 ? 'var(--tm-orange-600)' : 'var(--tm-ink-2)',
              fontSize: 14, fontWeight: i === 5 ? 600 : 500,
            }}>{t}</button>
          ))}
        </nav>
        <div>
          <div className="tm-card" style={{ padding: 28, marginBottom: 16, background: 'linear-gradient(135deg, var(--tm-orange), #E43F00)', color: '#fff', border: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}/>
            <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.9, marginBottom: 6 }}>AKTIVT ABONNEMENT</div>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 32, fontWeight: 600, marginBottom: 4 }}>TilbudsMester Pro</div>
            <div style={{ fontSize: 15, opacity: 0.9, marginBottom: 20 }}>199 kr/md ekskl. moms · næste betaling 12. maj 2026</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ background: '#fff', color: 'var(--tm-ink)', border: 'none', borderRadius: 10, padding: '10px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Skift til årlig (spar 398 kr)</button>
              <button style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 10, padding: '10px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Opsig</button>
            </div>
          </div>
          <div className="tm-card" style={{ padding: 24, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Faktura-historik</div>
            {[
              { d: '12. apr 2026', a: '199,00 kr', s: 'Betalt' },
              { d: '12. mar 2026', a: '199,00 kr', s: 'Betalt' },
              { d: '12. feb 2026', a: '199,00 kr', s: 'Betalt' },
            ].map(f => (
              <div key={f.d} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--tm-line)' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{f.d}</div>
                  <div style={{ fontSize: 11, color: 'var(--tm-ink-3)' }}>Pro-abonnement</div>
                </div>
                <div style={{ fontSize: 13, fontFamily: 'var(--tm-mono)' }}>{f.a}</div>
                <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: 'var(--tm-green-50)', color: 'var(--tm-green)', fontWeight: 600 }}>{f.s}</span>
                <button style={{ background: 'none', border: 'none', color: 'var(--tm-orange)', cursor: 'pointer' }}><Icon name="download" size={16}/></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WebLayout>
  );
}

Object.assign(window, { WebPreview, WebQuotes, WebTemplates, WebStats, WebSettings });
