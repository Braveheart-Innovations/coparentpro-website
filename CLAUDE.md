# CLAUDE.md

## Project Overview

This is the **marketing website** for [CoParentPro](https://github.com/Braveheart-Innovations/CoParentPro), a React Native mobile app for co-parent communication. The website is deployed at [coparentpro.app](https://coparentpro.app) (and [coparentpro-52435.web.app](https://coparentpro-52435.web.app)).

### Relationship to the Mobile App

- **Mobile app repo:** `Braveheart-Innovations/CoParentPro` (sibling directory at `../CoParentPro`)
- **Shared Firebase project:** `coparentpro-52435`
- **Shared assets:** Logo files in `public/images/` are copied from the mobile app's `assets/images/`
- **Legal content:** Privacy policy and terms of service are ported from `../CoParentPro/src/assets/legal/` — keep them in sync when either changes
- **Brand colors:** Defined in `src/app/globals.css`, sourced from mobile app's `src/theme/colors.ts`
- **Contact form backend:** The `contactForm` Cloud Function lives in the mobile app repo at `../CoParentPro/functions/src/contactForm.ts` and is deployed from there
- **Pricing:** Must match RevenueCat configuration in the mobile app ($9.99/mo, $79.99/yr)

## Tech Stack

- **Next.js 16** (App Router, `output: 'export'` for static site generation)
- **Tailwind CSS v4** (CSS-first config with brand color custom properties)
- **TypeScript 5.x**
- **MDX** support via `@next/mdx` (available for content pages)
- **Firebase Hosting** (static files from `out/` directory)

**Key constraint:** Static export — no API routes, no server actions, no middleware. The contact form on `/support` calls a Firebase Cloud Function directly.

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

# Deploy to Firebase Hosting (must build first)
npm run build && firebase deploy --only hosting
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, fonts, Header/Footer)
│   ├── page.tsx            # Homepage (Hero, Features, HowItWorks, Pricing, CTA)
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # SEO sitemap (force-static for export)
│   ├── robots.ts           # Crawler rules (force-static for export)
│   ├── features/page.tsx   # Detailed feature breakdown
│   ├── pricing/page.tsx    # Plans, FAQ, download CTA
│   ├── privacy/page.tsx    # Privacy Policy (synced with mobile app)
│   ├── terms/page.tsx      # Terms of Service (synced with mobile app)
│   ├── support/            # Contact form + FAQ (layout.tsx for metadata)
│   └── licenses/page.tsx   # Open source licenses
├── components/
│   ├── layout/             # Header (sticky, mobile menu), Footer (4-column)
│   ├── ui/                 # Button, Card, Badge, Container, AppStoreBadges
│   └── sections/           # Hero, FeatureGrid, PricingCards, HowItWorks, etc.
├── lib/
│   └── metadata.ts         # Shared constants (URLs, pricing, emails)
└── styles/
    └── globals.css         # Tailwind + brand color CSS custom properties
```

## Brand Colors (Tailwind classes)

| Class | Hex | Usage |
|-------|-----|-------|
| `primary` | `#4A6FA5` | CTAs, links, primary actions |
| `primary-light` | `#E8EEF7` | Section backgrounds |
| `primary-dark` | `#2C4B80` | Hover states |
| `secondary` | `#449B9B` | Accents, highlights |
| `tertiary` | `#8A7FB9` | Badges, decorative |
| `neutral-900` | `#1D1D1F` | Body text |
| `neutral-700` | `#555559` | Secondary text |
| `neutral-100` | `#F5F5F5` | Light backgrounds |

## Important Patterns

### Static Export Gotchas
- `sitemap.ts` and `robots.ts` require `export const dynamic = "force-static"`
- Use `<img>` tags instead of Next.js `<Image>` (images are unoptimized in static export)
- Client components (`"use client"`) cannot export `metadata` — use a sibling `layout.tsx` for page metadata instead (see `support/layout.tsx`)

### Content Accuracy
- **Do not make unverifiable claims** (e.g., "join thousands of users" when we don't have thousands yet)
- **Keep tone empathetic, not sales-y** — target audience is stressed parents going through separation
- **Connection requests are in-app** — users search by name/email within the app, not via external email invitations
- **Legal content must stay accurate** and in sync with the mobile app

### Deployment
- Firebase project: `coparentpro-52435`
- Hosting site: default site on that project
- Domain: `coparentpro.app` (Cloudflare DNS)
- Deploy: `npm run build && firebase deploy --only hosting`
- Cloud Functions (contact form) are deployed from the mobile app repo: `cd ../CoParentPro && firebase deploy --only functions:contactForm`

### Contact Form
- Frontend: `src/app/support/page.tsx` (client component)
- Backend: `../CoParentPro/functions/src/contactForm.ts`
- Endpoint: `https://us-central1-coparentpro-52435.cloudfunctions.net/contactForm`
- Email service: Resend API (secret `RESEND_API_KEY` stored in Firebase Secrets Manager)
- Delivers to: `support@braveheartinnovations.com`

## Pre-commit Checklist

```bash
npm run build      # Must succeed (static export to out/)
npm run lint       # Must pass with 0 errors
npm run typecheck  # Must pass with 0 errors
```

## App Store URLs

The `APP_STORE_URL` and `PLAY_STORE_URL` constants in `src/lib/metadata.ts` are currently placeholder `"#"` values. Update them once the app is published to the stores.
