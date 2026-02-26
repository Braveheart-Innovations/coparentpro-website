import { Container, AppStoreBadges } from "@/components/ui";

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-24 bg-primary" id="download">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to communicate better?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join thousands of co-parents who are building a healthier
            co-parenting relationship. Start your free trial today.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreBadges direction="row" />
          </div>
        </div>
      </Container>
    </section>
  );
}
