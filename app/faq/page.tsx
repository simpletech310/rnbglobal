import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { faq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions about hiring contract security, getting a California Guard Card, firearm training, and what to expect from R&B Global Security.",
  path: "/faq",
});

const groups: { id: "hire" | "train" | "general"; title: string; eyebrow: string }[] = [
  { id: "hire", title: "Hiring security", eyebrow: "01 / Hire" },
  { id: "train", title: "Training & Guard Card", eyebrow: "02 / Train" },
  { id: "general", title: "About R&B", eyebrow: "03 / General" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions, plain answers." />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="space-y-16">
            {groups.map((g) => {
              const items = faq.filter((f) => f.group === g.id);
              return (
                <div key={g.id}>
                  <div className="flex items-baseline gap-4 border-b border-ink-200/70 pb-5">
                    <span className="mono-tag text-signal-600">{g.eyebrow}</span>
                    <h2 className="text-2xl sm:text-3xl">{g.title}</h2>
                  </div>
                  <div className="mt-2 divide-y divide-ink-200/70">
                    {items.map((q) => (
                      <details key={q.question} className="group py-5 sm:py-6">
                        <summary className="ring-focus flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-ink-900 sm:text-xl">
                          <span>{q.question}</span>
                          <span
                            aria-hidden
                            className="mt-1.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-300 text-ink-700 transition-all duration-200 group-hover:border-ink-900 group-open:rotate-45 group-open:border-ink-900 group-open:bg-ink-900 group-open:text-bone-50"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-600">
                          {q.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faq.map((f) => ({ question: f.question, answer: f.answer })))) }}
      />
    </>
  );
}
