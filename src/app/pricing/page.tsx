import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { DarkCTA, PageHero, PricingPlans } from "@/components/sections";
import { PRICING } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Safe co-parent communication is free. Premium is ${PRICING.monthly.price}/month or ${PRICING.annual.price}/year per parent, with a ${PRICING.trialDays}-day free trial.`,
};

const FREE_FEATURES = [
  "Unlimited secure text messaging",
  "Tone check on your phone as you type",
  "Cloud AI review within a daily allowance",
  "Photo sharing in messages",
  "Co-parent connection",
  "Read access to calendar, expenses & files",
  "Respond to expense requests",
] as const;

const PREMIUM_FEATURES = [
  "Everything in Free",
  "Cloud AI explanations on every flagged draft",
  "Softer and More direct rewrites, one tap to use",
  "Insights into your own communication patterns",
  "Court-ready & message exports (SHA-256 verified)",
  "Document attachments in messages",
  "Shared calendar, expenses & files editing for both parents",
  "Family-member invitations",
] as const;

const FAQ = [
  {
    q: "Is there a free trial?",
    a: `Yes. Premium comes with a ${PRICING.trialDays}-day free trial through the App Store or Google Play, offered once you’re connected to your co-parent. You get full Premium access during the trial and can cancel any time before it renews. Trial eligibility is determined by your app store.`,
  },
  {
    q: "Do both parents need to pay?",
    a: "No. When either parent has an active Premium plan, both linked co-parents can edit the shared calendar, expenses, and files. Personal AI features, Insights, exports, attachments, and family invitations belong to the subscribing parent.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel through the App Store or Google Play at any time. You keep access until the end of your current billing period.",
  },
  {
    q: "What happens if my subscription lapses?",
    a: "Messaging and the tone check on your phone stay free. Your existing calendar, expense, and file records remain readable, and you can still pay, approve, or dispute expense requests — you just can’t create new shared records until Premium is active again.",
  },
  {
    q: "Can I switch between monthly and annual?",
    a: "Yes. Change your plan anytime in your app store subscription settings. The change takes effect at your next billing cycle.",
  },
  {
    q: "Is my payment information secure?",
    a: "All payments are processed by the Apple App Store or Google Play. We never see or store your payment details.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Safe communication is free. Everything else is simple."
        description={
          <>
            One Premium plan, priced per parent. Premium starts with a{" "}
            {PRICING.trialDays}-day free trial once you’re connected to your
            co-parent — cancel anytime through the App Store or Google Play.
          </>
        }
        width="sm"
        bottom="tight"
      />

      <section className="pt-6 pb-16 sm:pb-20">
        <Container className="max-w-[1060px]" size="lg">
          <PricingPlans freeFeatures={FREE_FEATURES} premiumFeatures={PREMIUM_FEATURES} />

          <div className="mx-auto mt-9 flex max-w-[720px] items-start gap-4 rounded-2xl border border-line-teal bg-secondary-light px-6 py-[22px] sm:px-7">
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-white text-secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-[19px] w-[19px]"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </span>
            <p className="text-sm leading-[1.65] text-secondary-dark">
              <strong>One subscription helps both of you.</strong> When either
              parent has an active Premium plan (or trial), both linked
              co-parents can edit the shared calendar, expenses, and files
              library. Personal AI features, Insights, exports, attachments, and
              family invitations stay with the subscribing parent.
            </p>
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-20 bg-mist py-20 sm:py-[90px]">
        <Container size="sm">
          <h2 className="mb-11 text-center font-serif text-[32px] font-medium sm:text-[38px]">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-[14px] border border-line bg-white px-6 py-[22px] sm:px-[26px]">
                <h3 className="text-base font-bold">{item.q}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7] text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DarkCTA
        id="download"
        title="Available now on iPhone and Android"
        body="Free to start. Safe messaging costs nothing for either parent, and Premium comes with a free trial."
      />
    </>
  );
}
