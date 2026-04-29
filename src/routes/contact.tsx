import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Users, Headphones, MessageCircle, Star, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import caregiver from "@/assets/4.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MediAlert+ — Speak With Our Care Team" },
      { name: "description", content: "Talk to a MediAlert+ specialist 24/7 about plans, devices, or partnerships. Call, email, or send a message." },
      { property: "og:title", content: "Contact MediAlert+" },
      { property: "og:description", content: "Reach our care team 24/7 — we're here to help." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! Our care team will reach out within 1 business day.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "1-800-555-1234",
      secondary: "Available 24/7/365",
      description: "Speak directly with our care specialists"
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "care@medialertplus.com",
      secondary: "Replies within 1 business day",
      description: "Send detailed inquiries and documentation"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Chat Available Now",
      secondary: "Average wait: < 2 minutes",
      description: "Get instant answers to your questions"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "100 Health Plaza",
      secondary: "Boston, MA 02118",
      description: "Schedule an in-person consultation"
    }
  ];

  const reasons = [
    { icon: ShieldCheck, title: "24/7 Availability", description: "Round-the-clock support for emergencies" },
    { icon: Users, title: "Expert Team", description: "EMT-trained specialists ready to help" },
    { icon: Headphones, title: "Personalized Service", description: "Tailored solutions for your needs" },
    { icon: Star, title: "5-Star Support", description: "Rated 4.9/5 by over 12,000 customers" }
  ];

  return (
    <Layout>
      {/* Custom Hero with Background Image */}
      <section className="relative h-screen overflow-hidden text-navy-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={caregiver}
            alt="Contact MediAlert background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.6) saturate(1.3)'
            }}
          />
        </div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/25 via-navy/15 to-navy/25 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4">
            <div className="mb-4 animate-fade-in-up">
              <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse animate-bounce-in">
                Contact Us
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200 animate-slide-in-left">
              We're Here to Help, 24/7
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 animate-slide-in-right">
              Speak with real people who care. No automated systems, just compassionate support from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you. We're always available when you need us.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand mb-4">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{method.title}</h3>
                <div className="font-semibold text-navy mb-1">{method.primary}</div>
                <div className="text-sm text-muted-foreground mb-3">{method.secondary}</div>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left Side - Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-navy mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions about our medical alert systems? Need help choosing the right plan? 
                  Our team is ready to provide personalized assistance.
                </p>
              </div>

              <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field id="first-name" label="First Name" required />
                  <Field id="last-name" label="Last Name" required />
                  <Field id="email" label="Email Address" type="email" required />
                  <Field id="phone" label="Phone Number" type="tel" />
                  <Field id="subject" label="Subject" required placeholder="How can we help?" />
                  <Field id="urgency" label="Urgency" placeholder="Select urgency level" />
                </div>
                
                <div className="mt-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="mt-2 min-h-[160px]" 
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="mt-6">
                  <Label htmlFor="best-time">Best Time to Contact</Label>
                  <select 
                    id="best-time" 
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option>Any time</option>
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 5PM)</option>
                    <option>Evening (5PM - 8PM)</option>
                  </select>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <ShieldCheck className="inline h-4 w-4 mr-1" />
                    Your information is secure and confidential
                  </div>
                  <Button 
                    type="submit" 
                    disabled={sending} 
                    size="lg" 
                    className="bg-brand text-brand-foreground hover:bg-brand/90 px-8"
                  >
                    {sending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Side - Image and Contact Info */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={caregiver} 
                  alt="MediAlert+ care team member helping a senior" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="font-display text-xl font-bold text-navy mb-2">24/7 Support Available</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our dedicated team is always here to help you and your loved ones.
                    </p>
                    <div className="flex items-center gap-2 text-brand font-semibold">
                      <Phone className="h-4 w-4" />
                      1-800-555-1234
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Methods */}
              <div className="grid gap-4">
                {[
                  { icon: Phone, title: "Call Us", info: "1-800-555-1234", sub: "24/7 Available" },
                  { icon: Mail, title: "Email", info: "care@medialertplus.com", sub: "Quick Response" },
                  { icon: MapPin, title: "Visit", info: "Boston, MA", sub: "By Appointment" }
                ].map((method, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{method.title}</h4>
                      <div className="text-sm text-brand font-medium">{method.info}</div>
                      <div className="text-xs text-muted-foreground">{method.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Alert */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-6 w-6 text-red-600" />
                  <h3 className="font-bold text-red-900">Emergency Support</h3>
                </div>
                <p className="text-red-800 text-sm mb-3">
                  For immediate medical emergencies, please call 911 or press your medical alert button.
                </p>
                <div className="text-red-900 font-semibold">24/7 Emergency Monitoring Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ id, label, type = "text", required, placeholder }: { id: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={id}>{label}{required && <span className="text-brand"> *</span>}</Label>
      <Input id={id} type={type} required={required} placeholder={placeholder} className="mt-2" />
    </div>
  );
}

function ContactItem({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-display text-lg font-bold text-navy">{title}</div>
        {lines.map((l) => (<div key={l} className="text-sm text-muted-foreground">{l}</div>))}
      </div>
    </div>
  );
}
