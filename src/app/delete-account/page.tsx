import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/sections";
import { SUPPORT_EMAIL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "How to delete your CoParentPro account in the app or by email, what happens during the 30-day grace period, and what is removed or kept.",
};

const IN_APP_STEPS = [
  "Open CoParentPro and go to Settings.",
  "Tap Account, then Account & Security.",
  "Tap Delete My Account and confirm your identity (password, Google, or Apple).",
  "Type DELETE to confirm. You are signed out and the deletion is scheduled.",
] as const;

const DELETED = [
  "Your profile, sign-in credentials, and preferences",
  "Your notification history, device tokens, and calendar settings",
  "Files, photos, and receipts you uploaded",
  "Your Insights and court-export records",
  "Children you added when no other parent is linked to them",
] as const;

const KEPT = [
  "Messages you sent stay in your co-parent’s conversation with your name replaced by “Deleted User”, so their record stays complete.",
  "Shared records the other parent still uses (calendar events, expenses, children linked to both parents) stay with that parent.",
  "Audit logs of report exports are retained for legal compliance.",
] as const;

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Your data"
        title="Delete your account"
        description="You can delete your CoParentPro account from inside the app or by email. Either way there is a 30-day grace period in which you can change your mind."
        width="sm"
        bottom="tight"
      />

      <section className="pt-6 pb-16 sm:pt-10 sm:pb-20">
        <Container size="sm">
          <article className="max-w-3xl">
            <h2 className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mb-4">
              In the app
            </h2>
            <ol className="list-decimal list-inside text-neutral-700 mb-8 space-y-2 leading-relaxed">
              {IN_APP_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2 className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mt-10 mb-4">
              Without the app
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you no longer have the app installed, email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20account`}
                className="text-primary hover:text-primary-dark underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              with the subject “Delete my account”, from the email address on
              your account. We confirm the request with you, schedule the
              deletion, and reply when it is done. Requests are handled within
              the time required by law, usually within a few business days.
            </p>

            <h2 className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mt-10 mb-4">
              The 30-day grace period
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              The moment a deletion is scheduled, your connections to your
              co-parent and any family members end, your push notifications
              stop, and you are signed out on every device. Your data is then
              permanently deleted 30 days later.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              To keep the account, sign back in within those 30 days and tap{" "}
              <strong>Restore my account</strong>. Restoring brings back your
              records, but not your connections: send a new connection request
              to reconnect with your co-parent.
            </p>

            <h2 className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mt-10 mb-4">
              What is deleted
            </h2>
            <ul className="list-disc list-inside text-neutral-700 mb-8 space-y-1 leading-relaxed">
              {DELETED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mt-10 mb-4">
              What is kept
            </h2>
            <ul className="list-disc list-inside text-neutral-700 mb-8 space-y-1 leading-relaxed">
              {KEPT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-[26px] font-medium leading-[1.2] text-neutral-900 mt-10 mb-4">
              Subscriptions
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Deleting your account does not cancel a Premium subscription.
              Cancel it through the store before you delete: on iOS, Settings
              &gt; Apple ID &gt; Subscriptions; on Android, Google Play &gt;
              Menu &gt; Subscriptions. You keep Premium until the end of the
              billing period you already paid for.
            </p>

            <p className="mt-10 text-sm leading-[1.65] text-neutral-500">
              Want a copy of your data first? See section 7 of the{" "}
              <Link href="/privacy" className="font-semibold text-primary hover:text-primary-dark">
                Privacy Policy
              </Link>
              , or use Settings &gt; Data Export &gt; Request My Data in the app.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
