import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outline-light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal-500 text-ink-900 hover:bg-signal-400 active:bg-signal-600 shadow-[0_1px_0_rgba(11,15,23,0.08)]",
  secondary:
    "bg-ink-900 text-bone-50 hover:bg-ink-800 active:bg-ink-950",
  outline:
    "border border-ink-200 bg-transparent text-ink-900 hover:bg-ink-50 hover:border-ink-300 active:bg-ink-100",
  "outline-light":
    "border border-white/25 bg-transparent text-bone-50 hover:bg-white/10 hover:border-white/40 active:bg-white/15",
  ghost: "bg-transparent text-ink-900 hover:bg-ink-100",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-[0.95rem]",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ring-focus disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

type StyleProps = { variant?: Variant; size?: Size; className?: string; children?: React.ReactNode };

type ButtonAsButton = StyleProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = StyleProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href) {
    const { variant: _v, size: _s, className: _c, href, children, ...rest } = props;
    void _v;
    void _s;
    void _c;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a className={classes} href={href} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={href} {...rest}>
        {children}
      </Link>
    );
  }
  const buttonProps = props as ButtonAsButton;
  const { variant: _v, size: _s, className: _c, children, ...rest } = buttonProps;
  void _v;
  void _s;
  void _c;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
