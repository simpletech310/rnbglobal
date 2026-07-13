import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const wordmarkColor = tone === "light" ? "text-bone-50" : "text-ink-900";
  const subColor = tone === "light" ? "text-bone-300" : "text-ink-500";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo-mark.png"
        alt="R and B Global Security"
        width={460}
        height={551}
        priority
        className="h-11 w-auto sm:h-12"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-bold tracking-[-0.02em] sm:text-[1.05rem]",
            wordmarkColor,
          )}
        >
          R&amp;B Global
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.625rem] uppercase tracking-[0.22em] sm:text-[0.6875rem]",
            subColor,
          )}
        >
          Security · Est. 1998
        </span>
      </span>
    </span>
  );
}
