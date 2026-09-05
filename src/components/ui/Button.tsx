import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "teal" | "outline" | "outline-light";
type Size = "sm" | "md";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  teal: "bg-secondary text-white hover:bg-secondary-dark",
  outline:
    "border-[1.5px] border-primary text-primary hover:bg-primary-light bg-transparent",
  "outline-light":
    "border-[1.5px] border-white/35 text-white hover:bg-white/10 bg-transparent",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm rounded-[10px]",
  md: "px-7 py-3.5 text-[15px] rounded-xl",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

type Props = LinkProps | NativeButtonProps;

function isInternal(href: string) {
  return href.startsWith("/");
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  const classes = [BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as LinkProps;
    if (isInternal(href)) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as NativeButtonProps;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
