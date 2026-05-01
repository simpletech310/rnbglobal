import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { training } from "@/content/training";
import { industries } from "@/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();
  const pages = [
    "/",
    "/services",
    "/training",
    "/about",
    "/team",
    "/contact",
    "/request-quote",
    "/faq",
    "/privacy",
    "/terms",
  ].map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 }));

  const serviceUrls = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const trainingUrls = training.map((t) => ({
    url: `${base}/training/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const industryUrls = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...serviceUrls, ...trainingUrls, ...industryUrls];
}
