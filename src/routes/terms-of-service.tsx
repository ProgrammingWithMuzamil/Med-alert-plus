import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileText, AlertTriangle, Clock, Users, CreditCard, Heart, CheckCircle } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service - MediAlert+" },
      { name: "description", content: "MediAlert+ terms of service and conditions. Professional medical alert monitoring services agreement." },
      { property: "og:title", content: "Terms of Service - MediAlert+" },
      { property: "og:description", content: "Professional medical alert services terms and conditions." },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  const sections = [
    {
      title: "Service Agreement",
      icon: FileText,
      content: [
        "MediAlert+ provides 24/7 medical alert monitoring services",
        "Services are provided on a subscription basis with monthly billing",
        "You must be at least 18 years old to subscribe to our services",
        "Services are intended for personal emergency response use only",
        "You agree to provide accurate and complete information"
      ]
    },
    {
      title: "Payment Terms",
      icon: CreditCard,
      content: [
        "Monthly subscription fees are billed in advance",
        "Payment methods include credit card, debit card, or bank transfer",
        "All fees are non-refundable except as required by law",
        "Prices may change with 30 days written notice",
        "Late payments may result in service interruption"
      ]
    },
    {
      title: "Service Limitations",
      icon: AlertTriangle,
      content: [
        "MediAlert+ is not a substitute for professional medical care",
        "We do not provide medical diagnosis or treatment",
        "Service availability depends on cellular network coverage",
        "Devices require regular maintenance and battery replacement",
        "We are not liable for device malfunction or user error"
      ]
    },
    {
      title: "Emergency Response",
      icon: Clock,
      content: [
        "We coordinate with emergency services when appropriate",
        "Response times depend on local emergency services",
        "We notify designated emergency contacts during emergencies",
        "Medical information is shared only with authorized personnel",
        "We stay on the line until help arrives when possible"
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: [
        "Maintain your device in good working condition",
        "Keep your contact information up to date",
        "Test your device regularly as recommended",
        "Use the service only for legitimate emergency situations",
        "Follow all device usage and safety guidelines"
      ]
    }
  ];

  return (
    <Layout>
      <PageHero 
        eyebrow="Terms of Service" 
        title="Professional Medical Alert Services Agreement" 
        subtitle="Terms and conditions for MediAlert+ medical alert monitoring services and emergency response." 
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-brand" />
              <h2 className="font-display text-2xl font-bold text-navy">Terms and Conditions</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to MediAlert+. These Terms of Service govern your use of our medical alert monitoring services. 
              By subscribing to our services, you agree to these terms and conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our services. If you have any questions, please contact our customer service team.
            </p>
          </div>

          {/* Service Terms Sections */}
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{section.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Important Disclaimers */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h3 className="font-display text-xl font-bold text-red-900">Important Disclaimers</h3>
            </div>
            <div className="space-y-4 text-red-800">
              <p>
                <strong>Medical Emergency:</strong> MediAlert+ is not a substitute for professional medical care. 
                In case of a medical emergency, always call 911 or your local emergency services first.
              </p>
              <p>
                <strong>Device Limitations:</strong> Our devices depend on cellular networks and power sources. 
                Service may be interrupted due to technical issues, network outages, or power failures.
              </p>
              <p>
                <strong>Response Times:</strong> While we strive for rapid response, actual emergency response times 
                depend on local emergency services and factors beyond our control.
              </p>
            </div>
          </div>

          {/* Liability and Warranty */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <h3 className="font-display text-xl font-bold text-navy mb-6">Liability and Warranty</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-navy mb-2">Limited Liability</h4>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, MediAlert+ shall not be liable for any indirect, incidental, 
                  special, or consequential damages arising from your use of our services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-2">Service Warranty</h4>
                <p className="text-muted-foreground">
                  We warrant that our services will be performed in a professional manner. If you're not satisfied 
                  with our services, we will work to resolve the issue or offer a prorated refund.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-2">Indemnification</h4>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold MediAlert+ harmless from any claims arising from your use 
                  or misuse of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8">
            <h3 className="font-display text-xl font-bold text-navy mb-4">Service Termination</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>• You may cancel your subscription at any time with 30 days written notice</p>
              <p>• MediAlert+ may terminate service for violations of these terms</p>
              <p>• Upon termination, you must return all MediAlert+ equipment</p>
              <p>• Final billing will include any outstanding charges</p>
              <p>• Emergency contact information will be securely disposed of</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-brand" />
              <h3 className="font-display text-xl font-bold text-navy">Questions About Our Terms?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please contact our legal department:
            </p>
            <div className="space-y-2">
              <p className="text-navy">Email: legal@medialertplus.com</p>
              <p className="text-navy">Phone: 1-800-555-1234</p>
              <p className="text-navy">Address: 100 Health Plaza, Boston, MA 02118</p>
            </div>
            <p className="text-muted-foreground mt-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
