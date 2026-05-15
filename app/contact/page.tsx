import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact R&B Global Security",
  description: `Call ${site.phone} or send a message. Headquartered at ${site.address.street}, ${site.address.city}, ${site.address.region}. Same-business-day response Monday through Saturday.`,
  path: "/contact",
  keywords: [
    "contact security company California",
    "hire security guards quote",
    "Paramount California security firm",
    `${site.phone}`,
    "R&B Global Security contact",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us how we can help."
        intro="Hire security, enroll in a class, or ask a question — we respond same business day."
      />

      <section className="bg-bone-100">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            <div className="rounded-2xl border border-ink-200/70 bg-white p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">
                <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                Send a message
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl">Start a conversation.</h2>
              <p className="mt-3 text-base text-ink-500">
                Choose what you're reaching out about and we'll route it to the right person.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-7 text-bone-50 sm:p-8">
                <span className="eyebrow eyebrow-light">
                  <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
                  Speak with us
                </span>
                <a
                  href={site.phoneHref}
                  className="ring-focus-dark mt-4 flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.02em] text-bone-50 hover:text-signal-400 sm:text-3xl"
                >
                  <Phone className="h-5 w-5 text-signal-400" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="ring-focus-dark mt-4 flex items-center gap-3 break-all text-base text-bone-200/85 hover:text-signal-400"
                >
                  <Mail className="h-4 w-4 text-signal-400" />
                  {site.email}
                </a>
              </div>

              <div className="rounded-2xl border border-ink-200/70 bg-white p-7 sm:p-8">
                <span className="eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Office
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                  <address className="text-sm not-italic text-ink-900 sm:text-base">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </address>
                </div>

                <span className="mt-7 block eyebrow">
                  <span aria-hidden className="inline-block h-px w-6 bg-ink-300" />
                  Hours
                </span>
                <ul className="mt-4 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-500">
                        {h.day}
                      </span>
                      <span className="font-medium text-ink-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-ink-200/70 bg-white">
                <iframe
                  title="R and B Global Security office location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`)}&output=embed`}
                  className="h-64 w-full sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
