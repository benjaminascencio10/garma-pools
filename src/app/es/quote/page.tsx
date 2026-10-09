import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { QuoteWizard } from "@/components/QuoteWizard";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export const metadata: Metadata = {
  title: "Cotiza Tu Alberca Gratis | Garma Pools",
  description:
    "Cuéntanos sobre tu proyecto de alberca — construcción, remodelación o mantenimiento — y un representante de Garma Pools te contactará con una cotización personalizada.",
  alternates: {
    canonical: `${siteUrl}/es/quote`,
    languages: {
      en: `${siteUrl}/quote`,
      es: `${siteUrl}/es/quote`,
    },
  },
};

export default function QuotePageEs() {
  return (
    <>
      <Navbar locale="es" />
      <main className="pb-20 lg:pb-0">
        <Suspense fallback={null}>
          <QuoteWizard locale="es" />
        </Suspense>
      </main>
      <Footer locale="es" />
      <StickyMobileCTA locale="es" />
    </>
  );
}
