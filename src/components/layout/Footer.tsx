import Link from "next/link";
import Container from "@/components/ui/Container";
import { COMPANY_NAME, PLAY_STORE_URL, SUPPORT_EMAIL, WAITLIST_HREF } from "@/lib/metadata";
import Logo from "./Logo";

type FooterLink = { label: string; href: string };
type FooterColumn = { heading: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Get it on Google Play", href: PLAY_STORE_URL },
      { label: "iPhone waitlist", href: WAITLIST_HREF },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "FAQ", href: "/support#faq" },
      { label: "Delete your account", href: "/delete-account" },
      { label: "Contact", href: `mailto:${SUPPORT_EMAIL}` },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Licenses", href: "/licenses" },
    ],
  },
];

const LINK_CLASSES = "text-sm text-white/75 transition-colors hover:text-white";

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={LINK_CLASSES}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={LINK_CLASSES}>
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-10 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="dark" />
            <p className="mt-4 max-w-[280px] text-[13.5px] leading-relaxed text-white/60">
              Communicate better, co-parent smarter. Available now on Google
              Play; coming soon to iPhone.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-white/50">
                {column.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-7">
          <p className="text-[13px] text-white/45">
            &copy; 2026 {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-[13px] italic text-white/45">
            Made with care for families everywhere.
          </p>
        </div>
      </Container>
    </footer>
  );
}
