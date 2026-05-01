import { BadgeCheck, Building2, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About R&B Global Security",
  description:
    "Founded in 1998, R and B Global Security is a California-licensed PPO providing contract security and BSIS-aligned training across Los Angeles and Orange counties.",
  path: "/about",
});

const values = [
  { name: "Professionalism", body: "Uniformed, courteous, and on time. Every shift, every post, every call." },
  { name: "Excellence", body: "We hire carefully and train continuously. Our standards survive the moments no one is watching." },
  { name: "Timeliness", body: "Reports the same shift. Quotes the same day. Coverage when we said we'd be there." },
];

const certifications = [
  "California PPO License (BSIS)",
  "BSIS-aligned Power to Arrest instructors",
  "Exposed Firearm Permit instructors",
  "Baton training instructors",
  "CPR / AED certified",
  "General liability and workers' compensation insured",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built on 27 years of doing the work right."
        intro={`${site.name} was founded in ${site.founded} by Raymond Baker — a security professional who'd seen enough firms cut corners and decided to build one that wouldn't.`}
      />

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="prose-content">
            <p className="text-lg text-steel-700 sm:text-xl">
              We're a Southern California security firm serving organizations that need reliable, licensed officers and individuals pursuing the
              California Guard Card or exposed firearm permit. Our work splits roughly evenly between contract security and training — and the two sides feed each other.
              The instructors who teach our classes are the same people who supervise our posts. The officers who pass through our courses
              meet our standards before we'd ever assign them to your property.
            </p>
            <p className="mt-5 text-base text-steel-700 sm:text-lg">
              We're owner-operated. When you pick up the phone, you reach a real person, and when something goes wrong, the
              owner is the one who answers. That's the standard the company was built on, and it hasn't changed in {site.yearsExperience}+ years.
            </p>

            <h3 className="mt-12">Our values</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.name} className="rounded-2xl border border-navy-100 bg-white p-5">
                  <p className="font-display text-lg font-bold text-navy-900">{v.name}</p>
                  <p className="mt-2 text-sm text-steel-600">{v.body}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12">Service area</h3>
            <p className="mt-3 text-base text-steel-700">
              Headquartered in Paramount, we primarily serve Los Angeles and Orange counties. We'll travel further for larger contracts and events.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.serviceArea.map((a) => (
                <span key={a} className="rounded-full bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-800 sm:text-sm">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white sm:p-8">
              <ShieldCheck className="h-8 w-8 text-gold-400" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">License</p>
              <p className="mt-2 text-2xl font-bold">{site.ppoLicense}</p>
              <p className="mt-1 text-sm text-navy-100">
                Licensed by the California Bureau of Security and Investigative Services.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
              <p className="eyebrow">Certifications & coverage</p>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-900">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
              <Building2 className="h-7 w-7 text-gold-600" />
              <p className="mt-3 font-semibold text-navy-900">Headquarters</p>
              <address className="mt-1 text-sm not-italic text-steel-600">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
              <Trophy className="h-7 w-7 text-gold-600" />
              <p className="mt-3 font-semibold text-navy-900">Founded</p>
              <p className="mt-1 text-sm text-steel-600">
                {site.founded} · {site.yearsExperience}+ years protecting Southern California
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/team"
            className="ring-focus inline-flex h-12 items-center justify-center rounded-lg border border-navy-200 px-5 font-semibold text-navy-900 hover:bg-navy-50"
          >
            Meet the team
          </Link>
          <Link
            href="/services"
            className="ring-focus inline-flex h-12 items-center justify-center rounded-lg bg-navy-900 px-5 font-semibold text-white hover:bg-navy-800"
          >
            See our services
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
