import { ArrowRight, GraduationCap, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

type Props = {
  variant?: "split" | "simple";
  title?: string;
  intro?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  variant = "simple",
  title = "Ready to talk security?",
  intro = "Tell us about your property, event, or training goal. We'll respond same business day with next steps and pricing.",
  primaryHref = "/request-quote",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: Props = {}) {
  if (variant === "split") {
    return (
      <section className="relative isolate overflow-hidden bg-ink-900 text-bone-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(40rem 22rem at 80% -10%, rgba(216,146,36,0.18) 0%, transparent 60%), radial-gradient(35rem 20rem at -10% 110%, rgba(94,134,173,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="container-x relative py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow eyebrow-light justify-center">
              <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
              Two paths forward
            </span>
            <h2 className="mt-4 text-balance text-bone-50">
              Hire us. Or train with us.
            </h2>
            <p className="mt-5 text-base text-bone-200/85 sm:text-lg">
              Owner-operated since {site.founded}. Same standard for the officers we deploy and the officers we train.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2">
            <a
              href="/request-quote"
              className="ring-focus-dark group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-400/40 hover:bg-white/[0.05] sm:gap-5 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-signal-500 text-ink-900">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span className="mono-tag text-bone-300/70">For organizations</span>
              </div>
              <div>
                <h3 className="text-2xl text-bone-50 sm:text-3xl">Hire Security</h3>
                <p className="mt-3 text-sm text-bone-200/80 sm:text-base">
                  Uniformed guards, mobile patrol, event security, and CCTV install — staffed by vetted officers and backed by 24/7 dispatch.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal-400">
                Request a quote
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>

            <a
              href="/training/guard-card"
              className="ring-focus-dark group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-400/40 hover:bg-white/[0.05] sm:gap-5 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-bone-50">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="mono-tag text-bone-300/70">For individuals</span>
              </div>
              <div>
                <h3 className="text-2xl text-bone-50 sm:text-3xl">Get Certified</h3>
                <p className="mt-3 text-sm text-bone-200/80 sm:text-base">
                  California Guard Card, exposed firearm permit, baton, CPR, and more — BSIS-aligned classes that put you to work.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal-400">
                See classes
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
            <span className="mono-tag text-bone-300/70">Or call directly</span>
            <a
              href={site.phoneHref}
              className="ring-focus-dark inline-flex items-center gap-2 rounded-full font-display text-xl font-semibold tracking-[-0.02em] text-bone-50 hover:text-signal-400 sm:text-2xl"
            >
              <Phone className="h-4 w-4 text-signal-400" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-bone-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(40rem 22rem at 80% -10%, rgba(216,146,36,0.18) 0%, transparent 60%), radial-gradient(35rem 20rem at -10% 110%, rgba(94,134,173,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <span className="eyebrow eyebrow-light">
            <span aria-hidden className="inline-block h-px w-6 bg-bone-300/60" />
            Get started
          </span>
          <h2 className="mt-4 text-balance text-bone-50">{title}</h2>
          <p className="mt-5 max-w-xl text-base text-bone-200/85 sm:text-lg">{intro}</p>
          <div className="mt-7 cta-row">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button href={secondaryHref} size="lg" variant="outline-light">
              {secondaryLabel}
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
          <p className="eyebrow eyebrow-light">Speak with us</p>
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.02em] text-bone-50 sm:text-3xl"
          >
            <Phone className="h-5 w-5 text-signal-400" />
            {site.phone}
          </a>
          <p className="mt-3 text-sm text-bone-200/75">
            Mon–Fri 8a–6p · Sat 9a–2p · 24/7 dispatch for active clients
          </p>
          <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-300/70">
            {site.address.street} · {site.address.city}, {site.address.region}
          </p>
        </div>
      </div>
    </section>
  );
}
