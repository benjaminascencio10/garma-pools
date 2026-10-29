import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceAreaHeatMap } from "@/components/ServiceAreaHeatMap";
import { serviceAreaCities } from "@/data/serviceAreas";
import { companyText } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function ServiceArea({ locale }: { locale: Locale }) {
  const t = ui[locale].serviceArea;
  const text = companyText[locale];
  const hasUnconfirmed = serviceAreaCities.some((city) => !city.confirmed);

  return (
    <section id="service-area" className="bg-navy-950 py-24 text-white sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={`${t.titlePrefix} ${text.serviceRegion}`}
            align="left"
            light
          />

          {hasUnconfirmed && (
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/70">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sand-400" aria-hidden />
                {t.legendConfirmed}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pool-400" aria-hidden />
                {t.legendUnconfirmed}
              </span>
            </div>
          )}

          <ul className="flex flex-wrap gap-2">
            {serviceAreaCities.map((city) => (
              <li key={city.name}>
                <span
                  className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90"
                  title={city.confirmed ? undefined : t.unconfirmedTooltip}
                >
                  {city.name}
                </span>
              </li>
            ))}
          </ul>

          {hasUnconfirmed && <p className="max-w-lg text-sm leading-relaxed text-white/65">{t.unconfirmedFootnote}</p>}
        </Reveal>

        <ServiceAreaHeatMap ariaLabel={t.mapAriaLabel} unconfirmedTooltip={t.unconfirmedTooltip} />
      </Container>
    </section>
  );
}
