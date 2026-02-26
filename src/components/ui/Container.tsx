import type { HTMLAttributes } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export default function Container({ className = "", children, ...rest }: Props) {
  const classes = ["max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
