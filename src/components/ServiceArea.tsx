import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceAreaHeatMap } from "@/components/ServiceAreaHeatMap";
import { serviceAreaCities } from "@/data/serviceAreas";
import { companyText } from "@/data/company";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function ServiceArea({ locale }: { locale: Locale }) {
  const t = ui[locale].serviceArea;
  const text = companyText[locale];

  return (
    <section id="service-area" className="bg-navy-900 py-20 text-white sm:py-24">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={`${t.titlePrefix} ${text.serviceRegion}`}
          light
        />

        <ServiceAreaHeatMap ariaLabel={t.mapAriaLabel} unconfirmedTooltip={t.unconfirmedTooltip} />

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sand-500" aria-hidden />
            {t.legendConfirmed}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-pool-400/70" aria-hidden />
            {t.legendUnconfirmed}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreaCities.map((city) => (
            <span
              key={city.name}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85"
              title={city.confirmed ? undefined : t.unconfirmedTooltip}
            >
              {city.name}
            </span>
          ))}
        </div>

        <p className="max-w-lg text-sm text-white/60">{t.unconfirmedFootnote}</p>
      </Container>
    </section>
  );
}
