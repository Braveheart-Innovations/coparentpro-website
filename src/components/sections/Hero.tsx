import { Container, AppStoreBadges, Badge } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light to-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <Badge variant="secondary" className="mb-6">
              7-day free trial
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
              Co-parent with{" "}
              <span className="text-primary">clarity</span> and{" "}
              <span className="text-secondary">confidence</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-700 leading-relaxed">
              AI-powered communication analysis helps you keep conversations
              constructive. Shared calendars, court-compliant messaging, and
              smart tools — all in one app designed for families in transition.
            </p>

            <div className="mt-8">
              <AppStoreBadges direction="row" />
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Free to try. No credit card required.
            </p>
          </div>

          {/* Phone mockup placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-72 h-[580px] rounded-[3rem] bg-neutral-900 p-3 shadow-2xl">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-primary-light via-white to-secondary-light flex items-center justify-center">
                <div className="text-center px-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo.png"
                    alt="CoParentPro"
                    width={80}
                    height={80}
                    className="mx-auto mb-4 opacity-60"
                  />
                  <p className="text-sm text-neutral-500 font-medium">
                    App screenshot coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
