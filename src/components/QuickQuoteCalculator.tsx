import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { quickQuoteCards } from "@/data/quickQuote";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function QuickQuoteCalculator({ locale }: { locale: Locale }) {
  const t = ui[locale].quickQuote;

  return (
    <section className="bg-sky-50 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickQuoteCards[locale].map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="flex flex-col gap-2 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-sm font-extrabold text-navy-900">{card.title}</span>
              <span className="text-xs text-navy-700/70">{card.description}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
