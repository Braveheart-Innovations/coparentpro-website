export type Accent = "primary" | "secondary" | "tertiary" | "glow" | "muted";

const ACCENT_CLASSES: Record<Accent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  glow: "text-teal-glow",
  muted: "text-neutral-500",
};

type Props = {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
};

/** Small uppercase label that sits above a section heading. */
export default function Eyebrow({
  children,
  accent = "secondary",
  className = "",
}: Props) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.1em] ${ACCENT_CLASSES[accent]} ${className}`}
    >
      {children}
    </p>
  );
}
