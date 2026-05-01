import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3">Page not found</h1>
      <p className="mt-3 max-w-md text-base text-steel-600">
        The page you're looking for doesn't exist, or it's been moved. Try the homepage or get in touch.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="ring-focus inline-flex h-12 items-center justify-center rounded-lg bg-navy-900 px-6 font-semibold text-white hover:bg-navy-800"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="ring-focus inline-flex h-12 items-center justify-center rounded-lg border border-navy-200 px-6 font-semibold text-navy-900 hover:bg-navy-50"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
