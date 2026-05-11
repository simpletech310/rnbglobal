import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { team } from "@/content/team";
import { photos } from "@/content/photos";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Meet the Team",
  description:
    "Owner-operated by Raymond Baker, R and B Global Security pairs experienced supervisors with vetted, BSIS-licensed officers across every post.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind every post."
        intro="Owner-operated and supervisor-driven. The instructors who teach our classes are the same people who run our posts — accountability runs top to bottom."
      />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {team.map((m) => (
              <article
                key={m.name}
                className="overflow-hidden rounded-2xl border border-ink-200/70 bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
                  <Image
                    src={photos.founder.src}
                    alt={`Portrait of ${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover opacity-90"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="mono-tag text-bone-300/85">
                      {m.role}
                    </span>
                    <p className="mt-1 font-display text-xl font-semibold text-bone-50 sm:text-2xl">
                      {m.name}
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-ink-700 sm:text-base sm:leading-relaxed">{m.bio}</p>
                  {m.certifications && m.certifications.length > 0 && (
                    <ul className="mt-6 space-y-2.5 border-t border-ink-200/70 pt-5">
                      {m.certifications.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-sm text-ink-800">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}

            <article className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-ink-300 bg-bone-50 p-7 sm:p-8 lg:col-span-2">
              <span className="mono-tag text-ink-500">More of the team</span>
              <p className="mt-3 font-display text-xl text-ink-900 sm:text-2xl">
                Supervisors, instructors, and senior officers coming soon.
              </p>
              <p className="mt-3 text-sm text-ink-600 sm:text-base">
                Headshots and bios for the rest of the leadership team are being added here.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
