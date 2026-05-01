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
      <section className="container-narrow py-12 sm:py-16">
        <div className="prose-content space-y-6 text-base text-steel-700 sm:text-lg">
          <p>Last updated: {new Date().getFullYear()}.</p>
          <p>
            By accessing this website you agree to these terms. If you do not agree, please do not use the site.
          </p>
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
            Questions? Call {site.phone} or email <a href={`mailto:${site.email}`} className="font-semibold text-navy-900 underline">{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
