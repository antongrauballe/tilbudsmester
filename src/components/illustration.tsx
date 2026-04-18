type IllustrationProps = {
  name: string;
  size?: number;
};

export function Illustration({ name, size = 120 }: IllustrationProps) {
  const s = size;
  switch (name) {
    case "hammer":
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
          <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8" />
          <rect x="24" y="32" width="52" height="22" rx="3" fill="#1E1B17" />
          <rect x="70" y="28" width="14" height="30" rx="2" fill="#1E1B17" />
          <rect
            x="44"
            y="54"
            width="10"
            height="44"
            rx="3"
            fill="#C45A2C"
            transform="rotate(20 49 76)"
          />
          <circle cx="62" cy="93" r="4" fill="#FF4A00" />
        </svg>
      );
    case "saw":
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
          <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8" />
          <path
            d="M20 60 L90 40 L90 55 L20 75 Z"
            fill="#E8DFCE"
            stroke="#1E1B17"
            strokeWidth="1.5"
          />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <path
              key={i}
              d={`M${22 + i * 6} 72 L${25 + i * 6} 78 L${28 + i * 6} 72`}
              fill="#1E1B17"
            />
          ))}
          <rect x="86" y="35" width="20" height="22" rx="4" fill="#C45A2C" />
        </svg>
      );
    case "level":
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
          <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8" />
          <rect x="15" y="50" width="90" height="22" rx="3" fill="#FF4A00" />
          <rect x="18" y="53" width="84" height="16" rx="2" fill="#FFE1CC" />
          <rect
            x="52"
            y="56"
            width="16"
            height="10"
            rx="2"
            fill="#fff"
            stroke="#1E1B17"
            strokeWidth="1.2"
          />
          <circle cx="60" cy="61" r="2" fill="#2E7D4F" />
        </svg>
      );
    case "camera":
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" fill="none">
          <rect x="10" y="10" width="100" height="100" rx="16" fill="#FFF1E8" />
          <rect x="30" y="45" width="60" height="40" rx="6" fill="#1E1B17" />
          <circle cx="60" cy="65" r="14" fill="#C45A2C" />
          <circle cx="60" cy="65" r="8" fill="#FFF1E8" />
          <rect x="42" y="38" width="16" height="10" rx="3" fill="#1E1B17" />
          <circle cx="80" cy="52" r="3" fill="#FF4A00" />
        </svg>
      );
    default:
      return null;
  }
}
