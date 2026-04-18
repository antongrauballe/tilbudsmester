// auth-screens.jsx — Login, signup, onboarding

function AuthShell({ children }) {
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--tm-cream)', fontFamily: 'var(--tm-sans)' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <div style={{ width: 400 }}>{children}</div>
      </div>
      <div style={{ flex: 1, background: 'linear-gradient(135deg, var(--tm-orange) 0%, #E43F00 70%, #8E3E1F 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 20px)' }}/>
        <div style={{ position: 'relative', color: '#fff', maxWidth: 440, textAlign: 'left' }}>
          <div style={{ marginBottom: 40 }}>
            <Illustration name="hammer" size={140}/>
          </div>
          <div style={{ fontFamily: 'var(--tm-display)', fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Bygget til håndværkere. Formet af AI.
          </div>
          <div style={{ fontSize: 16, opacity: 0.9, lineHeight: 1.5 }}>
            Join 2.400+ tømrere der sparer 4+ timer om ugen på tilbud.
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
            <div style={{ fontFamily: 'var(--tm-display)', fontSize: 28, fontWeight: 600 }}>4,8<span style={{ fontSize: 14, opacity: 0.7 }}>/5</span></div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>Trustpilot<br/>1.247 anmeldelser</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebLogin({ onNav }) {
  return (
    <AuthShell>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
        <Icon name="logo" size={32}/>
        <span style={{ fontFamily: 'var(--tm-display)', fontSize: 22, fontWeight: 600 }}>TilbudsMester</span>
      </div>
      <h1 style={{ fontFamily: 'var(--tm-display)', fontSize: 36, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Velkommen tilbage</h1>
      <p style={{ fontSize: 14, color: 'var(--tm-ink-3)', margin: '0 0 32px' }}>Log ind for at skrive dit næste tilbud.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--tm-ink-2)', marginBottom: 6, display: 'block' }}>E-mail</label>
          <input type="email" defaultValue="morten@pedersen-toemrer.dk" style={inputStyle}/>
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--tm-ink-2)', marginBottom: 6, display: 'block' }}>Adgangskode</label>
          <input type="password" defaultValue="••••••••" style={inputStyle}/>
        </div>
        <button onClick={() => onNav('web-dashboard')} className="tm-btn tm-btn--primary" style={{ justifyContent: 'center', padding: 14, marginTop: 10 }}>
          Log ind <Icon name="arrow-right" size={16}/>
        </button>
        <button className="tm-btn tm-btn--ghost" style={{ justifyContent: 'center', padding: 14 }}>Log ind med MitID</button>
        <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--tm-ink-3)', marginTop: 10 }}>
          Har du ikke en konto? <a onClick={() => onNav('signup')} style={{ color: 'var(--tm-orange)', fontWeight: 600, cursor: 'pointer' }}>Start 14 dages prøve</a>
        </div>
      </div>
    </AuthShell>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: 10,
  border: '1px solid var(--tm-line)', fontSize: 14,
  fontFamily: 'var(--tm-sans)', background: 'var(--tm-paper)', outline: 'none',
  boxSizing: 'border-box',
};

function WebSignup({ onNav }) {
  return (
    <AuthShell>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
        <Icon name="logo" size={32}/>
        <span style={{ fontFamily: 'var(--tm-display)', fontSize: 22, fontWeight: 600 }}>TilbudsMester</span>
      </div>
      <h1 style={{ fontFamily: 'var(--tm-display)', fontSize: 36, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Start 14 dages prøve</h1>
      <p style={{ fontSize: 14, color: 'var(--tm-ink-3)', margin: '0 0 28px' }}>Intet kreditkort. Opsig når som helst.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={labelStyle}>Firmanavn</label>
          <input placeholder="Pedersen Tømrerfirma" style={inputStyle}/>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <label style={labelStyle}>Fornavn</label>
            <input placeholder="Morten" style={inputStyle}/>
          </div>
          <div>
            <label style={labelStyle}>Efternavn</label>
            <input placeholder="Pedersen" style={inputStyle}/>
          </div>
        </div>
        <div>
          <label style={labelStyle}>E-mail</label>
          <input type="email" placeholder="morten@firma.dk" style={inputStyle}/>
        </div>
        <div>
          <label style={labelStyle}>Adgangskode</label>
          <input type="password" placeholder="Min. 8 tegn" style={inputStyle}/>
        </div>
        <button onClick={() => onNav('onboarding')} className="tm-btn tm-btn--primary" style={{ justifyContent: 'center', padding: 14, marginTop: 6 }}>
          Opret konto <Icon name="arrow-right" size={16}/>
        </button>
        <div style={{ fontSize: 11, color: 'var(--tm-ink-3)', textAlign: 'center', lineHeight: 1.5 }}>
          Ved at oprette en konto accepterer du vores Vilkår og Privatlivspolitik.
        </div>
      </div>
    </AuthShell>
  );
}

const labelStyle = { fontSize: 12, fontWeight: 600, color: 'var(--tm-ink-2)', marginBottom: 6, display: 'block' };

function WebOnboarding({ onNav }) {
  const [step, setStep] = React.useState(0);
  const steps = [
    { t: 'Hvad laver dit firma mest?', sub: 'Vi skræddersyr skabeloner og AI-tone herefter.' },
    { t: 'Hvad er din timepris?', sub: 'Bruges som standard — du kan altid redigere pr. tilbud.' },
    { t: 'Upload dit logo', sub: 'Vi placerer det automatisk på alle tilbud.' },
  ];
  const s = steps[step];
  return (
    <AuthShell>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
        <Icon name="logo" size={28}/>
        <span style={{ fontFamily: 'var(--tm-display)', fontSize: 18, fontWeight: 600 }}>TilbudsMester</span>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {steps.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= step ? 'var(--tm-orange)' : 'var(--tm-line)' }}/>
        ))}
      </div>
      <div style={{ fontSize: 12, color: 'var(--tm-orange)', fontWeight: 600, marginBottom: 8 }}>TRIN {step + 1} AF 3</div>
      <h1 style={{ fontFamily: 'var(--tm-display)', fontSize: 30, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{s.t}</h1>
      <p style={{ fontSize: 14, color: 'var(--tm-ink-3)', margin: '0 0 28px' }}>{s.sub}</p>

      {step === 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {['🪟 Vinduer & døre', '🏠 Tag & tagrender', '🪵 Gulv & trappe', '🧱 Tilbygning', '🚪 Indretning', '🌳 Udendørs'].map((x, i) => (
            <button key={x} style={{
              padding: 16, borderRadius: 12, border: '1px solid var(--tm-line)',
              background: i < 3 ? 'var(--tm-orange-50)' : 'var(--tm-paper)',
              borderColor: i < 3 ? 'var(--tm-orange)' : 'var(--tm-line)',
              fontSize: 14, fontWeight: 500, cursor: 'pointer', textAlign: 'left',
              color: 'var(--tm-ink)', fontFamily: 'var(--tm-sans)',
            }}>{x}</button>
          ))}
        </div>
      )}
      {step === 1 && (
        <div>
          <label style={labelStyle}>Timepris (ekskl. moms)</label>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--tm-line)', borderRadius: 10, background: 'var(--tm-paper)', padding: '0 14px' }}>
            <input defaultValue="625" style={{ border: 'none', outline: 'none', flex: 1, padding: '12px 0', fontSize: 20, fontFamily: 'var(--tm-display)', fontWeight: 600, background: 'transparent' }}/>
            <span style={{ color: 'var(--tm-ink-3)', fontSize: 14 }}>kr/time</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginTop: 8 }}>Gennemsnit for tømrere i DK: 575-725 kr/t</div>
        </div>
      )}
      {step === 2 && (
        <div style={{ border: '2px dashed var(--tm-line-strong)', borderRadius: 14, padding: 40, textAlign: 'center', background: 'var(--tm-cream-2)' }}>
          <Icon name="download" size={32} color="var(--tm-orange)"/>
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 10 }}>Træk dit logo her, eller klik</div>
          <div style={{ fontSize: 12, color: 'var(--tm-ink-3)', marginTop: 4 }}>PNG, SVG eller JPG · max 5MB</div>
        </div>
      )}

      <div style={{ marginTop: 32, display: 'flex', gap: 10 }}>
        {step > 0 && <button onClick={() => setStep(step - 1)} className="tm-btn tm-btn--ghost" style={{ padding: 14 }}>Tilbage</button>}
        <button onClick={() => step < 2 ? setStep(step + 1) : onNav('web-dashboard')} className="tm-btn tm-btn--primary" style={{ flex: 1, justifyContent: 'center', padding: 14 }}>
          {step < 2 ? 'Fortsæt' : 'Kom i gang'} <Icon name="arrow-right" size={16}/>
        </button>
      </div>
    </AuthShell>
  );
}

Object.assign(window, { WebLogin, WebSignup, WebOnboarding });
