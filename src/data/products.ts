import watch from "@/assets/product-watch.jpg";
import inhome from "@/assets/product-inhome.jpg";
import mobile from "@/assets/product-mobile.jpg";
import bracelet from "@/assets/product-bracelet.jpg";
import necklace from "@/assets/product-necklace.jpg";
import fall from "@/assets/product-fall.jpg";
import lockbox from "@/assets/product-lockbox.jpg";
import pill from "@/assets/product-pill.jpg";
import hub from "@/assets/product-hub.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Wearables" | "In-Home" | "On-the-Go" | "ID Jewelry" | "Accessories";
  tagline: string;
  priceFrom: number;
  priceTo?: number;
  image: string;
  features: string[];
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "personal-4g-care-watch",
    name: "Personal 4G Care Watch",
    category: "Wearables",
    tagline: "All-in-one smart medical alert watch with GPS, heart rate & SOS.",
    priceFrom: 39.95,
    priceTo: 49.95,
    image: watch,
    badge: "Bestseller",
    features: [
      "Built-in 4G LTE — no phone required",
      "GPS location tracking & geofencing",
      "Heart rate & blood pressure monitoring",
      "Two-way voice calling with SOS button",
    ],
  },
  {
    slug: "in-home-medical-system",
    name: "In-Home Medical System",
    category: "In-Home",
    tagline: "Our most popular 24/7 push-button help station for the home.",
    priceFrom: 27.95,
    priceTo: 37.95,
    image: inhome,
    badge: "Most Popular",
    features: [
      "Up to 800 ft wireless range",
      "4-day battery back-up",
      "EMT-trained monitoring 24/7",
      "Wrist & necklace button included",
    ],
  },
  {
    slug: "personal-alert-device-system",
    name: "Personal Alert Device — SmartGo 4G",
    category: "On-the-Go",
    tagline: "Compact 4G LTE mobile device. Help anywhere, any time.",
    priceFrom: 34.95,
    priceTo: 46.95,
    image: mobile,
    features: [
      "Nationwide 4G LTE coverage",
      "Built-in fall detection (optional)",
      "GPS location for first responders",
      "No contract — free equipment & shipping",
    ],
  },
  {
    slug: "fall-detection-pendant",
    name: "Auto Fall Detection Pendant",
    category: "Wearables",
    tagline: "Lightweight pendant that automatically calls for help on a fall.",
    priceFrom: 14.95,
    image: fall,
    features: [
      "Advanced fall-detection sensor",
      "Waterproof — wear in the shower",
      "5-year battery, no charging",
      "Pairs with home or mobile system",
    ],
  },
  {
    slug: "medical-id-bracelet",
    name: "Engraved Medical ID Bracelet",
    category: "ID Jewelry",
    tagline: "Stainless steel medical ID engraved with your vital info.",
    priceFrom: 49.0,
    image: bracelet,
    features: [
      "Hypoallergenic surgical steel",
      "Free custom engraving (4 lines)",
      "Recognized by first responders worldwide",
      "Lifetime warranty on hardware",
    ],
  },
  {
    slug: "medical-id-necklace",
    name: "Classic Medical ID Necklace",
    category: "ID Jewelry",
    tagline: "Discreet, elegant pendant with engraved medical alert symbol.",
    priceFrom: 39.0,
    image: necklace,
    features: [
      "Polished stainless steel pendant",
      "24″ adjustable chain included",
      "Free engraving — front & back",
      "Linked to your secure health profile",
    ],
  },
  {
    slug: "key-lock-box",
    name: "Secure Key Lock Box",
    category: "Accessories",
    tagline: "Give first responders fast, secure entry to your home.",
    priceFrom: 3.0,
    image: lockbox,
    features: [
      "Heavy-duty weather-resistant build",
      "Programmable 4-digit code",
      "Mounts to wall or door handle",
      "Recommended add-on for in-home plans",
    ],
  },
  {
    slug: "smart-pill-dispenser",
    name: "Smart Medication Dispenser",
    category: "Accessories",
    tagline: "Automated reminders so you never miss a dose.",
    priceFrom: 19.95,
    image: pill,
    features: [
      "Up to 28-day medication capacity",
      "Audible & visual reminders",
      "Caregiver alerts for missed doses",
      "Tamper-resistant locking lid",
    ],
  },
  {
    slug: "smart-care-hub",
    name: "Voice-Activated Care Hub",
    category: "In-Home",
    tagline: "Hands-free help — just say the word.",
    priceFrom: 24.95,
    image: hub,
    features: [
      "Hands-free voice activation",
      "Connects to monitoring center 24/7",
      "Wellness check-ins & reminders",
      "Works alongside existing systems",
    ],
  },
  ];

export const CATEGORIES = [
  "All",
  "Wearables",
  "In-Home",
  "On-the-Go",
  "ID Jewelry",
  "Accessories",
] as const;
