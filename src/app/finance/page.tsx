import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FinancingSection } from "@/components/FinancingSection";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export const metadata: Metadata = {
  title: "Financing Options | Garma Pools",
  description:
    "Finance your Garma Pools project with trusted lenders Lyon Financial and HFS Financial — flexible terms and monthly payments that fit your budget.",
  alternates: {
    canonical: `${siteUrl}/finance`,
    languages: {
      en: `${siteUrl}/finance`,
      es: `${siteUrl}/es/finance`,
    },
  },
};

export default function FinancePage() {
  return (
    <>
      <Navbar locale="en" />
      <main className="pb-20 lg:pb-0">
        <FinancingSection locale="en" />
      </main>
      <Footer locale="en" />
      <StickyMobileCTA locale="en" />
    </>
  );
}
