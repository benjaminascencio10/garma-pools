import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { QuoteWizard } from "@/components/QuoteWizard";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export const metadata: Metadata = {
  title: "Get a Free Pool Quote | Garma Pools",
  description:
    "Tell us about your pool project — construction, remodeling, or maintenance — and a Garma Pools representative will follow up with a custom quote.",
  alternates: {
    canonical: `${siteUrl}/quote`,
    languages: {
      en: `${siteUrl}/quote`,
      es: `${siteUrl}/es/quote`,
    },
  },
};

export default function QuotePage() {
  return (
    <>
      <Navbar locale="en" />
      <main className="pb-20 lg:pb-0">
        <Suspense fallback={null}>
          <QuoteWizard locale="en" />
        </Suspense>
      </main>
      <Footer locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  );
}
