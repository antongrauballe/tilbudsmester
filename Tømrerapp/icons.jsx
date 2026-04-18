// icons.jsx — line icons + simple håndværker illustrations
// All geometric / line-based. No complex freehand SVGs.

function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.75 }) {
  const s = size;
  const sw = strokeWidth;
  const props = {
    width: s, height: s, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth: sw,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'sparkles': return (
      <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
    );
    case 'camera': return (
      <svg {...props}><path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/></svg>
    );
    case 'file': return (
      <svg {...props}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>
    );
    case 'plus': return (
      <svg {...props}><path d="M12 5v14M5 12h14"/></svg>
    );
    case 'user': return (
      <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
    );
    case 'users': return (
      <svg {...props}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3.5 3.5 0 0 1 0 7M17 14c3 .5 5 2.8 5 6"/></svg>
    );
    case 'home': return (
      <svg {...props}><path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></svg>
    );
    case 'chart': return (
      <svg {...props}><path d="M3 20h18M7 16V10M12 16V6M17 16v-8"/></svg>
    );
    case 'settings': return (
      <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>
    );
    case 'clock': return (
      <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    );
    case 'check': return (
      <svg {...props}><path d="M4 12l5 5L20 6"/></svg>
    );
    case 'arrow-right': return (
      <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    );
    case 'send': return (
      <svg {...props}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>
    );
    case 'download': return (
      <svg {...props}><path d="M12 3v13M6 11l6 6 6-6M5 21h14"/></svg>
    );
    case 'search': return (
      <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
    );
    case 'bell': return (
      <svg {...props}><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6zM10 20a2 2 0 0 0 4 0"/></svg>
    );
    case 'template': return (
      <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
    );
    case 'cash': return (
      <svg {...props}><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v4M18 10v4"/></svg>
    );
    case 'mail': return (
      <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
    );
    case 'logo': return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#FF4A00"/>
        <path d="M6 14l4-4 3 3 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="8" r="1.6" fill="#fff"/>
      </svg>
    );
    case 'menu': return (
      <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    );
    case 'x': return (
      <svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>
    );
    case 'chevron-right': return (
      <svg {...props}><path d="M9 6l6 6-6 6"/></svg>
    );
    case 'chevron-down': return (
      <svg {...props}><path d="M6 9l6 6 6-6"/></svg>
    );
    case 'eye': return (
      <svg {...props}><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
    );
    case 'edit': return (
      <svg {...props}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
    );
    case 'trash': return (
      <svg {...props}><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/></svg>
    );
    case 'mic': return (
      <svg {...props}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
    );
    case 'location': return (
      <svg {...props}><path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
    );
    case 'phone': return (
      <svg {...props}><path d="M22 17v3a2 2 0 0 1-2.2 2 20 20 0 0 1-8.6-3.1 20 20 0 0 1-6-6 20 20 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.8.7A2 2 0 0 1 22 17z"/></svg>
    );
    case 'logout': return (
      <svg {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
    );
    default: return null;
  }
}

// Illustrations — geometric, simple. Hammer, saw, level etc.
function Illustration({ name, size = 120 }) {
  const s = size;
  switch (name) {
    case 'hammer': return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8"/>
        {/* head */}
        <rect x="24" y="32" width="52" height="22" rx="3" fill="#1E1B17"/>
        <rect x="70" y="28" width="14" height="30" rx="2" fill="#1E1B17"/>
        {/* handle */}
        <rect x="44" y="54" width="10" height="44" rx="3" fill="#C45A2C" transform="rotate(20 49 76)"/>
        <circle cx="62" cy="93" r="4" fill="#FF4A00"/>
      </svg>
    );
    case 'saw': return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8"/>
        <path d="M20 60 L90 40 L90 55 L20 75 Z" fill="#E8DFCE" stroke="#1E1B17" strokeWidth="1.5"/>
        {/* teeth */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <path key={i} d={`M${22 + i*6} 72 L${25 + i*6} 78 L${28 + i*6} 72`} fill="#1E1B17"/>
        ))}
        <rect x="86" y="35" width="20" height="22" rx="4" fill="#C45A2C"/>
      </svg>
    );
    case 'level': return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8"/>
        <rect x="15" y="50" width="90" height="22" rx="3" fill="#FF4A00"/>
        <rect x="18" y="53" width="84" height="16" rx="2" fill="#FFE1CC"/>
        <rect x="52" y="56" width="16" height="10" rx="2" fill="#fff" stroke="#1E1B17" strokeWidth="1.2"/>
        <circle cx="60" cy="61" r="2" fill="#2E7D4F"/>
      </svg>
    );
    case 'ruler': return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8"/>
        <rect x="15" y="45" width="90" height="30" rx="3" fill="#F3E9DB" stroke="#1E1B17" strokeWidth="1.2"/>
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <line key={i} x1={23 + i*10} y1="45" x2={23 + i*10} y2={i % 2 === 0 ? 60 : 55} stroke="#1E1B17" strokeWidth="1.2"/>
        ))}
      </svg>
    );
    case 'house': return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8"/>
        <path d="M30 58 L60 32 L90 58 L90 92 L30 92 Z" fill="#C45A2C"/>
        <rect x="52" y="68" width="16" height="24" fill="#1E1B17"/>
        <rect x="38" y="66" width="10" height="10" fill="#FFE1CC"/>
        <rect x="72" y="66" width="10" height="10" fill="#FFE1CC"/>
        <path d="M28 60 L60 30 L92 60" stroke="#1E1B17" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    );
    default: return null;
  }
}

Object.assign(window, { Icon, Illustration });
