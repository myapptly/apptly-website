import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", frequency: "weekly" as const, priority: 1 },
    { path: "/services", frequency: "weekly" as const, priority: 0.9 },
    { path: "/reviews", frequency: "monthly" as const, priority: 0.7 },
    { path: "/winston-salem-web-design", frequency: "monthly" as const, priority: 0.9 },
    { path: "/start-your-project", frequency: "monthly" as const, priority: 0.8 },
    { path: "/privacy", frequency: "yearly" as const, priority: 0.3 },
    { path: "/terms", frequency: "yearly" as const, priority: 0.3 },
  ];

  return pages.map(({ path, frequency, priority }) => ({
    url: `https://www.myapptly.com${path}`,
    changeFrequency: frequency,
    priority,
  }));
}
