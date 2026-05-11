import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="R and B Global Security shield"
    >
      <defs>
        <linearGradient id="rb-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F2632" />
          <stop offset="100%" stopColor="#06090F" />
        </linearGradient>
      </defs>
      <path
        d="M24 2.5 L42.5 8 V22 C42.5 33.5 34.5 42.2 24 45.5 C13.5 42.2 5.5 33.5 5.5 22 V8 Z"
        fill="url(#rb-shield)"
        stroke="#E8AC44"
        strokeWidth="1.25"
      />
      {/* Inner hairline for a more refined edge */}
      <path
        d="M24 5 L40 9.6 V21.6 C40 31.7 33 39.6 24 42.6 C15 39.6 8 31.7 8 21.6 V9.6 Z"
        fill="none"
        stroke="#E8AC44"
        strokeOpacity="0.25"
        strokeWidth="0.6"
      />
      <text
        x="24"
        y="29.5"
        textAnchor="middle"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#FAF8F4"
        letterSpacing="-0.5"
      >
        R&amp;B
      </text>
    </svg>
  );
}

export function Logo({
  className,
  withWordmark = true,
  tone = "dark",
}: {
  className?: string;
  withWordmark?: boolean;
  tone?: "dark" | "light";
}) {
  const wordmarkColor = tone === "light" ? "text-bone-50" : "text-ink-900";
  const subColor = tone === "light" ? "text-bone-300" : "text-ink-500";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-base font-bold tracking-[-0.02em] sm:text-[1.05rem]", wordmarkColor)}>
            R&amp;B Global
          </span>
          <span className={cn("mt-1 font-mono text-[0.625rem] uppercase tracking-[0.22em] sm:text-[0.6875rem]", subColor)}>
            Security · Est. 1998
          </span>
        </span>
      )}
    </span>
  );
}
