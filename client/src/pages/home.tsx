import { Shield, Hammer, ClipboardCheck, Phone, Mail, MapPin, Star, PlayCircle, CheckCircle2, Zap, ArrowRight, DollarSign } from "lucide-react";
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
          <nav className="hidden lg:flex gap-8 font-display uppercase text-sm font-semibold">
            <a href="#services" className="hover:text-roof-red">Services</a>
            <a href="#process" className="hover:text-roof-red">Process</a>
            <a href="#before-after" className="hover:text-roof-red">Before & After</a>
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

      {/* Problem + Solution Section */}
      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Storm Damage, Leaks, or <br/><span className="text-roof-red">Insurance Confusion?</span></h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-lg text-navy/70 mb-6 leading-relaxed">
              Apex Roofing handles everything from initial drone inspection to final warranty walkthrough. We navigate the complex insurance landscape so you don't have to, ensuring your home is protected and your claim is approved.
            </p>
            <p className="font-bold text-navy">No marketing fluff. Just structural dominance.</p>
          </div>
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
            <h2 className="text-4xl md:text-5xl mb-6">Built To Protect Your <br/><span className="text-roof-red">Home For Decades</span></h2>
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
            <h3 className="text-2xl mb-4 uppercase">The Apex Authority</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-roof-red shrink-0" /> Premium Materials (GAF / Owens Corning)</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-roof-red shrink-0" /> Lifetime Workmanship Warranty</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-roof-red shrink-0" /> Maximum Storm Resilience</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-roof-red shrink-0" /> Increased Property Resale Value</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-roof-red" />
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-light-gray">
            {[
              { title: "Roof Replacement", desc: "Complete structural overhaul using premium materials and storm-resilient techniques.", icon: Hammer },
              { title: "Storm Damage Repair", desc: "Immediate response for hail and wind damage. Emergency tarping available 24/7.", icon: Zap },
              { title: "Insurance Claim Assistance", desc: "We deal directly with your adjuster to ensure maximum coverage for your damage.", icon: ClipboardCheck },
              { title: "Roof Inspections", desc: "Drone-assisted 21-point inspection identifying invisible structural weaknesses.", icon: Shield },
              { title: "Emergency Repairs", desc: "Rapid deployment crews available for leaks and structural compromises.", icon: Phone }
            ].map((s, i) => (
              <div key={i} className="p-10 border-r border-b border-light-gray last:border-r-0 hover:bg-light-gray transition-colors group h-[420px] flex flex-col justify-between">
                <div>
                  <s.icon className="w-12 h-12 text-roof-red mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl mb-4">{s.title}</h3>
                  <p className="text-navy/70 mb-6">{s.desc}</p>
                </div>
                <a href="#" className="font-display uppercase text-sm font-bold text-roof-red hover:underline">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our 4-Step Process</h2>
            <div className="w-24 h-1 bg-roof-red mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Inspection", desc: "Detailed drone and physical assessment of your roof's condition.", icon: Shield },
              { step: "02", title: "Insurance Support", desc: "We represent your interests during the adjuster meeting.", icon: ClipboardCheck },
              { step: "03", title: "Professional Install", desc: "Clean, efficient installation by our specialized crews.", icon: Hammer },
              { step: "04", title: "Final Warranty", desc: "Walkthrough and delivery of your lifetime warranty documentation.", icon: CheckCircle2 }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-gray-200">
                <div className="text-4xl font-display font-bold text-roof-red/20 mb-4">{item.step}</div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-navy/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="before-after" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">See The Difference Quality Makes</h2>
          </div>
          <div className="relative group overflow-hidden border-4 border-navy h-[600px]">
            <img 
              src="/src/assets/images/before-after.png" 
              alt="Before and After Roof" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="bg-navy text-white px-6 py-2 font-display uppercase font-bold tracking-widest text-xs">Before</div>
              <div className="bg-roof-red text-white px-6 py-2 font-display uppercase font-bold tracking-widest text-xs">After</div>
            </div>
            {/* Divider */}
            <div className="absolute inset-y-0 left-1/2 w-1 bg-white z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Completed Projects</h2>
            <p className="uppercase tracking-widest font-bold text-navy/40 text-sm">Industrial Grade Residential Excellence</p>
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
                  <div className="text-roof-red text-xs uppercase font-bold tracking-widest">Premium Slate Gray</div>
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
              <p className="text-lg text-navy/70 mb-8 leading-relaxed">
                Don't just take our word for it. Watch our clients explain how we handled their insurance claims and transformed their homes from storm-damaged to storm-proof.
              </p>
              <div className="grid gap-6">
                {[
                  { name: "Michael Thompson", loc: "Highland Park", text: "Apex saved my roof after the 2024 hail storm. They handled everything." },
                  { name: "Sarah Williams", loc: "North Dallas", text: "Professional, fast, and they got my insurance to pay for the whole thing." },
                  { name: "David Miller", loc: "Plano", text: "The lifetime warranty gave me peace of mind. Best contractor in TX." }
                ].map((t, i) => (
                  <Card key={i} className="border-l-4 border-l-roof-red rounded-none border-gray-100 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-2 text-roof-red">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                      </div>
                      <p className="italic text-navy/80 mb-4">"{t.text}"</p>
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                        <span>{t.name}</span>
                        <span className="text-navy/40">{t.loc}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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

      {/* Financing Section */}
      <section id="financing" className="py-20 bg-light-gray">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Flexible Financing <br/><span className="text-roof-red">Available Today</span></h2>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">
              We believe a premium roof shouldn't be a financial burden. We offer fast approval, low monthly payments, and zero upfront costs for qualified homeowners.
            </p>
            <div className="space-y-4 text-navy/80 font-bold uppercase text-sm tracking-wide">
              <div className="flex items-center gap-3"><DollarSign className="w-5 h-5 text-roof-red" /> 0% Interest Options</div>
              <div className="flex items-center gap-3"><DollarSign className="w-5 h-5 text-roof-red" /> No Upfront Payments</div>
              <div className="flex items-center gap-3"><DollarSign className="w-5 h-5 text-roof-red" /> 60-Second Approval</div>
            </div>
          </div>
          <div className="bg-white border-2 border-navy p-12 h-[400px] flex flex-col justify-center text-center">
            <h3 className="text-3xl mb-6">Check Your Options</h3>
            <p className="text-navy/60 mb-8">Get a decision in seconds without affecting your credit score.</p>
            <button className="btn-primary" data-testid="button-financing">Check Financing Options</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#111111] text-white text-center">
        <div className="container-custom max-w-4xl">
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Don't Wait Until Minor Damage <br/> Becomes A <span className="text-roof-red">Major Expense</span></h2>
          <div className="flex flex-col items-center gap-8">
            <button className="btn-primary w-full max-w-md h-[70px] text-xl" data-testid="button-final-cta">Schedule Free Roof Inspection</button>
            <div className="flex flex-col items-center gap-2">
              <span className="uppercase tracking-[.3em] text-white/40 font-bold text-xs">Direct Office Line</span>
              <div className="text-4xl md:text-5xl font-display font-bold text-white">(214) 555-0123</div>
            </div>
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
            <div className="grid grid-cols-2 gap-4 text-white/80">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-roof-red" /> Dallas, TX 75201</div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-roof-red" /> (214) 555-0123</div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-roof-red" /> info@apexroofing.com</div>
            </div>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-roof-red">Roof Replacement</a></li>
              <li><a href="#process" className="hover:text-roof-red">Our Process</a></li>
              <li><a href="#financing" className="hover:text-roof-red">Financing</a></li>
              <li><a href="#" className="hover:text-roof-red">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Authority</h4>
            <p className="mb-2">TX License: #123456789</p>
            <p className="mb-4">Fully Bonded & Insured</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-white/10 hover:bg-roof-red transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-white/10 hover:bg-roof-red transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-white/10 hover:bg-roof-red transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}