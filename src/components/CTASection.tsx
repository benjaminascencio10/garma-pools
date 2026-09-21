import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function CTASection() {
  return (
    <section id="contact" className="bg-pool-500 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Ready to Take Care of Your Pool?
        </h2>
        <p className="max-w-xl text-navy-950/80">
          Whether you&apos;re building a new pool or need reliable maintenance,
          let&apos;s talk about your project.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#quote"
            className="rounded-full bg-navy-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-navy-900"
          >
            Get a Quote
          </a>
          <a
            href={company.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-navy-950 px-8 py-4 text-sm font-bold text-navy-950 transition hover:bg-navy-950 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {company.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
