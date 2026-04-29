import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";
import programsBg from "@/assets/3.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Devices — MediAlert+ Medical Alert Systems" },
      { name: "description", content: "Explore our full range of medical alert devices: smart watches, in-home systems, mobile devices, ID jewelry, and more." },
      { property: "og:title", content: "Programs & Devices — MediAlert+" },
      { property: "og:description", content: "Find the perfect medical alert plan for your lifestyle." },
    ],
  }),
  component: Programs,
});

function Programs() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <Layout>
      {/* Custom Hero with Background Image */}
      <section className="relative h-screen overflow-hidden text-navy-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={programsBg}
            alt="MediAlert Programs background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.7) saturate(1.2)'
            }}
          />
        </div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/15 to-navy/20 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4">
            <div className="mb-4 animate-fade-in-up">
              <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse">
                Programs
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Find the protection that fits your life.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              From discreet ID jewelry to smart watches with GPS — every plan includes free equipment, free shipping, and no contract.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition",
                  active === c
                    ? "border-brand bg-brand text-brand-foreground shadow-card"
                    : "border-border bg-background text-foreground/70 hover:border-brand hover:text-brand"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
