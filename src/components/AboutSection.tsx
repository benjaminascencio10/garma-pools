import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function AboutSection({ locale }: { locale: Locale }) {
  const t = ui[locale].about;
  const photoAlt = ui[locale].construction.showcaseAlt;

  return (
    <section id="about" className="bg-sand-50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="pb-8">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-[0_28px_60px_-36px_rgba(7,20,34,0.65)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/construction-showcase.jpg"
                  alt={photoAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-4 rounded-2xl border border-navy-900/8 bg-white px-6 py-4 shadow-[0_18px_40px_-24px_rgba(7,20,34,0.6)] sm:left-8">
                <p className="font-serif text-4xl text-navy-900">{company.foundedYear}</p>
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-pool-600 uppercase">
                  {ui[locale].trust.establishedLabel}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-5 lg:py-6">
            <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-pool-600 uppercase">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-4xl leading-tight font-medium tracking-tight text-navy-900 sm:text-5xl">
              {t.tagline}
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-navy-700 sm:text-lg">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
              <p>{t.paragraph3}</p>
            </div>
            <p className="font-serif text-2xl text-navy-900 italic">{t.closingLine}</p>
            <p className="text-sm font-medium tracking-wide text-navy-700">{t.footnote}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
