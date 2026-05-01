import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Check, Clock, DollarSign } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { training, getTraining } from "@/content/training";
import { buildMetadata } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return training.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTraining(slug);
  if (!t) return {};
  return buildMetadata({
    title: t.name,
    description: t.summary.slice(0, 155),
    path: `/training/${t.slug}`,
  });
}

export default async function TrainingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTraining(slug);
  if (!t) notFound();

  return (
    <>
      <PageHero eyebrow="Training" title={t.name} intro={t.short}>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
          <Clock className="h-4 w-4 text-gold-300" /> {t.hours}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
          <DollarSign className="h-4 w-4 text-gold-300" /> {t.price}
        </span>
        {t.bsisAligned && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3 py-1.5 text-sm font-semibold text-navy-950">
            <BadgeCheck className="h-4 w-4" /> BSIS-aligned
          </span>
        )}
      </PageHero>

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="text-base text-steel-700 sm:text-lg">{t.summary}</p>

            <h3 className="mt-10">What you'll learn</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.learn.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/40 px-4 py-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <span className="text-sm text-navy-900 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10">What you need to enroll</h3>
            <ul className="mt-4 space-y-2 text-base text-steel-700">
              {t.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-gold-200 bg-gold-50 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-800">You'll walk away with</p>
              <p className="mt-2 text-base font-semibold text-navy-900 sm:text-lg">{t.outcome}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white sm:p-8">
              <p className="eyebrow text-gold-400">Enroll</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold sm:text-5xl">{t.price}</span>
                <span className="text-sm text-navy-200">· {t.hours}</span>
              </div>
              <p className="mt-4 text-sm text-navy-100">
                Send your name and we'll reply with the next available class dates and what to bring.
              </p>
              <Link
                href={`/contact?topic=training&course=${encodeURIComponent(t.name)}`}
                className="ring-focus mt-5 inline-flex w-full items-center justify-center rounded-lg bg-gold-500 px-5 py-3 text-base font-semibold text-navy-950 hover:bg-gold-400"
              >
                Inquire about this class
              </Link>
              <p className="mt-3 text-center text-xs text-navy-300">Or call 310-438-3044</p>
            </div>

            <div className="mt-5 rounded-2xl border border-navy-100 bg-white p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">Other classes</p>
              <ul className="mt-4 divide-y divide-navy-100">
                {training.filter((x) => x.slug !== t.slug).slice(0, 5).map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/training/${o.slug}`}
                      className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-navy-900 hover:text-gold-700"
                    >
                      <span>{o.name.replace(/\s*\(.+?\)\s*/g, "")}</span>
                      <span className="text-xs text-steel-500">{o.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({ name: t.name, description: t.summary, price: t.price, hours: t.hours, slug: t.slug }),
          ),
        }}
      />
    </>
  );
}
