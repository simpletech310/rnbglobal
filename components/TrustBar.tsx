import { BadgeCheck, Clock, Fingerprint, ShieldCheck, Star } from "lucide-react";
import { site } from "@/content/site";
import { CredentialBadge } from "@/components/CredentialBadge";

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: `${site.ppoLicense}` },
    { icon: BadgeCheck, label: "BSIS-Aligned" },
    { icon: Fingerprint, label: "Background-Checked" },
    { icon: Clock, label: "24/7 Dispatch" },
    { icon: Star, label: `${site.yearsExperience}+ Years` },
  ];
  return (
    <section className="border-y border-white/10 bg-ink-900 text-bone-200">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-4 sm:justify-between sm:py-5">
        {items.map((it) => (
          <CredentialBadge key={it.label} icon={it.icon} label={it.label} tone="dark" />
        ))}
      </div>
    </section>
  );
}
