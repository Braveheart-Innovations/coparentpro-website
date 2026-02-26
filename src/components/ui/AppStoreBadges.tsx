import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/metadata";

// Inline SVG for the Apple logo
function AppleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 814 1000"
      aria-hidden="true"
      className="h-6 w-6 flex-shrink-0 fill-white"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-103.4C27.5 724.5 0 643.3 0 566.4c0-169.3 111.8-258.7 221.4-258.7 82.5 0 150.9 54.3 202.2 54.3 49 0 126.4-57.6 220.1-57.6zm-87.6-218.5c39.5-47.8 68.1-114.7 68.1-181.6 0-9.3-.9-18.7-2.5-26.8-63.1 2.5-138.3 42.2-183.5 96.1-35.6 41.3-69.8 107.1-69.8 174.9 0 10.7 2.5 21.3 3.2 24.7 4.5.6 11.3 1.3 18.2 1.3 58 0 130.3-38.3 166.3-88.6z" />
    </svg>
  );
}

// Inline SVG for the Google Play logo (triangular play symbol)
function GooglePlayLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 flex-shrink-0"
    >
      {/* Coloured triangle segments that compose the Play logo */}
      <path d="M3.18 23.76c.27.15.58.23.9.22.4 0 .8-.11 1.14-.32L18.5 16l-3.5-3.5L3.18 23.76z" fill="#EA4335" />
      <path d="M21.54 10.27 18.5 8.5l-3.86 3.5 3.86 3.5 3.05-1.76c.88-.5.88-1.97-.01-2.47z" fill="#FBBC04" />
      <path d="M3.18.26 15 11.5l3.5-3.5L4.22.36A2.05 2.05 0 0 0 3.18.26z" fill="#4285F4" />
      <path d="M3.18.26C2.48.5 2 1.18 2 2.02v19.97c0 .84.48 1.52 1.18 1.77L15 12.5 3.18.26z" fill="#34A853" />
    </svg>
  );
}

type Props = {
  className?: string;
  /**
   * Layout direction of the badges. Defaults to "row".
   * Use "col" for stacked badges in narrow containers.
   */
  direction?: "row" | "col";
};

export default function AppStoreBadges({ className = "", direction = "row" }: Props) {
  const containerClasses = [
    "flex gap-3",
    direction === "col" ? "flex-col" : "flex-row flex-wrap",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const badgeBase =
    "inline-flex items-center gap-3 rounded-xl bg-neutral-900 px-4 py-2.5 text-white transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  return (
    <div className={containerClasses}>
      <a
        href={APP_STORE_URL}
        className={badgeBase}
        aria-label="Download CoParentPro on the App Store"
        rel="noopener noreferrer"
        {...(APP_STORE_URL !== "#" ? { target: "_blank" } : {})}
      >
        <AppleLogo />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-normal tracking-wider text-neutral-300 uppercase">
            Download on the
          </span>
          <span className="text-base font-semibold tracking-tight">App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        className={badgeBase}
        aria-label="Get CoParentPro on Google Play"
        rel="noopener noreferrer"
        {...(PLAY_STORE_URL !== "#" ? { target: "_blank" } : {})}
      >
        <GooglePlayLogo />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-normal tracking-wider text-neutral-300 uppercase">
            Get it on
          </span>
          <span className="text-base font-semibold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}
