import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-hero text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-foreground/80">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold md:text-6xl text-balance">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-foreground/80 text-balance">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
