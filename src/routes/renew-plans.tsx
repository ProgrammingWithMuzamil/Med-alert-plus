import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, User, Mail, Phone, MapPin, CreditCard, CheckCircle, ArrowRight, Heart } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/renew-plans")({
  head: () => ({
    meta: [
      { title: "Renew Your Protection Plan - MediAlert+" },
      { name: "description", content: "Renew your MediAlert+ protection plan for continued 24/7 medical alert monitoring and emergency response." },
      { property: "og:title", content: "Renew Your Plan - MediAlert+" },
      { property: "og:description", content: "Continue your protection with MediAlert+ medical alert systems." },
    ],
  }),
  component: RenewPlans,
});

function RenewPlans() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    plan: "",
    paymentMethod: "",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const plans = [
    { name: "Basic Protection", price: "$29.99", features: ["24/7 Monitoring", "In-Home Base Station", "Help Button"] },
    { name: "Advanced Protection", price: "$39.99", features: ["Everything in Basic", "Mobile GPS Device", "Advanced Fall Detection"] },
    { name: "Complete Protection", price: "$49.99", features: ["Everything in Advanced", "Multiple Devices", "Priority Response"] }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Account created successfully! Welcome to MediAlert+ protection.");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        plan: "",
        paymentMethod: "",
        message: ""
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <PageHero 
        eyebrow="Renew Your Plan" 
        title="Continue Your Protection" 
        subtitle="Renew your MediAlert+ protection plan to maintain 24/7 emergency monitoring and peace of mind." 
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Plan Selection */}
            <div className="bg-gradient-to-r from-brand to-brand/90 p-8 text-white">
              <h2 className="font-display text-2xl font-bold mb-6">Choose Your Protection Plan</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {plans.map((plan, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                    <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                    <div className="text-2xl font-bold mb-3">{plan.price}<span className="text-sm font-normal">/month</span></div>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Creation Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-navy mb-2">Create Your Account</h3>
                  <p className="text-muted-foreground">Fill in your information to activate your protection plan</p>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Service Address
                  </h4>
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Boston"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <select
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-brand focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="">Select State</option>
                        <option value="MA">Massachusetts</option>
                        <option value="NY">New York</option>
                        <option value="CA">California</option>
                        <option value="FL">Florida</option>
                        <option value="TX">Texas</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        value={formData.zip}
                        onChange={handleInputChange}
                        placeholder="02118"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    Protection Plan
                  </h4>
                  <select
                    id="plan"
                    name="plan"
                    required
                    value={formData.plan}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="">Select a Plan</option>
                    {plans.map((plan, index) => (
                      <option key={index} value={plan.name}>{plan.name} - {plan.price}/month</option>
                    ))}
                  </select>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </h4>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    required
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy">Additional Information</h4>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any special requirements or medical conditions we should know about?"
                    className="min-h-[100px]"
                  />
                </div>

                {/* Terms and Submit */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the Terms of Service and Privacy Policy. I understand that my protection plan will begin immediately after payment.
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
                  >
                    {submitting ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Account & Start Protection <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Security Note */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">Secure & Protected</h4>
                      <p className="text-sm text-green-800">
                        Your information is encrypted and secure. We're HIPAA compliant and protect your privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
