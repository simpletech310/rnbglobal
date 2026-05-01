import { ArrowRight, Camera, ShieldCheck, Siren, Users } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

const iconMap = {
  shield: ShieldCheck,
  users: Users,
  camera: Camera,
  patrol: Siren,
  siren: Siren,
};

export const metadata = buildMetadata({
  title: "Security Services",
  description:
    "Uniformed guards, mobile patrol, event security, and CCTV installation across Southern California. BSIS-licensed, insured, owner-operated.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Security Services"
        title="Trained officers and reliable systems for every kind of property."
        intro="Whether you need a single doorman for one night or 24/7 coverage across a portfolio, we staff it with vetted, licensed officers and stand behind the work."
      />
      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="ring-focus group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-lg sm:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5">{s.name}</h3>
                <p className="mt-2 text-sm text-steel-600 sm:text-base">{s.short}</p>
                <p className="mt-4 line-clamp-3 text-sm text-steel-500">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-gold-700">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <CTASection
        title="Need coverage? Get a quote in 24 hours."
        intro="Tell us about the post — property type, hours, armed or unarmed — and we'll respond same business day with a transparent quote."
      />
    </>
  );
}
