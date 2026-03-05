import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/enquiries",
    "/advertisments",
  ];

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
