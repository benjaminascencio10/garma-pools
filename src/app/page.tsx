import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { ConstructionSection } from "@/components/ConstructionSection";
import { BrandsSection } from "@/components/BrandsSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { MaintenanceSection } from "@/components/MaintenanceSection";
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
      <Navbar locale="en" />
      <main className="pb-20 lg:pb-0">
        <Hero locale="en" />
        <Services locale="en" />
        <AboutSection locale="en" />
        <OurWorkSection locale="en" />
        <ConstructionSection locale="en" />
        <BrandsSection locale="en" />
        <MaintenanceSection locale="en" />
        <ServiceArea locale="en" />
        <CTASection locale="en" />
      </main>
      <Footer locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  );
}
