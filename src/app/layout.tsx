import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { company } from "@/data/company";
import { getLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
  },
  twitter: {
    card: "summary",
    title: "Garma Pools | Pool Construction & Maintenance",
    description:
      "Pool construction, maintenance, cleaning, and repair for the Rio Grande Valley, Texas.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
