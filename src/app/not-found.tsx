import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-6xl font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            Page not found
          </h1>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved or no longer exists.
          </p>
          <Button href="/">Go back home</Button>
        </div>
      </Container>
    </section>
  );
}
