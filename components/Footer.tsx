import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { training } from "@/content/training";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-navy-100 bg-navy-950 text-navy-100 sm:mt-24">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="text-white">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-200">
            {site.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.socials.instagram}
              aria-label="Instagram"
              className="ring-focus inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-100 hover:bg-navy-700"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.socials.facebook}
              aria-label="Facebook"
              className="ring-focus inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-navy-100 hover:bg-navy-700"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className="text-navy-200 hover:text-white" href={`/services/${s.slug}`}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-navy-200 hover:text-white" href="/request-quote">
                Request a Quote →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Training</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {training.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link className="text-navy-200 hover:text-white" href={`/training/${t.slug}`}>
                  {t.name.replace(/\s*\(.+?\)\s*/g, "")}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-navy-200 hover:text-white" href="/training">
                All training programs →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={site.phoneHref} className="text-navy-100 hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="break-all text-navy-100 hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <address className="not-italic text-navy-200">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
            </li>
          </ul>
          <p className="mt-5 text-xs text-navy-300">
            Licensed by the California Bureau of Security and Investigative Services.
            <br />
            <span className="font-semibold text-navy-200">{site.ppoLicense}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-navy-800/60">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-navy-300 sm:flex-row sm:items-center">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <Link className="hover:text-white" href="/terms">Terms</Link>
            <Link className="hover:text-white" href="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
