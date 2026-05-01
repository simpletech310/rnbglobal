import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { services, getService } from "@/content/services";
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

  return (
    <>
      <PageHero eyebrow="Services" title={s.name} intro={s.short} />
      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="text-base text-steel-700 sm:text-lg">{s.summary}</p>

            <h3 className="mt-10">What's included</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {s.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/40 px-4 py-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <span className="text-sm text-navy-900 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10">Who it's for</h3>
            <ul className="mt-4 space-y-2 text-base text-steel-700">
              {s.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10">Sample deployments</h3>
            <ul className="mt-4 space-y-2.5 text-base text-steel-700">
              {s.scenarios.map((sc) => (
                <li key={sc} className="rounded-lg bg-white px-4 py-3 ring-1 ring-navy-100">
                  {sc}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white sm:p-8">
              <p className="eyebrow text-gold-400">Get a quote</p>
              <p className="mt-3 text-lg font-semibold sm:text-xl">
                Pricing is post-specific — coverage hours, armed status, and number of officers all factor in.
              </p>
              <p className="mt-3 text-sm text-navy-100">
                Tell us the basics and we'll send a transparent quote, usually same business day.
              </p>
              <Link
                href="/request-quote"
                className="ring-focus mt-5 inline-flex w-full items-center justify-center rounded-lg bg-gold-500 px-5 py-3 text-base font-semibold text-navy-950 hover:bg-gold-400"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-5 rounded-2xl border border-navy-100 bg-white p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">Other services</p>
              <ul className="mt-4 divide-y divide-navy-100">
                {otherServices.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/services/${o.slug}`}
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 hover:text-gold-700"
                    >
                      {o.name}
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
