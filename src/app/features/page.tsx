import type { Metadata } from "next";
import { Container, Card, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore CoParentPro's features: AI communication analysis, shared calendars, court-compliant messaging, expense tracking, and more.",
};

const FEATURE_SECTIONS = [
  {
    badge: "Communication",
    title: "AI-Powered Communication Analysis",
    description:
      "Our on-device NLP engine analyzes your messages in real-time, providing color-coded feedback before you send. Green means constructive, yellow suggests caution, and red flags potentially harmful language.",
    details: [
      "Real-time tone analysis as you type",
      "Color-coded indicators (green, yellow, red)",
      "Suggestions for rephrasing when needed",
      "On-device processing — your messages stay private",
      "Tracks communication patterns over time",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    badge: "Scheduling",
    title: "Shared Custody Calendar",
    description:
      "A unified calendar that both parents can access. Create custody schedules, track handoffs, manage activities, and keep everyone on the same page — no more miscommunication about who has the kids.",
    details: [
      "Visual custody schedule with parent color coding",
      "Recurring events for regular custody patterns",
      "Activity tracking (school, sports, medical)",
      "Handoff time and location management",
      "Calendar sharing between co-parents",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    badge: "Messaging",
    title: "Secure, Court-Compliant Messaging",
    description:
      "Every message is timestamped, stored securely, and available for export with integrity verification. Read receipts and delivery confirmations ensure accountability.",
    details: [
      "End-to-end message storage with timestamps",
      "Read receipts and delivery status",
      "SHA-256 integrity verification for exports",
      "Professional report formatting for legal use",
      "Unlimited message history",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    badge: "Finance",
    title: "Expense Tracking & Splitting",
    description:
      "Keep a clear record of child-related expenses. Log costs, attach receipts, request reimbursements, and maintain a transparent financial history that both parents can review.",
    details: [
      "Log and categorize child-related expenses",
      "Request and track reimbursements",
      "Attach photos of receipts",
      "Shared expense history",
      "Export financial summaries",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    badge: "Information",
    title: "Child Information Sharing",
    description:
      "Store and share important child details — medical contacts, school information, emergency contacts, and more. Both parents always have access to critical information.",
    details: [
      "Medical provider contacts and records",
      "School and activity information",
      "Emergency contact lists",
      "Medication and allergy tracking",
      "Secure sharing between co-parents",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    badge: "Security",
    title: "Enterprise-Grade Security",
    description:
      "Your family's data is protected with the same security standards used by major institutions. Firebase Authentication, Firestore security rules, and comprehensive audit logging.",
    details: [
      "TLS/SSL encryption in transit and at rest",
      "Firebase Authentication with secure tokens",
      "Role-based access controls",
      "Comprehensive audit logging",
      "GDPR-compliant data handling",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light to-white py-16 sm:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
              Features built for real families
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              Every feature in CoParentPro was designed with one goal: helping
              you co-parent effectively while keeping your children first.
            </p>
          </div>
        </Container>
      </section>

      {/* Feature sections */}
      {FEATURE_SECTIONS.map((section, index) => (
        <section
          key={section.title}
          className={`py-16 sm:py-20 ${index % 2 === 0 ? "bg-white" : "bg-neutral-100"}`}
        >
          <Container>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  {section.badge}
                </span>
                <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placeholder illustration */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <Card interactive={false} className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-primary-light to-secondary-light">
                  <div className="text-primary opacity-40">
                    {section.icon}
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience all features free for 7 days
            </h2>
            <p className="mt-4 text-lg text-white/80">
              No credit card required. Cancel anytime.
            </p>
            <div className="mt-8">
              <Button href="/pricing" variant="secondary" size="lg" className="bg-white text-primary hover:bg-neutral-100 border-white">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
