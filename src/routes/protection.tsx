import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Clock, Users, Phone, Heart, Star, ArrowRight, CheckCircle, AlertTriangle, Wifi, Battery, MapPin } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/protection")({
  head: () => ({
    meta: [
      { title: "24/7 Protection - MediAlert+ Medical Alert Systems" },
      { name: "description", content: "Comprehensive 24/7 medical alert protection with emergency monitoring, GPS tracking, and nationwide coverage. Stay safe with MediAlert+." },
      { property: "og:title", content: "24/7 Protection - MediAlert+" },
      { property: "og:description", content: "Round-the-clock medical alert protection for peace of mind." },
    ],
  }),
  component: Protection,
});

function Protection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Our UL-certified monitoring center is always staffed with EMT-trained specialists ready to help.",
      highlight: true
    },
    {
      icon: ShieldCheck,
      title: "Emergency Response",
      description: "Instant connection to emergency services with your location and medical information.",
      highlight: false
    },
    {
      icon: Users,
      title: "Family Notifications",
      description: "Your loved ones are immediately informed during any emergency situation.",
      highlight: false
    },
    {
      icon: Phone,
      title: "Two-Way Communication",
      description: "Speak directly with our monitoring team through your device's built-in speaker.",
      highlight: false
    },
    {
      icon: Wifi,
      title: "Nationwide Coverage",
      description: "4G LTE connectivity ensures protection anywhere in the country.",
      highlight: false
    },
    {
      icon: Battery,
      title: "Reliable Power",
      description: "Extended battery life with backup power for continuous protection.",
      highlight: false
    }
  ];

  const plans = [
    {
      name: "Basic Protection",
      price: "$29.99",
      features: [
        "24/7 Emergency Monitoring",
        "In-Home Base Station",
        "Help Button",
        "Family Notifications",
        "Basic Fall Detection"
      ],
      recommended: false
    },
    {
      name: "Advanced Protection",
      price: "$39.99",
      features: [
        "Everything in Basic",
        "Mobile GPS Device",
        "Advanced Fall Detection",
        "Voice Communication",
        "Medication Reminders"
      ],
      recommended: true
    },
    {
      name: "Complete Protection",
      price: "$49.99",
      features: [
        "Everything in Advanced",
        "Multiple Devices",
        "Daily Check-in Calls",
        "Priority Response",
        "Premium Support"
      ],
      recommended: false
    }
  ];

  return (
    <Layout>
      <PageHero 
        eyebrow="24/7 Protection" 
        title="Always There When You Need Us Most" 
        subtitle="Round-the-clock medical alert monitoring with instant emergency response. Your safety is our priority, 24 hours a day, 365 days a year." 
      />

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Complete Protection Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive protection system combines advanced technology with human care to keep you safe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg border ${feature.highlight ? 'border-brand' : 'border-gray-200'} hover:shadow-xl transition-shadow ${feature.highlight ? 'ring-2 ring-brand/20' : ''}`}>
                <div className={`flex items-center justify-center w-12 h-12 ${feature.highlight ? 'bg-brand text-white' : 'bg-brand/10 text-brand'} rounded-full mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                {feature.highlight && (
                  <div className="mt-4 text-xs font-semibold text-brand uppercase tracking-wider">Most Important</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Plans */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Choose Your Protection Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the plan that best fits your needs. All plans include 24/7 monitoring and emergency response.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl border ${plan.recommended ? 'border-brand ring-2 ring-brand/20' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand text-white px-4 py-1 rounded-full text-sm font-semibold">
                      RECOMMENDED
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-brand">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full ${plan.recommended ? 'bg-brand text-brand-foreground' : 'bg-gray-100 text-navy hover:bg-gray-200'}`}>
                    <Link to="/renew-plans">
                      {plan.recommended ? 'Get Started' : 'Choose Plan'} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-brand/5 to-brand/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">How 24/7 Protection Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From alert to response, our system ensures you get help when you need it most.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">1. Press for Help</h3>
              <p className="text-muted-foreground">
                Press your alert button or our system detects a fall. Instantly connects to our monitoring center.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                <Phone className="h-8 w-8 text-brand" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">2. We Respond</h3>
              <p className="text-muted-foreground">
                Our EMT-trained specialist speaks with you, assesses the situation, and gets help on the way.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">3. Help Arrives</h3>
              <p className="text-muted-foreground">
                Emergency services are dispatched with your location and medical information. Family is notified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand to-brand/90 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready for Complete Protection?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of families who trust MediAlert+ for 24/7 safety and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
              <Link to="/renew-plans">Get Protected Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/compare-plans">Compare Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
