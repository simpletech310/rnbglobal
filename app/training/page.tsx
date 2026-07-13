import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { training } from "@/content/training";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Security Training & California Guard Card Courses",
  description:
    "BSIS-aligned California Guard Card, exposed firearm permit, baton, CPR, handcuff, and pepper spray training in Paramount, CA. Small classes, real range time, certificates the same day.",
  path: "/training",
  keywords: [
    "California Guard Card class",
    "BSIS Power to Arrest training",
    "exposed firearm permit California",
    "baton certification California",
    "CPR AED certification security",
    "pepper spray training",
    "handcuff training",
    "guard card Paramount CA",
    "Los Angeles guard card school",
  ],
});

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Get your Guard Card. Get armed. Get hired."
        intro="We run the courses California requires to work as a security officer: Power to Arrest, firearm, baton, CPR, handcuff, and pepper spray, in small classes with experienced instructors."
      />

      <section className="bg-bone-100">
        <div className="container-x py-12 sm:py-20 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {training.map((t, idx) => (
              <Link
                key={t.slug}
                href={`/training/${t.slug}`}
                className="ring-focus group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-ink-500">
                    Course / {String(idx + 1).padStart(2, "0")}
                  </span>
                  {t.bsisAligned && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-300/60 bg-signal-50 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-signal-700">
                      <BadgeCheck className="h-3 w-3" />
                      BSIS
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-xl sm:text-[1.375rem]">
                  {t.name.replace(/\s*\(.+?\)\s*/g, "")}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{t.short}</p>

                <div className="mt-6 flex items-center justify-between border-t border-ink-200/70 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-700">
                      <Clock className="h-3 w-3 text-signal-500" />
                      {t.hours}
                    </span>
                  </div>
                  <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink-900">
                    {t.price}
                  </span>
                </div>

                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal-600 group-hover:text-signal-700">
                  Course details
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
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
