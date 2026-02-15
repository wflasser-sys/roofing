import { CloudRain, Shield, Clock, CheckCircle2, AlertTriangle, Phone, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StormDamage() {
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
            src="https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=1600&q=80" 
            alt="Storm Damage" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-[750px]">
            <div className="flex items-center gap-3 mb-4">
              <CloudRain className="w-12 h-12 text-roof-red" />
              <span className="text-roof-red font-display text-lg uppercase tracking-widest">Emergency Response</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Storm Damage <br /> 
              <span className="text-roof-red">Repair Experts</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] font-medium">
              24/7 emergency response for hail, wind, and tornado damage. We handle everything from initial inspection to insurance claim completion.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Emergency Contact</button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Schedule Inspection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-roof-red text-white py-6">
        <div className="container-custom flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <span className="font-display text-lg uppercase">24/7 Emergency Service</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <span className="font-display text-2xl font-bold">(214) 555-0123</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" />
            <span className="font-display text-lg uppercase">Insurance Specialists</span>
          </div>
        </div>
      </section>

      {/* Types of Damage */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl mb-4">Common Storm Damage <span className="text-roof-red">We Handle</span></h2>
            <div className="w-20 h-1 bg-roof-red" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hail Damage",
                desc: "Bruised or cracked shingles, granule loss, and structural impacts",
                image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&q=80"
              },
              {
                title: "Wind Damage",
                desc: "Missing shingles, lifted edges, and compromised flashing",
                image: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=600&q=80"
              },
              {
                title: "Water Intrusion",
                desc: "Leaks, water stains, and interior damage from storm exposure",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80"
              }
            ].map((damage, i) => (
              <Card key={i} className="overflow-hidden border-2 border-light-gray hover:border-roof-red transition-colors">
                <img src={damage.image} alt={damage.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-3 font-display uppercase">{damage.title}</h3>
                  <p className="text-navy/70">{damage.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-8">Our Storm Damage <br/><span className="text-roof-red">Response Process</span></h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Emergency Contact", desc: "Call our 24/7 hotline for immediate assistance" },
                { step: "2", title: "Rapid Inspection", desc: "Drone and manual inspection within 24 hours" },
                { step: "3", title: "Damage Documentation", desc: "Professional photos and detailed assessment" },
                { step: "4", title: "Insurance Coordination", desc: "We handle your claim from start to finish" },
                { step: "5", title: "Fast Repair", desc: "Emergency repairs and full restoration completed quickly" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-roof-red text-white flex items-center justify-center text-2xl font-display font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-display uppercase">{item.title}</h3>
                    <p className="text-navy/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80" 
              alt="Storm damage inspection" 
              className="w-full h-72 object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=400&q=80" 
                alt="Roof repair" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80" 
                alt="Quality inspection" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-roof-red/10 border-l-4 border-roof-red p-8 mb-12">
              <div className="flex gap-4 items-start">
                <AlertTriangle className="w-8 h-8 text-roof-red shrink-0" />
                <div>
                  <h3 className="text-2xl mb-3 font-display uppercase text-navy">Don't Wait - Act Now</h3>
                  <p className="text-navy/70 text-lg">
                    Storm damage can worsen quickly, leading to leaks, mold, and structural issues. Early detection and repair can save thousands in future costs.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-4xl mb-8 text-center">Warning Signs of <span className="text-roof-red">Storm Damage</span></h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Missing, cracked, or curling shingles",
                "Dents or bruising on roof surface",
                "Granules in gutters or downspouts",
                "Water stains on ceilings or walls",
                "Damaged or loose flashing",
                "Visible holes or punctures",
                "Sagging roof sections",
                "Interior leaks after storms"
              ].map((sign, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-roof-red shrink-0 mt-1" />
                  <p className="text-navy">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Help */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-6">We Navigate <br/><span className="text-roof-red">Insurance Claims</span></h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Filing a storm damage claim can be complex and overwhelming. Our team has managed over $100M in insurance claims and knows exactly what it takes to get your claim approved.
            </p>
            <div className="space-y-4">
              {[
                "Free insurance claim assessment",
                "Professional damage documentation",
                "Direct insurance company coordination",
                "Claim appeal support if needed",
                "Zero out-of-pocket costs in most cases"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2 className="w-5 h-5 text-roof-red shrink-0" />
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 text-navy">
            <Camera className="w-12 h-12 text-roof-red mb-4" />
            <h3 className="text-2xl mb-4 font-display uppercase">Free Drone Inspection</h3>
            <p className="text-navy/70 mb-6">
              We use advanced drone technology to document every inch of damage without putting anyone at risk. Get a comprehensive assessment within 24 hours.
            </p>
            <button className="btn-primary bg-roof-red">Schedule Inspection</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-roof-red text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-5xl mb-6">Storm Damaged Your Roof?</h2>
          <p className="text-xl mb-10 text-white/90">
            Don't let small damage become a major expense. Contact us now for emergency service.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button className="btn-primary bg-white text-roof-red hover:bg-white/90 w-full max-w-md">
              Emergency Contact Now
            </button>
            <div className="text-4xl font-display font-bold">(214) 555-0123</div>
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
