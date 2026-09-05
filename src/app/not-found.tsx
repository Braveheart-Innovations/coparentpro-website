import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-linear-to-b from-primary-light to-paper py-24 sm:py-32">
      <Container size="xs">
        <div className="text-center">
          <p className="font-serif text-7xl font-medium text-primary">404</p>
          <h1 className="mt-4 font-serif text-[32px] font-medium leading-[1.15] sm:text-[38px]">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            Sorry, we couldn’t find the page you’re looking for. It may have been
            moved or no longer exists.
          </p>
          <Button href="/" className="mt-8">
            Go back home
          </Button>
        </div>
      </Container>
    </section>
  );
}
