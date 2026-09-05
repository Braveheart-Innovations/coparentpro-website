import type { Metadata } from "next";
import { CheckList, Container, Eyebrow, PhoneFrame } from "@/components/ui";
import { DarkCTA, PageHero } from "@/components/sections";
import { PRICING, SUPPORT_EMAIL } from "@/lib/metadata";
import {
  ALWAYS_LOCAL,
  ASK_ITEMS,
  CATEGORIES,
  JUMP_LINKS,
  LIMIT_ITEMS,
  MOMENTS,
  NOT_SENT_ITEMS,
  SEND_STEPS,
  SENT_ITEMS,
  SPECS,
  STATS,
  STORED_ROWS,
  STRIP_FACTS,
  VENDORS,
} from "@/lib/content/how-it-works";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "What happens in the ten seconds before you hit Send: an on-phone tone check, a fenced-in cloud review, two rewrites, and a record you can verify. Here’s how CoParentPro’s tone guidance works, and why.",
};

const STEP_STYLES = {
  teal: { top: "border-t-secondary", text: "text-secondary", chip: "bg-secondary-light text-secondary" },
  blue: { top: "border-t-primary", text: "text-primary", chip: "bg-primary-light text-primary" },
} as const;

const SECTION_TITLE =
  "font-serif text-[30px] font-medium leading-[1.15] sm:text-[36px]";

function SectionIntro({
  eyebrow,
  accent,
  title,
  children,
  width = "max-w-[720px]",
}: {
  eyebrow: string;
  accent?: "primary" | "secondary" | "tertiary";
  title: string;
  children?: React.ReactNode;
  width?: string;
}) {
  return (
    <div className={width}>
      <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      <h2 className={SECTION_TITLE}>{title}</h2>
      {children}
    </div>
  );
}

const BODY = "mt-4 text-base leading-[1.7] text-neutral-700";
const BODY_NEXT = "mt-3.5 text-base leading-[1.7] text-neutral-700";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="You get one chance to not send it."
        description="Once a message lands, it’s on the record for good, and your co-parent decides what it meant. CoParentPro is built around the ten seconds before you hit Send. Here’s what happens in those ten seconds, why it’s built that way, and what it does for a parent who is tired of every text turning into a fight."
        bottom="tight"
      >
        <nav aria-label="On this page" className="mt-[30px] flex flex-wrap justify-center gap-2.5">
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-line-blue bg-white px-3.5 py-2 text-[13px] font-semibold text-primary transition-colors hover:border-primary hover:text-primary-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* The moments */}
      <section id="moments" className="scroll-mt-16 bg-navy py-16 text-white sm:py-[72px]">
        <Container size="lg">
          <div className="mb-10 max-w-[620px]">
            <Eyebrow accent="glow" className="mb-3.5">
              The moments it’s built for
            </Eyebrow>
            <h2 className={SECTION_TITLE}>You know these moments. So does the app.</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {MOMENTS.map((moment) => (
              <div key={moment.title} className="border-t border-white/18 pt-[22px]">
                <h3 className="font-serif text-2xl font-medium text-teal-glow">{moment.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.65] text-white/85">{moment.scene}</p>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-white/62">{moment.why}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why it names the pattern */}
      <section id="names" className="scroll-mt-16 bg-paper py-16 sm:py-[84px]">
        <Container size="lg">
          <SectionIntro
            eyebrow="Why it names the pattern"
            title="A red light tells you to stop. A name tells you what to stop doing."
          >
            <p className={BODY}>
              Most tone tools flag “negative words” and leave you guessing. Ours
              tells you which of 15 patterns you just wrote, in one plain
              sentence: “This may read as blaming.” “This may read as dismissing
              their experience.” The labels are built on John Gottman’s research
              into the four patterns that predict a relationship falling apart:
              criticism, contempt, defensiveness and stonewalling. You can’t leave
              a co-parenting relationship, so those patterns just keep doing
              damage.
            </p>
            <p className={BODY_NEXT}>
              <strong>What that does for you:</strong> after you’ve seen “This may
              read as controlling” a few times, you start catching it yourself,
              before the app does. That’s the whole goal. The app is training
              wheels, not a chaperone.
            </p>
          </SectionIntro>
          <ul className="mt-9 grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((category) => (
              <li
                key={category.name}
                className="flex flex-col gap-1.5 rounded-[14px] border border-line bg-white px-4 pt-4 pb-[15px]"
              >
                <span className="text-sm font-bold text-neutral-900">{category.name}</span>
                <p className="text-[12.5px] leading-normal text-neutral-500">
                  “This may read as {category.label}.”
                </p>
                {category.floor && (
                  <span className="mt-1 self-start rounded-full bg-flag-red-light px-2 py-[3px] text-[10.5px] font-bold uppercase tracking-[0.06em] text-flag-red">
                    Safety floor
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-4.5 max-w-[860px] text-sm leading-[1.65] text-neutral-700">
            <strong>Safety floor</strong> means a clear hit in that category is
            decided on your phone, and nothing that runs afterward, including our
            AI, can talk it down. A safety net that can be argued out of a threat
            isn’t a safety net.
          </p>
        </Container>
      </section>

      {/* While you type */}
      <section id="typing" className="scroll-mt-16 border-y border-line bg-mist py-16 sm:py-[84px]">
        <Container size="lg">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
            <div>
              <Eyebrow>While you type</Eyebrow>
              <h2 className={SECTION_TITLE}>A check that’s instant, private, and honest</h2>
              <p className={BODY}>
                As you type, your phone checks the draft against 156 hand-written
                patterns. No internet, no AI, nothing leaves the phone. It works
                the same on the free plan, in Private Mode, and with no signal.
              </p>
              <CheckList items={STRIP_FACTS} className="mt-5 gap-[11px]" />
              <p className="mt-5 text-[15px] leading-[1.7] text-neutral-700">
                <strong>Why instant and local matters:</strong> a warning that
                arrives after you’ve committed is a scolding. One that arrives
                mid-sentence is a nudge. And because it never phones home, you can
                be as honest in the draft as you need to be to get to the version
                you’ll actually send.
              </p>
            </div>

            <div>
              {/* Mock composer showing the on-phone strip */}
              <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-card">
                <div className="flex items-center justify-between border-b border-line px-[18px] py-3.5">
                  <span className="text-[13px] font-bold text-navy">Schedule · Alex</span>
                  <span className="rounded-full bg-secondary-light px-[9px] py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-secondary">
                    On phone
                  </span>
                </div>
                <div className="px-[18px] pt-[18px] pb-1.5">
                  <div className="max-w-[78%] rounded-[16px_16px_16px_4px] bg-cloud px-3.5 py-2.5 text-[13.5px] leading-normal text-neutral-900">
                    Running about 20 min late for pickup, sorry.
                  </div>
                </div>
                <div className="px-[18px] pt-3.5 pb-[18px]">
                  <div className="min-h-[54px] rounded-[14px] border-[1.5px] border-neutral-300 px-3.5 py-3 text-sm leading-[1.55] text-neutral-900">
                    If you’re late again{" "}
                    <span className="border-b-2 border-amber bg-amber-mark">I’m taking you to court</span>.
                    5 PM means 5 PM.
                    <span
                      aria-hidden="true"
                      className="ml-px inline-block h-4 w-px bg-primary align-[-3px]"
                    />
                  </div>
                  <div className="mt-2.5 rounded-[10px] border-l-4 border-amber bg-amber-light px-[13px] py-[11px]">
                    <p className="text-[13.5px] font-bold text-neutral-900">This may read as threatening.</p>
                    <p className="mt-[3px] text-[13px] leading-normal text-neutral-700">
                      Avoid making threats, even implicitly.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mx-1 mt-3.5 text-[13px] leading-relaxed text-neutral-500">
                Real behavior: the phrase “I’m taking you to court” was flagged on
                the phone before the sentence was finished. You can still send it.
                Now it’s a choice.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* When you tap Send */}
      <section id="send" className="scroll-mt-16 bg-paper py-16 sm:py-[84px]">
        <Container size="lg">
          <SectionIntro
            eyebrow="When you tap Send"
            accent="primary"
            title="A second look, and two better ways to say it"
          >
            <p className={BODY}>
              Tapping Send or Review runs a deeper check. Most of it happens on
              your phone. The one step that uses our cloud AI is fenced in on
              every side.
            </p>
          </SectionIntro>

          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SEND_STEPS.map((step) => {
              const styles = STEP_STYLES[step.tone];
              return (
                <li
                  key={step.n}
                  className={`flex flex-col rounded-2xl border border-line border-t-4 bg-white px-5 pt-5 pb-[18px] ${styles.top}`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className={`font-serif text-[26px] leading-none ${styles.text}`}>{step.n}</span>
                    <span
                      className={`rounded-full px-2 py-[3px] text-[10.5px] font-bold uppercase tracking-[0.06em] ${styles.chip}`}
                    >
                      {step.where}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[15.5px] font-bold leading-[1.3]">{step.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-700">{step.body}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 grid items-stretch gap-7 md:grid-cols-2">
            <div className="rounded-[18px] border border-line bg-mist p-7">
              <h3 className="text-[19px] font-bold">Why two rewrites, not one</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">
                A tone tool that only knows how to soften teaches you to fold. In
                a high-conflict dynamic, folding is how boundaries disappear. So
                you get <strong>Softer</strong>, which keeps your need but leads
                with “I”, and <strong>More direct</strong>, which states the need
                and the expectation without the jab. Hold the line without
                handing them a quote.
              </p>
            </div>
            <div className="rounded-[18px] border border-line bg-mist p-7">
              <h3 className="text-[19px] font-bold">Why it reads the reply, not the thread</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">
                Snapping and snapping back are different, so the AI sees the one
                message you’re answering. It never sees the rest of the thread,
                and an earlier ugly message from them never earns yours a pass.
                Which is exactly how a mediator will read it: your words, not your
                reasons.
              </p>
            </div>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h3 className="text-[19px] font-bold">The review sheet</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">
                Every flagged phrase is quoted word for word, with a plain reason.
                Tap one to read it. Below that, the two rewrites. Then your call:
                use a rewrite, edit the draft, send it as written, or on a red
                draft, <strong>Hold until morning</strong>, which parks it and
                reminds you at 8 AM.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-neutral-700">
                <strong>Why the hold exists:</strong> the message that feels great
                at midnight is the one that gets read aloud in mediation. If it’s
                true, it’ll still be true in the morning.
              </p>
              <p className="mt-3 text-sm leading-[1.65] text-neutral-500">
                Free plan: drafts your phone flags stay on the phone with the
                rule’s explanation, and drafts it doesn’t flag get up to 20 AI
                checks a day. Premium adds the AI’s explanations and rewrites on
                every flagged draft.
              </p>
            </div>
            <div className="flex justify-center">
              <PhoneFrame
                src="/images/shots/02-review-sheet-dark.webp"
                alt="The review sheet: flagged phrases, Softer and More direct rewrites"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Your privacy */}
      <section id="privacy" className="scroll-mt-16 border-y border-line bg-mist py-16 sm:py-[84px]">
        <Container size="lg">
          <SectionIntro
            eyebrow="Your privacy"
            accent="tertiary"
            title="What leaves your phone, and what never does"
          >
            <p className={BODY}>
              For some parents the idea of an AI reading their drafts is a
              dealbreaker, and they’re often the ones who need the safety net
              most. So the safety net doesn’t depend on the cloud, and you can
              switch the cloud off.
            </p>
          </SectionIntro>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <div className="rounded-[18px] border border-line border-t-4 border-t-primary bg-white p-[26px]">
              <h3 className="text-lg font-bold">Sent to the cloud AI</h3>
              <CheckList items={SENT_ITEMS} accent="primary" className="mt-3.5 gap-[9px]" itemClassName="text-sm" />
            </div>
            <div className="rounded-[18px] border border-line border-t-4 border-t-tertiary bg-white p-[26px]">
              <h3 className="text-lg font-bold">Never sent</h3>
              <CheckList
                items={NOT_SENT_ITEMS}
                accent="tertiary"
                mark="cross"
                className="mt-3.5 gap-[9px]"
                itemClassName="text-sm"
              />
            </div>
            <div className="rounded-[18px] border border-line-lavender bg-tertiary-light p-[26px]">
              <h3 className="text-lg font-bold">Private Mode</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                One switch in Settings keeps the subtle analysis on your phone.
                Strong warnings still appear; the AI’s explanations and rewrites
                don’t. And four things stay on your phone whether or not you flip
                it:
              </p>
              <CheckList items={ALWAYS_LOCAL} accent="tertiary" className="mt-3 gap-2" itemClassName="text-[13.5px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* The record */}
      <section id="record" className="scroll-mt-16 bg-paper py-16 sm:py-[84px]">
        <Container size="md">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <Eyebrow>The record</Eyebrow>
              <h2 className="font-serif text-[30px] font-medium leading-[1.15] sm:text-[34px]">
                What your co-parent can and can’t see
              </h2>
              <p className={BODY}>
                Your drafts and the rewrites you were offered are never saved.
                Anywhere. What you actually send carries its color, and yes, your
                co-parent can see that color, the same way you can see theirs.
              </p>
              <p className={BODY_NEXT}>
                <strong>Why that’s a feature:</strong> in a high-conflict dynamic,
                your calm message is evidence too. Every message is locked the
                moment it’s sent, timestamped, and exportable. Sounding reasonable
                stops being a favor to them and starts being a record for you.
              </p>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-line bg-white">
              <table className="w-full table-fixed border-collapse text-[13px] leading-normal sm:text-[13.5px]">
                <thead className="bg-mist text-[13px] font-bold text-neutral-700">
                  <tr>
                    <th scope="col" className="w-[40%] px-3 py-[13px] text-left sm:px-[18px]">
                      <span className="sr-only">Item</span>
                    </th>
                    <th scope="col" className="px-3 py-[13px] text-left sm:px-[18px]">
                      Saved?
                    </th>
                    <th scope="col" className="px-3 py-[13px] text-left sm:px-[18px]">
                      They see
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {STORED_ROWS.map((row) => (
                    <tr key={row.item} className="border-t border-line align-top">
                      <th scope="row" className="px-3 py-[13px] text-left font-semibold sm:px-[18px]">
                        {row.item}
                      </th>
                      <td className="px-3 py-[13px] text-neutral-700 sm:px-[18px]">{row.stored}</td>
                      <td className="px-3 py-[13px] text-neutral-700 sm:px-[18px]">{row.sees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Straight talk */}
      <section id="trust" className="scroll-mt-16 border-y border-line bg-mist py-16 sm:py-[84px]">
        <Container size="lg">
          <SectionIntro
            eyebrow="Straight talk"
            title="Why you can trust it, and where you shouldn’t"
          >
            <p className={BODY}>
              Every change to the app has to pass a set of hand-labeled test
              messages before it ships: real co-parenting situations, including
              the ones designed to trick it, like a question that isn’t a demand
              or a receipt that isn’t blackmail.
            </p>
          </SectionIntro>
          <dl className="mt-8 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-line bg-white px-[18px] py-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-[40px] leading-none text-navy">{stat.n}</dd>
                <dd className="mt-2.5 text-[13px] font-semibold leading-[1.45] text-neutral-700">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 rounded-[18px] border border-line bg-white p-7">
            <h3 className="text-[19px] font-bold">What we don’t claim</h3>
            <ul className="mt-3.5 grid gap-5 md:grid-cols-3">
              {LIMIT_ITEMS.map((item) => (
                <li
                  key={item}
                  className="border-l-[3px] border-line-lavender pl-3.5 text-[14.5px] leading-[1.65] text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Compared */}
      <section id="compare" className="scroll-mt-16 bg-paper py-16 sm:py-[84px]">
        <Container size="lg">
          <SectionIntro
            eyebrow="Compared"
            title="What other apps say about theirs, in their own words"
            width="max-w-[760px]"
          >
            <p className={BODY}>
              We built CoParentPro because the tone checks we tried were a word
              list with a color. Rather than tell you that, here is what the
              best-known apps say about their own tone features on their own
              websites, read on September 5, 2026. Where a page doesn’t mention
              something, we say “not described”, not “not there”.
            </p>
          </SectionIntro>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {VENDORS.map((vendor) => (
              <div key={vendor.name} className="flex flex-col rounded-[18px] border border-line bg-white px-[26px] py-6">
                <p className="text-xs font-bold uppercase tracking-[0.06em] text-neutral-500">
                  {vendor.feature}
                </p>
                <h3 className="mt-1.5 text-[19px] font-bold">{vendor.name}</h3>
                <ul className="mt-3.5 flex flex-col gap-[9px]">
                  {vendor.quotes.map((quote) => (
                    <li
                      key={quote}
                      className="border-l-[3px] border-line-blue pl-3.5 text-sm leading-relaxed text-neutral-900"
                    >
                      {quote}
                    </li>
                  ))}
                </ul>
                <p className="mt-3.5 flex-1 border-t border-line pt-3 text-[13px] leading-relaxed text-neutral-500">
                  <strong className="text-neutral-700">Not described:</strong> {vendor.gaps}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4.5 max-w-[860px] text-sm leading-[1.65] text-neutral-700">
            Fayr, 2houses and coParenter describe messaging with a record of past
            exchanges, and coParenter describes “language filters” plus human
            mediators on demand. None of their pages describes a tone analysis
            feature.
          </p>

          <div className="mt-12">
            <h3 className="font-serif text-[26px] font-medium leading-[1.2] sm:text-[28px]">
              Six questions to ask any tone tool
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ASK_ITEMS.map((item) => (
                <div key={item.q} className="rounded-2xl border border-line bg-white px-5 pt-5 pb-[18px]">
                  <p className="text-[15px] font-bold text-neutral-900">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-7 max-w-[900px] text-xs leading-[1.65] text-neutral-500">
            OurFamilyWizard, ToneMeter, TalkingParents, AppClose, Co-Parent
            Assist, Custody X Change, Fayr, 2houses and coParenter are trademarks
            of their respective owners, who are not affiliated with CoParentPro.
            Quotations are from those companies’ public websites as read on
            September 5, 2026; features and plans change. If we’ve misquoted
            anyone, email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline hover:text-primary-dark">
              {SUPPORT_EMAIL}
            </a>{" "}
            and we’ll fix it.
          </p>
        </Container>
      </section>

      {/* Specs */}
      <section id="specs" className="scroll-mt-16 border-t border-line bg-mist py-14 sm:py-16">
        <Container size="md">
          <Eyebrow accent="muted" className="mb-2">
            For the technically curious
          </Eyebrow>
          <p className="mb-5 max-w-[720px] text-sm leading-relaxed text-neutral-500">
            The numbers behind the page above, checked against the app on
            September 5, 2026.
          </p>
          <dl className="grid border-t border-line md:grid-cols-2 md:gap-x-10">
            {SPECS.map((spec) => (
              <div
                key={spec.k}
                className="grid gap-1 border-b border-line py-[11px] text-[13px] leading-normal sm:grid-cols-[170px_1fr] sm:gap-3.5"
              >
                <dt className="font-semibold text-neutral-500">{spec.k}</dt>
                <dd className="text-neutral-700">{spec.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <DarkCTA
        title="Free for both parents. The record, too."
        body={
          <>
            Messaging and the on-phone check cost nothing, for either parent,
            forever. Premium adds the AI’s explanations and rewrites on every
            flagged draft, with a {PRICING.trialDays}-day trial once you’re
            connected to your co-parent.
          </>
        }
        secondary={{ href: "/features", label: "See all features" }}
      />
    </>
  );
}
