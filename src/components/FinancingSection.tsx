import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { financingOptions } from "@/data/financing";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function FinancingSection({ locale }: { locale: Locale }) {
  const t = ui[locale].financing;

  return (
    <section id="financing" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {financingOptions.map((option) => (
            <Reveal key={option.id}>
              <article className="flex h-full flex-col gap-5 rounded-[1.75rem] border border-navy-900/8 bg-sand-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(7,20,34,0.45)] sm:p-10">
                <h3 className="font-serif text-3xl font-medium text-navy-900">{option.name}</h3>
                <p className="flex-1 text-base leading-relaxed text-navy-700">{t.options[option.id]}</p>
                <a
                  href={option.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-fit"
                >
                  {t.applyLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
