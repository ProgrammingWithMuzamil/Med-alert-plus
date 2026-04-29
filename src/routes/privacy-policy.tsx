import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, Eye, User, Database, Mail, Phone } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - MediAlert+" },
      { name: "description", content: "MediAlert+ privacy policy - How we collect, use, and protect your personal information. HIPAA compliant medical alert services." },
      { property: "og:title", content: "Privacy Policy - MediAlert+" },
      { property: "og:description", content: "Your privacy is our priority. Learn how we protect your information." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal identification information (name, address, phone, email)",
        "Medical information relevant to emergency response",
        "Payment and billing information",
        "Device usage and monitoring data",
        "Emergency response history and communications"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "Provide 24/7 emergency monitoring and response",
        "Maintain and improve our medical alert services",
        "Communicate with you about your account and services",
        "Process payments and manage your subscription",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      title: "Information Protection",
      icon: Lock,
      content: [
        "HIPAA-compliant data protection and security measures",
        "Encrypted data transmission and storage",
        "Limited access to authorized personnel only",
        "Regular security audits and updates",
        "Secure backup systems and disaster recovery"
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: User,
      content: [
        "Access to your personal information",
        "Correction of inaccurate information",
        "Opt-out of non-essential communications",
        "Request deletion of your information (where permitted)",
        "Control over emergency contact preferences"
      ]
    }
  ];

  return (
    <Layout>
      <PageHero 
        eyebrow="Privacy Policy" 
        title="Your Privacy Is Our Priority" 
        subtitle="Learn how MediAlert+ protects your personal information while providing life-saving medical alert services." 
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-brand" />
              <h2 className="font-display text-2xl font-bold text-navy">Our Privacy Commitment</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At MediAlert+, we understand that protecting your personal and medical information is as important as protecting your health. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our medical alert services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to maintaining the highest standards of privacy and data protection, complying with HIPAA regulations 
              and industry best practices to ensure your information remains secure and confidential.
            </p>
          </div>

          {/* Privacy Sections */}
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
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand mt-0.5 flex-shrink-0">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Emergency Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <h3 className="font-display text-xl font-bold text-blue-900">Emergency Information Sharing</h3>
            </div>
            <p className="text-blue-800 mb-4">
              In emergency situations, we may share your relevant medical and location information with:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li>• Emergency medical services (911, paramedics)</li>
              <li>• Your designated emergency contacts</li>
              <li>• Healthcare providers involved in your emergency care</li>
              <li>• Family members you've authorized to receive notifications</li>
            </ul>
            <p className="text-blue-800 mt-4">
              This sharing is limited to what's necessary for your emergency care and is done with your explicit consent.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-navy mb-4">Questions About Your Privacy?</h3>
            <p className="text-muted-foreground mb-6">
              If you have questions about this Privacy Policy or how we handle your information, please contact our Privacy Officer:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand" />
                <span className="text-navy">privacy@medialertplus.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand" />
                <span className="text-navy">1-800-555-1234</span>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mt-8">
            <h3 className="font-display text-xl font-bold text-navy mb-4">Policy Updates</h3>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. 
              We will notify you of any material changes by:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Posting the updated policy on our website</li>
              <li>• Sending email notifications to registered users</li>
              <li>• Including notices in our monthly newsletters</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
