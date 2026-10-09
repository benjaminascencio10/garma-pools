import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function AboutSection({ locale }: { locale: Locale }) {
  const t = ui[locale].about;

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-pool-600 uppercase">
            {t.eyebrow}
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            {t.heading}
          </h2>
          <p className="text-lg font-bold text-navy-900 sm:text-xl">{t.tagline}</p>

          <div className="flex flex-col gap-4 text-base text-navy-700/80">
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
            <p>{t.paragraph3}</p>
          </div>

          <p className="mt-2 text-lg font-extrabold text-pool-600">{t.closingLine}</p>
          <p className="text-sm text-navy-700/60">{t.footnote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
