import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { SUPPORT_EMAIL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "CoParentPro Terms of Service — the terms governing your use of our co-parenting application.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <article className="max-w-3xl mx-auto prose-neutral">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-500 mb-10">
            Last updated: February 22, 2026
          </p>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Welcome to CoParentPro. By using our application, you agree to these
            Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            By creating an account or using CoParentPro, you agree to be bound
            by these Terms and our Privacy Policy. If you do not agree, please do
            not use the App.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            2. Eligibility
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You must be at least 18 years old to use CoParentPro. By using the
            App, you represent that you are at least 18 years of age and have the
            legal authority to enter into these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            3. Account Responsibilities
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>3.1</strong> You are responsible for maintaining the
              confidentiality of your account credentials.
            </li>
            <li>
              <strong>3.2</strong> You are responsible for all activity that
              occurs under your account.
            </li>
            <li>
              <strong>3.3</strong> You must provide accurate and complete
              information when creating your account.
            </li>
            <li>
              <strong>3.4</strong> You must promptly notify us of any
              unauthorized use of your account.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            4. Acceptable Use
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-2">
            You agree to use CoParentPro only for its intended purpose of
            facilitating co-parenting communication and coordination. You agree
            NOT to:
          </p>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>4.1</strong> Use the App to harass, threaten, or
              intimidate any person
            </li>
            <li>
              <strong>4.2</strong> Send messages that contain illegal content
            </li>
            <li>
              <strong>4.3</strong> Attempt to circumvent the communication
              analysis system
            </li>
            <li>
              <strong>4.4</strong> Use the App to violate any court order or
              legal agreement
            </li>
            <li>
              <strong>4.5</strong> Share your account credentials with others
            </li>
            <li>
              <strong>4.6</strong> Attempt to access another user&apos;s data
              without authorization
            </li>
            <li>
              <strong>4.7</strong> Use automated systems or bots to interact
              with the App
            </li>
            <li>
              <strong>4.8</strong> Interfere with or disrupt the App&apos;s
              services or infrastructure
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            5. Communication Analysis
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>5.1</strong> CoParentPro includes a communication analysis
              feature that provides feedback on message tone and content.
            </li>
            <li>
              <strong>5.2</strong> This analysis is designed to promote
              constructive communication and is not a substitute for professional
              counseling or legal advice.
            </li>
            <li>
              <strong>5.3</strong> Analysis results are approximate and should
              not be relied upon as definitive assessments.
            </li>
            <li>
              <strong>5.4</strong> You acknowledge that the communication
              analysis may not perfectly assess the tone or intent of every
              message.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            6. Content Ownership
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>6.1</strong> You retain ownership of the content you
              create and share through the App.
            </li>
            <li>
              <strong>6.2</strong> By using the App, you grant us a limited
              license to store, process, and display your content as necessary to
              provide our services.
            </li>
            <li>
              <strong>6.3</strong> We do not claim ownership over your messages,
              calendar events, or other user-generated content.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            7. Court Reports and Data Exports
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>7.1</strong> CoParentPro provides tools to export
              communication records that may be used in court proceedings.
            </li>
            <li>
              <strong>7.2</strong> Exported reports include integrity
              verification (SHA-256 hashes) to help verify authenticity.
            </li>
            <li>
              <strong>7.3</strong> We make no guarantees about the admissibility
              of exported reports in any legal proceeding. Consult with your
              attorney about the use of digital communications records.
            </li>
            <li>
              <strong>7.4</strong> It is your responsibility to ensure that any
              use of exported data complies with applicable laws and court rules.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            8. Subscription and Payments
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>8.1</strong> CoParentPro offers free and paid subscription
              tiers.
            </li>
            <li>
              <strong>8.2</strong> Paid subscriptions are billed through the App
              Store or Google Play.
            </li>
            <li>
              <strong>8.3</strong> Subscription management, including
              cancellation and refunds, is handled through your app store
              account.
            </li>
            <li>
              <strong>8.4</strong> We reserve the right to change pricing with
              reasonable notice.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            9. Data Deletion
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>9.1</strong> You may request deletion of your account
              through Settings &gt; Account Management.
            </li>
            <li>
              <strong>9.2</strong> Account deletion is processed after a 30-day
              grace period during which you may cancel the deletion.
            </li>
            <li>
              <strong>9.3</strong> Upon deletion, your personal data is removed.
              Message content is anonymized but preserved for court compliance
              purposes.
            </li>
            <li>
              <strong>9.4</strong> Deletion is permanent after the grace period
              and cannot be reversed.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            10. Limitation of Liability
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>10.1</strong> CoParentPro is provided &ldquo;as is&rdquo;
              without warranties of any kind, express or implied.
            </li>
            <li>
              <strong>10.2</strong> We are not liable for any indirect,
              incidental, special, consequential, or punitive damages.
            </li>
            <li>
              <strong>10.3</strong> Our total liability for any claims arising
              from your use of the App shall not exceed the amount you paid for
              the service in the 12 months preceding the claim.
            </li>
            <li>
              <strong>10.4</strong> We are not responsible for the actions or
              communications of other users.
            </li>
            <li>
              <strong>10.5</strong> The communication analysis feature is
              provided for informational purposes only and does not constitute
              professional advice.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            11. Indemnification
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You agree to indemnify and hold harmless Braveheart Innovations from
            any claims, damages, or expenses arising from your use of the App or
            violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            12. Termination
          </h2>
          <ul className="list-none text-neutral-700 mb-6 space-y-2">
            <li>
              <strong>12.1</strong> You may terminate your account at any time
              through the App settings.
            </li>
            <li>
              <strong>12.2</strong> We may suspend or terminate your account if
              you violate these Terms.
            </li>
            <li>
              <strong>12.3</strong> Upon termination, your right to use the App
              ceases immediately.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            13. Governing Law
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            These Terms are governed by the laws of the jurisdiction in which
            Braveheart Innovations operates, without regard to conflict of law
            principles.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            14. Changes to Terms
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We may update these Terms from time to time. Material changes will be
            communicated through the App. Your continued use after changes
            constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4">
            15. Contact
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            For questions about these Terms, please contact:
          </p>
          <p className="text-neutral-700 leading-relaxed">
            <strong>Braveheart Innovations</strong>
            <br />
            Email:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-primary hover:text-primary-dark underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </article>
      </Container>
    </section>
  );
}
