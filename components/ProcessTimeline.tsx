import { cn } from "@/lib/cn";

export type ProcessStep = {
  index: string;
  title: string;
  body: string;
};

export function ProcessTimeline({
  steps,
  tone = "light",
  className,
}: {
  steps: ProcessStep[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <ol className={cn("relative grid gap-10 sm:gap-8 lg:grid-cols-4", className)}>
      {/* Horizontal hairline connecting all steps on desktop */}
      <div
        aria-hidden
        className={cn(
          "absolute left-0 right-0 top-[1.125rem] hidden h-px lg:block",
          isDark ? "bg-white/15" : "bg-ink-200",
        )}
      />
      {steps.map((s) => (
        <li key={s.index} className="relative">
          <div className="flex items-center gap-4 lg:block">
            <div
              className={cn(
                "relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium",
                isDark
                  ? "bg-ink-900 text-signal-400 ring-1 ring-white/15"
                  : "bg-bone-50 text-ink-900 ring-1 ring-ink-200",
              )}
            >
              {s.index}
            </div>
            <h3
              className={cn(
                "text-lg sm:text-xl lg:mt-5",
                isDark ? "text-bone-50" : "text-ink-900",
              )}
            >
              {s.title}
            </h3>
          </div>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed sm:text-base",
              isDark ? "text-bone-200/80" : "text-ink-500",
            )}
          >
            {s.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
