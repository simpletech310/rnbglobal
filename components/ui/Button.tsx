import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600 shadow-sm shadow-gold-900/10",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950",
  outline:
    "border border-navy-200 bg-white text-navy-900 hover:bg-navy-50 active:bg-navy-100",
  ghost: "bg-transparent text-navy-900 hover:bg-navy-100/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-12 px-6 text-base sm:text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-colors ring-focus disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

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
