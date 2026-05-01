import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function CTASection({
  title = "Ready to talk security?",
  intro = "Tell us about your property, event, or training goal. We'll respond same business day with next steps and pricing.",
  primaryHref = "/request-quote",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: {
  title?: string;
  intro?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 80% -10%, #d99a22 0%, transparent 60%), radial-gradient(40rem 30rem at -10% 110%, #1f3661 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative grid gap-8 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="eyebrow text-gold-400">Get started</span>
          <h2 className="mt-3 text-white text-balance">{title}</h2>
          <p className="mt-4 max-w-xl text-base text-navy-100 sm:text-lg">{intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} size="lg" variant="outline" className="!border-navy-200/40 !bg-transparent !text-white hover:!bg-white/10">
              {secondaryLabel}
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Speak with us</p>
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl"
          >
            <Phone className="h-6 w-6 text-gold-400" />
            {site.phone}
          </a>
          <p className="mt-2 text-sm text-navy-100">
            Mon–Fri 8a–6p · Sat 9a–2p · 24/7 dispatch for active clients
          </p>
          <p className="mt-4 text-sm text-navy-200">
            {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
          </p>
        </div>
      </div>
    </section>
  );
}
