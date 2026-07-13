import type { Metadata } from "next";
import { site } from "@/content/site";

const DEFAULT_KEYWORDS = [
  "security guards California",
  "Los Angeles security company",
  "Orange County security",
  "Paramount security",
  "uniformed guards",
  "mobile patrol",
  "event security",
  "armed security",
  "BSIS guard card training",
  "exposed firearm permit",
  "California PPO",
  "R&B Global Security",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const base = site.url.replace(/\/$/, "");
  const fullTitle = path === "/" ? `${site.name} - ${site.tagline}` : `${title} | ${site.name}`;
  const url = `${base}${path}`;
  // Resolve the image to an absolute URL, required for OG/Twitter cards.
  const ogImage = (() => {
    if (!image) return `${base}/opengraph-image`;
    if (/^https?:\/\//i.test(image)) return image;
    return `${base}${image.startsWith("/") ? "" : "/"}${image}`;
  })();

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...(keywords ?? []), ...DEFAULT_KEYWORDS])),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "Security Services",
  };
}
