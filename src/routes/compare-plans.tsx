import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, CheckCircle, X, Star, Users, Phone, Wifi, Battery, MapPin, Heart, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/compare-plans")({
  head: () => ({
    meta: [
      { title: "Compare Protection Plans - MediAlert+" },
      { name: "description", content: "Compare MediAlert+ medical alert protection plans to find the perfect fit for your needs. Features, pricing, and coverage comparison." },
      { property: "og:title", content: "Compare Plans - MediAlert+" },
      { property: "og:description", content: "Find the right protection plan for your needs." },
    ],
  }),
  component: ComparePlans,
});

function ComparePlans() {
  const plans = [
    {
      name: "Basic Protection",
      price: "$29.99",
      period: "per month",
      recommended: false,
      features: {
        "24/7 Emergency Monitoring": true,
        "In-Home Base Station": true,
        "Help Button": true,
        "Family Notifications": true,
        "Basic Fall Detection": true,
        "Mobile GPS Device": false,
        "Advanced Fall Detection": false,
        "Voice Communication": false,
        "Medication Reminders": false,
        "Multiple Devices": false,
        "Daily Check-in Calls": false,
        "Priority Response": false,
        "Premium Support": false,
        "Waterproof Device": false,
        "Battery Backup": true
      }
    },
    {
      name: "Advanced Protection",
      price: "$39.99",
      period: "per month",
      recommended: true,
      features: {
        "24/7 Emergency Monitoring": true,
        "In-Home Base Station": true,
        "Help Button": true,
        "Family Notifications": true,
        "Basic Fall Detection": true,
        "Mobile GPS Device": true,
        "Advanced Fall Detection": true,
        "Voice Communication": true,
        "Medication Reminders": true,
        "Multiple Devices": false,
        "Daily Check-in Calls": false,
        "Priority Response": false,
        "Premium Support": false,
        "Waterproof Device": true,
        "Battery Backup": true
      }
    },
    {
      name: "Complete Protection",
      price: "$49.99",
      period: "per month",
      recommended: false,
      features: {
        "24/7 Emergency Monitoring": true,
        "In-Home Base Station": true,
        "Help Button": true,
        "Family Notifications": true,
        "Basic Fall Detection": true,
        "Mobile GPS Device": true,
        "Advanced Fall Detection": true,
        "Voice Communication": true,
        "Medication Reminders": true,
        "Multiple Devices": true,
        "Daily Check-in Calls": true,
        "Priority Response": true,
        "Premium Support": true,
        "Waterproof Device": true,
        "Battery Backup": true
      }
    }
  ];

  const featureCategories = {
    "Core Protection": ["24/7 Emergency Monitoring", "In-Home Base Station", "Help Button", "Family Notifications"],
    "Detection Technology": ["Basic Fall Detection", "Advanced Fall Detection", "Waterproof Device"],
    "Mobile Features": ["Mobile GPS Device", "Voice Communication", "Battery Backup"],
    "Advanced Services": ["Medication Reminders", "Multiple Devices", "Daily Check-in Calls", "Priority Response", "Premium Support"]
  };

  return (
    <Layout>
      <PageHero 
        eyebrow="Compare Plans" 
        title="Find Your Perfect Protection" 
        subtitle="Compare our medical alert protection plans side-by-side to choose the best coverage for your needs and budget." 
      />

      {/* Comparison Table */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl border border-gray-200">
              {/* Header */}
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-navy">Features</th>
                  {plans.map((plan, index) => (
                    <th key={index} className={`p-6 text-center ${plan.recommended ? 'bg-brand/10' : ''}`}>
                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-bold text-navy">{plan.name}</h3>
                        <div className="text-2xl font-bold text-brand">{plan.price}</div>
                        <div className="text-sm text-muted-foreground">{plan.period}</div>
                        {plan.recommended && (
                          <div className="inline-flex items-center gap-1 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                            <Star className="h-3 w-3 fill-current" />
                            RECOMMENDED
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature Rows */}
              <tbody>
                {Object.entries(featureCategories).map(([category, features]) => (
                  <React.Fragment key={category}>
                    <tr className="bg-gray-50">
                      <td colSpan={4} className="p-4 font-semibold text-navy">
                        {category}
                      </td>
                    </tr>
                    {features.map((feature) => (
                      <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-medium text-navy">{feature}</td>
                        {plans.map((plan, planIndex) => (
                          <td key={planIndex} className="p-4 text-center">
                            {plan.features[feature] ? (
                              <div className="flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <X className="h-5 w-5 text-gray-300" />
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>

              {/* Footer with CTA */}
              <tfoot>
                <tr className="bg-gray-50">
                  <td className="p-6"></td>
                  {plans.map((plan, index) => (
                    <td key={index} className="p-6 text-center">
                      <Button 
                        asChild 
                        className={`w-full ${plan.recommended ? 'bg-brand text-brand-foreground' : 'bg-gray-100 text-navy hover:bg-gray-200'}`}
                      >
                        <Link to="/renew-plans">
                          {plan.recommended ? 'Get Started' : 'Choose Plan'} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Choose Your Protection Plan */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Choose Your Protection Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your needs with comprehensive protection features.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Basic Protection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Basic Protection</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand">$29.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>24/7 Monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>In-Home Base Station</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Help Button</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full bg-gray-100 text-navy hover:bg-gray-200">
                  <Link to="/renew-plans">
                    Choose Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Advanced Protection */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-brand ring-2 ring-brand/20 overflow-hidden hover:shadow-2xl transition-shadow relative">
              <div className="absolute top-4 right-4">
                <div className="bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                  RECOMMENDED
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Advanced Protection</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand">$39.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Mobile GPS Device</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Advanced Fall Detection</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full bg-brand text-brand-foreground hover:bg-brand/90">
                  <Link to="/renew-plans">
                    Choose Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Complete Protection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Complete Protection</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand">$49.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Everything in Advanced</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Multiple Devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span>Priority Response</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full bg-gray-100 text-navy hover:bg-gray-200">
                  <Link to="/renew-plans">
                    Choose Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our protection specialists can help you select the perfect plan based on your specific needs and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
              <Link to="/contact">Speak with a Specialist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:18005551234">
                <Phone className="mr-2 h-4 w-4" />
                Call 1-800-555-1234
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
