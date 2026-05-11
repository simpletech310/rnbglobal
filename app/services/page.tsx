import { ArrowUpRight, Camera, ShieldCheck, Siren, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";
import { photos } from "@/content/photos";
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
        title="Trained officers. Reliable systems."
        intro="Whether you need a single doorman for one night or 24/7 coverage across a portfolio, we staff it with vetted, licensed officers and stand behind the work."
      />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {services.map((s, idx) => {
              const Icon = iconMap[s.icon];
              const photo = photos.services[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="ring-focus group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5"
                >
                  {photo && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/15 to-transparent" />
                      <span className="absolute left-5 top-5 mono-tag text-bone-50">
                        {String(idx + 1).padStart(2, "0")} / Service
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-signal-400">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="text-2xl">{s.name}</h3>
                    </div>
                    <p className="mt-4 text-base font-medium text-ink-700">{s.short}</p>
                    <p className="mt-3 line-clamp-3 text-sm text-ink-500">{s.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal-600 group-hover:text-signal-700">
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need coverage? Get a quote in 24 hours."
        intro="Tell us about the post — property type, hours, armed or unarmed — and we'll respond same business day with a transparent quote."
      />
    </>
  );
}
