import { BadgeCheck, Clock, ShieldCheck, Star } from "lucide-react";
import { site } from "@/content/site";

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: site.ppoLicense, sub: "California PPO License" },
    { icon: BadgeCheck, label: "BSIS-aligned", sub: "Training & Operations" },
    { icon: Star, label: `${site.yearsExperience}+ years`, sub: "Serving SoCal" },
    { icon: Clock, label: "24 / 7", sub: "Dispatch & response" },
  ];
  return (
    <section className="border-y border-navy-100 bg-navy-50/60">
      <div className="container-x grid grid-cols-2 gap-y-6 gap-x-4 py-6 sm:grid-cols-4 sm:py-8">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-600 ring-1 ring-navy-100 sm:h-11 sm:w-11">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-navy-900 sm:text-base">{label}</p>
              <p className="truncate text-xs text-steel-500 sm:text-sm">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
