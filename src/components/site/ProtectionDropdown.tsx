import { useState } from 'react';
import { Link } from "@tanstack/react-router";
import { ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";

export function ProtectionDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const protectionOptions = [
    { 
      name: "Renew Plans", 
      description: "Continue or upgrade your protection plan",
      href: "/renew-plans",
      icon: ShieldCheck
    },
    { 
      name: "Compare Plans", 
      description: "Find the perfect protection plan for your needs",
      href: "/compare-plans",
      icon: ArrowRight
    }
  ];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-1 text-navy hover:text-brand transition-colors py-2"
      >
        24/7 Protection
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
        >
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="font-semibold text-navy text-sm">Protection Options</h3>
            <p className="text-xs text-muted-foreground">Manage your medical alert protection</p>
          </div>
          
          {protectionOptions.map((option, index) => (
            <Link
              key={index}
              to={option.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                <option.icon className="h-5 w-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-navy text-sm group-hover:text-brand transition-colors">
                  {option.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {option.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
