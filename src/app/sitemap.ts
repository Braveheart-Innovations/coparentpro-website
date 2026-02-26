import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/pricing",
    "/support",
    "/privacy",
    "/terms",
    "/licenses",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-02-25"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/features" || route === "/pricing" ? 0.8 : 0.5,
  }));
}
