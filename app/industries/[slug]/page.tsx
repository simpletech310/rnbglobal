import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { industries, getIndustry } from "@/content/industries";
import { photos } from "@/content/photos";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return buildMetadata({
    title: `${i.name} Security`,
    description: i.intro.slice(0, 155),
    path: `/industries/${i.slug}`,
    keywords: [
      `${i.name} security`,
      `${i.name} security guards`,
      `${i.name} security Los Angeles`,
      `${i.name} security Orange County`,
      `${i.name} security California`,
      `hire ${i.name.toLowerCase()} security`,
    ],
  });
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();

  const photo = photos.industries[i.slug];

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={`${i.name} Security`}
        intro={i.short}
        image={photo?.src}
        imageAlt={photo?.alt}
      />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <p className="max-w-3xl font-display text-xl tracking-[-0.015em] text-ink-900 sm:text-2xl sm:leading-snug">
            {i.intro}
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="eyebrow">
                <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                What we hear most
              </span>
              <h3 className="mt-3 text-2xl">The pain points</h3>
              <ul className="mt-6 space-y-3 text-base text-ink-700">
                {i.painPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl border border-ink-200/70 bg-bone-50 px-4 py-3.5"
                  >
                    <span className="mt-2 h-1 w-3 shrink-0 bg-ink-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow eyebrow-signal">
                <span aria-hidden className="inline-block h-px w-6 bg-signal-500/70" />
                Our playbook
              </span>
              <h3 className="mt-3 text-2xl">How we address them</h3>
              <ul className="mt-6 space-y-3 text-base text-ink-900">
                {i.howWeHelp.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-ink-200/70 bg-white px-4 py-3.5"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-10 rounded-2xl border border-white/10 bg-ink-900 p-8 text-bone-50 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-14">
            <div>
              <span className="eyebrow eyebrow-light">
                <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
                Guard profile
              </span>
              <h3 className="mt-3 text-2xl text-bone-50 sm:text-3xl">Who we send to your post</h3>
              <p className="mt-4 text-base text-bone-200/85 sm:text-lg">{i.guardProfile}</p>
            </div>
            <div>
              <span className="eyebrow eyebrow-light">
                <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
                Sample post specs
              </span>
              <ul className="mt-4 space-y-2 text-sm">
                {i.postSpecs.map((p) => (
                  <li
                    key={p}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-bone-100"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <span className="eyebrow">
              <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
              More industries
            </span>
            <div className="mt-5 flex flex-wrap gap-2">
              {industries
                .filter((x) => x.slug !== i.slug)
                .map((o) => (
                  <Link
                    key={o.slug}
                    href={`/industries/${o.slug}`}
                    className="ring-focus group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-800 hover:border-ink-300 hover:bg-bone-50"
                  >
                    {o.name}
                    <ArrowUpRight className="h-3 w-3 text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`Need ${i.name.toLowerCase()} security?`} />
    </>
  );
}
