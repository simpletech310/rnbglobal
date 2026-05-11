import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { services, getService } from "@/content/services";
import { photos } from "@/content/photos";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.name,
    description: s.summary.slice(0, 155),
    path: `/services/${s.slug}`,
  });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const otherServices = services.filter((x) => x.slug !== s.slug);
  const photo = photos.services[s.slug];

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={s.name}
        intro={s.short}
        image={photo?.src}
        imageAlt={photo?.alt}
      />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <p className="font-display text-xl tracking-[-0.015em] text-ink-900 sm:text-2xl sm:leading-snug">
                {s.summary}
              </p>

              <div className="mt-12">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  What's included
                </span>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.whatsIncluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-ink-200/70 bg-white px-4 py-3.5"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                      <span className="text-sm text-ink-900 sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Who it's for
                </span>
                <ul className="mt-5 space-y-3 text-base text-ink-700">
                  {s.whoFor.map((w) => (
                    <li key={w} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-3 shrink-0 bg-signal-500" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Sample deployments
                </span>
                <ul className="mt-5 space-y-3">
                  {s.scenarios.map((sc, i) => (
                    <li
                      key={sc}
                      className="flex items-start gap-4 rounded-xl border border-ink-200/70 bg-white px-5 py-4"
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900 font-mono text-[0.65rem] tracking-[0.08em] text-signal-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-ink-800">{sc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-7 text-bone-50 sm:p-8">
                <span className="eyebrow eyebrow-light">
                  <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
                  Get a quote
                </span>
                <p className="mt-4 font-display text-lg tracking-[-0.015em] text-bone-50 sm:text-xl">
                  Pricing is post-specific — coverage hours, armed status, and number of officers all factor in.
                </p>
                <p className="mt-3 text-sm text-bone-200/80">
                  Tell us the basics and we'll send a transparent quote, usually same business day.
                </p>
                <Button href="/request-quote" size="lg" className="mt-6 w-full">
                  Request a Quote
                </Button>
              </div>

              <div className="mt-6 rounded-2xl border border-ink-200/70 bg-white p-6 sm:p-7">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Other services
                </span>
                <ul className="mt-4 divide-y divide-ink-200/70">
                  {otherServices.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}`}
                        className="group flex items-center justify-between gap-3 py-3 text-sm font-semibold text-ink-900 hover:text-signal-600"
                      >
                        {o.name}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection title={`Ready to deploy ${s.name.toLowerCase()}?`} intro="We'll respond same business day with availability and pricing." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({ name: s.name, description: s.summary, slug: s.slug })),
        }}
      />
    </>
  );
}
