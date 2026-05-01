export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(45rem 22rem at 90% 10%, #1f3661 0%, transparent 60%), radial-gradient(35rem 22rem at -10% 100%, #d99a22 0%, transparent 70%)",
        }}
      />
      <div className="container-x relative py-14 sm:py-20 lg:py-24">
        {eyebrow && <span className="eyebrow text-gold-300">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-balance text-white">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base text-navy-100 sm:text-lg lg:text-xl">{intro}</p>
        )}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
