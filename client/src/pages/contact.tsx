import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <a href="/contact" className="text-roof-red">Contact</a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden lg:block font-display font-bold text-lg">(214) 555-0123</div>
            <button className="btn-primary h-12 px-6 text-sm">Get Quote</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-[750px]">
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Get In <br /> 
              <span className="text-roof-red">Touch With Us</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-[600px] font-medium">
              Ready to protect your home with a premium roof? Contact us today for a free inspection and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-2 border-light-gray hover:border-roof-red transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-roof-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-roof-red" />
                </div>
                <h3 className="font-display uppercase text-sm mb-2 text-navy/60">Call Us</h3>
                <a href="tel:2145550123" className="text-xl font-bold text-navy hover:text-roof-red">(214) 555-0123</a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-light-gray hover:border-roof-red transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-roof-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-roof-red" />
                </div>
                <h3 className="font-display uppercase text-sm mb-2 text-navy/60">Email Us</h3>
                <a href="mailto:info@apexroofing.com" className="text-lg font-bold text-navy hover:text-roof-red break-all">info@apexroofing.com</a>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-light-gray hover:border-roof-red transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-roof-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-roof-red" />
                </div>
                <h3 className="font-display uppercase text-sm mb-2 text-navy/60">Visit Us</h3>
                <p className="text-lg font-bold text-navy">Dallas, TX 75201</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-light-gray hover:border-roof-red transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-roof-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-roof-red" />
                </div>
                <h3 className="font-display uppercase text-sm mb-2 text-navy/60">Business Hours</h3>
                <p className="text-lg font-bold text-navy">Mon-Sat: 7AM-7PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl mb-4">Send Us A <span className="text-roof-red">Message</span></h2>
              <div className="w-20 h-1 bg-roof-red mb-8" />
              <p className="text-lg text-navy/70 mb-8">
                Fill out the form below and one of our roofing specialists will contact you within 24 hours to schedule your free inspection.
              </p>

              {submitted && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-bold text-green-800">Message Sent Successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-navy/60 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-roof-red outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-navy/60 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-roof-red outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-navy/60 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-roof-red outline-none transition-colors"
                      placeholder="(214) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-navy/60 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-roof-red outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="roof-replacement">Roof Replacement</option>
                    <option value="storm-damage">Storm Damage Repair</option>
                    <option value="insurance-claim">Insurance Claim Help</option>
                    <option value="inspection">Free Inspection</option>
                    <option value="emergency-repair">Emergency Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-navy/60 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-roof-red outline-none transition-colors resize-none"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Map Placeholder */}
              <div className="bg-gray-200 h-[400px] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                  alt="Dallas Texas Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                  <div className="bg-white p-6 shadow-xl">
                    <MapPin className="w-8 h-8 text-roof-red mx-auto mb-2" />
                    <p className="font-display font-bold text-navy text-center">Dallas, TX 75201</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <Card className="border-2 border-navy">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4 font-display uppercase">Service Area</h3>
                  <p className="text-navy/70 mb-6">
                    We proudly serve the entire Dallas-Fort Worth metroplex and surrounding areas:
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      "Dallas", "Fort Worth", "Plano", "Frisco",
                      "McKinney", "Allen", "Richardson", "Carrollton",
                      "Irving", "Garland", "Mesquite", "Grand Prairie"
                    ].map((city, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-roof-red shrink-0" />
                        <span className="text-navy">{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-navy/60 text-sm mt-6">
                    Don't see your city? Call us at (214) 555-0123 - we may still serve your area!
                  </p>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-roof-red text-white border-0">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2 font-display uppercase">24/7 Emergency Service</h3>
                  <p className="text-white/90 mb-6">
                    Roof leak or storm damage? We're here to help, day or night.
                  </p>
                  <a 
                    href="tel:2145550123" 
                    className="inline-block bg-white text-roof-red font-display font-bold px-8 py-4 hover:bg-white/90 transition-colors uppercase text-lg"
                  >
                    Call Now: (214) 555-0123
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Frequently Asked <span className="text-roof-red">Questions</span></h2>
            <div className="w-20 h-1 bg-roof-red mx-auto" />
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How quickly can you respond to my request?",
                a: "We typically respond to all inquiries within 2-4 hours during business hours. For emergency situations, we offer 24/7 response and can have a crew on-site within hours."
              },
              {
                q: "Is the inspection really free?",
                a: "Yes! We provide completely free, no-obligation inspections with detailed reports. There are no hidden fees or pressure to commit."
              },
              {
                q: "Do you work with insurance companies?",
                a: "Absolutely. We're experienced in working with all major insurance companies and will handle your entire claim process from start to finish."
              },
              {
                q: "What areas do you serve?",
                a: "We serve the entire Dallas-Fort Worth metroplex and surrounding areas within a 50-mile radius of Dallas."
              },
              {
                q: "How long does a roof replacement take?",
                a: "Most residential roof replacements are completed in 1-2 days, depending on the size and complexity of your roof."
              }
            ].map((faq, i) => (
              <Card key={i} className="border-l-4 border-l-roof-red">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">{faq.q}</h3>
                  <p className="text-navy/70">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
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
              <li><a href="/inspections" className="hover:text-roof-red">Free Inspections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 font-bold uppercase tracking-widest text-xs">Contact</h4>
            <p className="mb-2">(214) 555-0123</p>
            <p className="mb-2">info@apexroofing.com</p>
            <p>Dallas, TX 75201</p>
          </div>
        </div>
        <div className="container-custom mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© 2026 Apex Roofing. All rights reserved. TX License: #123456789 | Fully Bonded & Insured</p>
        </div>
      </footer>
    </div>
  );
}