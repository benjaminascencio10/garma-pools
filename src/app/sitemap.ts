import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://garmapools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          es: `${siteUrl}/es`,
        },
      },
    },
    {
      url: `${siteUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          es: `${siteUrl}/es`,
        },
      },
    },
  ];
}
