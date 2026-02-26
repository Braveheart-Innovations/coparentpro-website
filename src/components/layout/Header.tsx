"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/metadata";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        /* X / close icon */
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        /* Three-line hamburger icon */
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-300">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label={`${SITE_NAME} — go to home`}
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static export uses unoptimized images */}
            <img
              src="/images/logo-words.png"
              alt={`${SITE_NAME} logo`}
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-8 list-none m-0 p-0">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-neutral-700 hover:text-primary transition-colors duration-200 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button href="/pricing#download" size="sm">
              Download
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-neutral-700 hover:text-primary hover:bg-neutral-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <HamburgerIcon open={mobileMenuOpen} />
          </button>
        </div>
      </Container>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={[
          "md:hidden overflow-hidden border-t border-neutral-300 bg-white transition-all duration-200",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <Container>
          <nav aria-label="Mobile primary navigation">
            <ul className="flex flex-col list-none m-0 p-0 py-4 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2.5 text-neutral-700 hover:text-primary hover:bg-neutral-100 rounded-lg transition-colors duration-200 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li className="pt-3 border-t border-neutral-300 mt-2">
                <Link
                  href="/pricing#download"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-primary text-white hover:bg-primary-dark font-medium rounded-lg px-6 py-3 transition-colors duration-200"
                >
                  Download
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
