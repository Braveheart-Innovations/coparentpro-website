import { Container } from "@/components/ui";

const STEPS = [
  {
    number: "1",
    title: "Create your account",
    description:
      "Sign up in seconds with your email, Google, or Apple account. Set up your profile and family details.",
    color: "bg-primary text-white",
  },
  {
    number: "2",
    title: "Connect with your co-parent",
    description:
      "Search for your co-parent securely within the app and send a connection request. Once accepted, you\u2019ll share a private communication channel.",
    color: "bg-secondary text-white",
  },
  {
    number: "3",
    title: "Communicate with confidence",
    description:
      "Send messages with real-time tone analysis, manage shared calendars, and track expenses — all in one place.",
    color: "bg-tertiary text-white",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 bg-neutral-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Get started in three simple steps
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            From download to your first constructive conversation — it only takes minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-2xl font-bold mx-auto mb-6`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
