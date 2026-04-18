// mobile-screens.jsx — iOS app screens for TilbudsMester
// All screens render inside IOSDevice. Shared mobile tab bar.

const MOBILE_W = 390;
const MOBILE_H = 844;

function MobileTabBar({ active, onNav }) {
  const tabs = [
    { id: 'dashboard', icon: 'home', label: 'Oversigt' },
    { id: 'new', icon: 'plus', label: 'Nyt tilbud', primary: true },
    { id: 'customers', icon: 'users', label: 'Kunder' },
    { id: 'settings', icon: 'settings', label: 'Mig' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,253,250,0.92)', backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--tm-line)',
      padding: '10px 16px 28px', display: 'flex', gap: 4,
      zIndex: 60,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        if (t.primary) {
          return (
            <button key={t.id} onClick={() => onNav(t.id)} style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 2, border: 'none', background: 'transparent', cursor: 'pointer', padding: 4,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: 'var(--tm-orange)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--tm-shadow-orange)',
              }}>
                <Icon name="plus" size={24} color="#fff" strokeWidth={2.4}/>
              </div>
              <span style={{ fontSize: 10, color: 'var(--tm-orange)', fontWeight: 600 }}>{t.label}</span>
            </button>
          );
        }
        return (
          <button key={t.id} onClick={() => onNav(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 4, border: 'none', background: 'transparent', cursor: 'pointer', padding: '6px 4px',
          }}>
            <Icon name={t.icon} size={22} color={isActive ? 'var(--tm-orange)' : 'var(--tm-ink-3)'} strokeWidth={isActive ? 2.2 : 1.6}/>
            <span style={{ fontSize: 10, color: isActive ? 'var(--tm-orange)' : 'var(--tm-ink-3)', fontWeight: isActive ? 600 : 500 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function MobileHeader({ title, back, onBack, right }) {
  return (
    <div style={{
      padding: '62px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'var(--tm-cream)', zIndex: 10, position: 'sticky', top: 0,
    }}>
      {back ? (
        <button onClick={onBack} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 4, color: 'var(--tm-ink)' }}>
          <Icon name="chevron-right" size={24} color="var(--tm-ink)" strokeWidth={2.2}/>
          <span style={{ display: 'none' }}/>
        </button>
      ) : <div style={{ width: 28 }}/>}
      <div style={{ fontFamily: 'var(--tm-display)', fontSize: 20, fontWeight: 600 }}>{title}</div>
      {right || <div style={{ width: 28 }}/>}
    </div>
  );
}

// ─── Dashboard ─────────────────────────────────────
function MobileDashboard({ onNav }) {
  const stats = [
    { label: 'I denne måned', value: '142.300', unit: 'kr', trend: '+24%' },
    { label: 'Aktive tilbud', value: '7', unit: 'stk', trend: '+2' },
  ];
  const recent = [
    { name: 'Henrik Sørensen', task: 'Udskiftning af 4 vinduer', amt: '48.750 kr', status: 'sendt', when: 'I dag 09:14' },
    { name: 'Anne Larsen', task: 'Nyt køkkengulv 22 m²', amt: '28.400 kr', status: 'godkendt', when: 'I går' },
    { name: 'Byghuset A/S', task: 'Tagrender hus 1 & 2', amt: '15.200 kr', status: 'kladde', when: '3 dage siden' },
  ];
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', paddingBottom: 120 }}>
      <div style={{ padding: '62px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, color: 'var(--tm-ink-3)' }}>God morgen,</div>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 24, fontWeight: 600 }}>Morten 👋</div>
        </div>
        <div style={{ position: 'relative' }}>
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--tm-paper)', border: '1px solid var(--tm-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name="bell" size={20}/>
          </button>
          <div style={{ position: 'absolute', top: 6, right: 6, width: 10, height: 10, borderRadius: '50%', background: 'var(--tm-orange)', border: '2px solid var(--tm-cream)' }}/>
        </div>
      </div>

      {/* Hero CTA */}
      <div style={{ padding: '12px 20px 20px' }}>
        <button onClick={() => onNav('new')} style={{
          width: '100%', background: 'var(--tm-ink)', color: '#fff',
          borderRadius: 20, padding: 20, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left',
          boxShadow: 'var(--tm-shadow-md)',
        }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tm-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="sparkles" size={26} color="#fff" strokeWidth={2}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>Skriv nyt tilbud</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Tag billede · skriv · send</div>
          </div>
          <Icon name="arrow-right" size={20} color="#fff"/>
        </button>
      </div>

      {/* Stats */}
      <div style={{ padding: '0 20px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {stats.map(s => (
          <div key={s.label} className="tm-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontFamily: 'var(--tm-display)', fontSize: 26, fontWeight: 600 }}>{s.value}</span>
              <span style={{ fontSize: 12, color: 'var(--tm-ink-3)' }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--tm-green)', marginTop: 4, fontWeight: 600 }}>{s.trend}</div>
          </div>
        ))}
      </div>

      {/* Recent */}
      <div style={{ padding: '8px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Seneste tilbud</div>
        <button onClick={() => onNav('history')} style={{ background: 'none', border: 'none', color: 'var(--tm-orange)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Se alle</button>
      </div>
      <div style={{ padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {recent.map((r, i) => (
          <button key={i} onClick={() => onNav('preview')} className="tm-card" style={{
            padding: 14, display: 'flex', alignItems: 'center', gap: 12, width: '100%',
            textAlign: 'left', cursor: 'pointer', border: '1px solid var(--tm-line)', background: 'var(--tm-paper)',
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--tm-display)', color: 'var(--tm-terracotta)', fontWeight: 600, fontSize: 14, flexShrink: 0 }}>
              {r.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--tm-ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</div>
              <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.task}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--tm-display)' }}>{r.amt}</div>
              <StatusBadge status={r.status}/>
            </div>
          </button>
        ))}
      </div>

      {/* Tip card */}
      <div style={{ padding: '0 20px' }}>
        <div style={{
          background: 'var(--tm-orange-50)', borderRadius: 16, padding: 16,
          display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <Illustration name="ruler" size={56}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--tm-orange-600)', marginBottom: 2 }}>Tip</div>
            <div style={{ fontSize: 13, color: 'var(--tm-ink-2)', lineHeight: 1.4 }}>
              Tilføj 1-2 ekstra fotos for bedre AI-prissætning — det øger accept-raten med 40%.
            </div>
          </div>
        </div>
      </div>

      <MobileTabBar active="dashboard" onNav={onNav}/>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    sendt: { bg: 'var(--tm-orange-50)', c: 'var(--tm-orange-600)', label: 'Sendt' },
    godkendt: { bg: 'var(--tm-green-50)', c: 'var(--tm-green)', label: 'Godkendt' },
    kladde: { bg: 'var(--tm-cream-2)', c: 'var(--tm-ink-3)', label: 'Kladde' },
    afvist: { bg: 'var(--tm-red-50)', c: 'var(--tm-red)', label: 'Afvist' },
  };
  const s = map[status] || map.kladde;
  return <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 999, background: s.bg, color: s.c, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</span>;
}

// ─── New Quote (AI prompt + photos) ─────────────────────────────────────
function MobileNew({ onNav }) {
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', paddingBottom: 120 }}>
      <MobileHeader title="Nyt tilbud" back onBack={() => onNav('dashboard')}/>

      <div style={{ padding: '8px 20px 20px' }}>
        {/* Customer picker */}
        <label style={sectionLabel}>Kunde</label>
        <button className="tm-card" style={{
          width: '100%', padding: 14, display: 'flex', alignItems: 'center', gap: 12,
          cursor: 'pointer', background: 'var(--tm-paper)', border: '1px solid var(--tm-line)',
        }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tm-terracotta)', fontWeight: 600, fontSize: 13, fontFamily: 'var(--tm-display)' }}>HS</div>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Henrik Sørensen</div>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)' }}>Rødovrevej 41 · 2610 Rødovre</div>
          </div>
          <Icon name="chevron-right" size={18} color="var(--tm-ink-3)"/>
        </button>

        {/* Photos */}
        <label style={sectionLabel}>Fotos af opgaven</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <div style={{ aspectRatio: '1', background: 'linear-gradient(135deg, #C45A2C 0%, #8E3E1F 100%)', borderRadius: 14, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 12px)' }}/>
            <div style={{ position: 'absolute', bottom: 6, left: 6, fontSize: 9, color: '#fff', fontFamily: 'var(--tm-mono)' }}>FOTO 01</div>
          </div>
          <div style={{ aspectRatio: '1', background: 'linear-gradient(135deg, #6B645B 0%, #3A342D 100%)', borderRadius: 14, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 12px)' }}/>
            <div style={{ position: 'absolute', bottom: 6, left: 6, fontSize: 9, color: '#fff', fontFamily: 'var(--tm-mono)' }}>FOTO 02</div>
          </div>
          <button style={{
            aspectRatio: '1', borderRadius: 14, border: '2px dashed var(--tm-line-strong)',
            background: 'var(--tm-cream-2)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer',
            color: 'var(--tm-ink-3)',
          }}>
            <Icon name="camera" size={22} color="var(--tm-orange)"/>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--tm-orange)' }}>Tilføj</span>
          </button>
        </div>

        {/* AI Prompt */}
        <label style={sectionLabel}>Beskriv opgaven</label>
        <div className="tm-card" style={{ padding: 16, background: 'var(--tm-paper)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <Icon name="sparkles" size={14} color="var(--tm-orange)"/>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--tm-orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Prompt</span>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--tm-ink)', minHeight: 100 }}>
            Udskiftning af 4 trævinduer i stueetagen mod gaden. Velfac-standard, hvidmalet. Skal fjerne gamle karme, efterisolere omkring og malerbehandle indvendigt. Kunden ønsker start inden 1. maj.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, borderTop: '1px solid var(--tm-line)', paddingTop: 12 }}>
            <button style={{ background: 'var(--tm-cream-2)', border: 'none', borderRadius: 999, padding: '6px 12px', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', color: 'var(--tm-ink-2)' }}>
              <Icon name="mic" size={14}/> Tal i stedet
            </button>
            <span style={{ fontSize: 11, color: 'var(--tm-ink-3)', fontFamily: 'var(--tm-mono)' }}>187 tegn</span>
          </div>
        </div>

        {/* Template hints */}
        <label style={sectionLabel}>Eller vælg skabelon</label>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }} className="tm-scroll">
          {['🪟 Vinduer', '🏠 Tag', '🪵 Gulv', '🚪 Døre', '🧱 Tilbygning'].map(t => (
            <button key={t} style={{
              padding: '10px 14px', borderRadius: 999, border: '1px solid var(--tm-line)',
              background: 'var(--tm-paper)', fontSize: 13, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* Generate sticky */}
      <div style={{
        position: 'absolute', bottom: 90, left: 0, right: 0, padding: '12px 20px',
        background: 'linear-gradient(180deg, transparent, var(--tm-cream) 40%)',
      }}>
        <button onClick={() => onNav('generating')} className="tm-btn tm-btn--primary" style={{
          width: '100%', justifyContent: 'center', padding: '16px', fontSize: 16,
        }}>
          <Icon name="sparkles" size={18}/> Generer tilbud med AI
        </button>
      </div>

      <MobileTabBar active="new" onNav={onNav}/>
    </div>
  );
}

const sectionLabel = {
  display: 'block', fontSize: 12, fontWeight: 600,
  color: 'var(--tm-ink-3)', textTransform: 'uppercase',
  letterSpacing: '0.05em', marginTop: 20, marginBottom: 10,
};

// ─── Generating (AI loading) ─────────────────────────────────────
function MobileGenerating({ onNav }) {
  const [step, setStep] = React.useState(0);
  const steps = ['Analyserer fotos…', 'Beregner materiale-forbrug…', 'Prissætter arbejdsløn…', 'Formulerer tilbud…'];
  React.useEffect(() => {
    const id = setInterval(() => setStep(s => Math.min(s + 1, steps.length - 1)), 900);
    const done = setTimeout(() => onNav('preview'), 4500);
    return () => { clearInterval(id); clearTimeout(done); };
  }, []);
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      <div style={{ position: 'relative', width: 140, height: 140, marginBottom: 32 }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'conic-gradient(var(--tm-orange), var(--tm-orange-50), var(--tm-orange))',
          animation: 'tmSpin 1.4s linear infinite',
        }}/>
        <div style={{
          position: 'absolute', inset: 6, borderRadius: '50%',
          background: 'var(--tm-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="sparkles" size={48} color="var(--tm-orange)"/>
        </div>
      </div>
      <div style={{ fontFamily: 'var(--tm-display)', fontSize: 24, fontWeight: 600, marginBottom: 8 }}>AI skriver dit tilbud</div>
      <div style={{ fontSize: 14, color: 'var(--tm-ink-3)', marginBottom: 32, textAlign: 'center' }}>Dette tager typisk 15-30 sekunder</div>
      <div style={{ width: '100%', maxWidth: 280 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', opacity: i > step ? 0.3 : 1, transition: 'opacity 0.3s' }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              background: i < step ? 'var(--tm-green)' : i === step ? 'var(--tm-orange)' : 'var(--tm-line)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {i < step && <Icon name="check" size={12} color="#fff" strokeWidth={3}/>}
            </div>
            <span style={{ fontSize: 14, color: 'var(--tm-ink-2)' }}>{s}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes tmSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── Preview (generated quote) ─────────────────────────────────────
function MobilePreview({ onNav }) {
  const lines = [
    { t: 'Nedtagning af 4 stk. trævinduer', q: '4 stk', p: '2.800' },
    { t: 'Velfac Classic trævinduer, hvidmalet', q: '4 stk', p: '18.600' },
    { t: 'Efterisolering omkring karme', q: '16 lbm', p: '2.400' },
    { t: 'Malerbehandling indvendigt', q: '12 m²', p: '3.200' },
    { t: 'Arbejdsløn & montage', q: '22 timer', p: '18.150' },
    { t: 'Levering, kørsel & affald', q: '—', p: '3.600' },
  ];
  const total = lines.reduce((s, l) => s + parseFloat(l.p.replace('.', '')), 0);
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', paddingBottom: 180 }}>
      <MobileHeader title="Tilbud #2847" back onBack={() => onNav('new')} right={
        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <Icon name="edit" size={22} color="var(--tm-ink)"/>
        </button>
      }/>

      <div style={{ padding: '0 20px' }}>
        {/* AI badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <Icon name="sparkles" size={14} color="var(--tm-orange)"/>
          <span style={{ fontSize: 12, color: 'var(--tm-orange)', fontWeight: 600 }}>Genereret af AI · rediger hvis nødvendigt</span>
        </div>

        {/* Quote paper */}
        <div className="tm-card" style={{ padding: 20, background: 'var(--tm-paper)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>Pedersen Tømrerfirma</div>
              <div style={{ fontSize: 11, color: 'var(--tm-ink-3)' }}>CVR 12345678 · Aarhus C</div>
            </div>
            <Icon name="logo" size={32}/>
          </div>

          <div style={{ borderTop: '1px solid var(--tm-line)', borderBottom: '1px solid var(--tm-line)', padding: '12px 0', margin: '12px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Til</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Henrik Sørensen</div>
                <div style={{ fontSize: 11, color: 'var(--tm-ink-3)' }}>Rødovrevej 41<br/>2610 Rødovre</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dato</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>18. april 2026</div>
                <div style={{ fontSize: 11, color: 'var(--tm-ink-3)' }}>Gyldigt i 14 dage</div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--tm-ink-2)', marginBottom: 16 }}>
            Tak for henvendelsen. Hermed tilbud på udskiftning af 4 trævinduer i stueetagen mod gaden, inkl. efterisolering og malerbehandling indvendigt.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {lines.map((l, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < lines.length - 1 ? '1px solid var(--tm-line)' : 'none', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: 'var(--tm-ink)' }}>{l.t}</div>
                  <div style={{ fontSize: 11, color: 'var(--tm-ink-3)' }}>{l.q}</div>
                </div>
                <div style={{ fontFamily: 'var(--tm-mono)', fontSize: 13, fontWeight: 600 }}>{l.p} kr</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--tm-cream-2)', margin: '16px -20px -20px', padding: '16px 20px', borderTop: '2px solid var(--tm-ink)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--tm-ink-3)' }}>
              <span>Subtotal</span>
              <span style={{ fontFamily: 'var(--tm-mono)' }}>48.750 kr</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--tm-ink-3)', marginTop: 4 }}>
              <span>Moms (25%)</span>
              <span style={{ fontFamily: 'var(--tm-mono)' }}>12.188 kr</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--tm-line)' }}>
              <span style={{ fontFamily: 'var(--tm-display)', fontSize: 16, fontWeight: 600 }}>I alt inkl. moms</span>
              <span style={{ fontFamily: 'var(--tm-display)', fontSize: 22, fontWeight: 600 }}>60.938 kr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div style={{
        position: 'absolute', bottom: 90, left: 0, right: 0, padding: '16px 20px',
        background: 'var(--tm-cream)', borderTop: '1px solid var(--tm-line)',
        display: 'flex', gap: 10,
      }}>
        <button className="tm-btn tm-btn--ghost" style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>
          <Icon name="download" size={16}/> PDF
        </button>
        <button className="tm-btn tm-btn--primary" style={{ flex: 2, justifyContent: 'center', padding: '14px' }}>
          <Icon name="send" size={16}/> Send til kunde
        </button>
      </div>

      <MobileTabBar active="new" onNav={onNav}/>
    </div>
  );
}

// ─── Customers ─────────────────────────────────────
function MobileCustomers({ onNav }) {
  const customers = [
    { n: 'Henrik Sørensen', loc: 'Rødovre', count: 3, total: '127.400 kr' },
    { n: 'Anne Larsen', loc: 'Frederiksberg', count: 2, total: '64.200 kr' },
    { n: 'Byghuset A/S', loc: 'Glostrup', count: 8, total: '412.600 kr' },
    { n: 'Jens & Marie Holm', loc: 'Vanløse', count: 1, total: '18.400 kr' },
    { n: 'Kirsten Mortensen', loc: 'Valby', count: 4, total: '89.750 kr' },
  ];
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', paddingBottom: 120 }}>
      <MobileHeader title="Kunder" right={
        <button style={{ border: 'none', background: 'var(--tm-orange)', color: '#fff', borderRadius: 10, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Icon name="plus" size={18} color="#fff" strokeWidth={2.4}/>
        </button>
      }/>

      <div style={{ padding: '0 20px 20px' }}>
        <div className="tm-card" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--tm-paper)' }}>
          <Icon name="search" size={18} color="var(--tm-ink-3)"/>
          <input placeholder="Søg efter kunde, adresse eller job…" style={{ border: 'none', outline: 'none', flex: 1, fontSize: 14, background: 'transparent', fontFamily: 'var(--tm-sans)' }}/>
        </div>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {customers.map((c, i) => (
          <div key={i} className="tm-card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, background: 'var(--tm-paper)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--tm-display)', color: 'var(--tm-terracotta)', fontWeight: 600, fontSize: 15, flexShrink: 0 }}>
              {c.n.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{c.n}</div>
              <div style={{ fontSize: 12, color: 'var(--tm-ink-3)' }}>{c.loc} · {c.count} tilbud</div>
            </div>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 14, fontWeight: 600 }}>{c.total}</div>
          </div>
        ))}
      </div>

      <MobileTabBar active="customers" onNav={onNav}/>
    </div>
  );
}

// ─── Settings / Profile ─────────────────────────────────────
function MobileSettings({ onNav }) {
  return (
    <div style={{ background: 'var(--tm-cream)', minHeight: '100%', paddingBottom: 120 }}>
      <MobileHeader title="Indstillinger"/>

      {/* Profile card */}
      <div style={{ padding: '0 20px 20px' }}>
        <div className="tm-card" style={{ padding: 18, display: 'flex', alignItems: 'center', gap: 14, background: 'var(--tm-paper)' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--tm-sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--tm-display)', color: 'var(--tm-terracotta)', fontWeight: 600, fontSize: 20 }}>MP</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Morten Pedersen</div>
            <div style={{ fontSize: 12, color: 'var(--tm-ink-3)' }}>Pedersen Tømrerfirma</div>
          </div>
          <span className="tm-chip">Pro · aktiv</span>
        </div>
      </div>

      {/* Subscription */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--tm-orange) 0%, #E43F00 100%)',
          color: '#fff', borderRadius: 20, padding: 20, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}/>
          <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.9, marginBottom: 4 }}>DIT ABONNEMENT</div>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 28, fontWeight: 600, marginBottom: 4 }}>Pro · 199 kr/md</div>
          <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 16 }}>Næste betaling 12. maj 2026</div>
          <button style={{
            background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', padding: '8px 14px', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>Administrer abonnement</button>
        </div>
      </div>

      {/* Sections */}
      <div style={{ padding: '0 20px' }}>
        <SettingsSection title="Firma">
          <SettingsRow icon="user" label="Firmaoplysninger" value="CVR 12345678"/>
          <SettingsRow icon="cash" label="Priser & timesatser" value="625 kr/t"/>
          <SettingsRow icon="template" label="Tilbudsskabeloner" value="8 stk"/>
        </SettingsSection>
        <SettingsSection title="AI & sprog">
          <SettingsRow icon="sparkles" label="AI-tone" value="Professionel"/>
          <SettingsRow icon="file" label="Standard-vilkår"/>
        </SettingsSection>
        <SettingsSection title="Konto">
          <SettingsRow icon="bell" label="Notifikationer"/>
          <SettingsRow icon="logout" label="Log ud" danger/>
        </SettingsSection>
      </div>

      <MobileTabBar active="settings" onNav={onNav}/>
    </div>
  );
}

function SettingsSection({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--tm-ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, paddingLeft: 4 }}>{title}</div>
      <div className="tm-card" style={{ background: 'var(--tm-paper)', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

function SettingsRow({ icon, label, value, danger }) {
  return (
    <div style={{
      padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
      borderBottom: '1px solid var(--tm-line)', cursor: 'pointer',
    }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: danger ? 'var(--tm-red-50)' : 'var(--tm-cream-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={16} color={danger ? 'var(--tm-red)' : 'var(--tm-ink-2)'}/>
      </div>
      <div style={{ flex: 1, fontSize: 14, fontWeight: 500, color: danger ? 'var(--tm-red)' : 'var(--tm-ink)' }}>{label}</div>
      {value && <span style={{ fontSize: 13, color: 'var(--tm-ink-3)' }}>{value}</span>}
      <Icon name="chevron-right" size={16} color="var(--tm-ink-3)"/>
    </div>
  );
}

Object.assign(window, {
  MobileDashboard, MobileNew, MobileGenerating, MobilePreview, MobileCustomers, MobileSettings,
  MobileTabBar, StatusBadge,
});
