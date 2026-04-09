import { MetadataRoute } from "next";
import { getAllNicheSlugs } from "@/lib/niches";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://latinprimesystems.com";
  const now = new Date();
  const slugs = getAllNicheSlugs();

  const nichePages = slugs.flatMap((slug) => [
    {
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/es/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]);

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...nichePages,
  ];
}
