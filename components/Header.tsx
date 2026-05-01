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
        "sticky top-0 z-40 w-full transition-shadow",
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-navy-900 focus:px-3 focus:py-1.5 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link href="/" className="ring-focus rounded" aria-label="R and B Global Security home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-800 hover:text-navy-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 hover:bg-navy-50 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-gold-600" />
            {site.phone}
          </a>
          <Button href="/request-quote" size="sm" className="hidden sm:inline-flex">
            Get a Quote
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ring-focus inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden" role="dialog" aria-label="Mobile menu">
          <div className="container-x border-t border-navy-100 py-4">
            <nav className="flex flex-col" aria-label="Mobile primary">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="ring-focus rounded-lg px-2 py-3 text-base font-semibold text-navy-900 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-navy-100 pt-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-200 px-4 py-3 text-sm font-semibold text-navy-900"
              >
                <Phone className="h-4 w-4 text-gold-600" />
                Call {site.phone}
              </a>
              <Button href="/request-quote" onClick={() => setOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
