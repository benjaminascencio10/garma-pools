import { company } from "@/data/company";
import { mainServices } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

// Only includes fields we actually know. Address, geo coordinates, price
// range, hours, and review data are intentionally omitted until Garma Pools
// confirms them — do not add fabricated values here.
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.name,
    telephone: company.phone,
    url: siteUrl,
    areaServed: {
      "@type": "Place",
      name: company.serviceRegion,
    },
    makesOffer: mainServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  };
}

export function getServiceSchema() {
  return mainServices.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: company.name,
      telephone: company.phone,
    },
    areaServed: {
      "@type": "Place",
      name: company.serviceRegion,
    },
  }));
}
