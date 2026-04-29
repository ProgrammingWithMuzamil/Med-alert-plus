import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, HeartPulse } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "./DropdownMenu";
import { ProtectionDropdown } from "./ProtectionDropdown";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/why-us", label: "Why Us" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="bg-navy text-navy-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <span className="hidden sm:inline">Trusted protection for over 1 million members worldwide</span>
          <a href="tel:18005551234" className="inline-flex items-center gap-2 font-medium hover:text-brand-foreground/90">
            <Phone className="h-3.5 w-3.5" /> 1-800-555-1234
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-card">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-navy">MediAlert<span className="text-brand">+</span></div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Protection You Trust</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-brand"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-brand bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <DropdownMenu />
          <ProtectionDropdown />
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
            <Link to="/programs">Get Protected</Link>
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-accent hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/medical-ids"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium hover:bg-accent hover:text-brand"
            >
              Medical IDs
            </Link>
            <Button asChild className="mt-2 bg-brand text-brand-foreground hover:bg-brand/90">
              <Link to="/programs" onClick={() => setOpen(false)}>Get Protected</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
