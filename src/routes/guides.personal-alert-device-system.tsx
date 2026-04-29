import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Smartphone, Wifi, MapPin, Users } from "lucide-react";
import mobile from "@/assets/product-mobile.jpg";

export const Route = createFileRoute("/guides/personal-alert-device-system")({
  head: () => ({
    meta: [
      { title: "Personal Alert Device System Setup Guide - MediAlert+" },
      { name: "description", content: "Complete setup guide for the Personal Alert Device System with step-by-step instructions." },
    ],
  }),
  component: DeviceGuide,
});

function DeviceGuide() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                Setup Guide
              </div>
              <h1 className="font-display text-4xl font-bold text-navy md:text-5xl mb-4">
                Personal Alert Device System
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete setup instructions for your SmartGo 4G mobile device with nationwide coverage and GPS tracking.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={mobile} alt="Personal Alert Device" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>

        {/* Setup Guide Image */}
        <div className="mb-12 bg-gradient-to-br from-navy/10 to-brand/10 rounded-2xl p-8 border border-navy/20">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-bold text-navy mb-2">CL52-4G PENDANT Setup</h3>
              <p className="text-muted-foreground">MedGuard Alert, Inc.</p>
            </div>
            
            {/* Setup Steps */}
            <div className="space-y-4">
              {[
                { step: "1", instruction: "Press and hold the Multifunction Button for 6 seconds until it enters 'Learning Mode'." },
                { step: "2", instruction: "Press the Personal Help Button." },
                { step: "3", instruction: "Press the Multifunction Button again to exit 'Learning Mode'." },
                { step: "4", instruction: "Test the device." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground font-bold text-sm">
                    {item.step}
                  </div>
                  <p className="text-navy leading-relaxed">{item.instruction}</p>
                </div>
              ))}
            </div>
            
            {/* Note */}
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Used buttons must be returned.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Setup Steps */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Complete Setup Process</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { 
                icon: Smartphone, 
                title: "Device Activation", 
                desc: "Power on and activate your SmartGo 4G mobile device.",
                steps: ["Charge device fully", "Press and hold power button", "Wait for network connection", "Complete activation"]
              },
              { 
                icon: Wifi, 
                title: "4G Network Setup", 
                desc: "Connect to nationwide 4G LTE network for coverage anywhere.",
                steps: ["Verify 4G signal", "Test network connectivity", "Configure emergency contacts", "Test data connection"]
              },
              { 
                icon: MapPin, 
                title: "GPS Configuration", 
                desc: "Set up GPS tracking and location services for emergency response.",
                steps: ["Enable GPS tracking", "Set safe zones", "Test location accuracy", "Configure geofencing"]
              },
              { 
                icon: Users, 
                title: "Emergency Testing", 
                desc: "Test all emergency features to ensure proper operation.",
                steps: ["Test SOS button", "Verify GPS location", "Test two-way communication", "Complete monitoring test"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-xl border border-border/50 shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                    <section.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">{section.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{section.desc}</p>
                <ul className="space-y-2">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center gap-2 text-sm text-navy">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="bg-gradient-to-r from-brand/10 to-brand-foreground/10 rounded-2xl p-8 border border-brand/20">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available 24/7 to help you set up your device and answer any questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-brand text-brand-foreground hover:bg-brand/90">
              Call Support: 1-800-555-1234
            </Button>
            <Button variant="outline" className="border-brand/30 text-brand hover:bg-brand/10">
              Live Chat Support
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
