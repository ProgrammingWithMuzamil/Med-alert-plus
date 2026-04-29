import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Clock, Award, Heart, Phone, Globe, ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import caregiver from "@/assets/2.jpg";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose MediAlert — Trusted Medical Alert Protection" },
      { name: "description", content: "Discover why families trust MediAlert for 24/7 emergency response, certified monitoring, and comprehensive medical alert solutions." },
      { property: "og:title", content: "Why Choose MediAlert" },
      { property: "og:description", content: "Professional medical alert protection with cutting-edge technology and compassionate care." },
    ],
  }),
  component: WhyUs,
});

const REASONS = [
  { icon: Clock, title: "24/7 Professional Monitoring", body: "Certified monitoring centers ensure you're always connected to emergency help." },
  { icon: ShieldCheck, title: "Advanced Safety Standards", body: "UL-certified systems meeting the highest medical alert industry standards." },
  { icon: Award, title: "Expert Care Team", body: "Dedicated professionals with extensive medical alert and emergency response experience." },
  { icon: Heart, title: "Compassionate Support", body: "Every call answered with empathy and personalized care for your peace of mind." },
  { icon: Globe, title: "Nationwide Coverage", body: "Complete protection across the country with 4G LTE connectivity and GPS tracking." },
  { icon: Phone, title: "Family Connection", body: "Instant notifications keep loved ones informed and involved in your care." },
];

function WhyUs() {
  return (
    <Layout>
      {/* Custom Hero with Background Image */}
      <section className="relative h-screen overflow-hidden text-navy-foreground">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={caregiver}
            alt="Why Choose MediAlert background"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.6) saturate(1.2)'
            }}
          />
        </div>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/10 to-navy/15 z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4">
            <div className="mb-4 animate-fade-in-up">
              <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider animate-pulse">
                Why Choose MediAlert
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Connecting Care, Saving Lives
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Professional medical alert solutions combining cutting-edge technology with compassionate human support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand"><r.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIAALERT+ PROMISE */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="font-display text-3xl font-bold text-brand mb-6 text-center">MediAlert+ Promise</h2>
            
            <div className="space-y-6 text-lg text-navy/90">
              <p>
                <strong>MediAlert+</strong> serves the medical alert industry by supporting caregivers and empowering senior independence across the nation. As a leading PERS (Personal Emergency Response Service) provider, we listen to our clients' needs from the very start, ensuring we only offer the most affordable products and plans without sacrificing our high standards for quality, safety and ease of use. At MediAlert+, we strive to establish our product suite so consumers have safer, healthier, more connected lives, whether at home or on the go. Our services provide the confidence for loved ones to stay at home, independently and actively, in their familiar surroundings.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-4">Our Mission</h3>
                  <p className="text-base leading-relaxed">
                    Our mission is to keep our clients safe and provide 24-hour peace of mind to not only the user but to their families as well. With a push of a MediAlert+ button, not only will a client be connected to a live EMT-trained agent who will assist the client in their time of need – we will also contact the client's loved ones to inform them of the situation as it develops. We inform emergency dispatch of the client's current location, preferred hospital and any and all health conditions or past surgeries (*as provided by the client) that may impact EMT support measures. MediAlert+ further helps the client in their time of need by staying on the line with them until help arrives. Not only are we there for your medical emergencies, we're also there for non-medical events, such as lift assists, fires, burglaries, etc.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-4">Our Staff</h3>
                  <p className="text-base leading-relaxed">
                    Our staff is made up of caring, highly trained professionals – all here to assist the client, no matter what their needs. In addition to having our EMT trained emergency response center, we offer daily wellness check-in and reminder calls for clients. That's just another way that MediAlert+ goes above and beyond to ensure our clients' safety and well-being. We treat all clients as members of the MediAlert+ family! Our commitment to excellence means every interaction is handled with the utmost care, professionalism, and empathy that your family deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <img src={caregiver} alt="Care Connect Hub professional helping senior" loading="lazy" width={1400} height={900} className="rounded-3xl shadow-elegant" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Our Commitment</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">Connecting You to Care When It Matters Most.</h2>
            <p className="mt-4 text-muted-foreground">At Care Connect Hub, we understand that independence and safety go hand in hand. Our comprehensive medical alert solutions provide the peace of mind you deserve, connecting you instantly to professional help while keeping your loved ones informed and reassured.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat n="24/7" l="Support" />
              <Stat n="<30s" l="Response" />
              <Stat n="100%" l="Reliable" />
            </div>
            <Button asChild className="mt-8 bg-brand text-brand-foreground hover:bg-brand/90">
              <Link to="/programs">Explore Our Solutions <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-display text-2xl font-bold text-brand">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
}
