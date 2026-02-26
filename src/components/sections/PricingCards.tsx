import { Container, Card, Button, Badge } from "@/components/ui";
import { PRICING } from "@/lib/metadata";

const FEATURES = [
  "AI Communication Analysis",
  "Shared Custody Calendar",
  "Secure Messaging with Read Receipts",
  "Court-Ready Report Exports",
  "Expense Tracking & Splitting",
  "Child Info & Contact Sharing",
  "Push Notifications",
  "Unlimited Message History",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-success flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function PricingCards() {
  return (
    <section className="py-20 sm:py-24 bg-neutral-100" id="pricing">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            Start with a {PRICING.trialDays}-day free trial. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Monthly */}
          <Card interactive={false} className="relative border border-neutral-300 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-neutral-900">Monthly</h3>
              <p className="text-neutral-500 text-sm mt-1">Pay as you go</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neutral-900">
                {PRICING.monthly.price}
              </span>
              <span className="text-neutral-500 text-sm">
                /{PRICING.monthly.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/pricing" variant="secondary" className="w-full justify-center">
              Start Free Trial
            </Button>
          </Card>

          {/* Annual */}
          <Card interactive={false} className="relative border-2 border-primary flex flex-col">
            <Badge variant="primary" className="absolute -top-3 left-6">
              Save {PRICING.annual.savings}
            </Badge>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-neutral-900">Annual</h3>
              <p className="text-neutral-500 text-sm mt-1">Best value</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neutral-900">
                {PRICING.annual.price}
              </span>
              <span className="text-neutral-500 text-sm">
                /{PRICING.annual.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/pricing" className="w-full justify-center">
              Start Free Trial
            </Button>
          </Card>
        </div>
      </Container>
    </section>
  );
}
