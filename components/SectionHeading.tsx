import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", isLight && "eyebrow-light")}>
          <span aria-hidden className={cn("inline-block h-px w-6", isLight ? "bg-bone-300/60" : "bg-ink-300")} />
          {eyebrow}
        </span>
      )}
      <h2 className={cn("mt-4 text-balance", isLight && "text-bone-50")}>{title}</h2>
      {intro && (
        <p className={cn("mt-5 text-base sm:text-lg", isLight ? "text-bone-200/85" : "text-ink-500")}>
          {intro}
        </p>
      )}
    </div>
  );
}
