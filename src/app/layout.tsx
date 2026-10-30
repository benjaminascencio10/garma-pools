import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { company } from "@/data/company";
import { LangSync } from "@/components/LangSync";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const ogImage = {
  url: "/images/hero-poolside.jpg",
  width: 2880,
  height: 1273,
  alt: "Backyard pool with deck jets, travertine patio, and palm trees built by Garma Pools",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Garma Pools | Pool Construction & Maintenance in the Rio Grande Valley",
    template: "%s | Garma Pools",
  },
  description:
    "Garma Pools builds, maintains, and services residential pools across the Rio Grande Valley, Texas. Get a free quote for pool construction, maintenance, cleaning, or repair.",
  keywords: [
    "pool construction Rio Grande Valley",
    "pool builder Rio Grande Valley",
    "pool maintenance Rio Grande Valley",
    "pool cleaning McAllen",
    "pool cleaning Edinburg",
    "pool cleaning Mission",
    "pool builder McAllen",
    "pool builder Brownsville",
    "pool maintenance Brownsville",
    "pool service Texas",
  ],
  openGraph: {
    title: "Garma Pools | Pool Construction & Maintenance",
    description:
      "Pool construction, maintenance, cleaning, and repair for the Rio Grande Valley, Texas. Get a free quote today.",
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garma Pools | Pool Construction & Maintenance",
    description:
      "Pool construction, maintenance, cleaning, and repair for the Rio Grande Valley, Texas.",
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <LangSync />
        {children}
      </body>
    </html>
  );
}
