import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import { quotePath } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function MaintenanceSection({ locale }: { locale: Locale }) {
  const t = ui[locale].maintenance;
  const callPrefix = ui[locale].cta.callPrefix;

  return (
    <section id="maintenance" className="bg-white py-24 sm:py-32">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1 lg:col-span-7">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-[0_28px_60px_-36px_rgba(7,20,34,0.6)] lg:aspect-[5/4]">
            <Image
              src="/images/maintenance-pool.jpg"
              alt={t.photoAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-5">
          <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-pool-600 uppercase">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl leading-[1.08] font-medium tracking-tight text-balance text-navy-900 sm:text-5xl lg:text-[3.5rem]">
            {t.title}
          </h2>
          <span className="h-px w-16 bg-pool-500" aria-hidden />
          <p className="max-w-md text-base leading-relaxed text-pretty text-navy-700 sm:text-lg">{t.description}</p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={quotePath(locale, "maintenance")} className="btn btn-primary w-fit">
              {t.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={company.phoneHref} className="btn btn-line w-fit text-navy-900">
              <Phone className="h-4 w-4" aria-hidden />
              {callPrefix} {company.phone}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
