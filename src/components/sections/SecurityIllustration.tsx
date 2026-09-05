const ROWS = [
  "Encrypted in transit and at rest",
  "Server-enforced access rules",
  "Messages locked once sent",
] as const;

/**
 * Stands in for a security illustration on the Features page until a real
 * one exists. Built from the brand palette so it reads as part of the page.
 */
export default function SecurityIllustration() {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/3] w-full max-w-[440px] flex-col items-center justify-center gap-5 rounded-[20px] border border-line-blue bg-linear-to-br from-primary-light via-paper to-tertiary-light p-8"
    >
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-navy text-teal-glow shadow-card">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-9 w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </div>
      <ul className="flex w-full max-w-[300px] flex-col gap-2">
        {ROWS.map((row) => (
          <li
            key={row}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-white/90 px-4 py-2.5 text-[13.5px] font-semibold text-navy"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-light text-xs text-secondary-dark">
              ✓
            </span>
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}
