import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import { quotePath } from "@/lib/paths";
import type { Locale } from "@/i18n/locale";

export function Hero({ locale }: { locale: Locale }) {
  const t = ui[locale];

  return (
    <section id="top" className="relative isolate flex min-h-[84svh] items-center overflow-hidden bg-navy-950 text-white">
      <HeroBackdrop alt={t.hero.photoAlt} />
      {/* Readability scrim: a deep shadow over the left and bottom of the
          photo so the bright water never shows behind the headline. */}
      <div className="absolute inset-0 bg-navy-950/35 lg:bg-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,34,0.94)_0%,rgba(7,20,34,0.82)_32%,rgba(7,20,34,0.45)_58%,rgba(7,20,34,0.08)_85%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950/60 to-transparent" />

      <Container className="relative z-10 flex flex-col gap-8 py-32 sm:py-36">
        <div className="max-w-3xl">
          <p className="max-w-[19rem] text-[0.7rem] font-semibold tracking-[0.2em] text-balance text-pool-400 uppercase sm:max-w-none sm:text-[0.72rem] sm:tracking-[0.28em]">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.02] font-medium tracking-tight text-balance [text-shadow:0_2px_24px_rgba(7,20,34,0.55)] sm:text-6xl lg:text-7xl">
            {t.hero.titleLine1}
            <span className="mt-1 block italic text-pool-100">{t.hero.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 [text-shadow:0_1px_12px_rgba(7,20,34,0.6)] sm:text-xl">
            {t.hero.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href={quotePath(locale)} className="btn btn-light">
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href={company.phoneHref} className="btn btn-glass">
            <Phone className="h-4 w-4" aria-hidden />
            {t.cta.callPrefix} {company.phone}
          </a>
        </div>

        <a
          href="#services"
          className="w-fit text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white"
        >
          {t.hero.ctaSecondary}
        </a>
      </Container>
    </section>
  );
}
