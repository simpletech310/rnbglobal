import { cn } from "@/lib/cn";

export type Stat = {
  value: string;
  label: string;
  caption?: string;
};

export function Stats({
  items,
  tone = "light",
  className,
}: {
  items: Stat[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4",
        className,
      )}
    >
      {items.map((s, i) => (
        <div key={s.label} className={cn("relative", i > 0 && "sm:pl-6 sm:border-l", isDark ? "sm:border-white/10" : "sm:border-ink-200/70")}>
          <div
            className={cn(
              "font-display text-[2.25rem] leading-none tracking-[-0.03em] sm:text-5xl",
              isDark ? "text-bone-50" : "text-ink-900",
            )}
          >
            {s.value}
          </div>
          <div
            className={cn(
              "mt-3 font-mono text-[0.7rem] uppercase tracking-[0.18em]",
              isDark ? "text-bone-300" : "text-ink-500",
            )}
          >
            {s.label}
          </div>
          {s.caption && (
            <div className={cn("mt-1 text-sm", isDark ? "text-bone-200/70" : "text-ink-500/80")}>
              {s.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
