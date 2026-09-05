import Link from "next/link";
import { Button, CheckList, Container, Eyebrow, PhoneFrame } from "@/components/ui";
import { FeatureSplit, WaitlistForm } from "@/components/sections";
import { COMPANY_NAME, PRICING } from "@/lib/metadata";

const TRUST = [
  {
    title: "Encrypted & secure",
    body: "Encrypted in transit and at rest; access rules enforced on the server",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",
  },
  {
    title: "Court-ready records",
    body: "Immutable messages and SHA-256 verified exports",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
  },
  {
    title: "Tone guidance",
    body: "A check on your phone as you type; cloud AI review when you send",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
  },
  {
    title: "Free to start",
    body: "Unlimited secure messaging on the free plan",
    icon: "M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Create your account",
    body: "Sign up in seconds with your email, Google, or Apple account. Set up your profile and family details.",
  },
  {
    n: "02",
    title: "Connect with your co-parent",
    body: "Search for your co-parent securely within the app and send a connection request. Once they accept, you share a private channel.",
  },
  {
    n: "03",
    title: "Communicate with confidence",
    body: "Send messages with real-time tone guidance, manage the shared calendar, and track expenses — all in one place.",
  },
] as const;

const COMPARE_ROWS = [
  { label: "Secure messaging", us: "Free, unlimited", them: "Paid plans only" },
  { label: "Tone guidance before sending", us: "Included on every plan", them: "Rare or add-on" },
  { label: "Court-ready exports", us: "SHA-256 verified", them: "Often extra fee" },
  { label: "Price per parent", us: `$0 – ${PRICING.monthly.price}/mo`, them: "Typically $10–$25/mo" },
  { label: "Free trial", us: `${PRICING.trialDays} days of Premium`, them: "Varies" },
] as const;

const FREE_FEATURES = [
  "Unlimited secure messaging",
  "Tone check on your phone as you type",
  "Co-parent connection",
  "Photo sharing in messages",
  "Read access to shared records",
] as const;

const PREMIUM_FEATURES = [
  "Cloud AI explanations & rewrites on every flagged draft",
  "Court-ready report exports",
  "Shared calendar, expenses & files for both parents",
  "Insights into your own patterns",
  "Document attachments & family invitations",
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-linear-to-b from-primary-light to-paper to-85%">
        <Container>
          <div className="grid items-center gap-10 pt-16 sm:pt-[88px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-[560px] lg:pb-[88px]">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-secondary-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-secondary-dark">
                <span className="h-[7px] w-[7px] rounded-full bg-secondary" aria-hidden="true" />
                Coming soon · Free to start
              </div>
              <h1 className="font-serif text-[36px] font-medium leading-[1.08] tracking-[-0.015em] sm:text-[50px] lg:text-[58px]">
                Co-parenting is hard.
                <br />
                The <em className="text-primary">conversation</em>
                <br />
                doesn’t have to be.
              </h1>
              <p className="mt-6 text-[17px] leading-[1.65] text-neutral-700 sm:text-lg">
                CoParentPro helps you keep every exchange calm, documented, and
                centered on your kids — with tone guidance before you hit send, a
                shared custody calendar, and court-ready records when you need
                them.
              </p>
              <div id="waitlist" className="mt-9 scroll-mt-28">
                <WaitlistForm note="Free to start when we launch. No spam — one email, that’s it." />
              </div>
            </div>
            <div className="flex h-[380px] items-start justify-center overflow-hidden sm:h-[520px] lg:h-[640px] lg:items-end lg:overflow-visible">
              <PhoneFrame
                size="hero"
                src="/images/shots/01-messages-light.webp"
                alt="CoParentPro messages screen with tone guidance"
                className="rotate-2"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-y border-line bg-white">
        <Container>
          <ul className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-9">
            {TRUST.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-primary-light text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="mt-[3px] text-[12.5px] leading-normal text-neutral-500">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why CoParentPro */}
      <section className="px-5 pt-20 pb-6 sm:px-8 sm:pt-[110px] sm:pb-10">
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow className="mb-3.5">Why CoParentPro</Eyebrow>
          <h2 className="font-serif text-[34px] font-medium leading-[1.15] tracking-[-0.01em] text-balance sm:text-[42px]">
            Everything you need, nothing that adds friction
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-neutral-700">
            Tools designed to reduce conflict, improve communication, and keep
            your children at the center of every decision.
          </p>
        </div>
      </section>

      <FeatureSplit
        headingLevel="h3"
        spacing="tight"
        eyebrow="Communication"
        accent="primary"
        title="A second opinion before you hit send"
        description="As you type, a check on your phone reads the tone of your draft. Green means constructive, yellow suggests caution, red flags language that could escalate. When you tap Send or Review, our cloud AI explains the flagged phrases and offers two rewrites — or switch on Private Mode and keep the analysis on your phone."
        details={[
          "Live tone check on your phone as you type, even offline",
          "Softer and More direct rewrites when a draft runs hot",
          "Private Mode keeps analysis on your phone; strong warnings still appear",
          "Insights into your own patterns over time",
        ]}
        link={{ href: "/how-it-works", label: "See how the tone guidance works, and why" }}
        shot={{ src: "/images/shots/02-review-sheet-dark.webp", alt: "AI message review sheet" }}
      />

      <FeatureSplit
        headingLevel="h3"
        spacing="tight"
        reverse
        eyebrow="Scheduling"
        accent="secondary"
        title="One calendar both parents can trust"
        description="Custody patterns, handoff times and places, school events, and activities — visible to both of you, always in sync. Request a schedule change in the app instead of arguing about it over text."
        details={[
          "Visual custody schedule with parent color coding",
          "Handoff time and location management",
          "Schedule-change requests with a clear record",
        ]}
        shot={{ src: "/images/shots/03-calendar-light.webp", alt: "Shared custody calendar" }}
      />

      <FeatureSplit
        headingLevel="h3"
        spacing="tight"
        eyebrow="Finances"
        accent="tertiary"
        title="Split expenses without the awkward math"
        description="Log child-related costs, attach receipts, request reimbursements, and keep a transparent financial history you can both review — with a printable record for every expense."
        details={[
          "Categorized expenses with receipt photos",
          "Reimbursement requests, changes, and disputes with a reason attached",
          "A running balance that shows who owes whom",
        ]}
        shot={{ src: "/images/shots/05-expenses-light.webp", alt: "Expense tracking" }}
      />

      <FeatureSplit
        headingLevel="h3"
        spacing="loose"
        reverse
        eyebrow="Documentation"
        accent="primary"
        title="Records built for family court"
        description="Every message is timestamped, securely stored, and locked the moment it is sent, with read receipts and delivery status. Export professional, court-ready reports with SHA-256 integrity verification — so the record can be checked, not just claimed."
        details={[
          "Messages can’t be edited or deleted once sent",
          "SHA-256 hash and verification code on court exports",
          "A shared files library for court orders & documents",
        ]}
        shot={{ src: "/images/shots/06-files-dark.webp", alt: "Shared files and records" }}
      />

      {/* Getting started */}
      <section className="bg-navy py-20 text-white sm:py-[100px]">
        <Container size="lg">
          <div className="mb-12 max-w-[620px] sm:mb-14">
            <Eyebrow accent="glow" className="mb-3.5">
              Getting started
            </Eyebrow>
            <h2 className="font-serif text-[32px] font-medium leading-[1.15] text-balance sm:text-[40px]">
              From download to your first calmer conversation in minutes
            </h2>
          </div>
          <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
            {STEPS.map((step) => (
              <li key={step.n} className="border-t border-white/18 pt-6">
                <p className="font-serif text-[30px] leading-none text-teal-glow">{step.n}</p>
                <h3 className="mt-3 text-[17px] font-bold">{step.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-white/72">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Compare */}
      <section className="py-20 sm:py-[110px]">
        <Container size="md">
          <div className="mb-12 text-center">
            <Eyebrow className="mb-3.5">Compare</Eyebrow>
            <h2 className="font-serif text-[32px] font-medium leading-[1.15] text-balance sm:text-[40px]">
              Built differently than the apps you’ve heard of
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-base leading-[1.65] text-neutral-700">
              Most co-parenting apps charge both parents before you can send a
              message. CoParentPro makes safe communication free — and sells the
              extras, not the essentials.
            </p>
          </div>
          <div className="overflow-hidden rounded-[18px] border border-line bg-white">
            <table className="w-full table-fixed border-collapse text-[13px] sm:text-sm">
              <thead className="bg-mist text-[13px] font-bold text-neutral-700">
                <tr>
                  <th scope="col" className="w-[38%] px-4 py-4 sm:w-[44%] sm:px-6">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="px-2 py-4 text-center text-primary sm:px-3">
                    CoParentPro
                  </th>
                  <th scope="col" className="px-2 py-4 text-center sm:px-3">
                    Typical co-parenting apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <th scope="row" className="px-4 py-4 text-left font-semibold sm:px-6">
                      {row.label}
                    </th>
                    <td className="px-2 py-4 text-center font-semibold text-secondary-dark sm:px-3">
                      {row.us}
                    </td>
                    <td className="px-2 py-4 text-center text-neutral-500 sm:px-3">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3.5 text-center text-xs leading-relaxed text-neutral-500">
            General comparison with common paid co-parenting communication apps;
            specific features and prices vary by provider. For a detailed, quoted
            comparison of tone features, see{" "}
            <Link href="/how-it-works#compare" className="text-primary hover:text-primary-dark">
              How it works
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Pricing preview */}
      <section className="bg-mist py-20 sm:py-[110px]">
        <Container size="md">
          <div className="mb-12 text-center sm:mb-14">
            <Eyebrow className="mb-3.5">Pricing</Eyebrow>
            <h2 className="font-serif text-[32px] font-medium leading-[1.15] text-balance sm:text-[40px]">
              Free to communicate. Premium when you want more.
            </h2>
            <p className="mt-4 text-base text-neutral-700">
              Premium comes with a {PRICING.trialDays}-day free trial once you’re
              connected to your co-parent. Cancel anytime through the App Store or
              Google Play.
            </p>
          </div>
          <div className="grid items-stretch gap-7 md:grid-cols-2">
            <div className="flex flex-col rounded-[20px] border border-line bg-white p-7 sm:p-9">
              <h3 className="text-[19px] font-bold">Free</h3>
              <p className="mt-1.5 text-sm text-neutral-500">Safe communication, always</p>
              <p className="mt-[22px]">
                <span className="font-serif text-[46px] font-medium leading-none">$0</span>
                <span className="text-sm text-neutral-500"> / forever</span>
              </p>
              <CheckList items={FREE_FEATURES} className="mt-6 flex-1 gap-[11px]" itemClassName="text-sm" />
              <Button href="/pricing" variant="outline" className="mt-7 w-full">
                See what’s included
              </Button>
            </div>
            <div className="relative flex flex-col rounded-[20px] border-2 border-primary bg-white p-7 shadow-plan sm:p-9">
              <span className="absolute -top-[13px] left-7 rounded-full bg-primary px-3.5 py-[5px] text-[11.5px] font-bold tracking-[0.04em] text-white sm:left-8">
                {PRICING.trialDays}-DAY FREE TRIAL
              </span>
              <h3 className="text-[19px] font-bold">Premium</h3>
              <p className="mt-1.5 text-sm text-neutral-500">
                Deeper conflict prevention & shared coordination
              </p>
              <p className="mt-[22px]">
                <span className="font-serif text-[46px] font-medium leading-none">
                  {PRICING.monthly.price}
                </span>
                <span className="text-sm text-neutral-500">
                  {" "}
                  / month · or {PRICING.annual.price}/yr (~{PRICING.annual.perMonth}/mo)
                </span>
              </p>
              <CheckList items={PREMIUM_FEATURES} className="mt-6 flex-1 gap-[11px]" itemClassName="text-sm" />
              <Button href="/pricing" className="mt-7 w-full">
                See full pricing
              </Button>
            </div>
          </div>
          <p className="mt-5 text-center text-[13px] text-neutral-500">
            When either parent has Premium, both can edit the shared calendar,
            expenses, and files.
          </p>
        </Container>
      </section>

      {/* About */}
      <section className="px-5 py-20 sm:px-8 sm:py-[110px]">
        <div className="mx-auto max-w-[680px] text-center">
          <img
            src="/images/logo-wide.webp"
            alt="CoParentPro logo: two parents connected by a bridge, with a child in the middle"
            width={120}
            height={49}
            loading="lazy"
            className="mx-auto mb-7 w-[120px] rounded-2xl"
          />
          <h2 className="font-serif text-[30px] font-medium leading-[1.2] text-balance sm:text-[36px]">
            Made by people who’ve been there
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.75] text-neutral-700">
            CoParentPro is built by {COMPANY_NAME} with one conviction:
            separation shouldn’t mean your kids grow up between two parents who
            can’t talk. We made safe messaging free on purpose — because the
            moment a conversation stays calm, everybody wins. The bridge in our
            logo isn’t decoration; it’s the job description.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy px-5 py-20 sm:px-8 sm:py-[100px]">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-serif text-[34px] font-medium leading-[1.15] text-balance text-white sm:text-[42px]">
            Be first in line at launch
          </h2>
          <p className="mt-4 text-base leading-[1.65] text-white/72">
            CoParentPro is in final review for the App Store and Google Play. Join
            the waitlist and we’ll email you the moment it’s live.
          </p>
          <WaitlistForm
            variant="dark"
            buttonLabel="Join the waitlist"
            doneMessage="You’re on the list — see you at launch."
            className="mt-8"
          />
        </div>
      </section>
    </>
  );
}
