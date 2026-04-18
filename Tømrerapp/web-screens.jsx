// web-screens.jsx — Web-app screens for TilbudsMester (desktop)

function WebLayout({ active, onNav, children, title }) {
  const nav = [
    { id: 'dashboard', icon: 'home', label: 'Oversigt' },
    { id: 'quotes', icon: 'file', label: 'Tilbud' },
    { id: 'customers', icon: 'users', label: 'Kunder' },
    { id: 'templates', icon: 'template', label: 'Skabeloner' },
    { id: 'stats', icon: 'chart', label: 'Statistik' },
    { id: 'settings', icon: 'settings', label: 'Indstillinger' },
  ];
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--tm-cream)', fontFamily: 'var(--tm-sans)' }}>
      {/* Sidebar */}
      <aside style={{
        width: 240, background: 'var(--tm-paper)', borderRight: '1px solid var(--tm-line)',
        padding: '20px 14px', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 24px' }}>
          <Icon name="logo" size={28}/>
          <span style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>TilbudsMester</span>
        </div>
        <button onClick={() => onNav('new')} className="tm-btn tm-btn--primary" style={{ justifyContent: 'center', marginBottom: 16 }}>
          <Icon name="plus" size={16}/> Nyt tilbud
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {nav.map(n => (
            <button key={n.id} onClick={() => onNav(n.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
              borderRadius: 10, border: 'none', cursor: 'pointer', textAlign: 'left',
              background: active === n.id ? 'var(--tm-orange-50)' : 'transparent',
              color: active === n.id ? 'var(--tm-orange-600)' : 'var(--tm-ink-2)',
              fontSize: 14, fontWeight: active === n.id ? 600 : 500,
            }}>
              <Icon name={n.icon} size={18} color={active === n.id ? 'var(--tm-orange)' : 'var(--tm-ink-3)'}/>
              {n.label}
            </button>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', padding: 12, background: 'var(--tm-cream-2)', borderRadius: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: 'var(--tm-terracotta)', fontFamily: 'var(--tm-display)' }}>MP</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Morten Pedersen</div>
              <div style={{ fontSize: 10, color: 'var(--tm-ink-3)' }}>Pro · 199 kr/md</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, overflow: 'auto', background: 'var(--tm-cream)' }} className="tm-scroll">
        <header style={{
          padding: '20px 32px', borderBottom: '1px solid var(--tm-line)',
          background: 'var(--tm-cream)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 22, fontWeight: 600 }}>{title}</div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <Icon name="search" size={16} color="var(--tm-ink-3)"/>
              <input placeholder="Søg…" style={{
                padding: '8px 12px 8px 32px', border: '1px solid var(--tm-line)',
                borderRadius: 10, background: 'var(--tm-paper)', width: 240, fontSize: 13, fontFamily: 'var(--tm-sans)', outline: 'none',
              }}/>
              <div style={{ position: 'absolute', left: 10, top: 9 }}><Icon name="search" size={16} color="var(--tm-ink-3)"/></div>
            </div>
            <button style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid var(--tm-line)', background: 'var(--tm-paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="bell" size={16}/>
            </button>
          </div>
        </header>
        <div style={{ padding: 32 }}>{children}</div>
      </main>
    </div>
  );
}

// ─── Web Dashboard ─────
function WebDashboard({ onNav }) {
  return (
    <WebLayout active="dashboard" onNav={onNav} title="Oversigt">
      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {[
          { l: 'Omsætning denne md.', v: '142.300', u: 'kr', t: '+24%', c: 'var(--tm-green)' },
          { l: 'Aktive tilbud', v: '7', u: 'stk', t: '+2', c: 'var(--tm-green)' },
          { l: 'Accept-rate', v: '68', u: '%', t: '+4%', c: 'var(--tm-green)' },
          { l: 'Gns. tilbuds-værdi', v: '32.400', u: 'kr', t: '−8%', c: 'var(--tm-red)' },
        ].map(k => (
          <div key={k.l} className="tm-card" style={{ padding: 20 }}>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginBottom: 8 }}>{k.l}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontFamily: 'var(--tm-display)', fontSize: 32, fontWeight: 600 }}>{k.v}</span>
              <span style={{ fontSize: 13, color: 'var(--tm-ink-3)' }}>{k.u}</span>
            </div>
            <div style={{ fontSize: 12, color: k.c, marginTop: 4, fontWeight: 600 }}>{k.t} vs sidste md.</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        {/* Chart */}
        <div className="tm-card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>Omsætning</div>
              <div style={{ fontSize: 12, color: 'var(--tm-ink-3)' }}>Seneste 6 måneder</div>
            </div>
            <select style={{ padding: '6px 10px', border: '1px solid var(--tm-line)', borderRadius: 8, background: 'var(--tm-paper)', fontSize: 13, fontFamily: 'var(--tm-sans)' }}>
              <option>6 måneder</option>
            </select>
          </div>
          <div style={{ height: 220, display: 'flex', alignItems: 'flex-end', gap: 12, paddingBottom: 24, borderBottom: '1px solid var(--tm-line)' }}>
            {[62, 88, 74, 110, 92, 142].map((h, i) => {
              const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
              const pct = (h / 142) * 100;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ fontSize: 10, color: 'var(--tm-ink-3)', fontFamily: 'var(--tm-mono)' }}>{h}k</div>
                  <div style={{ width: '100%', height: `${pct}%`, background: i === 5 ? 'var(--tm-orange)' : 'var(--tm-orange-100)', borderRadius: '6px 6px 0 0' }}/>
                  <div style={{ fontSize: 11, color: 'var(--tm-ink-3)', marginTop: 4 }}>{months[i]}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pipeline */}
        <div className="tm-card" style={{ padding: 24 }}>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Pipeline</div>
          {[
            { s: 'Kladder', n: 3, c: 'var(--tm-muted)', w: 30 },
            { s: 'Sendt', n: 7, c: 'var(--tm-orange)', w: 70 },
            { s: 'Godkendt', n: 12, c: 'var(--tm-green)', w: 100 },
            { s: 'Afvist', n: 2, c: 'var(--tm-red)', w: 18 },
          ].map(p => (
            <div key={p.s} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: 'var(--tm-ink-2)' }}>{p.s}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{p.n}</span>
              </div>
              <div style={{ height: 6, background: 'var(--tm-cream-2)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${p.w}%`, height: '100%', background: p.c }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent table */}
      <div className="tm-card" style={{ padding: 0, marginTop: 16, overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--tm-line)' }}>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>Seneste tilbud</div>
          <button onClick={() => onNav('quotes')} style={{ background: 'none', border: 'none', color: 'var(--tm-orange)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Vis alle →</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--tm-cream-2)', color: 'var(--tm-ink-3)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={thStyle}>Nr.</th><th style={thStyle}>Kunde</th><th style={thStyle}>Opgave</th><th style={thStyle}>Beløb</th><th style={thStyle}>Status</th><th style={thStyle}>Dato</th>
            </tr>
          </thead>
          <tbody>
            {[
              { n: '#2847', k: 'Henrik Sørensen', o: 'Udskiftning af 4 vinduer', a: '48.750', s: 'sendt', d: 'I dag' },
              { n: '#2846', k: 'Anne Larsen', o: 'Nyt køkkengulv 22 m²', a: '28.400', s: 'godkendt', d: 'I går' },
              { n: '#2845', k: 'Byghuset A/S', o: 'Tagrender hus 1 & 2', a: '15.200', s: 'kladde', d: '15. apr' },
              { n: '#2844', k: 'Jens Holm', o: 'Indbygget garderobe', a: '18.400', s: 'godkendt', d: '12. apr' },
              { n: '#2843', k: 'Kirsten Mortensen', o: 'Terrassebrædder 30 m²', a: '22.950', s: 'afvist', d: '10. apr' },
            ].map(r => (
              <tr key={r.n} style={{ borderBottom: '1px solid var(--tm-line)', cursor: 'pointer' }} onClick={() => onNav('preview')}>
                <td style={tdStyle}><span style={{ fontFamily: 'var(--tm-mono)', color: 'var(--tm-ink-3)' }}>{r.n}</span></td>
                <td style={tdStyle}><strong>{r.k}</strong></td>
                <td style={tdStyle}>{r.o}</td>
                <td style={tdStyle}><span style={{ fontFamily: 'var(--tm-mono)', fontWeight: 600 }}>{r.a} kr</span></td>
                <td style={tdStyle}><StatusBadge status={r.s}/></td>
                <td style={{ ...tdStyle, color: 'var(--tm-ink-3)' }}>{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WebLayout>
  );
}

const thStyle = { textAlign: 'left', padding: '12px 24px', fontWeight: 600 };
const tdStyle = { padding: '14px 24px' };

// ─── Web New Quote ─────
function WebNew({ onNav, variant = 'split' }) {
  // 3 variants for main screen exploration: split, wizard, compact
  return (
    <WebLayout active="new" onNav={onNav} title="Nyt tilbud">
      {variant === 'split' && <WebNewSplit onNav={onNav}/>}
      {variant === 'wizard' && <WebNewWizard onNav={onNav}/>}
      {variant === 'compact' && <WebNewCompact onNav={onNav}/>}
    </WebLayout>
  );
}

function WebNewSplit({ onNav }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, minHeight: 600 }}>
      {/* Input side */}
      <div className="tm-card" style={{ padding: 28 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Kunde</div>
        <div style={{ padding: 12, border: '1px solid var(--tm-line)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tm-terracotta)', fontWeight: 600, fontSize: 12, fontFamily: 'var(--tm-display)' }}>HS</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Henrik Sørensen</div>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)' }}>Rødovrevej 41 · 2610 Rødovre</div>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'var(--tm-orange)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Skift</button>
        </div>

        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Fotos</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 20 }}>
          {[0,1].map(i => (
            <div key={i} style={{ aspectRatio: '1', borderRadius: 10, background: i === 0 ? 'linear-gradient(135deg, #C45A2C, #8E3E1F)' : 'linear-gradient(135deg, #6B645B, #3A342D)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 12px)' }}/>
              <div style={{ position: 'absolute', bottom: 4, left: 6, fontSize: 9, color: '#fff', fontFamily: 'var(--tm-mono)' }}>FOTO 0{i+1}</div>
            </div>
          ))}
          <button style={{ aspectRatio: '1', border: '2px dashed var(--tm-line-strong)', borderRadius: 10, background: 'var(--tm-cream-2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, cursor: 'pointer', color: 'var(--tm-orange)' }}>
            <Icon name="camera" size={20} color="var(--tm-orange)"/>
            <span style={{ fontSize: 11, fontWeight: 600 }}>Tilføj</span>
          </button>
        </div>

        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Beskriv opgaven</div>
        <div style={{ border: '1px solid var(--tm-line)', borderRadius: 12, padding: 16, background: 'var(--tm-paper)' }}>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--tm-ink)', minHeight: 140 }}>
            Udskiftning af 4 trævinduer i stueetagen mod gaden. Velfac-standard, hvidmalet. Skal fjerne gamle karme, efterisolere omkring og malerbehandle indvendigt. Kunden ønsker start inden 1. maj.
          </div>
          <div style={{ borderTop: '1px solid var(--tm-line)', paddingTop: 12, marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['🪟 Vinduer', '🏠 Tag', '🪵 Gulv', '🚪 Døre'].map(t => (
              <button key={t} style={{ padding: '6px 12px', borderRadius: 999, border: '1px solid var(--tm-line)', background: 'var(--tm-cream-2)', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>{t}</button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20, display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button className="tm-btn tm-btn--ghost">Gem som kladde</button>
          <button onClick={() => onNav('generating')} className="tm-btn tm-btn--primary">
            <Icon name="sparkles" size={16}/> Generer med AI
          </button>
        </div>
      </div>

      {/* Preview side — placeholder */}
      <div style={{ padding: 28, border: '2px dashed var(--tm-line-strong)', borderRadius: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--tm-ink-3)', background: 'var(--tm-cream-2)', textAlign: 'center' }}>
        <Illustration name="ruler" size={120}/>
        <div style={{ fontFamily: 'var(--tm-display)', fontSize: 20, fontWeight: 600, color: 'var(--tm-ink-2)', marginTop: 16 }}>Live preview</div>
        <div style={{ fontSize: 14, maxWidth: 280, marginTop: 6 }}>Generer for at se dit tilbud dukke op her — lige som kunden vil se det.</div>
      </div>
    </div>
  );
}

function WebNewWizard({ onNav }) {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {['Kunde', 'Fotos', 'Beskrivelse', 'Preview'].map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{ height: 6, borderRadius: 3, background: i <= 2 ? 'var(--tm-orange)' : 'var(--tm-line)' }}/>
            <div style={{ fontSize: 12, marginTop: 6, color: i <= 2 ? 'var(--tm-orange-600)' : 'var(--tm-ink-3)', fontWeight: 600 }}>{i+1}. {s}</div>
          </div>
        ))}
      </div>
      <div className="tm-card" style={{ padding: 40 }}>
        <div style={{ fontFamily: 'var(--tm-display)', fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Beskriv opgaven</div>
        <div style={{ fontSize: 14, color: 'var(--tm-ink-3)', marginBottom: 24 }}>Jo mere detaljeret, jo bedre tilbud. AI'en kender allerede standard-materialer og priser.</div>
        <textarea defaultValue="Udskiftning af 4 trævinduer i stueetagen mod gaden. Velfac-standard, hvidmalet. Skal fjerne gamle karme, efterisolere omkring og malerbehandle indvendigt. Kunden ønsker start inden 1. maj." style={{
          width: '100%', minHeight: 180, padding: 16, borderRadius: 12, border: '1px solid var(--tm-line)',
          fontSize: 15, lineHeight: 1.5, fontFamily: 'var(--tm-sans)', resize: 'vertical', background: 'var(--tm-paper)',
          color: 'var(--tm-ink)', outline: 'none',
        }}/>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between' }}>
          <button className="tm-btn tm-btn--ghost">← Tilbage</button>
          <button onClick={() => onNav('generating')} className="tm-btn tm-btn--primary">
            Generer tilbud <Icon name="sparkles" size={16}/>
          </button>
        </div>
      </div>
    </div>
  );
}

function WebNewCompact({ onNav }) {
  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>
      <div className="tm-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: 28, borderBottom: '1px solid var(--tm-line)' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
            <Icon name="sparkles" size={20} color="var(--tm-orange)"/>
            <span style={{ fontFamily: 'var(--tm-display)', fontSize: 20, fontWeight: 600 }}>Fortæl AI'en om opgaven</span>
          </div>
          <textarea placeholder="Fx: Nyt køkkengulv på 22 m² i lys eg, inkl. fjernelse af gammelt linoleum og støvtørring af alle overflader…" defaultValue="Udskiftning af 4 trævinduer i stueetagen mod gaden. Velfac-standard, hvidmalet." style={{
            width: '100%', minHeight: 120, padding: 14, borderRadius: 12, border: '1px solid var(--tm-line)',
            fontSize: 15, fontFamily: 'var(--tm-sans)', resize: 'vertical', background: 'var(--tm-cream-2)', outline: 'none',
          }}/>
        </div>
        <div style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 12, background: 'var(--tm-cream-2)' }}>
          <button style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid var(--tm-line)', background: 'var(--tm-paper)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <Icon name="user" size={14}/> Henrik Sørensen
          </button>
          <button style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid var(--tm-line)', background: 'var(--tm-paper)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <Icon name="camera" size={14}/> 2 fotos
          </button>
          <button style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid var(--tm-line)', background: 'var(--tm-paper)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <Icon name="template" size={14}/> Vindue-skabelon
          </button>
          <div style={{ flex: 1 }}/>
          <button onClick={() => onNav('generating')} className="tm-btn tm-btn--primary">
            Generer <Icon name="arrow-right" size={16}/>
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WebLayout, WebDashboard, WebNew, WebNewSplit, WebNewWizard, WebNewCompact });
