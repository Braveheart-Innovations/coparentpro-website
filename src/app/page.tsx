import {
  Hero,
  FeatureGrid,
  HowItWorks,
  TrustSignals,
  PricingCards,
  CTABanner,
} from "@/components/sections";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/metadata";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    offers: [
      {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "USD",
        description: "Monthly subscription",
      },
      {
        "@type": "Offer",
        price: "79.99",
        priceCurrency: "USD",
        description: "Annual subscription",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Braveheart Innovations",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSignals />
      <FeatureGrid />
      <HowItWorks />
      <PricingCards />
      <CTABanner />
    </>
  );
}
