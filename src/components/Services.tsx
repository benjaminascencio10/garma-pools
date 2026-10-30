import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mainServices } from "@/data/services";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function Services({ locale }: { locale: Locale }) {
  const t = ui[locale].services;

  return (
    <section id="services" className="bg-sand-50 py-24 sm:py-32">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <Reveal>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        </Reveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {mainServices[locale].map((service, index) => (
            <Reveal key={service.key}>
              <Link
                href={service.cardHref}
                aria-label={service.title}
                className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-[0_30px_60px_-34px_rgba(7,20,34,0.75)] outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_70px_-34px_rgba(7,20,34,0.85)] focus-visible:ring-4 focus-visible:ring-pool-400/60 sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6]"
              >
                <Image
                  src={service.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="-z-10 object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08]"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent transition duration-500 group-hover:from-navy-950 group-hover:via-navy-950/45" />
                <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-navy-950/45 to-transparent" />

                <span className="absolute top-5 left-6 font-serif text-sm tracking-[0.2em] text-white/80 sm:top-7 sm:left-8">
                  0{index + 1}
                </span>

                <div className="flex items-end justify-between gap-4 p-6 sm:p-8">
                  <h3 className="font-serif text-3xl leading-tight font-medium tracking-tight text-white sm:text-4xl">
                    {service.cardTitle}
                  </h3>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:text-navy-950">
                    <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:rotate-45" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
