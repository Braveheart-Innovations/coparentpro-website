import type { Metadata } from "next";
import { Container, Card, Button, Badge, AppStoreBadges } from "@/components/ui";
import { PRICING } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CoParentPro pricing: $9.99/month or $79.99/year (save 33%). Start with a free 7-day trial. Cancel anytime.",
};

const FEATURES = [
  "AI Communication Analysis",
  "Shared Custody Calendar",
  "Secure Messaging with Read Receipts",
  "Court-Ready Report Exports",
  "Expense Tracking & Splitting",
  "Child Info & Contact Sharing",
  "Push Notifications",
  "Unlimited Message History",
  "Data Export",
  "Priority Support",
];

const FAQ = [
  {
    q: "Is there a free trial?",
    a: `Yes! Every new account gets a ${PRICING.trialDays}-day free trial with full access to all features. No credit card required to start.`,
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. You can cancel your subscription at any time through the App Store or Google Play. You'll continue to have access until the end of your current billing period.",
  },
  {
    q: "Do both parents need a subscription?",
    a: "Each parent needs their own account. Both parents can start with the free trial to see if CoParentPro is right for their family.",
  },
  {
    q: "What happens when my subscription expires?",
    a: "You'll retain read-only access to your message history and calendar. To send new messages or use analysis features, you'll need an active subscription.",
  },
  {
    q: "Can I switch between monthly and annual plans?",
    a: "Yes. You can change your plan at any time through your app store subscription settings. The change takes effect at the start of your next billing cycle.",
  },
  {
    q: "Is my payment information secure?",
    a: "All payments are processed through the Apple App Store or Google Play Store. We never see or store your payment details.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-success flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-16 sm:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              One plan with everything you need. Start free, upgrade when
              you&apos;re ready.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Monthly */}
            <Card interactive={false} className="relative border border-neutral-300 flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Monthly</h2>
                <p className="text-neutral-500 text-sm mt-1">Flexible, pay as you go</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-neutral-900">
                  {PRICING.monthly.price}
                </span>
                <span className="text-neutral-500 text-base ml-1">
                  /{PRICING.monthly.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="#download" variant="secondary" className="w-full justify-center">
                Start Free Trial
              </Button>
            </Card>

            {/* Annual */}
            <Card interactive={false} className="relative border-2 border-primary flex flex-col">
              <Badge variant="primary" className="absolute -top-3 left-6">
                Save {PRICING.annual.savings}
              </Badge>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Annual</h2>
                <p className="text-neutral-500 text-sm mt-1">Best value for long-term use</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-neutral-900">
                  {PRICING.annual.price}
                </span>
                <span className="text-neutral-500 text-base ml-1">
                  /{PRICING.annual.period}
                </span>
                <p className="text-sm text-primary font-medium mt-2">
                  That&apos;s just $6.67/month
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="#download" className="w-full justify-center">
                Start Free Trial
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-neutral-100" id="faq">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <div key={item.q} className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {item.q}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Download CTA */}
      <section className="py-16 sm:py-20 bg-primary" id="download">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Download CoParentPro
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Available on iOS and Android. Start your {PRICING.trialDays}-day
              free trial today.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreBadges direction="row" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
