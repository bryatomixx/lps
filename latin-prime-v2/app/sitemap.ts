import { MetadataRoute } from "next";
import { getAllNicheSlugs } from "@/lib/niches";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://latinprimesystems.com";
  const now = new Date();
  const slugs = getAllNicheSlugs();

  // Each URL gets an `alternates.languages` map → Next.js renders
  // <xhtml:link rel="alternate" hreflang="..."> per locale per entry.
  const nichePages = slugs.flatMap((slug) => [
    {
      url: `${base}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${base}/${slug}`,
          es: `${base}/es/${slug}`,
          "x-default": `${base}/${slug}`,
        },
      },
    },
    {
      url: `${base}/es/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: {
        languages: {
          en: `${base}/${slug}`,
          es: `${base}/es/${slug}`,
          "x-default": `${base}/${slug}`,
        },
      },
    },
  ]);

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: base,
          es: `${base}/es`,
          "x-default": base,
        },
      },
    },
    {
      url: `${base}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: base,
          es: `${base}/es`,
          "x-default": base,
        },
      },
    },
    {
      url: `${base}/dashboards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/dashboards`,
          es: `${base}/es/dashboards`,
          "x-default": `${base}/dashboards`,
        },
      },
    },
    {
      url: `${base}/es/dashboards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: {
        languages: {
          en: `${base}/dashboards`,
          es: `${base}/es/dashboards`,
          "x-default": `${base}/dashboards`,
        },
      },
    },
    {
      url: `${base}/starter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/starter`,
          es: `${base}/es/starter`,
          "x-default": `${base}/starter`,
        },
      },
    },
    {
      url: `${base}/es/starter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: {
        languages: {
          en: `${base}/starter`,
          es: `${base}/es/starter`,
          "x-default": `${base}/starter`,
        },
      },
    },
    {
      url: `${base}/pro`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/custom`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          en: `${base}/custom`,
          es: `${base}/es/custom`,
          "x-default": `${base}/custom`,
        },
      },
    },
    {
      url: `${base}/es/custom`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/custom`,
          es: `${base}/es/custom`,
          "x-default": `${base}/custom`,
        },
      },
    },
    ...nichePages,
  ];
}
