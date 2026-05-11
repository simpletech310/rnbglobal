import { cn } from "@/lib/cn";

export function PullQuote({
  quote,
  attribution,
  role,
  tone = "dark",
  size = "lg",
  className,
}: {
  quote: string;
  attribution: string;
  role?: string;
  tone?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <figure className={cn("relative", className)}>
      <span
        aria-hidden
        className={cn(
          "absolute -left-2 -top-6 font-display leading-none select-none",
          size === "lg" ? "text-[6rem] sm:text-[8rem]" : "text-[4rem]",
          isDark ? "text-signal-400/30" : "text-signal-500/40",
        )}
      >
        “
      </span>
      <blockquote
        className={cn(
          "relative font-display tracking-[-0.02em]",
          size === "lg" ? "text-2xl sm:text-3xl lg:text-[2.125rem] leading-[1.2]" : "text-xl sm:text-2xl leading-snug",
          isDark ? "text-bone-50" : "text-ink-900",
        )}
      >
        {quote}
      </blockquote>
      <figcaption
        className={cn(
          "mt-6 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em]",
          isDark ? "text-bone-300" : "text-ink-500",
        )}
      >
        <span aria-hidden className={cn("inline-block h-px w-8", isDark ? "bg-bone-300/60" : "bg-ink-300")} />
        <span className={cn("font-semibold", isDark ? "text-bone-50" : "text-ink-900")}>{attribution}</span>
        {role && <span>· {role}</span>}
      </figcaption>
    </figure>
  );
}
