# CLAUDE.md

## Project Overview

This is the **marketing website** for [CoParentPro](https://github.com/Braveheart-Innovations/CoParentPro), a React Native mobile app for co-parent communication. The website is deployed at [coparentpro.app](https://coparentpro.app) (and [coparentpro-52435.web.app](https://coparentpro-52435.web.app)).

The current design was iterated in Claude Design (project `bff99fe8-6747-4d18-a774-3defc3b838ce`: `Home.dc.html`, `Features.dc.html`, `HowItWorks.dc.html`, `Pricing.dc.html`, `Support.dc.html`) and ported to Next.js in September 2026, ahead of the app's launch. The site is currently in **pre-launch / waitlist mode**.

### Relationship to the Mobile App

- **Mobile app repo:** `Braveheart-Innovations/CoParentPro` (sibling directory at `../CoParentPro`)
- **Shared Firebase project:** `coparentpro-52435`
- **Logo:** `public/images/logo.png` / `logo-words.png` are copies of the mobile app's `assets/images/CoParentProLogo-*.png`. `logo-mark.webp` (square center crop), `logo-wide.webp`, and `og-image.png` are derived from them with ImageMagick.
- **Screenshots:** `public/images/shots/*.webp` are the App Store screenshots from `../CoParentPro/screenshots/store/ios-iphone-6.9/`, resized to 720px wide with `cwebp -q 84 -resize 720 0`. Regenerate from there when the app UI changes.
- **Legal content:** Privacy policy and terms of service are ported from `../CoParentPro/src/assets/legal/` — keep them in sync when either changes
- **Brand colors:** Defined in `src/app/globals.css`, sourced from mobile app's `src/theme/colors.ts`
- **Contact form backend:** The `contactForm` Cloud Function lives in the mobile app repo at `../CoParentPro/functions/src/contactForm.ts` and is deployed from there
- **Pricing:** Must match RevenueCat configuration in the mobile app ($9.99/mo, $79.99/yr, 14-day trial) — see `PRICING` in `src/lib/metadata.ts`
- **Tone-engine numbers:** `src/lib/content/how-it-works.ts` quotes specifics about the app's tone analysis (pattern counts, thresholds, allowances, test-set sizes). They describe the app as of September 5, 2026; update them when the engine changes.

## Tech Stack

- **Next.js 16** (App Router, `output: 'export'` for static site generation)
- **Tailwind CSS v4** (CSS-first config; all design tokens live in the `@theme` block of `globals.css`)
- **TypeScript 5.x**
- **Fonts:** Newsreader (serif, display headings — `font-serif`) and Public Sans (body — `font-sans`) via `next/font/google`
- **MDX** support via `@next/mdx` (available for content pages)
- **Firebase Hosting** (static files from `out/` directory)

**Key constraint:** Static export — no API routes, no server actions, no middleware. Forms call the Firebase Cloud Function directly.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build static site (outputs to out/)
npm run build

# Run linting
npm run lint

# Type checking
npm run typecheck

# Preview the built site with production hosting rules (clean URLs, redirects)
firebase serve --only hosting --port 5050

# Deploy to Firebase Hosting (must build first)
npm run build && firebase deploy --only hosting
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (fonts, metadata, AnnouncementBar/Header/Footer)
│   ├── globals.css           # Tailwind @theme tokens (colors, fonts, shadows) + base styles
│   ├── page.tsx              # Homepage (hero + waitlist, trust strip, feature splits,
│   │                         #   getting started, compare table, pricing preview, about, CTA)
│   ├── features/page.tsx     # Feature deep-dive + "Where your words go" explainer
│   ├── how-it-works/page.tsx # Long-form page on the tone guidance (data in lib/content)
│   ├── pricing/page.tsx      # Plans (monthly/annual toggle), FAQ, CTA
│   ├── support/page.tsx      # FAQ accordion + contact form
│   ├── privacy/, terms/, licenses/   # Legal pages (synced with mobile app)
│   ├── not-found.tsx, sitemap.ts, robots.ts
├── components/
│   ├── layout/               # AnnouncementBar (home only), Header (sticky, mobile menu), Footer, Logo
│   ├── ui/                   # Button, Container, Eyebrow, PhoneFrame, CheckList
│   └── sections/             # WaitlistForm, FeatureSplit, PageHero, DarkCTA, PricingPlans,
│                             #   FAQAccordion, ContactForm, SecurityIllustration
├── lib/
│   ├── metadata.ts           # Site constants (URLs, pricing, nav links, contact endpoint)
│   └── content/how-it-works.ts   # Copy + data tables for /how-it-works
public/images/
├── logo*.{png,webp}, og-image.png
└── shots/*.webp              # App screenshots (see "Relationship to the Mobile App")
```

## Brand Colors (Tailwind classes)

| Class | Hex | Usage |
|-------|-----|-------|
| `primary` | `#4A6FA5` | CTAs, links, primary actions |
| `primary-light` | `#E8EEF7` | Hero gradient, tints |
| `primary-dark` | `#2C4B80` | Hover states |
| `secondary` | `#449B9B` | Eyebrows, check marks, teal buttons |
| `secondary-light` / `secondary-dark` | `#E5F3F3` / `#2A7575` | Teal tints and text |
| `tertiary` | `#8A7FB9` | Lavender accents (Finance, Private Mode) |
| `navy` | `#1A2A47` | Dark sections, wordmark |
| `navy-deep` | `#12203A` | Footer |
| `teal-glow` | `#7FC9C9` | Accent text on navy |
| `paper` | `#FDFDFC` | Page background |
| `mist` | `#F5F7FA` | Alternating section background |
| `line` | `#ECECEA` | Borders |
| `neutral-900` | `#1D1D1F` | Body text |
| `neutral-700` | `#555559` | Secondary text |
| `neutral-500` | `#8E8E93` | Muted text |

The full token list (including `flag-red`, `amber`, border tints, and shadows) is in `src/app/globals.css`.

## Important Patterns

### Static Export Gotchas
- `sitemap.ts` and `robots.ts` require `export const dynamic = "force-static"`
- Use `<img>` tags instead of Next.js `<Image>` (the `@next/next/no-img-element` rule is disabled in `eslint.config.mjs`)
- Client components (`"use client"`) cannot export `metadata` — keep pages as server components and isolate interactivity in `components/sections/*` (see `support/page.tsx`)
- `usePathname` is used in `AnnouncementBar` and `Header` for the home-only banner and active nav state

### Content Accuracy
- **Do not make unverifiable claims** (e.g., "join thousands of users" when we don't have thousands yet)
- **Keep tone empathetic, not sales-y** — target audience is stressed parents going through separation
- **Connection requests are in-app** — users search by email within the app, not via external email invitations
- **Legal content must stay accurate** and in sync with the mobile app
- **Competitor quotes** on `/how-it-works` are dated (September 5, 2026); re-verify before changing them

### Waitlist (pre-launch)
- `WaitlistForm` posts to the same `contactForm` Cloud Function as the support form, with subject `Waitlist signup`, so each signup lands in the support inbox. Rate limits on that function apply (3/hour per email, 10/hour per IP).
- A successful signup is remembered in `localStorage` (`cpp_waitlist_joined`) and both forms on the homepage sync via a `cpp:waitlist-joined` window event.
- **Upgrade path:** a dedicated `waitlist` Cloud Function (or Firestore collection) in the mobile repo; only `CONTACT_FORM_URL`/the payload in `WaitlistForm.tsx` needs to change.
- **At launch:** replace waitlist CTAs with store badges, set `APP_STORE_URL`/`PLAY_STORE_URL` in `src/lib/metadata.ts`, remove `AnnouncementBar`, and update the "Coming soon" / "in final review" copy on Home, Pricing, Support FAQ, and the footer.

### Deployment
- Firebase project: `coparentpro-52435`
- Hosting site: default site on that project
- Domain: `coparentpro.app` (Cloudflare DNS)
- Deploy: `npm run build && firebase deploy --only hosting`
- Cloud Functions (contact form) are deployed from the mobile app repo: `cd ../CoParentPro && firebase deploy --only functions:contactForm`

### Contact Form
- Frontend: `src/components/sections/ContactForm.tsx` (used by `src/app/support/page.tsx`)
- Backend: `../CoParentPro/functions/src/contactForm.ts`
- Endpoint: `CONTACT_FORM_URL` in `src/lib/metadata.ts` (`https://us-central1-coparentpro-52435.cloudfunctions.net/contactForm`)
- CORS allows only the production origins (and `localhost:3000` under the emulator)
- Email service: Resend API (secret `RESEND_API_KEY` stored in Firebase Secrets Manager)
- Delivers to: `support@braveheartinnovations.com`

## Pre-commit Checklist

```bash
npm run build      # Must succeed (static export to out/)
npm run lint       # Must pass with 0 errors
npm run typecheck  # Must pass with 0 errors
```

## App Store URLs

The `APP_STORE_URL` and `PLAY_STORE_URL` constants in `src/lib/metadata.ts` are placeholder `"#"` values. Update them once the app is published to the stores.
