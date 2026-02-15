import { FileText, Shield, DollarSign, CheckCircle2, Phone, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InsuranceClaims() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-[90px] border-b border-light-gray flex items-center sticky top-0 bg-white z-50">
        <div className="container-custom w-full flex justify-between items-center">
          <a href="/" className="text-2xl font-display font-bold text-navy tracking-tighter">
            APEX <span className="text-roof-red">ROOFING</span>
          </a>
          <nav className="hidden lg:flex gap-8 font-display uppercase text-sm font-semibold">
            <a href="/#services" className="hover:text-roof-red">Services</a>
            <a href="/#process" className="hover:text-roof-red">Process</a>
            <a href="/#before-after" className="hover:text-roof-red">Before & After</a>
            <a href="/#projects" className="hover:text-roof-red">Projects</a>
            <a href="/#financing" className="hover:text-roof-red">Financing</a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden lg:block font-display font-bold text-lg">(214) 555-0123</div>
            <button className="btn-primary h-12 px-6 text-sm">Get Quote</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" 
            alt="Insurance Claims" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-[750px]">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-12 h-12 text-roof-red" />
              <span className="text-roof-red font-display text-lg uppercase tracking-widest">Claim Specialists</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Insurance Claims <br /> 
              <span className="text-roof-red">Made Simple</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] font-medium">
              We've successfully processed over $100M in insurance claims. Let our experts handle the paperwork while you focus on what matters.
            </p>
            <button className="btn-primary">Free Claim Assessment</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-roof-red text-white py-12">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "$100M+", label: "Claims Processed" },
            { number: "98%", label: "Approval Rate" },
            { number: "5,000+", label: "Claims Filed" },
            { number: "15 Days", label: "Avg. Processing" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.number}</div>
              <div className="text-sm uppercase tracking-widest font-bold text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Insurance Companies <br/><span className="text-roof-red">Don't Work For You</span></h2>
            <p className="text-lg text-navy/70 mb-6 leading-relaxed">
              Filing a roof damage claim can be a nightmare. Insurance companies often try to minimize payouts, deny legitimate claims, or overwhelm homeowners with paperwork.
            </p>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">
              That's where we come in. Our team has decades of experience navigating the insurance industry, and we know exactly how to get your claim approved for the maximum amount.
            </p>
            <div className="bg-light-gray p-6 border-l-4 border-roof-red">
              <p className="font-bold text-navy mb-2">The Apex Difference:</p>
              <p className="text-navy/70">We work for YOU, not the insurance company. Our sole mission is to ensure you get every dollar you deserve.</p>
            </div>
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
              alt="Insurance paperwork" 
              className="w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
              alt="Team meeting" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl mb-4">How We Handle <span className="text-roof-red">Your Claim</span></h2>
            <div className="w-20 h-1 bg-roof-red mx-auto mb-6" />
            <p className="text-lg text-navy/70">From initial inspection to final check, we handle every step of the process.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Documentation",
                desc: "Professional photos, detailed reports, and comprehensive damage assessment",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Insurance Meeting",
                desc: "We meet with your adjuster and advocate for maximum coverage",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Claim Maximization",
                desc: "We fight for every covered dollar, including hidden damages",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              }
            ].map((step, i) => (
              <Card key={i} className="overflow-hidden border-2 border-light-gray hover:border-roof-red transition-colors">
                <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="text-roof-red mb-4">{step.icon}</div>
                  <h3 className="text-2xl mb-3 font-display uppercase">{step.title}</h3>
                  <p className="text-navy/70">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl mb-12 text-center">What Your Claim <span className="text-roof-red">Should Cover</span></h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl mb-6 font-display uppercase">Typical Coverage Includes:</h3>
              <div className="space-y-4">
                {[
                  "Complete roof replacement",
                  "Underlayment and decking",
                  "Flashing and ventilation",
                  "Gutters and downspouts",
                  "Interior water damage",
                  "Code upgrade requirements",
                  "Debris removal",
                  "Emergency tarping"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-roof-red shrink-0 mt-1" />
                    <p className="text-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy text-white p-8">
              <DollarSign className="w-12 h-12 text-roof-red mb-4" />
              <h3 className="text-2xl mb-4 font-display uppercase">Average Claim Values</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>Hail Damage</span>
                  <span className="text-roof-red font-bold text-xl">$12K - $25K</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>Wind Damage</span>
                  <span className="text-roof-red font-bold text-xl">$8K - $20K</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>Full Replacement</span>
                  <span className="text-roof-red font-bold text-xl">$15K - $35K</span>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                * Actual values depend on roof size, materials, and damage extent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <h2 className="text-4xl mb-12 text-center">Why Homeowners <span className="text-roof-red">Choose Apex</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Upfront Costs",
                desc: "We only get paid after your claim is approved. No risk to you.",
                icon: <DollarSign className="w-10 h-10" />
              },
              {
                title: "98% Approval Rate",
                desc: "Our expertise means your claim gets approved, not denied.",
                icon: <Shield className="w-10 h-10" />
              },
              {
                title: "Direct Advocacy",
                desc: "We meet with adjusters and fight for maximum coverage.",
                icon: <Users className="w-10 h-10" />
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10">
                <div className="text-roof-red mb-4">{benefit.icon}</div>
                <h3 className="text-2xl mb-4 font-display uppercase">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl mb-12 text-center">Common <span className="text-roof-red">Questions</span></h2>
          <div className="space-y-6">
            {[
              {
                q: "Does filing a claim increase my rates?",
                a: "Not typically for weather-related damage. Storm claims are considered 'Acts of God' and rarely impact premiums."
              },
              {
                q: "How long does the process take?",
                a: "Most claims are processed within 15-30 days, depending on insurance company responsiveness."
              },
              {
                q: "What if my claim is denied?",
                a: "We handle appeals and re-inspections at no additional cost. Our 98% approval rate speaks for itself."
              },
              {
                q: "Do I have to pay my deductible?",
                a: "Yes, deductibles are part of your policy. However, we often find additional damage that offsets this cost."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 border-l-4 border-roof-red">
                <h3 className="text-xl mb-3 font-bold text-navy">{faq.q}</h3>
                <p className="text-navy/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-roof-red text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-5xl mb-6">Ready To File Your Claim?</h2>
          <p className="text-xl mb-10 text-white/90">
            Get a free claim assessment and let us handle the insurance company for you.
          </p>
          <button className="btn-primary bg-white text-roof-red hover:bg-white/90">
            Free Claim Assessment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-navy border-t border-white/10 text-white/50 text-sm">
        <div className="container-custom grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-display font-bold text-white mb-6 inline-block">
              APEX <span className="text-roof-red">ROOFING</span>
            </a>
            <p className="max-w-xs">Professional residential roofing contractor serving the greater Dallas-Fort Worth area.</p>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              <li><a href="/roof-replacement" className="hover:text-roof-red">Roof Replacement</a></li>
              <li><a href="/storm-damage" className="hover:text-roof-red">Storm Damage</a></li>
              <li><a href="/insurance-claims" className="hover:text-roof-red">Insurance Claims</a></li>
              <li><a href="/inspections" className="hover:text-roof-red">Inspections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Contact</h4>
            <p className="mb-2">(214) 555-0123</p>
            <p>info@apexroofing.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
