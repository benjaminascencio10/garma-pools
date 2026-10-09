import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { mainServices } from "@/data/services";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function Services({ locale }: { locale: Locale }) {
  const t = ui[locale].services;

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainServices[locale].map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.key}>
                <a
                  href={service.href}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-navy-900/10 bg-sky-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-pool-500/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pool-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900">{service.title}</h3>
                  <p className="flex-1 text-sm text-navy-700/80">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-pool-600 transition group-hover:gap-3 group-hover:text-pool-500">
                    {service.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
