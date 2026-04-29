import { Link } from "@tanstack/react-router";
import { HeartPulse, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ShieldCheck, Award, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Top Section with Features */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                <ShieldCheck className="h-6 w-6 text-brand" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white">UL-Certified</h3>
                <p className="text-sm text-navy-foreground/70">Professional Monitoring</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                <Clock className="h-6 w-6 text-brand" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white">24/7 Response</h3>
                <p className="text-sm text-navy-foreground/70">Always Here to Help</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                <Award className="h-6 w-6 text-brand" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white">BBB A+ Rated</h3>
                <p className="text-sm text-navy-foreground/70">Trusted Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-5">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div className="font-display text-xl font-bold">MediAlert<span className="text-brand">+</span></div>
          </div>
          <p className="text-sm text-navy-foreground/70 mb-4 max-w-md">
            Your trusted partner in medical alert systems and emergency monitoring. 
            Providing peace of mind for families across the nation with cutting-edge technology 
            and compassionate care.
          </p>
          <div className="flex gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/medical-ids" className="hover:text-brand transition-colors">Medical IDs</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Alert Systems</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Mobile Devices</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Home Monitoring</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Accessories</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/medical-ids" className="hover:text-brand transition-colors">Medical IDs</Link></li>
            <li><Link to="/protection" className="hover:text-brand transition-colors">24/7 Protection</Link></li>
            <li><Link to="/programs" className="hover:text-brand transition-colors">Programs</Link></li>
            <li><Link to="/why-us" className="hover:text-brand transition-colors">Why Choose Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-brand transition-colors">How It Works</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-brand flex-shrink-0" /> 
              <div>
                <div className="font-medium">24/7 Support</div>
                <div>1-800-555-1234</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand flex-shrink-0" /> 
              <div>
                <div className="font-medium">Email Us</div>
                <div>care@medialertplus.com</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand flex-shrink-0" /> 
              <div>
                <div className="font-medium">Headquarters</div>
                <div>100 Health Plaza, Boston, MA</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6 text-xs text-navy-foreground/60">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} MediAlert+. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-brand transition-colors">Terms of Service</Link>
              <Link to="/privacy-policy" className="hover:text-brand transition-colors">HIPAA Compliance</Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-brand/20 px-2 py-1 rounded text-brand">HIPAA Compliant</span>
            <span className="bg-brand/20 px-2 py-1 rounded text-brand">UL Certified</span>
            <span className="bg-brand/20 px-2 py-1 rounded text-brand">BBB A+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
