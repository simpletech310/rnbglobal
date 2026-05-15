import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock,
  Fingerprint,
  GraduationCap,
  HardHat,
  Hotel,
  Phone,
  ShieldCheck,
  Store,
  Trees,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { Stats } from "@/components/Stats";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { PullQuote } from "@/components/PullQuote";
import { ImageCard } from "@/components/ImageCard";
import { services } from "@/content/services";
import { training } from "@/content/training";
import { industries } from "@/content/industries";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { photos } from "@/content/photos";

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
    body: "BSIS-licensed, background-checked, post-briefed.",
    icon: ShieldCheck,
  },
  {
    title: "Licensed & insured",
    body: "California PPO. GL and workers' comp.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 operations",
    body: "Live dispatch for active clients. Real people.",
    icon: Clock,
  },
  {
    title: "Local SoCal",
    body: `Based in ${site.address.city}. LA and OC coverage.`,
    icon: Fingerprint,
  },
];

const stats = [
  { value: `${site.yearsExperience}+`, label: "Years operating", caption: `Since ${site.founded}` },
  { value: "24/7", label: "Dispatch", caption: "Active-client response" },
  { value: "10K+", label: "Shifts logged", caption: "Across SoCal posts" },
  { value: "4", label: "Counties served", caption: "LA · OC · LB · IE" },
];

const process = [
  {
    index: "01",
    title: "Site walkthrough",
    body: "We tour the property and map the coverage that fits.",
  },
  {
    index: "02",
    title: "Custom post orders",
    body: "Written instructions tailored to your site, signed before any officer arrives.",
  },
  {
    index: "03",
    title: "Officer deployment",
    body: "Licensed, uniformed officers on post — briefed before shift one.",
  },
  {
    index: "04",
    title: "Reports + checks",
    body: "Activity reports every shift. Supervisor patrol checks in person.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-bone-50">
        <Image
          src={photos.heroOfficer.src}
          alt={photos.heroOfficer.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900/85 to-ink-900/60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(40rem 24rem at 88% -10%, rgba(216,146,36,0.22) 0%, transparent 60%)",
          }}
        />

        <div className="container-x relative grid gap-10 py-16 sm:py-24 sm:gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20 lg:py-32">
          <div className="reveal">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone-300">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="inline-block h-px w-6 bg-signal-400/70" />
                Ops // Est. {site.founded}
              </span>
              <span className="hidden sm:inline text-bone-300/40">·</span>
              <span>California PPO</span>
              <span className="hidden sm:inline text-bone-300/40">·</span>
              <span>BSIS Aligned</span>
            </div>

            <h1 className="mt-7 text-balance text-bone-50">
              <span className="block">Protection,</span>
              <span className="block text-signal-400">held to a standard.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base text-bone-200/85 sm:text-lg lg:text-[1.15rem] lg:leading-relaxed">
              {site.yearsExperience}+ years guarding Southern California — plus BSIS-aligned guard training.
            </p>

            <div className="mt-9 cta-row">
              <Button href="/request-quote" size="lg">
                Hire Security
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/training/guard-card" size="lg" variant="outline-light">
                Get Your Guard Card
              </Button>
            </div>

            <a
              href={site.phoneHref}
              className="ring-focus-dark mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-bone-200 hover:text-signal-400"
            >
              <Phone className="h-3.5 w-3.5 text-signal-400" />
              Or call {site.phone}
            </a>
          </div>

          {/* Inline credentials card */}
          <aside className="relative reveal">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between">
                <span className="mono-tag text-bone-300/80">On post since</span>
                <span className="font-mono text-xs text-signal-400">{site.founded}</span>
              </div>
              <div className="mt-2 font-display text-[3.75rem] font-semibold leading-none tracking-[-0.04em] text-bone-50 sm:text-[5rem] lg:text-[6rem]">
                {site.yearsExperience}
                <span className="text-signal-400">+</span>
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-bone-300/80">
                Years operating
              </div>

              <div className="my-6 h-px w-full bg-white/10" />

              <ul className="space-y-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bone-200/90">
                <li className="flex items-center justify-between gap-3">
                  <span className="text-bone-300/70">CA PPO</span>
                  <span className="text-bone-50">{site.ppoLicense}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-bone-300/70">Dispatch</span>
                  <span className="text-bone-50">24/7</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-bone-300/70">Coverage</span>
                  <span className="text-bone-50">LA · OC · IE</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-bone-300/70">Insurance</span>
                  <span className="text-bone-50">GL + WC</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <TrustBar />

      {/* STATS */}
      <section className="bg-bone-100">
        <div className="container-x py-12 sm:py-16 lg:py-20">
          <Stats items={stats} tone="light" />
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="bg-bone-50">
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="What we do"
            title="Two sides of the same business."
            intro={`Owner-operated since ${site.founded}. Same standard for officers we deploy and officers we certify.`}
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Contract */}
            <article className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={photos.contractSecurity.src}
                  alt={photos.contractSecurity.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-bone-50/95 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-900">
                  <ShieldCheck className="h-3.5 w-3.5 text-signal-500" />
                  Contract Security
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-[1.75rem]">From a single doorman to 24/7 coverage.</h3>
                <p className="mt-3 text-base text-ink-500">
                  Licensed officers, daily reports, supervisor patrol checks.
                </p>
                <ul className="mt-6 divide-y divide-ink-200/70">
                  {services.map((s) => (
                    <li key={s.slug} className="flex items-center justify-between gap-3 py-3">
                      <span className="text-sm font-semibold text-ink-900 sm:text-base">{s.name}</span>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-signal-600 hover:text-signal-700"
                      >
                        Details <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 cta-row">
                  <Button href="/request-quote">Request a Quote</Button>
                  <Button href="/services" variant="outline">All services</Button>
                </div>
              </div>
            </article>

            {/* Training */}
            <article className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/5">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={photos.training.src}
                  alt={photos.training.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-bone-50/95 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-900">
                  <GraduationCap className="h-3.5 w-3.5 text-signal-500" />
                  Training & Certification
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-[1.75rem]">Get the credentials that get you hired.</h3>
                <p className="mt-3 text-base text-ink-500">
                  California Guard Card, firearm permit, baton, CPR, and more.
                </p>
                <ul className="mt-6 divide-y divide-ink-200/70">
                  {training.slice(0, 5).map((t) => (
                    <li key={t.slug} className="flex items-center justify-between gap-3 py-3">
                      <span className="text-sm font-semibold text-ink-900 sm:text-base">
                        {t.name.replace(/\s*\(.+?\)\s*/g, "")}
                      </span>
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-500">
                        {t.hours} · {t.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 cta-row">
                  <Button href="/training/guard-card">Get Your Guard Card</Button>
                  <Button href="/training" variant="outline">All classes</Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PILLARS — dark */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-bone-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(40rem 22rem at 85% 10%, rgba(63,107,146,0.25) 0%, transparent 60%), radial-gradient(35rem 22rem at -5% 110%, rgba(216,146,36,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container-x relative py-14 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Why R&B"
            title="The boring stuff, done excellently."
            intro="Reports every shift. Calls answered by real people."
            tone="light"
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, idx) => (
              <div key={p.title} className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.16em] text-signal-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-white/10" />
                  <p.icon className="h-4 w-4 text-signal-400" aria-hidden />
                </div>
                <h3 className="text-xl text-bone-50">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-200/80">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-bone-100">
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Properties we protect."
              intro="Pick your property type — or get in touch for a custom plan."
            />
            <Link
              href="/contact"
              className="ring-focus group hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-700 hover:text-ink-900 sm:inline-flex"
            >
              Build a custom plan
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5 sm:mt-12">
            {industries.map((i, idx) => {
              const photo = photos.industries[i.slug];
              if (!photo) return null;
              const Icon = industryIcons[i.slug] ?? Building2;
              return (
                <ImageCard
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  image={photo.src}
                  imageAlt={photo.alt}
                  index={String(idx + 1).padStart(2, "0")}
                  title={i.name}
                  aspect={idx === 0 ? "3/4" : "3/4"}
                />
              );
            })}
          </div>

          {/* Hidden Icon import for tree-shaking safety */}
          <span className="hidden" aria-hidden>
            <Store /><Hotel /><Building2 /><Trees /><HardHat />
          </span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-bone-50">
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="How we operate"
            title="The four steps before an officer ever steps on your property."
          />
          <div className="mt-14">
            <ProcessTimeline steps={process} tone="light" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — editorial */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-bone-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(40rem 22rem at 10% -10%, rgba(216,146,36,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative py-14 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="What clients say"
            title="Reports from the field."
            intro="Names withheld for our clients' privacy — full references on request."
            tone="light"
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <PullQuote
              quote={testimonials[0].quote}
              attribution={testimonials[0].attribution}
              role={testimonials[0].role}
              tone="dark"
              size="lg"
            />
            <div className="space-y-10">
              {testimonials.slice(1).map((t) => (
                <PullQuote
                  key={t.attribution}
                  quote={t.quote}
                  attribution={t.attribution}
                  role={t.role}
                  tone="dark"
                  size="md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-bone-100">
        <div className="container-x py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
              Owner-operated since {site.founded}
            </span>
            <p className="mt-6 font-display text-2xl tracking-[-0.02em] text-ink-900 sm:text-[1.875rem] sm:leading-[1.2]">
              "Show up on time, write the report, train the officer, answer the phone. We've been doing that for {site.yearsExperience} years."
            </p>
            <div className="mt-8">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-500">
                Raymond Baker · Owner & Founder
              </span>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="ring-focus group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-900 hover:text-signal-600"
              >
                Read our story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="split" />
    </>
  );
}
