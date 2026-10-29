import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { maintenanceBenefits } from "@/data/maintenance";
import { ui } from "@/i18n/ui";
import { quotePath } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function MaintenanceSection({ locale }: { locale: Locale }) {
  const t = ui[locale].maintenance;

  return (
    <section id="maintenance" className="bg-white py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-[0_28px_60px_-36px_rgba(7,20,34,0.6)]">
            <Image
              src="/images/maintenance-pool.jpg"
              alt={t.photoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-pool-600 uppercase">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl leading-tight font-medium tracking-tight text-navy-900 sm:text-5xl">
            {t.title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-navy-700 sm:text-lg">{t.description}</p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {maintenanceBenefits[locale].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.title}
                  className="flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-sand-50 px-4 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-pool-600 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-navy-900">{benefit.title}</span>
                </li>
              );
            })}
          </ul>

          <Link href={quotePath(locale, "maintenance")} className="btn btn-primary w-fit">
            {t.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
