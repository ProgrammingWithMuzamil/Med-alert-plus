import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Home, Wifi, Battery, Users } from "lucide-react";
import inhome from "@/assets/product-inhome.jpg";

export const Route = createFileRoute("/guides/in-home-medical-system")({
  head: () => ({
    meta: [
      { title: "In-Home Medical System Setup Guide - MediAlert+" },
      { name: "description", content: "Complete setup guide for the In-Home Medical System with step-by-step instructions." },
    ],
  }),
  component: InHomeGuide,
});

function InHomeGuide() {
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
                In-Home Medical System
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete setup instructions for your 24/7 push-button help station with wireless range and battery backup.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={inhome} alt="In-Home Medical System" className="w-full rounded-2xl shadow-xl" />
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
                icon: Home, 
                title: "Base Station Setup", 
                desc: "Place the base station in a central location with access to power and phone line.",
                steps: ["Connect power adapter", "Connect phone line", "Wait for green status light"]
              },
              { 
                icon: Wifi, 
                title: "Button Pairing", 
                desc: "Pair your wireless help buttons with the base station using learning mode.",
                steps: ["Enter learning mode", "Press help button", "Confirm pairing", "Exit learning mode"]
              },
              { 
                icon: Battery, 
                title: "Battery Backup", 
                desc: "Ensure 4-day battery backup is properly installed and functional.",
                steps: ["Install backup batteries", "Test power outage", "Verify backup status"]
              },
              { 
                icon: Users, 
                title: "Test Connection", 
                desc: "Test the connection to our monitoring center to ensure proper operation.",
                steps: ["Press help button", "Speak with operator", "Confirm emergency contact", "Complete test"]
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
