import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Clock, MapPin, HeartPulse, Star, ArrowRight, Phone, Award, Users, Wifi, Battery, Watch, Home } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";
import { ScrollAnimation } from "@/components/site/ScrollAnimation";
import hero from "@/assets/hero-seniors.jpg";
import monitoring from "@/assets/monitoring.jpg";
import caregiver from "@/assets/caregiver.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediAlert+ — 24/7 Medical Alert Systems & ID Protection" },
      { name: "description", content: "Trusted medical alert systems, ID jewelry, and 24/7 emergency monitoring for seniors and people with health conditions." },
      { property: "og:title", content: "MediAlert+ — Protection You Trust" },
      { property: "og:description", content: "Trusted medical alert systems and 24/7 monitoring for peace of mind." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = PRODUCTS.filter(p => 
    p.slug === "in-home-medical-system" || 
    p.slug === "personal-4g-care-watch" || 
    p.slug === "personal-alert-device-system"
  );

  return (
    <Layout>
      <ScrollAnimation />
      {/* HERO */}
      <section className="relative h-screen overflow-hidden text-navy-foreground">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Medical alert background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.8) saturate(1.3)'
            }}
          />
        </div>
        
        {/* Simple Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-brand/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-brand/70" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 md:py-28">
          <div className="space-y-8 text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold uppercase tracking-wider border border-white/20 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <ShieldCheck className="h-4 w-4 text-white" />
              <span className="text-white">#1 Trusted Medical Alert Service</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
                <span className="block text-white animate-slide-in-front" style={{ animationDelay: '0.4s' }}>Help is always</span>
                <span className="block text-brand-foreground animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                  just a button away
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
              24/7 emergency monitoring, GPS-enabled devices, and engraved medical IDs that speak for you when you can't.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-brand text-brand-foreground hover:bg-brand/90 px-8 py-6 text-lg animate-slide-in-up" style={{ animationDelay: '1s' }}
              >
                <Link to="/programs">
                  Choose Your Plan 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 text-lg animate-slide-in-up" style={{ animationDelay: '1.2s' }}
              >
                <a href="tel:18005551234">
                  <Phone className="mr-2 h-5 w-5" /> 
                  1-800-555-1234
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2 animate-slide-in-right" style={{ animationDelay: '1.4s' }}>
                <Star className="h-5 w-5 fill-brand text-brand" />
                <span className="font-medium">4.9/5 from 12,000+ reviews</span>
              </div>
              <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '1.6s' }}>
                <Award className="h-5 w-5 text-brand" />
                <span className="font-medium">UL-Certified Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
          {[
            { icon: Clock, label: "24/7 Monitoring", value: "Always On" },
            { icon: Users, label: "Members Protected", value: "1M+" },
            { icon: MapPin, label: "Nationwide Coverage", value: "4G LTE" },
            { icon: Award, label: "Certified Safe", value: "UL Listed" },
          ].map((stat, i) => (
            <div key={i} className="text-center animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
              <stat.icon className="mx-auto h-8 w-8 text-brand" />
              <div className="mt-2 font-display text-2xl font-bold text-navy">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-gradient-to-b from-background to-cream/50">
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand border border-brand/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Our Advanced Devices
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold text-navy md:text-5xl lg:text-6xl">
              Explore Our Featured 
              <span className="block text-brand">Protection Plans</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Comprehensive medical alert systems designed to keep you safe and connected, 
              with 24/7 monitoring and cutting-edge technology.
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, index) => (
              <div key={p.slug} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand/10 to-brand-foreground/10 px-8 py-4 border border-brand/20">
              <div className="text-left">
                <div className="font-display text-xl font-bold text-navy">Need help choosing?</div>
                <div className="text-sm text-muted-foreground">Our specialists are here to help</div>
              </div>
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 ml-4">
                <Link to="/contact">
                  Get Expert Advice <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MONITORING CTA */}
      <section className="bg-gradient-to-br from-cream to-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-3 lg:gap-20">
            {/* Image - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 flex items-center justify-center animate-on-scroll-left">
              <div className="relative w-full max-w-2xl">
                <img 
                  src={monitoring} 
                  alt="Emergency response specialist" 
                  loading="lazy" 
                  width={1600} 
                  height={1000} 
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute -top-4 -right-4 bg-brand text-brand-foreground px-6 py-3 rounded-full shadow-xl">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-bold">24/7 Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content - Takes 1 column on large screens */}
            <div className="flex items-center justify-center animate-on-scroll-right">
              <div className="space-y-8 w-full max-w-md">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy border border-navy/20">
                  <HeartPulse className="h-3.5 w-3.5" />
                  Real People. Real Help.
                </div>
                
                {/* Heading */}
                <div className="space-y-4">
                  <h2 className="font-display text-3xl font-bold text-navy lg:text-4xl leading-tight">
                    EMT-trained specialists, 
                    <span className="block text-brand">ready in seconds.</span>
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Press the button and you're instantly connected to a US-based, UL-certified response center. Our specialists stay on the line, dispatch help, and notify your loved ones — all in under 30 seconds on average.
                </p>
                
                {/* Features */}
                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Bilingual support — English & Spanish" },
                    { icon: ShieldCheck, text: "Personal health profile shared with EMS" },
                    { icon: Phone, text: "Family notification protocols" },
                    { icon: Clock, text: "Wellness check-in calls" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 mt-0.5">
                        <feature.icon className="h-3.5 w-3.5 text-brand" />
                      </div>
                      <span className="text-navy leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-brand to-brand/90 text-brand-foreground hover:from-brand/90 hover:to-brand px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full"
                >
                  <Link to="/why-us">
                    Why Choose MediAlert+ 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL ALERT TECHNOLOGY */}
      <section className="py-24 bg-gradient-to-b from-white to-cream/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand border border-brand/20">
                <ShieldCheck className="h-3.5 w-3.5" />
                Advanced Technology
              </div>
              
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-navy lg:text-4xl leading-tight">
                  Cutting-Edge Medical Alert 
                  <span className="block text-brand">Technology</span>
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art medical alert systems combine advanced GPS tracking, fall detection, and instant communication to keep you safe and connected 24/7.
              </p>
              
              {/* Features Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { 
                    icon: MapPin, 
                    title: "GPS Tracking", 
                    desc: "Real-time location monitoring with nationwide coverage"
                  },
                  { 
                    icon: HeartPulse, 
                    title: "Fall Detection", 
                    desc: "Automatic alerts when falls are detected"
                  },
                  { 
                    icon: Wifi, 
                    title: "4G LTE Network", 
                    desc: "Reliable connection anywhere in the country"
                  },
                  { 
                    icon: Battery, 
                    title: "Long Battery Life", 
                    desc: "Extended battery with backup power options"
                  }
                ].map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                        <feature.icon className="h-5 w-5 text-brand" />
                      </div>
                      <h3 className="font-semibold text-navy">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-13">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-brand text-brand-foreground hover:bg-brand/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Technology
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-navy/30 text-navy hover:bg-navy/5 px-8 py-4 text-lg"
                >
                  View Demo
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-navy/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-border/50">
                  {/* Custom SVG Illustration */}
                  <div className="aspect-square bg-gradient-to-br from-navy/5 to-brand/5 rounded-2xl flex items-center justify-center">
                    <svg width="400" height="400" viewBox="0 0 400 400" className="w-full h-full max-w-sm">
                      {/* Background Grid */}
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(136, 48, 47, 0.1)" strokeWidth="1"/>
                        </pattern>
                        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#88302F" />
                          <stop offset="100%" stopColor="#020742" />
                        </linearGradient>
                      </defs>
                      <rect width="400" height="400" fill="url(#grid)" />
                      
                      {/* Central Hub */}
                      <circle cx="200" cy="200" r="60" fill="url(#techGradient)" opacity="0.1"/>
                      <circle cx="200" cy="200" r="50" fill="white" stroke="url(#techGradient)" strokeWidth="3"/>
                      <text x="200" y="195" textAnchor="middle" fill="#020742" fontSize="14" fontWeight="bold">MEDICAL</text>
                      <text x="200" y="210" textAnchor="middle" fill="#020742" fontSize="14" fontWeight="bold">ALERT+</text>
                      
                      {/* Connected Devices */}
                      {/* Watch Device */}
                      <g transform="translate(100, 100)">
                        <rect x="-25" y="-35" width="50" height="70" rx="10" fill="white" stroke="#88302F" strokeWidth="2"/>
                        <rect x="-20" y="-30" width="40" height="50" rx="5" fill="#88302F" opacity="0.1"/>
                        <circle cx="0" cy="15" r="8" fill="#88302F"/>
                        <text x="0" y="45" textAnchor="middle" fill="#020742" fontSize="10" fontWeight="bold">WATCH</text>
                      </g>
                      
                      {/* Home Base */}
                      <g transform="translate(300, 100)">
                        <rect x="-30" y="-25" width="60" height="50" rx="8" fill="white" stroke="#020742" strokeWidth="2"/>
                        <rect x="-25" y="-20" width="50" height="35" rx="5" fill="#020742" opacity="0.1"/>
                        <circle cx="0" cy="0" r="10" fill="#020742"/>
                        <text x="0" y="35" textAnchor="middle" fill="#020742" fontSize="10" fontWeight="bold">HOME</text>
                      </g>
                      
                      {/* Mobile Device */}
                      <g transform="translate(100, 300)">
                        <rect x="-20" y="-30" width="40" height="60" rx="8" fill="white" stroke="#88302F" strokeWidth="2"/>
                        <rect x="-15" y="-25" width="30" height="45" rx="5" fill="#88302F" opacity="0.1"/>
                        <circle cx="0" cy="5" r="6" fill="#88302F"/>
                        <text x="0" y="40" textAnchor="middle" fill="#020742" fontSize="10" fontWeight="bold">MOBILE</text>
                      </g>
                      
                      {/* Pendant */}
                      <g transform="translate(300, 300)">
                        <circle cx="0" cy="0" r="25" fill="white" stroke="#020742" strokeWidth="2"/>
                        <circle cx="0" cy="0" r="20" fill="#020742" opacity="0.1"/>
                        <circle cx="0" cy="0" r="8" fill="#020742"/>
                        <text x="0" y="40" textAnchor="middle" fill="#020742" fontSize="10" fontWeight="bold">PENDANT</text>
                      </g>
                      
                      {/* Connection Lines */}
                      <line x1="125" y1="125" x2="175" y2="175" stroke="#88302F" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                      <line x1="275" y1="125" x2="225" y2="175" stroke="#020742" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                      <line x1="125" y1="275" x2="175" y2="225" stroke="#88302F" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                      <line x1="275" y1="275" x2="225" y2="225" stroke="#020742" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                      
                      {/* Signal Waves */}
                      <circle cx="200" cy="200" r="80" fill="none" stroke="url(#techGradient)" strokeWidth="2" opacity="0.3"/>
                      <circle cx="200" cy="200" r="100" fill="none" stroke="url(#techGradient)" strokeWidth="1" opacity="0.2"/>
                      <circle cx="200" cy="200" r="120" fill="none" stroke="url(#techGradient)" strokeWidth="1" opacity="0.1"/>
                    </svg>
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-brand">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-navy">&lt;30s</div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-brand">1M+</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-24 bg-gradient-to-b from-cream/50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy border border-navy/20">
                <Phone className="h-3.5 w-3.5" />
                Get Started Today
              </div>
              
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-navy lg:text-4xl leading-tight">
                  Request Your 
                  <span className="block text-brand">Free Consultation</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and our specialists will contact you within 24 hours to discuss the perfect medical alert solution for your needs.
                </p>
              </div>
              
              {/* Form */}
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Phone *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Address *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                    placeholder="123 Main Street"
                  />
                </div>
                
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">City *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                      placeholder="New York"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">State *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                      placeholder="NY"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">ZIP *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
                      placeholder="10001"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-white focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors resize-none"
                    placeholder="Tell us about your specific needs or concerns..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand to-brand/90 text-brand-foreground hover:from-brand/90 hover:to-brand px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Request Brochure
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  <span className="text-sm text-muted-foreground">Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" />
                  <span className="text-sm text-muted-foreground">24-hour Response</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="flex items-center justify-center pl-8">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-navy/20 rounded-3xl blur-3xl" />
                <div className="relative">
                  <img 
                    src={caregiver} 
                    alt="Medical alert specialist helping customer" 
                    loading="lazy" 
                    width={500} 
                    height={1000} 
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                    style={{ minHeight: '700px', maxHeight: '800px' }}
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand" />
                      <span className="text-sm font-semibold text-navy">Call Us</span>
                    </div>
                  </div>
                  
                  {/* Contact Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-white">1-800-555-1234</div>
                      <div className="text-sm text-white/80">Available 24/7 for immediate assistance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Member Stories</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">Loved by families nationwide</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Margaret L.", role: "Member, 4 years", quote: "After my fall last winter, the response was immediate. They called my daughter before the ambulance even arrived." },
              { name: "James & Carol R.", role: "Caregivers", quote: "Mom finally has her independence back, and we have peace of mind. The watch is discreet and easy for her to use." },
              { name: "Dr. Anne S.", role: "Family Physician", quote: "I recommend MediAlert+ to every patient over 65. The medical ID has helped EMS respond faster more times than I can count." },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="flex gap-1 text-brand">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-brand" />)}</div>
                <blockquote className="mt-4 text-foreground/80">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-brand text-brand-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to feel safer today?</h2>
            <p className="mt-2 text-brand-foreground/85">Free equipment. Free shipping. No long-term contracts.</p>
          </div>
          <Button asChild size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
            <Link to="/contact">Get Started Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
