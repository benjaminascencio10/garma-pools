import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { financingOptions } from "@/data/financing";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function FinancingSection({ locale }: { locale: Locale }) {
  const t = ui[locale].financing;

  return (
    <section id="financing" className="bg-sky-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid gap-6 sm:grid-cols-2">
          {financingOptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-col gap-4 rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-extrabold text-navy-900">{option.name}</h3>
              <p className="flex-1 text-sm text-navy-700/80">{t.options[option.id]}</p>
              <a
                href={option.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-pool-500 px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-pool-400"
              >
                {t.applyLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
