import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ContactForm, FAQAccordion, PageHero } from "@/components/sections";
import type { FAQItem } from "@/components/sections";
import { SUPPORT_EMAIL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with CoParentPro. Find answers to frequently asked questions or contact our support team.",
};

const FAQ: FAQItem[] = [
  {
    q: "How do I connect with my co-parent?",
    a: "Open the People tab, tap Add connection, and search for your co-parent by email to send a connection request. Once they accept, you can message, share the calendar, and more. You’ll need to verify your email address before you can search for or connect with anyone — it’s how we stop someone else from posing as you.",
  },
  {
    q: "How does the tone guidance work?",
    a: "In two layers. As you type, a rule-based check on your phone rates your draft green (constructive), yellow (caution), or red (potentially harmful). It works offline and catches explicit insults, threats, and pressure tactics on its own. When you tap Send or Review, our cloud AI reads the draft in context, explains each flagged phrase, and offers two rewrites — Softer and More direct. Drafts and rewrites are never stored and never shown to your co-parent. The How it works page on this site explains each step, and why it’s built that way.",
  },
  {
    q: "Can I keep the analysis on my phone?",
    a: "Yes. Turn on Private Mode in Settings. Subtle tone analysis then stays on your phone and nothing is sent to the cloud, so you won’t get cloud explanations or rewrites while it’s on — strong explicit warnings still appear. Conversations with family members and other non-co-parent contacts always stay on your phone, whatever the setting.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. CoParentPro runs on Google Cloud (Firebase) with encryption in transit and at rest, secure sign-in with optional two-factor authentication, and server-enforced access rules so only your family can read your family’s records. Messages can’t be edited or deleted after they’re sent, by either parent.",
  },
  {
    q: "Can I export my messages for court?",
    a: "Yes, with Premium. Open a conversation and use the export option to generate a court-ready PDF, or a message export as PDF or CSV. Court reports include a SHA-256 hash and a verification code so anyone can confirm the file hasn’t been altered since it was generated. Whether a court admits the report, and what weight it gives it, is the court’s decision — talk to your attorney about using it.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are managed through your app store. On iOS, go to Settings > Apple ID > Subscriptions. On Android, open Google Play > Menu > Subscriptions. You can cancel anytime and retain access until the end of your billing period.",
  },
  {
    q: "What happens to my data if I delete my account?",
    a: "In the app, go to Settings > Account > Account & Security > Delete My Account. There’s a 30-day grace period during which you can sign back in and choose Restore my account. After that, your personal data is permanently removed. Message content is anonymized — your identity is removed — but kept so your co-parent’s records stay complete. If you no longer have the app, email us and we’ll handle it; the Delete your account page explains every step.",
  },
  {
    q: "How do I report a message or an AI suggestion?",
    a: "Long-press any message from the other person and choose Report message, then pick a reason. On the review sheet, each Softer and More direct rewrite has a Report this suggestion link. Reports go straight to our support team, and we review them within 24 hours. You can also pause or disconnect a connection from the People tab at any time.",
  },
  {
    q: "Can I get a copy of my data?",
    a: `Yes. Go to Settings > Data Export and tap Request My Data. It opens an email to ${SUPPORT_EMAIL} from your account, and we’ll respond within the time required by law. With Premium you can also export your message history and court reports directly in the app.`,
  },
  {
    q: "Do both parents need the app?",
    a: "For the best experience, yes. Both parents need their own CoParentPro account to use shared messaging, calendars, and expense tracking. Messaging is free for both — and one Premium subscription lets both parents edit shared records.",
  },
  {
    q: "When will CoParentPro be available?",
    a: "The app is in final review for the App Store and Google Play. Join the waitlist on our homepage and we’ll email you the day it launches.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="How can we help?"
        description="Find answers to common questions or reach out to our support team."
        width="sm"
        bottom="tight"
      />

      <section id="faq" className="scroll-mt-20 pt-6 pb-16 sm:pt-10 sm:pb-20">
        <Container size="sm">
          <h2 className="mb-9 text-center font-serif text-[30px] font-medium sm:text-[34px]">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQ} />
          <p className="mt-[26px] text-center text-sm leading-[1.65] text-neutral-500">
            Want to know why the tone guidance works the way it does?{" "}
            <Link href="/how-it-works" className="font-semibold text-primary hover:text-primary-dark">
              Read How it works
            </Link>
            .
          </p>
          <p className="mt-3 text-center text-sm leading-[1.65] text-neutral-500">
            Leaving?{" "}
            <Link href="/delete-account" className="font-semibold text-primary hover:text-primary-dark">
              How to delete your account
            </Link>
            , in the app or by email.
          </p>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-20 bg-mist py-20 sm:py-[90px]">
        <Container size="xs">
          <h2 className="mb-3 text-center font-serif text-[30px] font-medium sm:text-[34px]">
            Contact us
          </h2>
          <p className="mb-9 text-center text-[15px] leading-[1.65] text-neutral-700">
            Can’t find what you’re looking for? Send us a message and we’ll get
            back to you within 1–2 business days.
          </p>
          <ContactForm />
          <p className="mt-[22px] text-center text-[13.5px] text-neutral-500">
            You can also email us directly at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline hover:text-primary-dark">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
