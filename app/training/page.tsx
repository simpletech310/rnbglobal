import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, DollarSign } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { training } from "@/content/training";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security Training & Guard Card Courses",
  description:
    "BSIS-aligned Guard Card, firearm, baton, CPR, handcuff, and pepper spray training in Paramount, CA. Small classes, real range time, certificates the same day.",
  path: "/training",
});

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Get your California Guard Card. Get armed. Get hired."
        intro="We run the courses California requires to work as a security officer — Power to Arrest, firearm, baton, CPR, handcuff, and pepper spray — in small classes with experienced instructors."
      />

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {training.map((t) => (
            <Link
              key={t.slug}
              href={`/training/${t.slug}`}
              className="ring-focus group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              {t.bsisAligned && (
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-800">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  BSIS-aligned
                </span>
              )}
              <h3 className="text-lg font-semibold text-navy-900 sm:text-xl">{t.name}</h3>
              <p className="mt-2 text-sm text-steel-600">{t.short}</p>
              <div className="mt-5 flex items-center gap-4 text-sm font-semibold text-navy-900">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gold-600" /> {t.hours}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-gold-600" /> {t.price.replace("$", "")}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-gold-700">
                Course details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to enroll?"
        intro="Send us your name, the course you want, and we'll reply with the next available class dates."
        primaryHref="/contact?topic=training"
        primaryLabel="Inquire about classes"
      />
    </>
  );
}
