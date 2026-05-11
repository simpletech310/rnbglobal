import Image from "next/image";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  const isCenter = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-bone-50">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(40rem 22rem at 90% -10%, rgba(63,79,107,0.5) 0%, transparent 60%), radial-gradient(35rem 22rem at -10% 110%, rgba(216,146,36,0.18) 0%, transparent 70%)",
          }}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
      <div
        className={cn(
          "container-x relative py-20 sm:py-24 lg:py-32",
          isCenter && "text-center",
        )}
      >
        {eyebrow && (
          <span className={cn("eyebrow eyebrow-light", isCenter && "justify-center")}>
            <span aria-hidden className="inline-block h-px w-6 bg-bone-300/50" />
            {eyebrow}
          </span>
        )}
        <h1
          className={cn(
            "mt-5 text-balance text-bone-50",
            isCenter ? "mx-auto max-w-4xl" : "max-w-4xl",
          )}
        >
          {title}
        </h1>
        {intro && (
          <p
            className={cn(
              "mt-6 text-base text-bone-200/85 sm:text-lg lg:text-xl",
              isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {intro}
          </p>
        )}
        {children && (
          <div
            className={cn(
              "mt-9 flex flex-wrap gap-3",
              isCenter && "justify-center",
            )}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
