import type { HTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "tertiary";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary-light text-primary-dark",
  secondary: "bg-secondary-light text-secondary-dark",
  tertiary: "bg-tertiary-light text-tertiary-dark",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLAttributes<HTMLSpanElement>, "className">;

export default function Badge({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  const classes = [
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
