import Link from "next/link";
import { SITE_NAME } from "@/lib/metadata";

type Props = {
  /** `dark` renders the wordmark in white for navy backgrounds. */
  tone?: "light" | "dark";
  onClick?: () => void;
};

export default function Logo({ tone = "light", onClick }: Props) {
  const wordmark = tone === "dark" ? "text-white" : "text-navy";
  const accent = tone === "dark" ? "text-teal-glow" : "text-secondary";

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${SITE_NAME} — home`}
      className="flex shrink-0 items-center gap-[11px] rounded-lg"
    >
      <img
        src="/images/logo-mark.webp"
        alt=""
        width={38}
        height={38}
        className="h-[38px] w-[38px] rounded-[10px] object-cover"
      />
      <span className={`text-[19px] font-bold tracking-[-0.01em] ${wordmark}`}>
        CoParent<span className={accent}>Pro</span>
      </span>
    </Link>
  );
}
