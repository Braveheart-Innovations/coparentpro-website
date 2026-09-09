"use client";

import { useState } from "react";
import CheckList from "@/components/ui/CheckList";
import StoreBadges from "@/components/ui/StoreBadges";
import { PRICING } from "@/lib/metadata";

type Plan = "monthly" | "annual";

type Props = {
  freeFeatures: readonly string[];
  premiumFeatures: readonly string[];
};

export default function PricingPlans({ freeFeatures, premiumFeatures }: Props) {
  const [plan, setPlan] = useState<Plan>("annual");
  const annual = plan === "annual";

  const toggleBase =
    "rounded-[9px] px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer";
  const toggleActive = "bg-white text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.12)]";
  const toggleIdle = "bg-transparent text-neutral-500 hover:text-neutral-700";

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div
          role="group"
          aria-label="Billing period"
          className="inline-flex gap-1 rounded-xl bg-cloud p-1"
        >
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setPlan("monthly")}
            className={`${toggleBase} ${annual ? toggleIdle : toggleActive}`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setPlan("annual")}
            className={`${toggleBase} ${annual ? toggleActive : toggleIdle}`}
          >
            Annual · save {PRICING.annual.savings}
          </button>
        </div>
      </div>

      <div className="grid items-stretch gap-7 md:grid-cols-2">
        {/* Free */}
        <div className="flex flex-col rounded-[22px] border border-line bg-white p-8 sm:p-10">
          <h2 className="text-xl font-bold">Free</h2>
          <p className="mt-1.5 text-sm text-neutral-500">
            Safe co-parent communication, without a paywall
          </p>
          <p className="mt-6">
            <span className="font-serif text-[52px] font-medium leading-none">$0</span>
            <span className="text-sm text-neutral-500"> per parent / forever</span>
          </p>
          <CheckList items={freeFeatures} className="mt-7 flex-1 gap-3" itemClassName="text-sm" />
          <StoreBadges size="sm" className="mt-[30px] justify-center" />
        </div>

        {/* Premium */}
        <div className="relative flex flex-col rounded-[22px] border-2 border-primary bg-white p-8 shadow-plan sm:p-10">
          <span className="absolute -top-[13px] left-8 rounded-full bg-primary px-3.5 py-[5px] text-[11.5px] font-bold tracking-[0.04em] text-white sm:left-9">
            {PRICING.trialDays}-DAY FREE TRIAL
          </span>
          <h2 className="text-xl font-bold">Premium</h2>
          <p className="mt-1.5 text-sm text-neutral-500">
            Deeper conflict prevention, records, and shared coordination
          </p>
          <p className="mt-6">
            <span className="font-serif text-[52px] font-medium leading-none">
              {annual ? PRICING.annual.price : PRICING.monthly.price}
            </span>
            <span className="text-sm text-neutral-500">
              {" "}
              per parent / {annual ? PRICING.annual.period : PRICING.monthly.period}
            </span>
          </p>
          <p className="mt-2 min-h-[18px] text-[13.5px] font-semibold text-secondary" aria-live="polite">
            {annual
              ? `That’s just ${PRICING.annual.perMonth}/month — save ${PRICING.annual.savings}`
              : ""}
          </p>
          <CheckList items={premiumFeatures} className="mt-[22px] flex-1 gap-3" itemClassName="text-sm" />
          <StoreBadges size="sm" className="mt-[30px] justify-center" />
        </div>
      </div>
    </>
  );
}
