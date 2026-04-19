import { Camera, PenLine, Wand2, Hammer, Ruler } from "lucide-react";
import type { LucideProps } from "lucide-react";

type IllustrationProps = {
  name: "camera" | "pencil" | "wand" | "hammer" | "level" | "ruler";
  size?: number;
};

const config: Record<
  IllustrationProps["name"],
  { icon: React.FC<LucideProps> }
> = {
  camera: { icon: Camera },
  pencil: { icon: PenLine },
  wand: { icon: Wand2 },
  hammer: { icon: Hammer },
  level: { icon: Ruler },
  ruler: { icon: Ruler },
};

export function Illustration({ name, size = 120 }: IllustrationProps) {
  const { icon: LucideIcon } = config[name];
  const iconSize = Math.round(size * 0.4);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: "#fffefb",
        border: "1px solid #c5c0b1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LucideIcon size={iconSize} color="#201515" strokeWidth={1.2} />
    </div>
  );
}
