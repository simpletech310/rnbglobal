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

const groups: { id: "hire" | "train" | "general"; title: string }[] = [
  { id: "hire", title: "Hiring security" },
  { id: "train", title: "Training & Guard Card" },
  { id: "general", title: "About R&B" },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions, plain answers." />

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="space-y-12">
          {groups.map((g) => {
            const items = faq.filter((f) => f.group === g.id);
            return (
              <div key={g.id}>
                <h2 className="text-2xl sm:text-3xl">{g.title}</h2>
                <div className="mt-5 divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
                  {items.map((q) => (
                    <details key={q.question} className="group p-5 sm:p-6">
                      <summary className="ring-focus flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-navy-900 sm:text-lg">
                        <span>{q.question}</span>
                        <span aria-hidden className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-steel-700 sm:text-base">{q.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
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
