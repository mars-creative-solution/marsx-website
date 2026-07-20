import type { MetadataRoute } from "next";
import { NAV_LINKS } from "@/lib/content";

const BASE_URL = "https://marsx.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return NAV_LINKS.map(({ href }) => ({
    url: href === "/" ? BASE_URL : `${BASE_URL}${href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
