"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/industries/retail", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-200",
        scrolled
          ? "border-ink-200/70 bg-bone-50/85 backdrop-blur-md"
          : "border-transparent bg-bone-100",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-ink-900 focus:px-3 focus:py-1.5 focus:text-bone-50"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <Link href="/" className="ring-focus rounded -m-1 p-1" aria-label="R and B Global Security home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-700 transition-colors hover:text-ink-900"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-signal-500 transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="ring-focus hidden items-center gap-2 rounded-full px-3 py-2 font-mono text-xs tracking-[0.08em] text-ink-700 hover:text-ink-900 sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-signal-500" />
            {site.phone}
          </a>
          <Button href="/request-quote" size="sm" className="hidden sm:inline-flex">
            Request a Quote
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ring-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-900 hover:bg-ink-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden" role="dialog" aria-label="Mobile menu">
          <div className="container-x border-t border-ink-200/70 bg-bone-50 py-5">
            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="ring-focus rounded-lg px-2 py-3 font-mono text-sm uppercase tracking-[0.16em] text-ink-800 hover:bg-ink-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-ink-200/70 pt-4">
              <a
                href={site.phoneHref}
                className="ring-focus inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-4 py-3 font-mono text-sm tracking-[0.08em] text-ink-900"
              >
                <Phone className="h-4 w-4 text-signal-500" />
                Call {site.phone}
              </a>
              <Button href="/request-quote" onClick={() => setOpen(false)}>
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
