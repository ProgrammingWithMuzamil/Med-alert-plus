import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Clock, Users, Phone, Heart, AlertTriangle, CheckCircle, ArrowRight, Headphones, Wifi, Battery, MapPin } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import howItWorksBg from "@/assets/1.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works - MediAlert+ Medical Alert Systems" },
      { name: "description", content: "Learn how MediAlert+ medical alert systems work - from setup to 24/7 emergency monitoring. Simple, reliable protection for peace of mind." },
      { property: "og:title", content: "How MediAlert+ Works" },
      { property: "og:description", content: "Simple setup, 24/7 protection, complete peace of mind." },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Plan",
      description: "Select the perfect medical alert system for your needs - in-home, mobile, or comprehensive protection.",
      icon: ShieldCheck,
      features: ["Free consultation", "Expert recommendations", "Flexible pricing plans"]
    },
    {
      number: 2,
      title: "Quick Setup",
      description: "Our team helps you set up your device in minutes. No complicated installation or technical knowledge needed.",
      icon: Clock,
      features: ["Professional installation", "User training", "24/7 support"]
    },
    {
      number: 3,
      title: "Press for Help",
      description: "In an emergency, simply press your alert button. Instantly connect to our EMT-trained monitoring center.",
      icon: Phone,
      features: ["One-touch activation", "Voice communication", "GPS tracking"]
    },
    {
      number: 4,
      title: "24/7 Response",
      description: "Our certified specialists assess your situation, contact emergency services, and notify your loved ones.",
      icon: Users,
      features: ["EMT-trained staff", "Emergency coordination", "Family notifications"]
    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "Nationwide Coverage",
      description: "4G LTE connectivity ensures you're protected anywhere in the country, at home or on the go."
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Extended battery life with backup power ensures protection even during power outages."
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Advanced GPS technology pinpoints your location for faster emergency response."
    },
    {
      icon: Headphones,
      title: "Two-Way Communication",
      description: "Speak directly with our monitoring team through your device's built-in speaker."
    }
  ];

  const technology = [
    {
      title: "UL-Certified Monitoring",
      description: "Our monitoring centers meet the highest safety standards in the industry.",
      icon: ShieldCheck
    },
    {
      title: "EMT-Trained Specialists",
      description: "Every response specialist is medically trained to handle emergencies professionally.",
      icon: Heart
    },
    {
      title: "Advanced Fall Detection",
      description: "Automatic fall detection technology calls for help even if you can't press the button.",
      icon: AlertTriangle
    },
    {
      title: "Medical Information Storage",
      description: "Your critical medical information is securely stored and instantly available to responders.",
      icon: CheckCircle
    }
  ];

  return (
    <Layout>
      {/* Custom Hero with Background Image */}
      <section className="relative h-screen overflow-hidden text-navy-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={howItWorksBg}
            alt="Medical alert how it works background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.7) saturate(1.3)'
            }}
          />
        </div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/40 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4">
            <div className="mb-4 animate-fade-in-up">
              <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse">
                How It Works
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Simple Setup, Complete Protection
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              From choosing your plan to 24/7 emergency monitoring, MediAlert+ makes staying safe simple and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">4 Simple Steps to Protection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with MediAlert+ is easy. From consultation to 24/7 monitoring, we're with you every step of the way.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 bg-brand text-white rounded-full text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand/10 text-brand rounded-full mx-auto mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2 text-sm">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-brand flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand/20 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Advanced Protection Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our medical alert systems combine cutting-edge technology with human compassion to keep you safe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-brand/10 text-brand rounded-full mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={howItWorksBg}
            alt="Medical alert technology background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.9) saturate(1.2)'
            }}
          />
        </div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/90 z-10" />
        
        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Trusted Technology & Expert Care</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We combine certified technology with medical expertise to provide the most reliable protection available.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technology.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full shadow-lg mb-4">
                  <tech.icon className="h-8 w-8 text-brand" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-sm text-white/80">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Emergency Response Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When you need help, every second counts. Here's how our rapid response system works.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                  <AlertTriangle className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">Alert Received</h3>
                <p className="text-muted-foreground">
                  Your alert signal is instantly received at our monitoring center. We know who you are and where you are.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-brand/10 rounded-full mb-4">
                  <Phone className="h-10 w-10 text-brand" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">Immediate Contact</h3>
                <p className="text-muted-foreground">
                  Our EMT-trained specialist speaks with you through your device to assess the situation.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">Help Dispatched</h3>
                <p className="text-muted-foreground">
                  Emergency services are contacted with your location and medical information. Family is notified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand to-brand/90 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of families who trust MediAlert+ for their safety and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
              <Link to="/programs">Choose Your Plan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Speak with a Specialist</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
