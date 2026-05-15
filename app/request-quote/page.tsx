import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Security Quote",
  description:
    "Tell us about the post and we'll send a transparent quote — usually same business day. Uniformed guards, mobile patrol, event security, CCTV installation across Southern California.",
  path: "/request-quote",
  keywords: [
    "request security quote California",
    "security guard pricing Los Angeles",
    "event security quote Orange County",
    "mobile patrol quote",
    "armed guard rates",
  ],
});

const reassurances = [
  "Same business day response — we read every inquiry.",
  "Transparent pricing. No upselling officers you don't need.",
  "Coverage typically within 24–72 hours of a signed agreement.",
  "Insurance certificates available on request.",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="For Organizations"
        title="Request a security quote."
        intro="The more detail you share, the more accurate the quote. If something doesn't apply, leave it blank — we'll follow up with the right questions."
      />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <div className="rounded-2xl border border-ink-200/70 bg-white p-6 sm:p-8 lg:p-10">
              <QuoteForm />
            </div>
            <aside className="space-y-5">
              <div className="rounded-2xl border border-ink-200/70 bg-bone-50 p-7 sm:p-8">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  What to expect
                </span>
                <ul className="mt-5 space-y-4">
                  {reassurances.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-ink-900 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-7 text-bone-50 sm:p-8">
                <span className="eyebrow eyebrow-light">
                  <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
                  Prefer to talk?
                </span>
                <a
                  href={site.phoneHref}
                  className="ring-focus-dark mt-4 block font-display text-3xl font-semibold tracking-[-0.02em] text-bone-50 hover:text-signal-400 sm:text-[2.25rem]"
                >
                  {site.phone}
                </a>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-300/80">
                  Mon–Fri 8a–6p · Sat 9a–2p
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
