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
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      es: `${siteUrl}/es`,
    },
  },
};

export default function Home() {
  const schema = getLocalBusinessSchema("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar locale="en" overlay />
      <main id="main" className="pb-24 lg:pb-0">
        <Hero locale="en" />
        <TrustStrip locale="en" />
        <Services locale="en" />
        <OurWorkSection locale="en" />
        <AboutSection locale="en" />
        <MaintenanceSection locale="en" />
        <BrandsSection locale="en" />
        <FinancingSection locale="en" />
        <ServiceArea locale="en" />
        <CTASection locale="en" />
      </main>
      <Footer locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  );
}
