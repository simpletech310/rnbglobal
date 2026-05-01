import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { industries, getIndustry } from "@/content/industries";
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
  });
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();

  return (
    <>
      <PageHero eyebrow="Industries" title={`${i.name} Security`} intro={i.short} />

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <p className="max-w-3xl text-base text-steel-700 sm:text-lg">{i.intro}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3>The pain points we hear most</h3>
            <ul className="mt-4 space-y-2.5 text-base text-steel-700">
              {i.painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-navy-50/60 px-4 py-3 ring-1 ring-navy-100">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>How we address them</h3>
            <ul className="mt-4 space-y-2.5 text-base text-navy-900">
              {i.howWeHelp.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-navy-100">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl border border-navy-100 bg-navy-50/40 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Guard profile</p>
            <h3 className="mt-2">Who we send to your post</h3>
            <p className="mt-3 text-base text-steel-700 sm:text-lg">{i.guardProfile}</p>
          </div>
          <div>
            <p className="eyebrow">Sample post specs</p>
            <ul className="mt-3 space-y-2 text-sm text-navy-900">
              {i.postSpecs.map((p) => (
                <li key={p} className="rounded-lg bg-white px-4 py-2.5 ring-1 ring-navy-100">{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <p className="eyebrow">More industries</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {industries
              .filter((x) => x.slug !== i.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/industries/${o.slug}`}
                  className="rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-navy-50"
                >
                  {o.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${i.name.toLowerCase()} security?`} />
    </>
  );
}
