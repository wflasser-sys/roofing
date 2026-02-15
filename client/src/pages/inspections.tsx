import { Search, Camera, FileCheck, Shield, CheckCircle2, Phone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Inspections() {
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" 
            alt="Roof Inspection" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-[750px]">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-12 h-12 text-roof-red" />
              <span className="text-roof-red font-display text-lg uppercase tracking-widest">Professional Inspections</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Advanced <br /> 
              <span className="text-roof-red">Roof Inspections</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] font-medium">
              Free drone inspections with detailed reports. Catch small problems before they become expensive disasters.
            </p>
            <button className="btn-primary">Schedule Free Inspection</button>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Catch Problems <br/><span className="text-roof-red">Before They Start</span></h2>
            <p className="text-lg text-navy/70 mb-6 leading-relaxed">
              Most roof damage goes unnoticed until it's too late. A small leak can lead to thousands in structural damage, mold, and interior repairs.
            </p>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">
              Our free drone inspections use advanced technology to spot issues invisible from the ground—saving you money and preventing disasters.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-light-gray p-6">
                <div className="text-4xl font-display font-bold text-roof-red mb-2">FREE</div>
                <div className="text-sm uppercase tracking-widest font-bold text-navy/50">No-Obligation Inspection</div>
              </div>
              <div className="bg-light-gray p-6">
                <div className="text-4xl font-display font-bold text-roof-red mb-2">24HR</div>
                <div className="text-sm uppercase tracking-widest font-bold text-navy/50">Report Delivery</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" 
              alt="Drone inspection" 
              className="w-full h-80 object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80" 
                alt="Inspection detail" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&q=80" 
                alt="Roof close-up" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl mb-4">Inspection <span className="text-roof-red">Services</span></h2>
            <div className="w-20 h-1 bg-roof-red" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-10 h-10" />,
                title: "Drone Inspection",
                desc: "High-resolution aerial photography reveals damage invisible from ground level",
                features: ["4K aerial photos", "Thermal imaging", "Complete documentation", "Same-day service"],
                image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&q=80"
              },
              {
                icon: <Search className="w-10 h-10" />,
                title: "Manual Inspection",
                desc: "Hands-on examination of critical areas including flashing, ventilation, and structural integrity",
                features: ["Close-up examination", "Ventilation check", "Flashing inspection", "Detailed notes"],
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
              },
              {
                icon: <FileCheck className="w-10 h-10" />,
                title: "Insurance Inspection",
                desc: "Comprehensive damage assessment formatted for insurance claim submission",
                features: ["Insurance-ready report", "Damage documentation", "Claim support", "Cost estimates"],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              }
            ].map((type, i) => (
              <Card key={i} className="overflow-hidden border-2 border-light-gray hover:border-roof-red transition-colors">
                <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="text-roof-red mb-4">{type.icon}</div>
                  <h3 className="text-2xl mb-3 font-display uppercase">{type.title}</h3>
                  <p className="text-navy/70 mb-6">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex gap-2 items-center text-sm text-navy/60">
                        <CheckCircle2 className="w-4 h-4 text-roof-red shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl mb-12 text-center">What We <span className="text-roof-red">Inspect</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Shingles", items: ["Cracks & tears", "Missing pieces", "Curling edges", "Granule loss"] },
              { title: "Flashing", items: ["Chimney seals", "Valley integrity", "Vent boots", "Edge flashing"] },
              { title: "Structure", items: ["Sagging areas", "Decking condition", "Support beams", "Water damage"] },
              { title: "Ventilation", items: ["Ridge vents", "Soffit vents", "Attic airflow", "Moisture buildup"] }
            ].map((category, i) => (
              <div key={i} className="bg-light-gray p-6">
                <h3 className="text-xl mb-4 font-display uppercase text-roof-red">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex gap-2 items-start text-navy/70">
                      <CheckCircle2 className="w-4 h-4 text-roof-red shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Inspect */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-6">When Should You <br/><span className="text-roof-red">Get An Inspection?</span></h2>
            <div className="space-y-6">
              {[
                { 
                  title: "After Major Storms", 
                  desc: "Hail, high winds, and tornados can cause hidden damage that worsens over time" 
                },
                { 
                  title: "Buying or Selling", 
                  desc: "Pre-purchase inspections protect your investment; pre-sale inspections add value" 
                },
                { 
                  title: "Annual Maintenance", 
                  desc: "Yearly inspections catch small issues before they become expensive repairs" 
                },
                { 
                  title: "Visible Warning Signs", 
                  desc: "Water stains, missing shingles, or granules in gutters mean it's time to inspect" 
                }
              ].map((reason, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Zap className="w-6 h-6 text-roof-red shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2 font-bold">{reason.title}</h3>
                    <p className="text-white/70">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 text-navy">
            <Shield className="w-12 h-12 text-roof-red mb-4" />
            <h3 className="text-2xl mb-4 font-display uppercase">100% Free Inspection</h3>
            <p className="text-navy/70 mb-6 text-lg">
              No hidden fees, no obligations. Just a comprehensive report on your roof's condition with professional recommendations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Detailed photo report",
                "Professional recommendations",
                "Damage documentation",
                "Insurance assistance",
                "No-pressure consultation"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center text-navy/80">
                  <CheckCircle2 className="w-5 h-5 text-roof-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary bg-roof-red w-full">Book Inspection Now</button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-4xl mb-12 text-center">Inspection <span className="text-roof-red">Process</span></h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { 
                  step: "1",
                  title: "Schedule Online or By Phone",
                  desc: "Book your free inspection in under 60 seconds. We'll confirm your appointment immediately.",
                  time: "1 minute"
                },
                { 
                  step: "2",
                  title: "On-Site Inspection",
                  desc: "Our certified technician arrives with drone and manual inspection equipment. Typical inspection takes 30-45 minutes.",
                  time: "30-45 minutes"
                },
                { 
                  step: "3",
                  title: "Detailed Report Delivery",
                  desc: "Receive a comprehensive report with photos, findings, and recommendations within 24 hours.",
                  time: "24 hours"
                },
                { 
                  step: "4",
                  title: "Consultation & Next Steps",
                  desc: "We review findings with you and provide options—from simple repairs to full replacement to insurance claims.",
                  time: "30 minutes"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-white p-8 border-l-4 border-roof-red">
                  <div className="w-16 h-16 bg-roof-red text-white flex items-center justify-center text-3xl font-display font-bold shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-display uppercase">{item.title}</h3>
                      <span className="text-roof-red font-bold text-sm uppercase tracking-widest">{item.time}</span>
                    </div>
                    <p className="text-navy/70 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-roof-red text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-5xl mb-6">Book Your Free Inspection</h2>
          <p className="text-xl mb-10 text-white/90">
            Don't wait for a small problem to become a major expense. Get your free inspection today.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button className="btn-primary bg-white text-roof-red hover:bg-white/90 w-full max-w-md">
              Schedule Free Inspection
            </button>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <div className="text-3xl font-display font-bold">(214) 555-0123</div>
            </div>
          </div>
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
