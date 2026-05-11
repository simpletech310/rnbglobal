import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How R and B Global Security collects, uses, and protects information submitted through our website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-bone-100">
        <div className="container-narrow py-16 sm:py-20">
          <article className="space-y-7 text-base text-ink-700 sm:text-lg [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-ink-900 [&_p]:leading-relaxed">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-500">
              Last updated · {new Date().getFullYear()}
            </p>
            <p>
              {site.name} ("we", "us") respects your privacy. This page explains what information we collect when you use this website, how we use it, and the choices you have.
            </p>
            <h2>Information we collect</h2>
            <p>
              We only collect information you submit directly through our contact and quote forms — typically name, email, phone, organization, and the message you send us. We may also collect basic, anonymized usage analytics (page views, referrer) to improve the site.
            </p>
            <h2>How we use it</h2>
            <p>
              Form submissions are used solely to respond to your inquiry, send you a quote, or follow up about a class. We do not sell or share your information with third parties for marketing.
            </p>
            <h2>Email & service providers</h2>
            <p>
              We use third-party services (such as Resend for transactional email and our hosting provider) to operate the website. These providers process limited data on our behalf under their own privacy commitments.
            </p>
            <h2>Your rights</h2>
            <p>
              California residents may request that we delete information we hold about them. Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-ink-900 underline decoration-signal-500 decoration-2 underline-offset-4 hover:text-signal-600">
                {site.email}
              </a>{" "}
              to make a request.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Call {site.phone} or email{" "}
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
