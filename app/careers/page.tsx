import { BadgeCheck, ShieldCheck, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CareersForm } from "@/components/CareersForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers — Security Guard Jobs in Southern California",
  description:
    "We're always hiring BSIS-licensed security guards across Los Angeles, Orange County, and the Inland Empire. Apply online — day, swing, and graveyard shifts available.",
  path: "/careers",
  keywords: [
    "security guard jobs Los Angeles",
    "security guard jobs Orange County",
    "hiring security officers California",
    "armed security jobs Southern California",
    "guard card jobs Paramount CA",
    "apply security guard online",
  ],
});

const perks = [
  { icon: ShieldCheck, title: "Always hiring", body: "We staff posts across LA and OC year-round." },
  { icon: BadgeCheck, title: "Licensed & paid", body: "Competitive pay for BSIS-licensed guards." },
  { icon: Clock, title: "Flexible shifts", body: "Day, swing, and graveyard openings." },
  { icon: MapPin, title: "Local posts", body: `Based in ${site.address.city}. LA · OC · IE.` },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We're always looking for good guards."
        intro="If you're licensed (or working on it) and ready to show up and do the work right, we'd like to hear from you."
      />

      <section className="bg-bone-100">
        <div className="container-x py-12 sm:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-ink-200/70 bg-white p-6">
                <p.icon className="h-6 w-6 text-signal-500" />
                <p className="mt-4 font-display text-lg font-semibold text-ink-900">{p.title}</p>
                <p className="mt-1.5 text-sm text-ink-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="container-x py-12 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <aside>
              <span className="eyebrow">
                <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                Application
              </span>
              <h2 className="mt-5 text-3xl text-ink-900 sm:text-4xl">Apply to be a guard.</h2>
              <p className="mt-4 text-base text-ink-600 sm:text-lg">
                Fill out the application below. We review every submission and reach out if there's a fit.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-700">
                <li className="flex items-start gap-2.5">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                  Must be 18+ with valid ID
                </li>
                <li className="flex items-start gap-2.5">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                  California Guard Card preferred (or in progress)
                </li>
                <li className="flex items-start gap-2.5">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                  Reliable transportation
                </li>
                <li className="flex items-start gap-2.5">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                  Background check required
                </li>
              </ul>
              <p className="mt-8 text-sm text-ink-500">
                Need your Guard Card?{" "}
                <a href="/training/guard-card" className="font-semibold text-ink-900 underline decoration-signal-500 decoration-2 underline-offset-4">
                  Take our class
                </a>.
              </p>
            </aside>

            <div className="rounded-2xl border border-ink-200/70 bg-white p-6 sm:p-8 lg:p-10">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
