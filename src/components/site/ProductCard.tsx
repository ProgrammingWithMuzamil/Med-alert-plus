import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-brand to-brand/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-foreground shadow-lg border border-white/20">
            {product.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-navy shadow-md border border-white/50">
          {product.category}
        </span>
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        {/* Title Section */}
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-navy leading-tight">{product.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.tagline}</p>
        </div>
        
        {/* Features */}
        <ul className="mt-6 space-y-3 text-sm text-foreground/90">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 mt-0.5">
                <Check className="h-3 w-3 text-brand" />
              </div>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
        
        {/* Price and CTA */}
        <div className="mt-auto pt-8 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">Starting from</div>
            <div className="font-display text-3xl font-bold text-brand leading-none">
              ${product.priceFrom.toFixed(2)}
              <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-brand to-brand/90 text-brand-foreground hover:from-brand/90 hover:to-brand px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Buy Now
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 border-brand/30 text-brand hover:bg-brand/5 px-4 py-3"
            >
              <Link to={`/guides/${product.slug}`}>
                Setup Guide
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
