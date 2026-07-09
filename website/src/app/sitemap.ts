import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL(siteConfig.url);
  const now = new Date();

  const routes = [
    "/",
    "/headsets",
    "/solutions",
    "/industries",
    "/our-clients",
    "/about-us",
    "/contact",
  ] as const;

  return routes.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

