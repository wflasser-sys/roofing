import { Shield, Hammer, ClipboardCheck, Phone, Mail, MapPin, Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-[90px] border-b border-light-gray flex items-center sticky top-0 bg-white z-50">
        <div className="container-custom w-full flex justify-between items-center">
          <div className="text-2xl font-display font-bold text-navy tracking-tighter">
            APEX <span className="text-roof-red">ROOFING</span>
          </div>
          <nav className="hidden md:flex gap-8 font-display uppercase text-sm font-semibold">
            <a href="#services" className="hover:text-roof-red">Services</a>
            <a href="#process" className="hover:text-roof-red">Process</a>
            <a href="#projects" className="hover:text-roof-red">Projects</a>
            <a href="#financing" className="hover:text-roof-red">Financing</a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden lg:block font-display font-bold text-lg">(214) 555-0123</div>
            <button className="btn-primary h-12 px-6 text-sm" data-testid="button-quote-header">Get Quote</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero-roof.png" 
            alt="Premium Roof" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-[750px]">
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Dallas' Authority In <br /> 
              <span className="text-roof-red">Premium Roofing</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] font-medium">
              We provide structural excellence and insurance claim mastery for homeowners who demand the best. 25+ years of local dominance.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="btn-primary" data-testid="button-inspect">Schedule Free Inspection</button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-navy" data-testid="button-estimate">Get Instant Estimate</button>
            </div>
            <div className="flex flex-wrap gap-8 text-white/60 font-display text-xs uppercase tracking-widest font-bold">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-roof-red" /> Licensed & Insured</div>
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-roof-red" /> 5-Star Rated</div>
              <div className="flex items-center gap-2"><Hammer className="w-4 h-4 text-roof-red" /> Lifetime Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-light-gray py-12 border-b border-gray-200">
        <div className="container-custom flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <img src="https://placehold.co/150x50/0D1B2A/white?text=GAF+MASTER" alt="GAF" className="h-10" />
          <img src="https://placehold.co/150x50/0D1B2A/white?text=OWENS+CORNING" alt="Owens" className="h-10" />
          <img src="https://placehold.co/150x50/0D1B2A/white?text=BBB+A+" alt="BBB" className="h-10" />
          <img src="https://placehold.co/150x50/0D1B2A/white?text=GOOGLE+REVIEWS" alt="Google" className="h-10" />
        </div>
      </section>

      {/* Why Choose Us - Team Background */}
      <section className="relative py-20 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/team-background.png" 
            alt="Apex Team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Why Choose <span className="text-roof-red">Apex Authority</span></h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We aren't just contractors; we are insurance claim specialists and structural experts. While others just install shingles, we ensure your home's most vital asset is fortified against Texas storms.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-roof-red mb-2">25+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-white/50">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-roof-red mb-2">$100M+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-white/50">Claims Managed</div>
              </div>
            </div>
          </div>
          <div className="border-4 border-roof-red p-10 bg-navy/40 backdrop-blur-sm">
            <h3 className="text-2xl mb-4">The Apex Promise</h3>
            <p className="text-white/80">Every roof we install comes with a Lifetime Workmanship Warranty. If it's not perfect, we make it perfect. No questions asked.</p>
          </div>
        </div>
      </section>

      {/* Services - Tighter Margins */}
      <section id="services" className="py-20 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-roof-red" />
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-light-gray">
            {[
              { title: "Roof Replacement", desc: "Complete structural overhaul using premium materials and storm-resilient techniques.", icon: Hammer },
              { title: "Storm Damage", desc: "Immediate response for hail and wind damage. Emergency tarping available 24/7.", icon: Shield },
              { title: "Insurance Claims", desc: "We deal directly with your adjuster to ensure maximum coverage for your damage.", icon: ClipboardCheck }
            ].map((s, i) => (
              <div key={i} className="p-10 border-r border-b border-light-gray last:border-r-0 hover:bg-light-gray transition-colors group">
                <s.icon className="w-12 h-12 text-roof-red mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-4">{s.title}</h3>
                <p className="text-navy/70 mb-6">{s.desc}</p>
                <a href="#" className="font-display uppercase text-sm font-bold text-roof-red hover:underline">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Projects - 4 Images */}
      <section id="projects" className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Built To Last</h2>
            <p className="uppercase tracking-widest font-bold text-navy/40 text-sm">Recent Completed Projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative overflow-hidden bg-navy aspect-square">
                <img 
                  src={`/src/assets/images/project_${i}.jpg`} 
                  alt={`Project ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <div className="text-white font-display font-bold uppercase">Dallas, TX</div>
                  <div className="text-roof-red text-xs uppercase font-bold tracking-widest">Full Replacement</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Real Results. <br /> <span className="text-roof-red">Real Dallas Homeowners.</span></h2>
              <p className="text-lg text-navy/70 mb-8">
                Don't just take our word for it. Watch our clients explain how we handled their insurance claims and transformed their homes.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 border-l-4 border-roof-red bg-light-gray">
                  <div className="text-roof-red font-display font-bold text-xl">"Apex saved my roof after the 2024 hail storm. They handled everything."</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full" />
                  <div>
                    <div className="font-bold">Michael Thompson</div>
                    <div className="text-xs uppercase text-navy/50">Highland Park Resident</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((v) => (
                <div key={v} className="relative group cursor-pointer aspect-[9/16] bg-navy overflow-hidden rounded-md">
                   <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-all z-10 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <img src={`https://placehold.co/400x711/0D1B2A/white?text=Testimonial+${v}`} alt="Video Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-6xl mb-8">Ready For A <span className="text-roof-red">Real Inspection?</span></h2>
          <p className="text-xl text-white/60 mb-12">Don't wait until a small leak becomes a $50,000 problem. Get Dallas' best roofing experts on your side today.</p>
          <div className="flex flex-col items-center gap-6">
            <button className="btn-primary w-full max-w-sm" data-testid="button-final-cta">Schedule Inspection</button>
            <div className="text-3xl font-display font-bold">(214) 555-0123</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-navy border-t border-white/10 text-white/50 text-sm">
        <div className="container-custom grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <div className="text-2xl font-display font-bold text-white mb-6">
              APEX <span className="text-roof-red">ROOFING</span>
            </div>
            <p className="max-w-xs mb-8">Professional residential roofing contractor serving the greater Dallas-Fort Worth area. Licensed, insured, and certified.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-roof-red transition-colors"><Mail className="w-4 h-4" /></div>
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-roof-red transition-colors"><MapPin className="w-4 h-4" /></div>
            </div>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-roof-red">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-roof-red">Repair & Maintenance</a></li>
              <li><a href="#" className="hover:text-roof-red">Insurance Claims</a></li>
              <li><a href="#" className="hover:text-roof-red">Gutter Systems</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Authority</h4>
            <p>TX License: #123456789</p>
            <p>Fully Bonded & Insured</p>
            <p>© 2026 Apex Roofing & Exteriors</p>
          </div>
        </div>
      </footer>
    </div>
  );
}