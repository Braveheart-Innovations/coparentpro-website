"use client";

import { usePathname } from "next/navigation";

/** Launch announcement shown above the header on the homepage only. */
export default function AnnouncementBar() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className="bg-navy px-5 py-2.5 text-center text-[13px] font-medium tracking-[0.02em] text-primary-light">
      Now on Google Play. iPhone version in App Store review —{" "}
      <a
        href="#waitlist"
        className="font-semibold text-teal-glow transition-colors hover:text-white"
      >
        join the waitlist
      </a>{" "}
      to hear first
    </div>
  );
}
