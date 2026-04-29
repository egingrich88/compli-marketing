import type { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/insights";

const BASE_URL = "https://compli.biz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                 lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/insights`,         lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/pricing`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/become-a-partner`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/features`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/login`,            lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`,          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,            lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/data-security`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getAllInsights().map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
