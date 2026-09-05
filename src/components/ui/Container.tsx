import type { HTMLAttributes } from "react";

type Props = {
  className?: string;
  /** Content width. Defaults to the 1200px site grid. */
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

const SIZE_CLASSES: Record<NonNullable<Props["size"]>, string> = {
  xl: "max-w-[1200px]",
  lg: "max-w-[1100px]",
  md: "max-w-[1000px]",
  sm: "max-w-[760px]",
  xs: "max-w-[640px]",
};

export default function Container({
  className = "",
  size = "xl",
  children,
  ...rest
}: Props) {
  const classes = ["mx-auto w-full px-5 sm:px-8", SIZE_CLASSES[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
