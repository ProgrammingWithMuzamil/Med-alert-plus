import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Star, Heart, Users, Clock, Award, ChevronRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/medical-ids")({
  head: () => ({
    meta: [
      { title: "Medical IDs - Engraved Medical Alert Jewelry | MediAlert+" },
      { name: "description", content: "Professional engraved medical ID jewelry and accessories that speak for you when you can't. Custom medical alert IDs for all conditions." },
      { property: "og:title", content: "Medical IDs - MediAlert+" },
      { property: "og:description", content: "Custom engraved medical alert jewelry for your safety." },
    ],
  }),
  component: MedicalIDs,
});

function MedicalIDs() {
  // Filter medical ID products
  const medicalIDProducts = PRODUCTS.filter(p => 
    p.category === "medical-id" || p.name.toLowerCase().includes("medical id") || p.name.toLowerCase().includes("jewelry")
  );

  const features = [
    { icon: ShieldCheck, title: "Custom Engraving", description: "Personalized medical information engraved for durability and clarity" },
    { icon: Heart, title: "Stylish Designs", description: "Modern and traditional medical ID jewelry for every lifestyle" },
    { icon: Users, title: "All Ages", description: "Medical IDs suitable for children, adults, and seniors" },
    { icon: Clock, title: "Quick Access", description: "Emergency responders can instantly access your critical medical information" },
  ];

  return (
    <Layout>
      <PageHero 
        eyebrow="Medical IDs" 
        title="Protection That Speaks When You Can't" 
        subtitle="Professional engraved medical alert jewelry and accessories that communicate your critical medical information in any emergency situation." 
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-200">
                <div className="mx-auto h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand flex">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-background to-cream/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-navy md:text-5xl">
              Our Medical ID 
              <span className="block text-brand">Collection</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Choose from our wide selection of medical alert jewelry and accessories, 
              each professionally engraved with your critical medical information.
            </p>
          </div>

          {medicalIDProducts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {medicalIDProducts.map((product) => (
                <div key={product.slug} className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="h-4 w-4 text-brand" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand">Medical ID</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-navy">${product.price}</span>
                        <span className="text-sm text-muted-foreground">/mo</span>
                      </div>
                      <Button asChild size="sm" className="bg-brand text-brand-foreground hover:bg-brand/90">
                        <Link to={`/products/${product.slug}`}>
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ShieldCheck className="mx-auto h-16 w-16 text-brand mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Medical ID Products Coming Soon</h3>
              <p className="text-muted-foreground">We're currently expanding our medical ID collection. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand to-brand/90 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Medical ID?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our specialists can help you select the perfect medical alert jewelry 
            that fits your lifestyle and medical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
              <Link to="/contact">Speak with a Specialist</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:18005551234">
                Call 1-800-555-1234
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
