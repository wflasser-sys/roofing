import { Shield, Hammer, Clock, CheckCircle2, ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RoofReplacement() {
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
            src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1600&q=80" 
            alt="Roof Replacement" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-[750px]">
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Complete <br /> 
              <span className="text-roof-red">Roof Replacement</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] font-medium">
              Premium materials, expert installation, and lifetime warranties. We transform aging roofs into storm-resistant fortresses.
            </p>
            <button className="btn-primary">Schedule Free Inspection</button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">The Foundation of <br/><span className="text-roof-red">Home Protection</span></h2>
            <p className="text-lg text-navy/70 mb-6 leading-relaxed">
              A roof replacement is more than just new shingles—it's a complete system upgrade that protects your home, increases property value, and provides decades of peace of mind.
            </p>
            <p className="text-lg text-navy/70 leading-relaxed">
              At Apex Roofing, we use only premium materials from GAF and Owens Corning, backed by our lifetime workmanship warranty and industry-leading installation standards.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" 
              alt="Roof installation" 
              className="w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" 
              alt="Premium shingles" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl mb-4">Our Replacement Process</h2>
            <div className="w-20 h-1 bg-roof-red" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inspection", desc: "Free drone and manual inspection to assess your roof's condition" },
              { step: "02", title: "Material Selection", desc: "Choose from premium GAF or Owens Corning shingles in multiple styles" },
              { step: "03", title: "Installation", desc: "Expert crew completes tear-off and installation in 1-2 days" },
              { step: "04", title: "Final Walkthrough", desc: "Complete inspection and lifetime warranty documentation" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border-t-4 border-roof-red">
                <div className="text-5xl font-display font-bold text-roof-red/20 mb-4">{item.step}</div>
                <h3 className="text-xl mb-3 uppercase font-display">{item.title}</h3>
                <p className="text-navy/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl mb-8">Why Replace <br/><span className="text-roof-red">Your Roof?</span></h2>
              <div className="space-y-6">
                {[
                  "Prevent costly water damage and structural issues",
                  "Increase home value by up to 15%",
                  "Reduce energy costs with modern ventilation",
                  "Peace of mind with lifetime warranty protection",
                  "Enhanced curb appeal and aesthetic value",
                  "Maximum insurance claim recovery"
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-roof-red shrink-0 mt-1" />
                    <p className="text-lg text-navy">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" 
                alt="Beautiful roof replacement" 
                className="w-full h-80 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80" 
                alt="Modern home with new roof" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <h2 className="text-4xl mb-12 text-center">Premium Materials <span className="text-roof-red">We Trust</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { brand: "GAF Timberline HDZ", warranty: "Lifetime + Wind", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
              { brand: "Owens Corning Duration", warranty: "50 Year Warranty", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80" },
              { brand: "Architectural Shingles", warranty: "Premium Protection", image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&q=80" }
            ].map((material, i) => (
              <Card key={i} className="bg-white/5 border-white/10 text-white overflow-hidden">
                <img src={material.image} alt={material.brand} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2 font-display uppercase">{material.brand}</h3>
                  <p className="text-white/60 text-sm mb-4">{material.warranty}</p>
                  <button className="text-roof-red hover:underline flex items-center gap-2 text-sm font-bold uppercase">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-roof-red text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-5xl mb-6">Ready For A New Roof?</h2>
          <p className="text-xl mb-10 text-white/90">Get your free inspection and detailed quote today.</p>
          <button className="btn-primary bg-white text-roof-red hover:bg-white/90">
            Schedule Free Inspection
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
