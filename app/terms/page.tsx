import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the R and B Global Security website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="bg-bone-100">
        <div className="container-narrow py-16 sm:py-20">
          <article className="space-y-7 text-base text-ink-700 sm:text-lg [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink-900 [&_p]:leading-relaxed">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-500">
              Last updated · {new Date().getFullYear()}
            </p>
            <p>By accessing this website you agree to these terms. If you do not agree, please do not use the site.</p>
            <h2>Use of content</h2>
            <p>
              The text, images, and design on this site are the property of {site.name} and are provided for informational purposes. You may not republish or repurpose them without permission.
            </p>
            <h2>No guarantee of availability</h2>
            <p>
              Service descriptions, pricing for training, and class schedules may change. The website is informational and not a binding offer. Any contract for security services is governed by a separate written service agreement.
            </p>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {site.name} is not liable for indirect or consequential damages arising from use of this website or reliance on its content.
            </p>
            <h2>Contact</h2>
            <p>
              Questions? Call {site.phone} or email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-ink-900 underline decoration-signal-500 decoration-2 underline-offset-4 hover:text-signal-600">
                {site.email}
              </a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
