import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { company } from "@/data/company";
import { serviceAreaCities } from "@/data/serviceAreas";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/locale";

export function TrustStrip({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  const years = new Date().getFullYear() - company.foundedYear;
  const communities = serviceAreaCities.filter((city) => city.confirmed).length;
  const stats = [
    { value: company.foundedYear, label: copy.trust.establishedLabel, animate: false },
    { value: years, label: copy.trust.yearsLabel, animate: true },
    { value: communities, label: copy.trust.communitiesLabel, animate: true },
  ];

  return (
    <section className="relative z-20 -mt-16 sm:-mt-20" aria-label={copy.about.eyebrow}>
      <Container>
        <div className="overflow-hidden rounded-[1.75rem] border border-navy-900/8 bg-white shadow-[0_28px_70px_-40px_rgba(7,20,34,0.65)]">
          <div className="grid divide-y divide-navy-900/8 md:grid-cols-3 md:divide-x md:divide-y-0">
            {copy.hero.featureStrip.map((feature) => (
              <div key={feature.title} className="px-6 py-6 sm:px-8 sm:py-7">
                <p className="font-serif text-xl text-navy-900">{feature.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy-700">{feature.subtitle}</p>
              </div>
            ))}
          </div>
          <dl className="grid grid-cols-3 border-t border-navy-900/8 bg-sand-50">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse px-3 py-5 text-center sm:px-6 sm:py-6">
                <dt className="mt-1 text-[0.68rem] font-semibold tracking-[0.14em] text-pool-600 uppercase sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="font-serif text-3xl text-navy-900 sm:text-4xl">
                  {stat.animate ? <CountUp value={stat.value} /> : stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
