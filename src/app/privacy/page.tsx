import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { SUPPORT_EMAIL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CoParentPro Privacy Policy — how we collect, use, and protect your personal information.",
};

/**
 * Ported from the app's `src/assets/legal/privacyPolicy.ts` (last updated
 * 2026-09-05). Keep the two in sync: the App Store and Play listings point
 * here, and the app shows the same text under Settings > Legal. Section 1.10
 * (website waitlist) exists only on the site.
 */

const H2 =
  "font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mt-10 mb-4";
const H3 = "text-lg font-bold text-neutral-900 mt-6 mb-2";
const P = "text-neutral-700 leading-relaxed mb-4";
const UL = "list-disc list-inside text-neutral-700 mb-6 space-y-1";
const LINK = "text-primary hover:text-primary-dark underline";

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container>
        <article className="max-w-3xl mx-auto prose-neutral">
          <h1 className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.015em] text-neutral-900 sm:text-[44px] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500 mb-10">
            Last updated: September 5, 2026
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Braveheart Innovations (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) operates the CoParentPro mobile application (the
            &ldquo;App&rdquo;). This Privacy Policy explains how we collect,
            use, disclose, and protect your personal information when you use our
            App.
          </p>

          <h2 className={H2}>1. Information We Collect</h2>

          <h3 className={H3}>1.1 Account Information</h3>
          <p className={P}>
            When you create an account, we collect your name, email address, and
            authentication credentials. If you sign in with Google or Apple, we
            receive your name, email, and profile photo from those providers.
          </p>

          <h3 className={H3}>1.2 Profile Information</h3>
          <p className={P}>
            You may voluntarily provide additional information such as date of
            birth, phone number, gender, and a profile photo.
          </p>

          <h3 className={H3}>1.3 Communication Data</h3>
          <p className={P}>
            Messages you send and receive through the App are stored to provide
            our communication services. Message content, timestamps, delivery
            status, and read receipts are recorded.
          </p>

          <h3 className={H3}>1.4 Communication Analysis</h3>
          <p className={P}>
            The App offers tone guidance on the messages you write. It works in
            two layers:
          </p>
          <ul className={UL}>
            <li>
              <strong>On your device:</strong> a rule-based check runs on your
              phone as you type and again when you send. This check does not
              send your draft anywhere.
            </li>
            <li>
              <strong>In the cloud:</strong> when you send a message or tap
              Review, the App may send your draft, the number and types of any
              attachments, the findings of the on-device check, and, if you are
              replying to a message your co-parent just sent, that one message
              to our servers, where an AI model hosted on Google Cloud (Vertex
              AI) reviews it and returns explanations of flagged phrases and
              suggested rewrites. The rest of your conversation is not sent.
            </li>
          </ul>
          <p className={P}>
            The cloud layer runs only after you have chosen it. The first time
            you open a conversation with your co-parent, the App explains where
            your drafts go and asks you to choose between cloud review and
            keeping analysis on your device. Until you choose, drafts stay on
            your device.
          </p>
          <p className={P}>
            Drafts you do not send, and the rewrites you are offered, are not
            stored. When you send a message, its analysis result (a green,
            yellow, or red category, scores, and any flagged phrases) is stored
            with the message. Your connected co-parent can see the category of
            messages you sent to them. Insights are built only from your own sent
            messages and are not shown to your co-parent.
          </p>
          <p className={P}>
            You can turn off the cloud layer at any time with Private Mode
            (Settings &gt; General). In Private Mode, analysis stays on your
            device and explicit rule-based warnings still appear. Messages in
            conversations with anyone other than your co-parent, and messages
            sent from family-member accounts, are analyzed on your device only.
          </p>
          <p className={P}>
            This analysis is designed to promote constructive communication, not
            to monitor or judge users.
          </p>

          <h3 className={H3}>1.5 Calendar and Scheduling Data</h3>
          <p className={P}>
            Custody schedules, calendar events, transitions, and related
            information you enter are stored to provide scheduling services.
          </p>

          <h3 className={H3}>1.6 Financial Data</h3>
          <p className={P}>
            Expense records, reimbursement requests, and related financial
            information you enter are stored to facilitate expense sharing
            between co-parents.
          </p>

          <h3 className={H3}>1.7 Child Information</h3>
          <p className={P}>
            Information about children (names, dates of birth, medical contacts,
            school information) that you enter is stored to facilitate
            co-parenting coordination. We treat all child data with the highest
            level of protection.
          </p>

          <h3 className={H3}>1.8 Device and Usage Data</h3>
          <p className={P}>
            We collect device tokens for push notifications, app usage
            analytics, and error reports to improve our services.
          </p>

          <h3 className={H3}>1.9 Subscription Information</h3>
          <p className={P}>
            If you subscribe, we receive your subscription status and store
            transaction identifiers from the App Store or Google Play through
            RevenueCat (see Section 3.3). We do not receive your payment card
            details.
          </p>

          <h3 className={H3}>1.10 Website Launch Waitlist</h3>
          <p className={P}>
            If you join the launch waitlist on coparentpro.app, we store the
            email address you enter and the page of our website you signed up
            from, so we can email you when the App is available. We use this
            address only to notify you about the App&apos;s launch. To be
            removed from the waitlist at any time, email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>

          <h2 className={H2}>2. How We Use Your Information</h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            We use your information to:
          </p>
          <ul className={UL}>
            <li>Provide, maintain, and improve the App&apos;s services</li>
            <li>Facilitate communication between co-parents</li>
            <li>Provide communication analysis and feedback</li>
            <li>
              Send push notifications for messages, calendar events, and
              expenses
            </li>
            <li>
              Generate court-compliant communication reports when requested
            </li>
            <li>Ensure data integrity and security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className={H2}>3. Data Sharing and Disclosure</h2>

          <h3 className={H3}>3.1 Co-Parent Sharing</h3>
          <p className={P}>
            By design, certain information is shared with your connected
            co-parent, including messages, calendar events, child information,
            and expense records.
          </p>

          <h3 className={H3}>3.2 Court Compliance</h3>
          <p className={P}>
            Message exports include integrity verification (SHA-256 hashes) to
            ensure authenticity for court proceedings. We do not proactively
            share data with courts; exports are initiated by you.
          </p>

          <h3 className={H3}>3.3 Service Providers</h3>
          <p className={P}>
            We use Firebase and Google Cloud (Google LLC) for authentication,
            data storage, file storage, cloud functions, push notifications,
            crash reporting, and analytics, and Google Cloud&apos;s Vertex AI
            for the cloud layer of communication analysis described in Section
            1.4. Google processes this data on our behalf in accordance with
            Google Cloud&apos;s data processing terms.
          </p>
          <p className={P}>
            Subscriptions are purchased through the App Store or Google Play,
            which handle payment. We use RevenueCat to confirm subscription
            status across your devices; it receives your account identifier and
            the purchase and subscription details provided by the app store, but
            not your messages, calendar, expenses, files, or child information.
          </p>

          <h3 className={H3}>3.4 Legal Requirements</h3>
          <p className={P}>
            We may disclose information if required by law, subpoena, or court
            order.
          </p>

          <h2 className={H2}>4. Children&apos;s Privacy (COPPA)</h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            CoParentPro is designed for adult co-parents, not for use by
            children under 13. We do not knowingly collect personal information
            from children under 13. The child information stored in the App is
            entered by adult parents for coordination purposes. If you believe we
            have inadvertently collected information from a child under 13,
            please contact us immediately.
          </p>

          <h2 className={H2}>5. Data Security</h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            We implement industry-standard security measures including:
          </p>
          <ul className={UL}>
            <li>Encryption in transit (TLS/SSL) and at rest</li>
            <li>Firebase Authentication with secure token management</li>
            <li>
              Firestore security rules that restrict data access to authorized
              users
            </li>
            <li>Audit logging for court-sensitive operations</li>
          </ul>

          <h2 className={H2}>6. Data Retention</h2>
          <ul className={UL}>
            <li>
              <strong>Active accounts:</strong> Data is retained as long as your
              account is active
            </li>
            <li>
              <strong>Deleted accounts:</strong> Account deletion is processed
              after a 30-day grace period. Message content is anonymized (sender
              identity removed) but preserved for court compliance. See{" "}
              <Link href="/delete-account" className={LINK}>
                Delete your account
              </Link>{" "}
              for the full process
            </li>
            <li>
              <strong>Export records:</strong> Audit logs of data exports are
              retained indefinitely for legal compliance
            </li>
          </ul>

          <h2 className={H2}>7. Your Rights</h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
            <li>Access your personal data through the App</li>
            <li>
              Export your message history: message and court-record exports are
              available in the App (Settings &gt; Data Export) with a Premium
              subscription
            </li>
            <li>
              Request a copy of the personal data we hold about you: use
              Settings &gt; Data Export &gt; Request My Data, which opens an
              email to{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
                {SUPPORT_EMAIL}
              </a>
              , or email us directly. We may ask you to confirm the request from
              the email address on your account, and we will respond within the
              time required by applicable law
            </li>
            <li>
              Correct inaccurate information through your profile settings
            </li>
            <li>
              Turn off cloud communication analysis with Private Mode
              (Settings &gt; General)
            </li>
            <li>
              Delete your account (Settings &gt; Account Management, or by
              email; see{" "}
              <Link href="/delete-account" className={LINK}>
                Delete your account
              </Link>
              )
            </li>
            <li>Withdraw consent for non-essential data processing</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For users in the European Economic Area (EEA), you have additional
            rights under GDPR including data portability and the right to lodge a
            complaint with a supervisory authority.
          </p>

          <h2 className={H2}>8. Changes to This Policy</h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes through the App or by email. Your continued
            use of the App after changes constitutes acceptance of the updated
            policy.
          </p>

          <h2 className={H2}>9. Contact Us</h2>
          <p className={P}>
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p className="text-neutral-700 leading-relaxed">
            <strong>Braveheart Innovations</strong>
            <br />
            Email:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </article>
      </Container>
    </section>
  );
}
