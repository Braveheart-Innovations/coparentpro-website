export type Screenshot = {
  src: string;
  alt: string;
};

type Props = Screenshot & {
  /** `hero` is the larger, slightly rotated frame used at the top of the homepage. */
  size?: "default" | "hero";
  className?: string;
  /** Load eagerly for above-the-fold placements. */
  priority?: boolean;
};

// All screenshots are exported at 720×1564 (iPhone 6.9" aspect ratio).
const SHOT_WIDTH = 720;
const SHOT_HEIGHT = 1564;

export default function PhoneFrame({
  src,
  alt,
  size = "default",
  className = "",
  priority = false,
}: Props) {
  const frame =
    size === "hero"
      ? "w-[250px] rounded-[40px] p-[9px] shadow-phone-lg sm:w-[300px] sm:rounded-[46px] sm:p-[10px]"
      : "w-[240px] rounded-[38px] p-2 shadow-phone sm:w-[270px] sm:rounded-[42px] sm:p-[9px]";
  const image =
    size === "hero"
      ? "rounded-[32px] sm:rounded-[37px]"
      : "rounded-[31px] sm:rounded-[34px]";

  return (
    <div className={`shrink-0 bg-neutral-900 ${frame} ${className}`}>
      <img
        src={src}
        alt={alt}
        width={SHOT_WIDTH}
        height={SHOT_HEIGHT}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`block h-auto w-full ${image}`}
      />
    </div>
  );
}
