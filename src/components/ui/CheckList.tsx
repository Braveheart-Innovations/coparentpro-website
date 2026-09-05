type Props = {
  items: readonly string[];
  /** Color of the check mark. */
  accent?: "secondary" | "primary" | "tertiary";
  /** Use "cross" for "never sent" style lists. */
  mark?: "check" | "cross";
  className?: string;
  itemClassName?: string;
};

const ACCENT_CLASSES = {
  secondary: "text-secondary",
  primary: "text-primary",
  tertiary: "text-tertiary",
} as const;

export default function CheckList({
  items,
  accent = "secondary",
  mark = "check",
  className = "",
  itemClassName = "",
}: Props) {
  const glyph = mark === "check" ? "✓" : "✕";
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 text-[14.5px] leading-normal text-neutral-700 ${itemClassName}`}
        >
          <span className={`font-bold ${ACCENT_CLASSES[accent]}`} aria-hidden="true">
            {glyph}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
