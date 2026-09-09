export const SITE_URL = "https://coparentpro.app";
export const SITE_NAME = "CoParentPro";
export const SITE_TAGLINE =
  "Co-parenting is hard. The conversation doesn’t have to be.";
/** Short page title for search results and link previews (≤60 chars). */
export const SITE_TITLE = "CoParentPro — Calmer co-parent communication";
/** Meta description for search results and link previews (≤155 chars). */
export const SITE_DESCRIPTION =
  "Tone guidance before you hit send, a shared custody calendar, and court-ready records that keep every exchange calm and centered on your kids.";
export const COMPANY_NAME = "Braveheart Innovations";
export const SUPPORT_EMAIL = "support@braveheartinnovations.com";

/**
 * Cloud Functions deployed from the mobile app repo (`../CoParentPro/functions/src/`).
 * `contactForm.ts` emails support; `waitlist.ts` stores launch signups in Firestore.
 */
export const CONTACT_FORM_URL =
  "https://us-central1-coparentpro-52435.cloudfunctions.net/contactForm";

/** Anchor for the download section on the homepage. */
export const DOWNLOAD_HREF = "/#download";

export const APP_STORE_URL = "https://apps.apple.com/us/app/coparentpro/id6759169006";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.braveheartinnovations.coparentpro";

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
