import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Security Quote",
  description:
    "Tell us about the post and we'll send a transparent quote — usually same business day. Uniformed guards, mobile patrol, event security, CCTV.",
  path: "/request-quote",
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
        intro="The more detail you share, the more accurate the quote. If something below doesn't apply, leave it blank — we'll follow up with the right questions."
      />

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 lg:p-10">
            <QuoteForm />
          </div>
          <aside className="space-y-5">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-6 sm:p-8">
              <p className="eyebrow">What to expect</p>
              <ul className="mt-4 space-y-3">
                {reassurances.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-navy-900 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white sm:p-8">
              <p className="eyebrow text-gold-300">Prefer to talk?</p>
              <a href={site.phoneHref} className="mt-3 block text-3xl font-bold">{site.phone}</a>
              <p className="mt-2 text-sm text-navy-100">Mon–Fri 8a–6p · Sat 9a–2p</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
