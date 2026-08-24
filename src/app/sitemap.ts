import type { MetadataRoute } from "next";
import { SITE_URL, routes } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home,
    routes.programs,
    routes.pricing,
    routes.about,
    routes.resources,
    routes.book,
  ];

  return paths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: new Date("2026-08-24"),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.7,
  }));
}
