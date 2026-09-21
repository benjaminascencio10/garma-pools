import { company, companyText } from "@/data/company";
import { mainServices } from "@/data/services";
import type { Locale } from "@/i18n/locale";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

// Only includes fields we actually know. Address, geo coordinates, price
// range, hours, and review data are intentionally omitted until Garma Pools
// confirms them — do not add fabricated values here.
export function getLocalBusinessSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.name,
    telephone: company.phone,
    url: locale === "en" ? siteUrl : `${siteUrl}/es`,
    inLanguage: locale,
    areaServed: {
      "@type": "Place",
      name: companyText[locale].serviceRegion,
    },
    makesOffer: mainServices[locale].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  };
}
