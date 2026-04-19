const styles: Record<string, { bg: string; color: string; label: string }> = {
  sendt: {
    bg: "var(--color-tm-orange-50)",
    color: "var(--color-tm-orange-600)",
    label: "Sendt",
  },
  godkendt: {
    bg: "var(--color-tm-green-50)",
    color: "var(--color-tm-green)",
    label: "Godkendt",
  },
  kladde: {
    bg: "var(--color-tm-cream-2)",
    color: "var(--color-tm-ink-3)",
    label: "Kladde",
  },
  afvist: {
    bg: "var(--color-tm-red-50)",
    color: "var(--color-tm-red)",
    label: "Afvist",
  },
};

export function StatusBadge({ status }: { status: string }) {
  const s = styles[status] ?? styles.kladde;
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full font-semibold text-[11px]"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}
