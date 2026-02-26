import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PRIVACY_EMAIL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CoParentPro Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <article className="max-w-3xl mx-auto prose-neutral">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500 mb-10">
            Last updated: February 22, 2026
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Braveheart Innovations (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) operates the CoParentPro mobile application (the
            &ldquo;App&rdquo;). This Privacy Policy explains how we collect,
            use, disclose, and protect your personal information when you use our
            App.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.1 Account Information
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            When you create an account, we collect your name, email address, and
            authentication credentials. If you sign in with Google or Apple, we
            receive your name, email, and profile photo from those providers.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.2 Profile Information
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            You may voluntarily provide additional information such as date of
            birth, phone number, gender, and a profile photo.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.3 Communication Data
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Messages you send and receive through the App are stored to provide
            our communication services. Message content, timestamps, delivery
            status, and read receipts are recorded.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.4 Communication Analysis
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Our App analyzes message content locally to provide communication
            feedback. Analysis categories (green, yellow, red) and related
            metadata are stored to help improve your co-parenting communication.
            This analysis is designed to promote constructive communication, not
            to monitor or judge users.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.5 Calendar and Scheduling Data
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Custody schedules, calendar events, transitions, and related
            information you enter are stored to provide scheduling services.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.6 Financial Data
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Expense records, reimbursement requests, and related financial
            information you enter are stored to facilitate expense sharing
            between co-parents.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.7 Child Information
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Information about children (names, dates of birth, medical contacts,
            school information) that you enter is stored to facilitate
            co-parenting coordination. We treat all child data with the highest
            level of protection.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            1.8 Device and Usage Data
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            We collect device tokens for push notifications, app usage
            analytics, and error reports to improve our services.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
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

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            3. Data Sharing and Disclosure
          </h2>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            3.1 Co-Parent Sharing
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            By design, certain information is shared with your connected
            co-parent, including messages, calendar events, child information,
            and expense records.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            3.2 Court Compliance
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Message exports include integrity verification (SHA-256 hashes) to
            ensure authenticity for court proceedings. We do not proactively
            share data with courts; exports are initiated by you.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            3.3 Service Providers
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            We use Firebase (Google Cloud) for authentication, data storage,
            cloud functions, and analytics. Your data is processed in accordance
            with Google&apos;s data processing terms.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-2">
            3.4 Legal Requirements
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            We may disclose information if required by law, subpoena, or court
            order.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            4. Children&apos;s Privacy (COPPA)
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            CoParentPro is designed for adult co-parents, not for use by
            children under 13. We do not knowingly collect personal information
            from children under 13. The child information stored in the App is
            entered by adult parents for coordination purposes. If you believe we
            have inadvertently collected information from a child under 13,
            please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            5. Data Security
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            We implement industry-standard security measures including:
          </p>
          <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
            <li>Encryption in transit (TLS/SSL) and at rest</li>
            <li>Firebase Authentication with secure token management</li>
            <li>
              Firestore security rules that restrict data access to authorized
              users
            </li>
            <li>Audit logging for court-sensitive operations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            6. Data Retention
          </h2>
          <ul className="list-disc list-inside text-neutral-700 mb-6 space-y-1">
            <li>
              <strong>Active accounts:</strong> Data is retained as long as your
              account is active
            </li>
            <li>
              <strong>Deleted accounts:</strong> Account deletion is processed
              after a 30-day grace period. Message content is anonymized (sender
              identity removed) but preserved for court compliance
            </li>
            <li>
              <strong>Export records:</strong> Audit logs of data exports are
              retained indefinitely for legal compliance
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            7. Your Rights
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
            <li>Access your personal data through the App</li>
            <li>Export your data (available in Settings &gt; Data Export)</li>
            <li>
              Correct inaccurate information through your profile settings
            </li>
            <li>
              Delete your account (Settings &gt; Account Management)
            </li>
            <li>Withdraw consent for non-essential data processing</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For users in the European Economic Area (EEA), you have additional
            rights under GDPR including data portability and the right to lodge a
            complaint with a supervisory authority.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of material changes through the App or by email. Your continued
            use of the App after changes constitutes acceptance of the updated
            policy.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            9. Contact Us
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p className="text-neutral-700 leading-relaxed">
            <strong>Braveheart Innovations</strong>
            <br />
            Email:{" "}
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              className="text-primary hover:text-primary-dark underline"
            >
              {PRIVACY_EMAIL}
            </a>
          </p>
        </article>
      </Container>
    </section>
  );
}
