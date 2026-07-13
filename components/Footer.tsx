import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Lock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { training } from "@/content/training";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-bone-200">
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-200/75">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.socials.instagram}
                aria-label="Instagram"
                className="ring-focus-dark inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone-200 transition-colors hover:border-signal-400/60 hover:text-signal-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.socials.facebook}
                aria-label="Facebook"
                className="ring-focus-dark inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone-200 transition-colors hover:border-signal-400/60 hover:text-signal-400"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone-300/80">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    className="inline-flex items-center gap-1.5 text-bone-200/85 transition-colors hover:text-signal-400"
                    href={`/services/${s.slug}`}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-signal-400 hover:text-signal-300"
                  href="/request-quote"
                >
                  Request a Quote <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone-300/80">
              Training
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {training.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    className="inline-flex items-center gap-1.5 text-bone-200/85 transition-colors hover:text-signal-400"
                    href={`/training/${t.slug}`}
                  >
                    {t.name.replace(/\s*\(.+?\)\s*/g, "")}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-signal-400 hover:text-signal-300"
                  href="/training"
                >
                  All programs <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone-300/80">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                <a href={site.phoneHref} className="font-mono tracking-[0.04em] text-bone-50 hover:text-signal-400">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                <a href={`mailto:${site.email}`} className="break-all text-bone-200/85 hover:text-signal-400">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                <address className="not-italic text-bone-200/85">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </li>
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] p-4">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-bone-300/70">
                Licensed by CA BSIS
              </p>
              <p className="mt-1.5 font-mono text-sm font-medium tracking-[0.04em] text-bone-50">
                {site.ppoLicense}
              </p>
            </div>
            <a
              href="https://dutyhq.4everforward.net/login"
              target="_blank"
              rel="noopener noreferrer"
              className="ring-focus-dark group mt-4 inline-flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-signal-400/50 hover:bg-white/[0.04]"
            >
              <span className="flex items-center gap-3">
                <Lock className="h-3.5 w-3.5 text-signal-400" />
                <span>
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone-300/70">
                    Staff & Officers
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-bone-50">
                    Duty HQ login
                  </span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-bone-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-300/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-300/70">
            <Link className="hover:text-bone-50" href="/privacy">Privacy</Link>
            <Link className="hover:text-bone-50" href="/terms">Terms</Link>
            <Link className="hover:text-bone-50" href="/faq">FAQ</Link>
            <a
              className="inline-flex items-center gap-1.5 hover:text-bone-50"
              href="https://dutyhq.4everforward.net/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Staff Login
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
