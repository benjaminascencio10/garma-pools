import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

        <div className="flex h-56 w-full max-w-2xl flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-white/20 bg-white/5">
          <MapPin className="h-8 w-8 text-pool-100" aria-hidden />
          <p className="text-sm font-semibold text-white/70">{t.mapPlaceholder}</p>
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
