import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FinancingSection } from "@/components/FinancingSection";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export const metadata: Metadata = {
  title: "Opciones de Financiamiento | Garma Pools",
  description:
    "Financia tu proyecto con Garma Pools a través de Lyon Financial y HFS Financial — plazos flexibles y pagos mensuales que se ajustan a tu presupuesto.",
  alternates: {
    canonical: `${siteUrl}/es/finance`,
    languages: {
      en: `${siteUrl}/finance`,
      es: `${siteUrl}/es/finance`,
    },
  },
};

export default function FinancePageEs() {
  return (
    <>
      <Navbar locale="es" />
      <main className="pb-20 lg:pb-0">
        <FinancingSection locale="es" />
      </main>
      <Footer locale="es" />
      <StickyMobileCTA locale="es" />
    </>
  );
}
