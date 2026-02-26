import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark border-2 border-transparent",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary-light active:bg-primary-light bg-transparent",
  ghost:
    "text-primary hover:bg-primary-light active:bg-primary-light bg-transparent border-2 border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-6 py-3 text-base font-medium",
  lg: "px-8 py-4 text-lg font-semibold",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

type LinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = {
  href?: undefined;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = LinkProps | ButtonProps;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as LinkProps;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
