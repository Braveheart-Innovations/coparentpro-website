import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/metadata";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import Container from "@/components/ui/Container";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download", href: "/pricing#download" },
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
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Contact", href: `mailto:${SUPPORT_EMAIL}`, external: true },
      { label: "FAQ", href: "/support#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

const LINK_CLASSES =
  "text-neutral-300 hover:text-white transition-colors duration-200 text-sm leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm";

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        className={LINK_CLASSES}
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={LINK_CLASSES}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-neutral-900 text-white" aria-label="Site footer">
      <Container>
        {/* Main columns grid */}
        <div className="py-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App store badges */}
        <div className="py-8 border-t border-white/10">
          <p className="text-sm text-neutral-500 mb-4">Get the app</p>
          <AppStoreBadges direction="row" />
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} Braveheart Innovations. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 italic">
            Made with care for families everywhere.
          </p>
        </div>
      </Container>
    </footer>
  );
}
