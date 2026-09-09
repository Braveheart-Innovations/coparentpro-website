import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/metadata";

type Size = "sm" | "md" | "lg";

/**
 * Badge heights. Google's badge ships with built-in padding, so it renders a
 * little taller than Apple's to look the same size.
 */
const SIZE_CLASSES: Record<Size, { apple: string; google: string }> = {
  sm: { apple: "h-[40px]", google: "h-[46px]" },
  md: { apple: "h-[48px]", google: "h-[56px]" },
  lg: { apple: "h-[52px] sm:h-[58px]", google: "h-[60px] sm:h-[68px]" },
};

type Props = {
  size?: Size;
  className?: string;
};

/** App Store and Google Play download badges, side by side. */
export default function StoreBadges({ size = "md", className = "" }: Props) {
  const sizes = SIZE_CLASSES[size];
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
        <img
          src="/images/app-store-badge.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          className={`w-auto ${sizes.apple}`}
        />
      </a>
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
        <img
          src="/images/google-play-badge.png"
          alt="Get it on Google Play"
          width={194}
          height={75}
          className={`w-auto ${sizes.google}`}
        />
      </a>
    </div>
  );
}
