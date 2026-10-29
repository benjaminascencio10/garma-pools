import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { OurWorkSection } from "@/components/OurWorkSection";
import { AboutSection } from "@/components/AboutSection";
import { BrandsSection } from "@/components/BrandsSection";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { FinancingSection } from "@/components/FinancingSection";
import { ServiceArea } from "@/components/ServiceArea";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { getLocalBusinessSchema } from "@/lib/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export const metadata: Metadata = {
  title: {
    default: "Garma Pools | Construcción y Mantenimiento de Albercas en el Valle de Texas",
    template: "%s | Garma Pools",
  },
  description:
    "Garma Pools construye, mantiene y da servicio a albercas residenciales en el Valle de Texas (Rio Grande Valley). Cotiza gratis construcción, mantenimiento, limpieza o reparación de tu alberca.",
  keywords: [
    "construcción de albercas Valle de Texas",
    "constructor de albercas Rio Grande Valley",
    "mantenimiento de albercas Valle de Texas",
    "limpieza de albercas McAllen",
    "limpieza de albercas Edinburg",
    "limpieza de albercas Mission",
    "constructor de albercas McAllen",
    "constructor de albercas Brownsville",
    "mantenimiento de albercas Brownsville",
    "servicio de albercas Texas",
  ],
  openGraph: {
    title: "Garma Pools | Construcción y Mantenimiento de Albercas",
    description:
      "Construcción, mantenimiento, limpieza y reparación de albercas en el Valle de Texas. Cotiza gratis hoy mismo.",
    url: `${siteUrl}/es`,
    siteName: "Garma Pools",
    locale: "es_US",
    type: "website",
    images: [
      {
        url: "/images/hero-poolside.jpg",
        width: 2880,
        height: 1273,
        alt: "Alberca de patio con deck jets, piso de travertino y palmeras, construida por Garma Pools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garma Pools | Construcción y Mantenimiento de Albercas",
    description: "Construcción, mantenimiento, limpieza y reparación de albercas en el Valle de Texas.",
    images: ["/images/hero-poolside.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/es`,
    languages: {
      en: siteUrl,
      es: `${siteUrl}/es`,
    },
  },
};

export default function HomeEs() {
  const schema = getLocalBusinessSchema("es");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar locale="es" overlay />
      <main id="main" className="pb-24 lg:pb-0">
        <Hero locale="es" />
        <TrustStrip locale="es" />
        <Services locale="es" />
        <OurWorkSection locale="es" />
        <AboutSection locale="es" />
        <MaintenanceSection locale="es" />
        <BrandsSection locale="es" />
        <FinancingSection locale="es" />
        <ServiceArea locale="es" />
        <CTASection locale="es" />
      </main>
      <Footer locale="es" />
      <StickyMobileCTA locale="es" />
    </>
  );
}
