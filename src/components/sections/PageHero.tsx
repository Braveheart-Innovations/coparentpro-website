import Eyebrow, { type Accent } from "@/components/ui/Eyebrow";

type Props = {
  eyebrow: string;
  accent?: Accent;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  /** Max width of the centered copy block. */
  width?: "sm" | "md";
  /** Bottom padding preset. */
  bottom?: "default" | "tight";
};

const WIDTH_CLASSES = { sm: "max-w-[640px]", md: "max-w-[720px]" } as const;

/** Centered page intro on a pale-blue gradient, shared by the secondary pages. */
export default function PageHero({
  eyebrow,
  accent = "secondary",
  title,
  description,
  children,
  width = "md",
  bottom = "default",
}: Props) {
  return (
    <section
      className={`bg-linear-to-b from-primary-light to-paper px-5 pt-16 text-center sm:px-8 sm:pt-[88px] ${
        bottom === "tight" ? "pb-12 sm:pb-16" : "pb-14 sm:pb-[72px]"
      }`}
    >
      <div className={`mx-auto ${WIDTH_CLASSES[width]}`}>
        <Eyebrow accent={accent} className="mb-3.5">
          {eyebrow}
        </Eyebrow>
        <h1 className="font-serif text-[38px] font-medium leading-[1.1] tracking-[-0.015em] text-balance sm:text-[46px] lg:text-[52px]">
          {title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-neutral-700 sm:text-[17.5px]">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
