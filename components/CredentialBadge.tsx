import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function CredentialBadge({
  icon: Icon,
  label,
  tone = "dark",
  className,
}: {
  icon: LucideIcon;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em]",
        isDark ? "text-bone-200" : "text-ink-600",
        className,
      )}
    >
      <Icon className={cn("h-3.5 w-3.5", isDark ? "text-signal-400" : "text-signal-500")} />
      {label}
    </span>
  );
}
