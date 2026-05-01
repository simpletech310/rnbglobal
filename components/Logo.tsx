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
          <stop offset="0%" stopColor="#1f3661" />
          <stop offset="100%" stopColor="#0c1a31" />
        </linearGradient>
      </defs>
      <path
        d="M24 2.5 L42.5 8 V22 C42.5 33.5 34.5 42.2 24 45.5 C13.5 42.2 5.5 33.5 5.5 22 V8 Z"
        fill="url(#rb-shield)"
        stroke="#d99a22"
        strokeWidth="1.5"
      />
      <path
        d="M24 2.5 L42.5 8 V22 C42.5 33.5 34.5 42.2 24 45.5 C13.5 42.2 5.5 33.5 5.5 22 V8 Z"
        fill="none"
        stroke="#fbf2d4"
        strokeOpacity="0.18"
        strokeWidth="0.5"
        transform="translate(0,1.2)"
      />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Manrope, sans-serif"
        fontWeight="800"
        fontSize="15"
        fill="#fbf2d4"
        letterSpacing="0.5"
      >
        R&amp;B
      </text>
    </svg>
  );
}

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">
            R&amp;B Global
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-600 sm:text-[11px]">
            Security
          </span>
        </span>
      )}
    </span>
  );
}
