import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import type { Accent } from "@/components/ui";
import {
  DarkCTA,
  FeatureSplit,
  PageHero,
  SecurityIllustration,
} from "@/components/sections";
import type { FeatureSplitProps } from "@/components/sections";
import { PRICING } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Tone guidance before you hit send, a shared custody calendar, expense splitting, court-ready records, and a shared files library — built for real families.",
};

type Section = Pick<
  FeatureSplitProps,
  "eyebrow" | "accent" | "title" | "description" | "details" | "shot"
>;

const LEAD: Section = {
  eyebrow: "Communication",
  accent: "primary",
  title: "A second opinion before you hit send",
  description:
    "As you type, a rule-based check on your phone rates your draft green, yellow, or red — no connection needed. When you tap Review or Send, our cloud AI reads the draft in context, explains each flagged phrase in plain language, and offers two rewrites: Softer and More direct. You choose what to send.",
  details: [
    "Live green / yellow / red feedback as you type, on your phone",
    "Cloud AI review on Send and Review: every flagged phrase explained",
    "Two rewrites for a flagged draft — Softer and More direct — one tap to use either",
    "Hold until morning: park a heated draft and get a reminder at 8 AM",
    "Explicit threats and insults are always caught on your phone — offline, in Private Mode, on any plan",
  ],
  shot: { src: "/images/shots/02-review-sheet-dark.webp", alt: "The message review sheet" },
};

const SECTIONS: Section[] = [
  {
    eyebrow: "Scheduling",
    accent: "secondary",
    title: "Shared custody calendar",
    description:
      "One calendar both parents can trust. Set the custody pattern once, add the things that happen around it, and ask for a change in the app instead of arguing about it over text — with a record either of you can point to later.",
    details: [
      "Custody pattern with parent color coding, plus handoff times and places",
      "Recurring events for school, medical, activities, holidays, and birthdays",
      "Schedule-change requests: propose, counter, or accept — the outcome lands in the thread",
      "Conflict warnings when a child or parent is double-booked, or an event lands on the other parent’s day",
      "Reminders before handoffs and events, and sync to your phone’s calendar",
    ],
    shot: { src: "/images/shots/03-calendar-light.webp", alt: "Shared custody calendar" },
  },
  {
    eyebrow: "Messaging",
    accent: "primary",
    title: "Messaging with a record you can verify",
    description:
      "Every message is timestamped, stored securely, and locked the moment it is sent. Delivery and read status keep both parents accountable, and when you need a record, you can export one with integrity verification built in.",
    details: [
      "Messages can’t be edited or deleted once sent — by either parent",
      "Timestamps, delivery status, and read receipts on every message",
      "Separate threads by topic, so school and medical conversations stay findable",
      "Photos in messages on every plan; document attachments with Premium",
      "Court-ready PDF export with a SHA-256 hash and verification code (Premium)",
    ],
    shot: { src: "/images/shots/01-messages-light.webp", alt: "Messaging with tone guidance" },
  },
  {
    eyebrow: "Finance",
    accent: "tertiary",
    title: "Expense tracking & splitting",
    description:
      "Keep a clear record of child-related costs. Whoever paid logs it, the split is applied, and the other parent pays, approves, proposes a change, or disputes — in the app, with a reason attached. Nothing is silently edited.",
    details: [
      "Log costs with a category and receipt photos",
      "Split 50/50 or by an agreed ratio; see who owes whom at a glance",
      "Propose a change or decline with a reason — every step is kept",
      "A printable record for each expense: every payment, change, and reason",
      "Either parent can pay, approve, or dispute — even if Premium lapses",
    ],
    shot: { src: "/images/shots/05-expenses-light.webp", alt: "Expense tracking and splitting" },
  },
  {
    eyebrow: "Insights",
    accent: "secondary",
    title: "See your communication improve",
    description:
      "Premium insights show how your own messages trend over time — so you can see the temperature drop, not just feel it. Patterns, not blame. Nothing here is computed from your co-parent’s messages, and nothing here is shown to them.",
    details: [
      "How often your messages get flagged, and whether that is improving",
      "Which patterns come up, with examples from your own messages",
      "What you did with flagged drafts: revised, used a rewrite, or sent anyway",
      "Time-of-day peaks and streaks of calm days",
      "Built only from your own messages — never shared with your co-parent",
    ],
    shot: { src: "/images/shots/07-insights-light.webp", alt: "Communication insights" },
  },
  {
    eyebrow: "Documents",
    accent: "primary",
    title: "A shared files library",
    description:
      "Court orders, school forms, medical records, insurance cards — stored once, visible to both parents, always findable when you need them.",
    details: [
      "One library both parents can read",
      "Organized by category: Medical, School, Legal, Financial, Activities, and more",
      "Photos and documents in one place; expense records are saved here automatically",
      "Existing files stay readable and downloadable even if Premium lapses",
    ],
    shot: { src: "/images/shots/06-files-dark.webp", alt: "Shared files library" },
  },
  {
    eyebrow: "Security",
    accent: "tertiary",
    title: "Security you can check, not just trust",
    description:
      "Your family’s data lives on Google Cloud (Firebase) behind server-enforced access rules, and the record-keeping guarantees that matter in a custody dispute are built into the database itself.",
    details: [
      "Encrypted in transit and at rest",
      "Server-enforced access rules: only your family can read your family’s records",
      "Messages are immutable after sending, with write-once audit logs behind exports and record changes",
      "Verified email before anyone can find or connect with you; optional two-factor sign-in",
      "Delete your account any time, with a 30-day grace period to change your mind",
    ],
  },
];

type Layer = {
  accent: Accent;
  tag: string;
  title: string;
  icon: string;
  body: string;
  foot: string;
};

const LAYERS: Layer[] = [
  {
    accent: "secondary",
    tag: "Always on · every plan",
    title: "On your phone",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    body: "A rule-based tone check runs as you type and again when you send. It rates the draft green, yellow, or red and catches explicit insults, threats, and pressure tactics.",
    foot: "Needs no connection. This layer is what free accounts and Private Mode rely on.",
  },
  {
    accent: "primary",
    tag: "Send & Review · Premium",
    title: "In the cloud",
    icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
    body: "When you tap Review or Send, the draft goes to CoParentPro’s cloud AI to be read in context. It explains flagged phrases and writes two rewrites: Softer and More direct.",
    foot: "Only the draft is sent — plus the message it replies to, for context. Rewrites are never stored. Local warnings take precedence: the cloud can’t talk a red down to green.",
  },
  {
    accent: "tertiary",
    tag: "Your choice · Settings",
    title: "Private Mode",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    body: "One switch keeps subtle tone analysis on your phone only. Nothing goes to the cloud, so there are no cloud explanations or rewrites while it is on — strong explicit warnings still appear.",
    foot: "Threads with family members and other non-co-parent contacts always stay on your phone, whatever the setting.",
  },
];

const LAYER_STYLES: Record<Accent, { top: string; chip: string }> = {
  primary: { top: "border-t-primary", chip: "bg-primary-light text-primary" },
  secondary: { top: "border-t-secondary", chip: "bg-secondary-light text-secondary" },
  tertiary: { top: "border-t-tertiary", chip: "bg-tertiary-light text-tertiary" },
  glow: { top: "border-t-teal-glow", chip: "bg-secondary-light text-secondary" },
  muted: { top: "border-t-neutral-300", chip: "bg-neutral-100 text-neutral-700" },
};

const EXTRAS = [
  {
    title: "Family members",
    body: "Invite grandparents or relatives to read the calendar and child details. They never see expenses or files, and they only message the parent who invited them unless the other parent says yes.",
  },
  {
    title: "Shared contacts & child details",
    body: "Doctors, teachers, coaches, allergies, school info — entered once, visible to both parents.",
  },
  {
    title: "Phone calendar sync",
    body: "Push custody days and events to the calendar already on your iPhone or Android phone.",
  },
  {
    title: "Two-factor sign-in",
    body: "Optional, with any authenticator app. No SMS codes — on purpose, because a former partner may still share your phone plan.",
  },
  {
    title: "Notifications & reminders",
    body: "Message, calendar, and expense alerts, plus reminders ahead of handoffs and events.",
  },
  {
    title: "Light, dark, and tablet",
    body: "Follows your system theme and runs on iPhone, iPad, and Android phones and tablets.",
  },
] as const;

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Built for real families, not just courtrooms"
        description="Every feature in CoParentPro was designed with one goal: helping you co-parent calmly while keeping your children first. Here’s what’s in the app — and exactly where your words go."
      />

      <FeatureSplit {...LEAD} />

      {/* Where your words go */}
      <section className="border-y border-line bg-mist py-16 sm:py-20">
        <Container size="lg">
          <div className="mx-auto mb-11 max-w-[640px] text-center">
            <Eyebrow>Where your words go</Eyebrow>
            <h2 className="font-serif text-[30px] font-medium leading-[1.15] sm:text-[36px]">
              Two layers of analysis. One switch that keeps it on your phone.
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-neutral-700">
              Tone guidance in CoParentPro is not one thing. Part of it runs
              entirely on your phone, part of it runs on our cloud AI, and you
              decide whether the cloud is ever involved.
            </p>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {LAYERS.map((layer) => {
              const styles = LAYER_STYLES[layer.accent];
              return (
                <div
                  key={layer.title}
                  className={`flex flex-col rounded-[18px] border border-line border-t-4 bg-white px-[26px] pt-7 pb-7 ${styles.top}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] ${styles.chip}`}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-[21px] w-[21px]"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={layer.icon} />
                      </svg>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-[5px] text-right text-[11px] font-bold uppercase tracking-[0.06em] ${styles.chip}`}
                    >
                      {layer.tag}
                    </span>
                  </div>
                  <h3 className="mt-[18px] text-[19px] font-bold">{layer.title}</h3>
                  <p className="mt-2.5 flex-1 text-[14.5px] leading-[1.65] text-neutral-700">
                    {layer.body}
                  </p>
                  <p className="mt-4 border-t border-line pt-3.5 text-[13px] leading-[1.55] text-neutral-500">
                    {layer.foot}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-7 max-w-[760px] text-center text-[13.5px] leading-[1.65] text-neutral-500">
            Free accounts get the on-phone check, a daily allowance of cloud
            reviews, and three full previews when the cloud catches something the
            rules missed. Premium unlocks explanations and rewrites on every
            flagged draft. Drafts and rewrites are never stored and never shown to
            your co-parent.
          </p>
          <p className="mx-auto mt-4.5 max-w-[760px] text-center text-[14.5px] leading-[1.65] text-neutral-700">
            That’s the short version.{" "}
            <Link href="/how-it-works" className="font-semibold text-primary hover:text-primary-dark">
              How it works
            </Link>{" "}
            explains why it’s built this way, what it does in the moments that
            matter, and what other apps say about their own tone checks.
          </p>
        </Container>
      </section>

      {SECTIONS.map((section, index) => {
        // Alternate background and image side, starting with the image on the left.
        const odd = index % 2 === 0;
        return (
          <FeatureSplit
            key={section.title}
            {...section}
            bg={odd ? "paper" : "mist"}
            reverse={odd}
            visual={section.shot ? undefined : <SecurityIllustration />}
          />
        );
      })}

      {/* Also included */}
      <section className="bg-paper py-16 sm:py-20">
        <Container size="lg">
          <div className="mx-auto mb-10 max-w-[600px] text-center">
            <Eyebrow>Also included</Eyebrow>
            <h2 className="font-serif text-[30px] font-medium leading-[1.2] sm:text-[34px]">
              The rest of the household
            </h2>
          </div>
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {EXTRAS.map((extra) => (
              <div key={extra.title} className="rounded-2xl border border-line bg-white px-[22px] pt-[22px] pb-6">
                <p className="text-[15px] font-bold">{extra.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{extra.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DarkCTA
        title="Start free. Upgrade when you want more."
        body={
          <>
            Messaging and on-phone tone guidance are free for both parents.
            Premium comes with a {PRICING.trialDays}-day trial once you’re
            connected to your co-parent — cancel anytime through the App Store or
            Google Play.
          </>
        }
        secondary={{ href: "/pricing", label: "View pricing" }}
      />
    </>
  );
}
