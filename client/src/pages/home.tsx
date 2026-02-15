import { Shield, Hammer, ClipboardCheck, Phone, Mail, MapPin, Star, PlayCircle, CheckCircle2, Zap, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useEffect } from "react";

export default function Home() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating CTA Button */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${showCTA ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
        <button className="btn-primary shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 text-base">
          <Phone className="w-5 h-5" />
          <span>Get Free Quote</span>
        </button>
      </div>
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
  <a href="/contact" className="hover:text-roof-red">Contact</a>  {/* ← ADD THIS */}
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Hammer, 
                title: "Roof Replacement", 
                desc: "Complete tear-off and installation using premium GAF or Owens Corning materials. Lifetime warranty included.",
                link: "/roof-replacement",
                image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80"
              },
              { 
                icon: Zap, 
                title: "Storm Damage Repair", 
                desc: "24/7 emergency response for hail and wind damage. Full insurance claim assistance from inspection to completion.",
                link: "/storm-damage",
                image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=600&q=80"
              },
              { 
                icon: ClipboardCheck, 
                title: "Insurance Claims", 
                desc: "Expert navigation of the insurance process. We've successfully processed $100M+ in claims with a 98% approval rate.",
                link: "/insurance-claims",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
              },
              { 
                icon: Shield, 
                title: "Free Inspections", 
                desc: "Advanced drone and manual inspections. Catch problems early before they become expensive disasters.",
                link: "/inspections",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
              },
              { 
                icon: Phone, 
                title: "Emergency Repairs", 
                desc: "Rapid deployment crews available 24/7 for leaks and structural compromises. Priority service guaranteed.",
                link: "/#services",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
              },
              { 
                icon: Shield, 
                title: "Roof Maintenance", 
                desc: "Annual inspection and maintenance programs to extend roof life. Priority service and exclusive discounts included.",
                link: "/#services",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
              }
            ].map((s, i) => (
              <Card key={i} className="border-2 border-light-gray hover:border-roof-red transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                  <s.icon className="absolute top-4 left-4 w-8 h-8 text-white" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4 uppercase font-display">{s.title}</h3>
                  <p className="text-navy/70 mb-6">{s.desc}</p>
                  <a 
                    href={s.link}
                    className="text-roof-red hover:underline flex items-center gap-2 font-bold uppercase text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Free Inspection", 
                desc: "Detailed drone and physical assessment of your roof's condition.", 
                icon: Shield,
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80"
              },
              { 
                step: "02", 
                title: "Insurance Support", 
                desc: "We represent your interests during the adjuster meeting.", 
                icon: ClipboardCheck,
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"
              },
              { 
                step: "03", 
                title: "Professional Install", 
                desc: "Clean, efficient installation by our specialized crews.", 
                icon: Hammer,
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
              },
              { 
                step: "04", 
                title: "Final Warranty", 
                desc: "Walkthrough and delivery of your lifetime warranty documentation.", 
                icon: CheckCircle2,
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border-t-4 border-roof-red overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/50" />
                  <div className="absolute top-4 left-4 text-6xl font-display font-bold text-white/40">{item.step}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3 font-display uppercase">{item.title}</h3>
                  <p className="text-navy/60 text-sm">{item.desc}</p>
                </div>
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
            <p className="text-lg text-navy/70">Real transformations from our Dallas-area projects</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative group overflow-hidden border-4 border-navy h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                alt="Before roof damage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/90 text-white px-6 py-4 font-display uppercase font-bold tracking-widest">Before: Hail Damage</div>
            </div>
            <div className="relative group overflow-hidden border-4 border-roof-red h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" 
                alt="After roof replacement" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-roof-red text-white px-6 py-4 font-display uppercase font-bold tracking-widest">After: Premium GAF Install</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden border-4 border-navy h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80" 
                alt="Before storm damage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/90 text-white px-6 py-4 font-display uppercase font-bold tracking-widest">Before: Wind Damage</div>
            </div>
            <div className="relative group overflow-hidden border-4 border-roof-red h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                alt="After architectural shingles" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-roof-red text-white px-6 py-4 font-display uppercase font-bold tracking-widest">After: Architectural Shingles</div>
            </div>
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
            {[
              { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", loc: "Highland Park, Dallas", type: "GAF Timberline HDZ" },
              { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", loc: "North Dallas", type: "Owens Corning Duration" },
              { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80", loc: "Plano, TX", type: "Architectural Slate" },
              { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", loc: "Frisco, TX", type: "Premium Cedar Shake" },
              { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", loc: "Richardson, TX", type: "Designer Shingles" },
              { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80", loc: "McKinney, TX", type: "Storm-Resistant HDZ" },
              { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80", loc: "Allen, TX", type: "Charcoal Black" },
              { src: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80", loc: "Carrollton, TX", type: "Weathered Wood" }
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden bg-navy aspect-square">
                <img 
                  src={project.src} 
                  alt={`Project in ${project.loc}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <div className="text-white font-display font-bold uppercase">{project.loc}</div>
                  <div className="text-roof-red text-xs uppercase font-bold tracking-widest">{project.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials - Scrolling */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-custom mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6">Real Results. <br /> <span className="text-roof-red">Real Dallas Homeowners.</span></h2>
            <p className="text-lg text-navy/70 leading-relaxed">
              Don't just take our word for it. Watch our clients explain how we handled their insurance claims and transformed their homes from storm-damaged to storm-proof.
            </p>
          </div>
        </div>
        
        {/* Scrolling Video Container */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll hover:pause-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {[
                  { name: "Michael Thompson", loc: "Highland Park", thumb: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80" },
                  { name: "Sarah Williams", loc: "North Dallas", thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
                  { name: "David Miller", loc: "Plano", thumb: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80" },
                  { name: "Jennifer Garcia", loc: "Richardson", thumb: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" },
                  { name: "Robert Chen", loc: "Frisco", thumb: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80" }
                ].map((v, i) => (
                  <div key={i} className="relative group cursor-pointer aspect-[9/16] w-[280px] bg-navy overflow-hidden rounded-md shrink-0">
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-all z-10 flex flex-col items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform mb-4" />
                      <div className="text-white text-center px-4">
                        <div className="font-display font-bold text-lg mb-1">{v.name}</div>
                        <div className="text-xs uppercase tracking-widest text-white/60">{v.loc}</div>
                      </div>
                    </div>
                    <img src={v.thumb} alt={v.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .pause-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Text Testimonials */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-roof-red mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Michael Thompson", 
                loc: "Highland Park", 
                text: "Apex saved my roof after the 2024 hail storm. They handled everything from the inspection to dealing with my insurance company. I didn't pay a penny out of pocket and now have a brand new roof with a lifetime warranty.",
                rating: 5,
                date: "2 weeks ago"
              },
              { 
                name: "Sarah Williams", 
                loc: "North Dallas", 
                text: "Professional, fast, and they got my insurance to pay for the whole thing. The crew was respectful and cleaned up perfectly. I've already recommended them to three neighbors who also filed claims.",
                rating: 5,
                date: "1 month ago"
              },
              { 
                name: "David Miller", 
                loc: "Plano", 
                text: "The lifetime warranty gave me peace of mind. Best contractor in TX. They found damage I didn't even know existed and my adjuster approved everything. Can't recommend them enough!",
                rating: 5,
                date: "3 weeks ago"
              },
              { 
                name: "Jennifer Garcia", 
                loc: "Richardson", 
                text: "After the tornado warnings last spring, Apex came out within 24 hours for a free inspection. They documented everything with drone footage and handled my entire claim. Professional from start to finish.",
                rating: 5,
                date: "1 month ago"
              },
              { 
                name: "Robert Chen", 
                loc: "Frisco", 
                text: "I was skeptical about insurance covering my roof, but Apex's team knew exactly what to document. They got my claim approved for $28,000. The new roof looks amazing and increased my home value.",
                rating: 5,
                date: "2 months ago"
              },
              { 
                name: "Amanda Rodriguez", 
                loc: "McKinney", 
                text: "Emergency leak repair on a Sunday night - they were there in 2 hours. Followed up with a full replacement covered by insurance. This is how roofing should be done. Five stars all the way!",
                rating: 5,
                date: "3 weeks ago"
              }
            ].map((t, i) => (
              <Card key={i} className="border-l-4 border-l-roof-red rounded-none border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4 text-roof-red">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-navy mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex justify-between items-start text-xs font-bold uppercase tracking-widest">
                    <div>
                      <div className="text-navy mb-1">{t.name}</div>
                      <div className="text-navy/40">{t.loc}</div>
                    </div>
                    <div className="text-navy/30">{t.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              <li><a href="/roof-replacement" className="hover:text-roof-red">Roof Replacement</a></li>
              <li><a href="/storm-damage" className="hover:text-roof-red">Storm Damage</a></li>
              <li><a href="/insurance-claims" className="hover:text-roof-red">Insurance Claims</a></li>
              <li><a href="/inspections" className="hover:text-roof-red">Free Inspections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-roof-red">Our Services</a></li>
              <li><a href="#process" className="hover:text-roof-red">Our Process</a></li>
              <li><a href="#financing" className="hover:text-roof-red">Financing</a></li>
              <li><a href="#projects" className="hover:text-roof-red">Projects</a></li>
            </ul>
          </div>
        </div>
        <div className="container-custom mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© 2026 Apex Roofing. All rights reserved. TX License: #123456789 | Fully Bonded & Insured</p>
        </div>
      </footer>
    </div>
  );
}