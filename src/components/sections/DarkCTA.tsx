import Button from "@/components/ui/Button";
import { WAITLIST_HREF } from "@/lib/metadata";

type Props = {
  title: string;
  body: React.ReactNode;
  /** Optional second, outlined button. */
  secondary?: { href: string; label: string };
  primaryLabel?: string;
  primaryHref?: string;
  id?: string;
};

/** Navy closing call-to-action used at the bottom of the secondary pages. */
export default function DarkCTA({
  title,
  body,
  secondary,
  primaryLabel = "Join the waitlist",
  primaryHref = WAITLIST_HREF,
  id,
}: Props) {
  return (
    <section id={id} className="bg-navy px-5 py-20 text-center sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[640px]">
        <h2 className="font-serif text-[32px] font-medium leading-[1.15] text-balance text-white sm:text-[40px]">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/72">{body}</p>
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
          <Button href={primaryHref} variant="teal">
            {primaryLabel}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="outline-light">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
