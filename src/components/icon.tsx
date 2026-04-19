import {
  Sparkles,
  Camera,
  Check,
  ArrowRight,
  LayoutGrid,
  Users,
  BarChart3,
  Mail,
  Menu,
  X,
  Home,
  FileText,
  Settings,
  Plus,
  Search,
  Bell,
  Send,
  Download,
  Pencil,
  LogOut,
  Phone,
  MapPin,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const icons: Record<string, React.FC<LucideProps>> = {
  sparkles: Sparkles,
  camera: Camera,
  check: Check,
  "arrow-right": ArrowRight,
  template: LayoutGrid,
  users: Users,
  chart: BarChart3,
  mail: Mail,
  menu: Menu,
  x: X,
  home: Home,
  file: FileText,
  settings: Settings,
  plus: Plus,
  search: Search,
  bell: Bell,
  send: Send,
  download: Download,
  edit: Pencil,
  logout: LogOut,
  phone: Phone,
  "map-pin": MapPin,
  "file-text": FileText,
};

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

export function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.5,
  className,
}: IconProps) {
  /* Logo is custom — not in Lucide */
  if (name === "logo") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#FF4A00" />
        <path
          d="M6 14L10 10L13 13L18 8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="8" r="1.5" fill="#fff" />
      </svg>
    );
  }

  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth
      className={className}
    />
  );
}
