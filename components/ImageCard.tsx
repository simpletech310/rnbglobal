import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function ImageCard({
  href,
  image,
  imageAlt,
  index,
  title,
  description,
  className,
  aspect = "3/4",
}: {
  href: string;
  image: string;
  imageAlt: string;
  index?: string;
  title: string;
  description?: string;
  className?: string;
  aspect?: "3/4" | "4/3" | "16/10" | "1/1";
}) {
  const aspectClass =
    aspect === "3/4" ? "aspect-[3/4]" :
    aspect === "4/3" ? "aspect-[4/3]" :
    aspect === "16/10" ? "aspect-[16/10]" :
    "aspect-square";

  return (
    <Link
      href={href}
      className={cn(
        "ring-focus group relative block overflow-hidden rounded-2xl bg-ink-900",
        className,
      )}
    >
      <div className={cn("relative w-full overflow-hidden", aspectClass)}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 ring-1 ring-inset ring-signal-400/0 transition-all duration-300 group-hover:opacity-100 group-hover:ring-signal-400/40"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div className="min-w-0">
          {index && (
            <span className="mono-tag text-bone-300/80">{index}</span>
          )}
          <p className="mt-1 font-display text-lg font-semibold text-bone-50 sm:text-xl">
            {title}
          </p>
          {description && (
            <p className="mt-1 text-sm text-bone-200/80 line-clamp-2">{description}</p>
          )}
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-bone-50 transition-all duration-300 group-hover:border-signal-400 group-hover:bg-signal-400 group-hover:text-ink-900">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
