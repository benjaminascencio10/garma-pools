import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/data/howItWorks";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function HowItWorks({ locale }: { locale: Locale }) {
  const t = ui[locale].howItWorks;

  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps[locale].map((item) => (
            <div
              key={item.number}
              className="relative flex flex-col gap-3 rounded-3xl border border-navy-900/10 bg-sky-50 p-6"
            >
              <span className="text-4xl font-extrabold text-pool-500/40">{item.number}</span>
              <h3 className="text-lg font-extrabold text-navy-900">{item.title}</h3>
              <p className="text-sm text-navy-700/80">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
