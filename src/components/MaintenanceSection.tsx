import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { maintenanceBenefits } from "@/data/maintenance";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function MaintenanceSection({ locale }: { locale: Locale }) {
  const t = ui[locale].maintenance;

  return (
    <section id="maintenance" className="bg-sky-50 py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <PlaceholderImage
          label={t.photoPlaceholder}
          caption={ui[locale].photoPlaceholderLabel}
          className="order-2 h-80 w-full lg:order-1 lg:h-full"
        />

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
            align="left"
          />

          <div className="grid grid-cols-2 gap-4">
            {maintenanceBenefits[locale].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="flex flex-col items-start gap-2 rounded-2xl border border-navy-900/10 bg-white p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pool-500/10 text-pool-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-sm font-bold text-navy-900">{benefit.title}</p>
                </div>
              );
            })}
          </div>

          <a
            href="#quote"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-pool-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-pool-400"
          >
            {t.ctaLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
