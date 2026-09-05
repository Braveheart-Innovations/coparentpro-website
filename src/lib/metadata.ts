export const SITE_URL = "https://coparentpro.app";
export const SITE_NAME = "CoParentPro";
export const SITE_TAGLINE =
  "Co-parenting is hard. The conversation doesn’t have to be.";
export const SITE_DESCRIPTION =
  "CoParentPro helps co-parents keep every exchange calm, documented, and centered on their kids — with tone guidance before you hit send, a shared custody calendar, and court-ready records. Coming soon to iOS and Android.";
export const COMPANY_NAME = "Braveheart Innovations";
export const SUPPORT_EMAIL = "support@braveheartinnovations.com";

/**
 * Cloud Functions deployed from the mobile app repo (`../CoParentPro/functions/src/`).
 * `contactForm.ts` emails support; `waitlist.ts` stores launch signups in Firestore.
 */
export const CONTACT_FORM_URL =
  "https://us-central1-coparentpro-52435.cloudfunctions.net/contactForm";
export const WAITLIST_URL =
  "https://us-central1-coparentpro-52435.cloudfunctions.net/waitlist";

/** Anchor for the hero waitlist form on the homepage. */
export const WAITLIST_HREF = "/#waitlist";

export const APP_STORE_URL = "#"; // TODO: Replace with actual App Store URL once published
export const PLAY_STORE_URL = "#"; // TODO: Replace with actual Play Store URL once published

/** Must match the RevenueCat configuration in the mobile app. */
export const PRICING = {
  monthly: {
    price: "$9.99",
    period: "month",
  },
  annual: {
    price: "$79.99",
    period: "year",
    perMonth: "$6.67",
    savings: "33%",
  },
  trialDays: 14,
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
] as const;
