import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BadgeCheck, Check, Clock, DollarSign } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { training, getTraining } from "@/content/training";
import { photos } from "@/content/photos";
import { buildMetadata } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return training.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTraining(slug);
  if (!t) return {};
  const cleanName = t.name.replace(/\s*\(.+?\)\s*/g, "");
  return buildMetadata({
    title: t.name,
    description: t.summary.slice(0, 155),
    path: `/training/${t.slug}`,
    keywords: [
      cleanName,
      `${cleanName} California`,
      `${cleanName} class`,
      `${cleanName} certification`,
      `BSIS ${cleanName}`,
      `${cleanName} Los Angeles`,
      `${cleanName} Paramount CA`,
    ],
  });
}

export default async function TrainingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTraining(slug);
  if (!t) notFound();

  const photo = photos.trainingPrograms[t.slug];

  return (
    <>
      <PageHero
        eyebrow="Training"
        title={t.name}
        intro={t.short}
        image={photo?.src}
        imageAlt={photo?.alt}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-50 backdrop-blur-sm">
          <Clock className="h-3 w-3 text-signal-400" /> {t.hours}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-50 backdrop-blur-sm">
          <DollarSign className="h-3 w-3 text-signal-400" /> {t.price}
        </span>
        {t.bsisAligned && (
          <span className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-900">
            <BadgeCheck className="h-3 w-3" /> BSIS Aligned
          </span>
        )}
      </PageHero>

      <section className="bg-bone-100">
        <div className="container-x py-12 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <p className="font-display text-xl tracking-[-0.015em] text-ink-900 sm:text-2xl sm:leading-snug">
                {t.summary}
              </p>

              <div className="mt-12">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  What you'll learn
                </span>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.learn.map((item) => (
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
                  What you need to enroll
                </span>
                <ul className="mt-5 space-y-3 text-base text-ink-700">
                  {t.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-3 shrink-0 bg-signal-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 rounded-2xl border border-signal-300/60 bg-signal-50/70 p-6 sm:p-7">
                <span className="eyebrow eyebrow-signal">
                  <span aria-hidden className="inline-block h-px w-6 bg-signal-500/70" />
                  You'll walk away with
                </span>
                <p className="mt-3 font-display text-lg text-ink-900 sm:text-xl">{t.outcome}</p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-7 text-bone-50 sm:p-8">
                <span className="eyebrow eyebrow-light">
                  <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
                  Enroll
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
                    {t.price}
                  </span>
                  <span className="font-mono text-sm text-bone-300">· {t.hours}</span>
                </div>
                <p className="mt-4 text-sm text-bone-200/80">
                  Send your name and we'll reply with the next available class dates and what to bring.
                </p>
                <Button
                  href={`/contact?topic=training&course=${encodeURIComponent(t.name)}`}
                  size="lg"
                  className="mt-6 w-full"
                >
                  Inquire about this class
                </Button>
                <p className="mt-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-300/70">
                  Or call 310-438-3044
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-ink-200/70 bg-white p-6 sm:p-7">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Other classes
                </span>
                <ul className="mt-4 divide-y divide-ink-200/70">
                  {training.filter((x) => x.slug !== t.slug).slice(0, 5).map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/training/${o.slug}`}
                        className="group flex items-center justify-between gap-3 py-3 text-sm font-semibold text-ink-900 hover:text-signal-600"
                      >
                        <span>{o.name.replace(/\s*\(.+?\)\s*/g, "")}</span>
                        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-500 group-hover:text-signal-600">
                          {o.price}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
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
