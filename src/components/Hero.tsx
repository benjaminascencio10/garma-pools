import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function Hero({ locale }: { locale: Locale }) {
  const t = ui[locale];

  return (
    <section id="top" className="relative -mt-24 overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-poolside.jpg"
          alt={t.hero.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/45 to-navy-950/80" />
      </div>

      <div className="relative flex min-h-screen flex-col pt-24">
        <Container className="flex flex-1 flex-col justify-center gap-6 py-12">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold whitespace-nowrap text-pool-100 uppercase tracking-[0.3em]">
                {t.hero.eyebrow}
              </p>
              <span className="hidden h-px max-w-[220px] flex-1 bg-white/30 sm:block" />
            </div>
            <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {t.hero.titleLine1}
              <br />
              <span className="text-pool-400">{t.hero.titleLine2}</span>
            </h1>
          </div>

          <p className="max-w-xl text-lg text-white/85 sm:text-xl">{t.hero.description}</p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="/quote"
              className="group relative isolate inline-flex items-center justify-center gap-2 rounded-full bg-pool-500 px-8 py-4 text-center text-base font-bold text-navy-950 shadow-lg shadow-pool-500/20 transition hover:-translate-y-0.5 hover:bg-pool-400"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-white/0 blur-xl transition-all duration-300 group-hover:scale-150 group-hover:bg-white/50" />
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#our-work"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-center text-base font-bold text-white transition hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-navy-950"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Container>

        <div className="border-t border-white/10 bg-navy-950/60 backdrop-blur-sm">
          <Container className="grid grid-cols-1 divide-y divide-white/15 py-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.hero.featureStrip.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-3 px-0 py-3 first:pt-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-pool-400">
                  <span className="h-2 w-2 rounded-full bg-pool-400" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{feature.title}</p>
                  <p className="text-xs text-white/70">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </Container>
        </div>
      </div>
    </section>
  );
}
