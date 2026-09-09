"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DOWNLOAD_HREF, NAV_LINKS } from "@/lib/metadata";
import Logo from "./Logo";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[68px] items-center justify-between">
          <Logo onClick={close} />

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`text-sm transition-colors ${
                  isActive(href)
                    ? "font-semibold text-primary"
                    : "font-medium text-neutral-700 hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
            <Button href={DOWNLOAD_HREF} size="sm">
              Get the app
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-cloud hover:text-primary md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-200 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                aria-current={isActive(href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-cloud ${
                  isActive(href)
                    ? "font-semibold text-primary"
                    : "font-medium text-neutral-700"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="mt-3 border-t border-line pt-4">
              <Button href={DOWNLOAD_HREF} onClick={close} className="w-full">
                Get the app
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
