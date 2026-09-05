import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import Container from "@/components/ui/Container";
import Eyebrow, { type Accent } from "@/components/ui/Eyebrow";
import PhoneFrame, { type Screenshot } from "@/components/ui/PhoneFrame";

export type FeatureSplitProps = {
  eyebrow: string;
  accent?: Accent;
  title: string;
  description: string;
  details: readonly string[];
  /** Phone screenshot shown beside the copy. */
  shot?: Screenshot;
  /** Custom visual used instead of a screenshot. */
  visual?: React.ReactNode;
  /** Place the visual on the left (desktop only). */
  reverse?: boolean;
  bg?: "paper" | "mist";
  link?: { href: string; label: string };
  /** Vertical padding preset. */
  spacing?: "default" | "tight" | "loose";
  headingLevel?: "h2" | "h3";
};

const BG_CLASSES = {
  paper: "bg-paper",
  mist: "bg-mist",
} as const;

const SPACING_CLASSES = {
  default: "py-16 sm:py-[72px]",
  tight: "py-10 sm:py-[60px]",
  loose: "py-16 sm:py-24",
} as const;

export default function FeatureSplit({
  eyebrow,
  accent = "primary",
  title,
  description,
  details,
  shot,
  visual,
  reverse = false,
  bg = "paper",
  link,
  spacing = "default",
  headingLevel = "h2",
}: FeatureSplitProps) {
  const Heading = headingLevel;

  return (
    <section className={`${BG_CLASSES[bg]} ${SPACING_CLASSES[spacing]}`}>
      <Container size="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className={reverse ? "lg:order-2" : ""}>
            <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
            <Heading className="font-serif text-[28px] font-medium leading-[1.2] text-balance sm:text-[32px] lg:text-[34px]">
              {title}
            </Heading>
            <p className="mt-4 text-base leading-[1.7] text-neutral-700">{description}</p>
            <CheckList items={details} className="mt-5" />
            {link && (
              <p className="mt-5 text-[14.5px]">
                <Link
                  href={link.href}
                  className="font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  {link.label}
                </Link>
              </p>
            )}
          </div>
          <div className={`flex justify-center ${reverse ? "lg:order-1" : ""}`}>
            {visual ?? (shot && <PhoneFrame src={shot.src} alt={shot.alt} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
