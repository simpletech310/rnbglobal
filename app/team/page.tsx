import { BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { team } from "@/content/team";
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

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <span className="font-display text-3xl font-bold tracking-tight">{m.initials}</span>
              </div>
              <h3 className="mt-5">{m.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">{m.role}</p>
              <p className="mt-4 text-sm text-steel-700 sm:text-base">{m.bio}</p>
              {m.certifications && m.certifications.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {m.certifications.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-navy-900">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-navy-200 bg-navy-50/40 p-6 text-navy-700 sm:p-8">
            <p className="font-semibold text-navy-900">More of the team coming soon.</p>
            <p className="mt-2 text-sm text-steel-600">
              Headshots and bios for our supervisors, instructors, and senior officers are being added here.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
