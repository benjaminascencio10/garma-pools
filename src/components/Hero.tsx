import Image from "next/image";
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/20 to-navy-950/60" />
      </div>

      <Container className="relative flex min-h-screen flex-col justify-center gap-6 pt-24 pb-16">
        <div>
          <p className="text-sm font-bold tracking-[0.3em] text-pool-100 uppercase">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>
        </div>

        <p className="max-w-xl text-lg text-white/85 sm:text-xl">{t.hero.description}</p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href="/quote"
            className="group relative isolate inline-flex items-center justify-center rounded-full bg-pool-500 px-8 py-4 text-center text-base font-bold text-navy-950 shadow-lg shadow-pool-500/20 transition hover:-translate-y-0.5 hover:bg-pool-400"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-white/0 blur-xl transition-all duration-300 group-hover:scale-150 group-hover:bg-white/50" />
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#our-work"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-center text-base font-bold text-white transition hover:-translate-y-0.5 hover:scale-105 hover:bg-white hover:text-navy-950"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </Container>
    </section>
  );
}
