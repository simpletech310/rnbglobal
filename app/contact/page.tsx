import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Call ${site.phone} or send a message. Headquartered at ${site.address.street}, ${site.address.city}, ${site.address.region}. Same-day response Monday through Saturday.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us how we can help."
        intro="Whether you need to hire security, enroll in a class, or ask a question — we respond same business day."
      />

      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 lg:p-10">
            <h2>Send a message</h2>
            <p className="mt-2 text-base text-steel-600">
              Choose what you're reaching out about and we'll route it to the right person.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-navy-100 bg-navy-950 p-6 text-white sm:p-8">
              <p className="eyebrow text-gold-300">Speak with us</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                <Phone className="h-6 w-6 text-gold-400" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 flex items-center gap-3 break-all text-base font-semibold text-navy-100 hover:text-white"
              >
                <Mail className="h-5 w-5 text-gold-400" />
                {site.email}
              </a>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8">
              <p className="eyebrow">Office</p>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <address className="text-sm not-italic text-navy-900 sm:text-base">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </div>

              <p className="eyebrow mt-6">Hours</p>
              <ul className="mt-3 space-y-1.5 text-sm text-navy-900 sm:text-base">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="font-semibold">{h.day}</span>
                    <span className="text-steel-600">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
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
      </section>
    </>
  );
}
