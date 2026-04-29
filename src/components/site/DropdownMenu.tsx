import { useState } from 'react';
import { Link } from "@tanstack/react-router";
import { ChevronDown, ShieldCheck, Watch, Heart, Home } from "lucide-react";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const medicalIDProducts = [
    { 
      name: "Medical ID Bracelets", 
      icon: ShieldCheck,
      description: "Stylish engraved bracelets for everyday wear",
      href: "/medical-ids#bracelets"
    },
    { 
      name: "Medical ID Necklaces", 
      icon: Heart,
      description: "Elegant necklaces with custom engraving",
      href: "/medical-ids#necklaces"
    },
    { 
      name: "Medical ID Watches", 
      icon: Watch,
      description: "Functional watches with medical alert features",
      href: "/medical-ids#watches"
    },
    { 
      name: "Medical ID Accessories", 
      icon: Home,
      description: "Keychains, wallet cards and more",
      href: "/medical-ids#accessories"
    },
  ];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-1 text-navy hover:text-brand transition-colors py-2"
      >
        Medical IDs
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
        >
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="font-semibold text-navy text-sm">Medical ID Products</h3>
            <p className="text-xs text-muted-foreground">Engraved protection for any emergency</p>
          </div>
          
          {medicalIDProducts.map((product, index) => (
            <Link
              key={index}
              to={product.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                <product.icon className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-navy text-sm group-hover:text-brand transition-colors">
                  {product.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
          
          <div className="px-4 py-2 border-t border-gray-100 mt-2">
            <Link
              to="/medical-ids"
              className="flex items-center justify-center w-full bg-brand text-brand-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-brand/90 transition-colors"
            >
              View All Medical IDs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
