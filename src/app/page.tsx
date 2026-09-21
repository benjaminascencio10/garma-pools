import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { QuoteWizard } from "@/components/QuoteWizard";
import { QuickQuoteCalculator } from "@/components/QuickQuoteCalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { ConstructionSection } from "@/components/ConstructionSection";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServiceArea } from "@/components/ServiceArea";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Services />
        <QuoteWizard />
        <QuickQuoteCalculator />
        <HowItWorks />
        <ConstructionSection />
        <MaintenanceSection />
        <ProductsSection />
        <ServiceArea />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
