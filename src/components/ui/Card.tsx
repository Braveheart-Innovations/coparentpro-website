import type { HTMLAttributes } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  /**
   * Whether the card should show a hover shadow lift. Defaults to true.
   * Set to false for static cards that should not respond to hover.
   */
  interactive?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export default function Card({
  className = "",
  children,
  interactive = true,
  ...rest
}: Props) {
  const classes = [
    "bg-white rounded-2xl shadow-sm p-6",
    interactive ? "hover:shadow-md transition-shadow duration-200" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
