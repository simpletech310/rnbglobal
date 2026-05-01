import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  GraduationCap,
  HardHat,
  Hotel,
  Phone,
  ShieldCheck,
  Star,
  Store,
  Trees,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/services";
import { training } from "@/content/training";
import { industries } from "@/content/industries";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";

const industryIcons: Record<string, typeof Store> = {
  retail: Store,
  events: Hotel,
  "corporate-office": Building2,
  "residential-hoa": Trees,
  construction: HardHat,
};

const pillars = [
  {
    title: "Vetted & trained",
    body: "Every officer is BSIS-licensed, background-checked, and post-briefed before stepping on property.",
    icon: ShieldCheck,
  },
  {
    title: "Licensed & insured",
    body: "California PPO with general liability and workers' comp. Certificates available on request.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 operations",
    body: "Live dispatch around the clock for active clients. Real people, not call-center scripts.",
    icon: Clock,
  },
  {
    title: "Local SoCal expertise",
    body: "Headquartered in Paramount with deep coverage across LA and Orange counties.",
    icon: Star,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(50rem 28rem at 80% 0%, #1f3661 0%, transparent 60%), radial-gradient(40rem 25rem at 0% 110%, #d99a22 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              California PPO · Founded {site.founded}
            </span>
            <h1 className="mt-5 text-balance text-white">
              Trained, licensed, and ready to protect what matters.
            </h1>
            <p className="mt-5 max-w-xl text-base text-navy-100 sm:text-lg lg:text-xl">
              {site.yearsExperience}+ years guarding Southern California properties, events, and people — plus the BSIS-aligned training to put more qualified officers on California posts.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/request-quote" size="lg">
                Hire Security
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/training/guard-card"
                size="lg"
                variant="outline"
                className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10"
              >
                Get Your Guard Card
              </Button>
            </div>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-100 hover:text-white"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              Or call {site.phone}
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <p className="eyebrow text-gold-300">Two ways we help</p>
              <div className="mt-4 grid gap-4">
                <Link
                  href="/services"
                  className="ring-focus group rounded-xl border border-white/10 bg-navy-900/60 p-5 hover:border-gold-400/60 hover:bg-navy-900"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-950">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white sm:text-lg">For organizations</p>
                      <p className="mt-1 text-sm text-navy-100">
                        Uniformed guards, mobile patrol, event security, CCTV install.
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 group-hover:translate-x-0.5">
                        See services <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/training"
                  className="ring-focus group rounded-xl border border-white/10 bg-navy-900/60 p-5 hover:border-gold-400/60 hover:bg-navy-900"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-navy-950">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white sm:text-lg">For individuals</p>
                      <p className="mt-1 text-sm text-navy-100">
                        California Guard Card, firearm permit, baton, CPR, and more.
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 group-hover:translate-x-0.5">
                        See classes <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* TWO-PATH SECTION */}
      <section className="container-x py-14 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Two strong sides of the same business."
          intro="Owner-operated since 1998. Officers who train under us are the same standard we hold our deployed officers to."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl">Contract Security</h3>
            <p className="mt-2 text-base text-steel-700">
              From a one-night doorman to 24/7 portfolio coverage. We staff every post with vetted, licensed officers and stand behind the work.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy-900 sm:text-base">
              {services.map((s) => (
                <li key={s.slug} className="flex items-center justify-between gap-3 border-b border-navy-100 py-2.5 last:border-0">
                  <span className="font-semibold">{s.name}</span>
                  <Link href={`/services/${s.slug}`} className="text-sm font-semibold text-gold-700 hover:text-gold-800">
                    Details →
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-quote" size="md">
                Request a Quote
              </Button>
              <Button href="/services" size="md" variant="outline">
                All services
              </Button>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl">Training & Certification</h3>
            <p className="mt-2 text-base text-steel-700">
              Get the California Guard Card, exposed firearm permit, and the certifications that get you hired and keep you working.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy-900 sm:text-base">
              {training.slice(0, 5).map((t) => (
                <li key={t.slug} className="flex items-center justify-between gap-3 border-b border-navy-100 py-2.5 last:border-0">
                  <span className="font-semibold">{t.name.replace(/\s*\(.+?\)\s*/g, "")}</span>
                  <span className="text-sm text-steel-600">{t.hours} · {t.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/training/guard-card" size="md">
                Get Your Guard Card
              </Button>
              <Button href="/training" size="md" variant="outline">
                All classes
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-navy-50/50 py-14 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why R&B"
            title="Why organizations keep us on retainer."
            intro="The boring stuff done well. Reports filed every shift, calls answered by real people, and officers who hold themselves to the standard we set."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-navy-100 bg-white p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <p.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-lg font-bold text-navy-900">{p.title}</p>
                <p className="mt-2 text-sm text-steel-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-x py-14 sm:py-20">
        <SectionHeading
          eyebrow="Industries"
          title="Properties we protect."
          intro="Every property has a personality. Pick yours to see the playbook we use, or get in touch and we'll build one for you."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {industries.map((i) => {
            const Icon = industryIcons[i.slug] ?? Building2;
            return (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="ring-focus group flex flex-col items-start rounded-2xl border border-navy-100 bg-white p-5 transition-shadow hover:shadow-md sm:p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-base font-semibold text-navy-900 sm:text-lg">{i.name}</p>
                <span className="mt-3 text-xs font-semibold text-gold-700 group-hover:text-gold-800 sm:text-sm">View playbook →</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy-950 py-14 text-white sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What clients say"
            title="Real reports from the field."
            intro="Names withheld for our clients' privacy — happy to share full references on request."
            className="text-white [&>h2]:text-white [&>p]:text-navy-100"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <figure key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
                <div className="flex items-center gap-1 text-gold-300" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base text-white sm:text-lg">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm text-navy-200">
                  <span className="font-semibold text-white">{t.attribution}</span>
                  <span className="block text-navy-300">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OWNER QUOTE */}
      <section className="container-x py-14 sm:py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-navy-100 bg-navy-50/40 p-8 sm:p-12 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-navy-900 text-white sm:h-40 sm:w-40">
            <span className="font-display text-4xl font-bold sm:text-5xl">RB</span>
          </div>
          <div>
            <p className="eyebrow">From the founder</p>
            <p className="mt-3 text-xl font-semibold text-navy-900 sm:text-2xl">
              "I built this company because I wanted to work for a security firm that did the basics excellently — show up on time, write the report, train the officer, answer the phone. We've been doing exactly that for {site.yearsExperience} years."
            </p>
            <p className="mt-4 text-sm text-steel-700 sm:text-base">
              <span className="font-semibold text-navy-900">Raymond Baker</span> · Owner & Founder
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
