import { BadgeCheck, Building2, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About R&B Global Security",
  description:
    "Founded in 1998, R and B Global Security is a California-licensed PPO providing contract security guards and BSIS-aligned training across Los Angeles, Orange County, and the Inland Empire.",
  path: "/about",
  keywords: [
    "about R&B Global Security",
    "Raymond Baker security",
    "California PPO license",
    "owner-operated security",
    "Paramount California security firm",
    "Southern California security history",
  ],
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

const stats = [
  { value: `${site.yearsExperience}+`, label: "Years operating", caption: `Since ${site.founded}` },
  { value: "24/7", label: "Dispatch", caption: "For active clients" },
  { value: "10K+", label: "Shifts logged", caption: "Across SoCal posts" },
  { value: "4", label: "Counties served", caption: "LA · OC · LB · IE" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Built on ${site.yearsExperience} years of doing the work right.`}
        intro={`${site.name} was founded in ${site.founded} by Raymond Baker, a security professional who'd seen enough firms cut corners and decided to build one that wouldn't.`}
      />

      <section className="bg-bone-100">
        <div className="container-x py-12 sm:py-20 lg:py-24">
          <Stats items={stats} tone="light" />
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="container-x py-12 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <p className="font-display text-2xl tracking-[-0.02em] text-ink-900 sm:text-[1.75rem] sm:leading-[1.25]">
                We're a Southern California security firm serving organizations that need reliable, licensed officers and individuals pursuing the California Guard Card or exposed firearm permit.
              </p>
              <p className="mt-6 text-base text-ink-600 sm:text-lg sm:leading-relaxed">
                Our work splits roughly evenly between contract security and training, and the two sides feed each other. The instructors who teach our classes are the same people who supervise our posts. The officers who pass through our courses meet our standards before we'd ever assign them to your property.
              </p>
              <p className="mt-5 text-base text-ink-600 sm:text-lg sm:leading-relaxed">
                We're owner-operated. When you pick up the phone, you reach a real person, and when something goes wrong, the owner is the one who answers. That's the standard the company was built on, and it hasn't changed in {site.yearsExperience}+ years.
              </p>

              <div className="mt-14">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Our values
                </span>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {values.map((v, idx) => (
                    <div
                      key={v.name}
                      className="rounded-2xl border border-ink-200/70 bg-white p-6"
                    >
                      <span className="font-mono text-xs tracking-[0.14em] text-signal-500">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 font-display text-lg font-semibold text-ink-900">{v.name}</p>
                      <p className="mt-2 text-sm text-ink-500">{v.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Service area
                </span>
                <p className="mt-4 text-base text-ink-700 sm:text-lg">
                  Headquartered in {site.address.city}, we primarily serve Los Angeles and Orange counties. We'll travel further for larger contracts and events.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {site.serviceArea.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-ink-200/70 bg-white px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-700"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-7 text-bone-50 sm:p-8">
                <ShieldCheck className="h-7 w-7 text-signal-400" />
                <span className="mt-5 block eyebrow eyebrow-light">License</span>
                <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.02em] text-bone-50">
                  {site.ppoLicense}
                </p>
                <p className="mt-3 text-sm text-bone-200/80">
                  Licensed by the California Bureau of Security and Investigative Services.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-200/70 bg-white p-7 sm:p-8">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Certifications & coverage
                </span>
                <ul className="mt-5 space-y-3 text-sm text-ink-900">
                  {certifications.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-ink-200/70 bg-white p-5">
                  <Building2 className="h-6 w-6 text-signal-500" />
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-500">
                    Headquarters
                  </p>
                  <address className="mt-1 text-sm not-italic text-ink-900">
                    {site.address.city}, {site.address.region}
                  </address>
                </div>
                <div className="rounded-2xl border border-ink-200/70 bg-white p-5">
                  <Trophy className="h-6 w-6 text-signal-500" />
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-500">
                    Founded
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink-900">
                    {site.founded}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 cta-row sm:mt-16">
            <Button href="/careers" variant="outline">Join our team</Button>
            <Button href="/services">See our services</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
