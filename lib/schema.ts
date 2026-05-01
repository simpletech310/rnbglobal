import { site, formattedAddress } from "@/content/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  foundingDate: String(site.founded),
};

export const courseSchema = (course: { name: string; description: string; price: string; hours: string; slug: string }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.name,
  description: course.description,
  provider: {
    "@type": "Organization",
    name: site.name,
    sameAs: site.url,
  },
  offers: {
    "@type": "Offer",
    price: course.price.replace(/[^0-9.]/g, ""),
    priceCurrency: "USD",
    url: `${site.url}/training/${course.slug}`,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: { "@type": "Place", address: formattedAddress },
    courseWorkload: course.hours,
  },
});

export const serviceSchema = (s: { name: string; description: string; slug: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  provider: { "@type": "Organization", name: site.name, sameAs: site.url },
  areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
  url: `${site.url}/services/${s.slug}`,
});

export const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.question,
    acceptedAnswer: { "@type": "Answer", text: i.answer },
  })),
});
