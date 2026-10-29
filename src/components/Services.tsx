import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mainServices } from "@/data/services";
import { ui } from "@/i18n/ui";
import { localizeHref } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function Services({ locale }: { locale: Locale }) {
  const t = ui[locale].services;

  return (
    <section id="services" className="bg-sand-50 py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {mainServices[locale].map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.key}>
                <Link
                  href={localizeHref(locale, service.href)}
                  className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-[0_24px_50px_-32px_rgba(7,20,34,0.7)] sm:min-h-[32rem]"
                >
                  <Image
                    src={service.photo}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-navy-950/5 transition duration-500 group-hover:via-navy-950/45" />
                  <div className="relative flex flex-col gap-3 p-7 text-white sm:p-9">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                      {service.description}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-pool-400">
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
