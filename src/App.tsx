/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Eye, 
  Sparkles, 
  Heart, 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight, 
  Star,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const CTA_TEXT = "Book Your Experience";
const MAPS_URL = "https://www.google.com/maps/place/Amaranthy+Eyelash,+Nail+%26+Beauty+Salon/@-6.1823166,106.7869716,17z";

const services = [
  {
    title: "Eyelash Extensions",
    description: "Tailored sets from natural classic to dramatic volume, designed to enhance your unique eye shape.",
    icon: <Eye className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nail Artistry",
    description: "Premium gel manicures, pedicures, and intricate nail art using the finest non-toxic products.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Beauty Rituals",
    description: "Professional waxing and skin treatments to leave you feeling smooth, radiant, and refreshed.",
    icon: <Heart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Siska Wijaya",
    text: "The best eyelash extension in West Jakarta! Very meticulous and the result is so natural. I've been a regular for 2 years.",
    rating: 5
  },
  {
    name: "Amanda Putri",
    text: "Love their nail art! The staff is very friendly and the place is so aesthetic and clean. Highly recommended.",
    rating: 5
  },
  {
    name: "Jessica Tan",
    text: "Professional service and premium products. My lashes last for weeks without any irritation. Truly a luxury experience.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-cream">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif tracking-tighter cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            AMARANTHY
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            {["Services", "Testimonials", "Location"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[10px] uppercase tracking-[0.2em] hover:text-gold transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('booking')}
              className="luxury-button"
            >
              {CTA_TEXT}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center space-y-8"
          >
            {["Services", "Testimonials", "Location", "Booking"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-serif"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block">Jakarta's Premier Beauty Destination</span>
            <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9]">
              Elevate Your <br />
              <span className="italic">Natural</span> Beauty
            </h1>
            <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-xl font-light leading-relaxed">
              Experience the art of precision at Amaranthy. From bespoke lash extensions to curated nail artistry, we define luxury in every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('booking')} className="luxury-button flex items-center justify-center gap-2 group">
                {CTA_TEXT}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('services')} className="px-8 py-3 border border-ink/20 text-xs uppercase tracking-widest hover:border-gold transition-colors">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] opacity-50">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-ink/50 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl mb-6">Our Curated <br />Services</h2>
              <p className="text-ink/60 font-light">We combine technical expertise with a refined aesthetic to provide treatments that are as unique as you are.</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">01 / 03</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 oval-mask">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-gold">{service.icon}</div>
                  <h3 className="text-2xl">{service.title}</h3>
                </div>
                <p className="text-sm text-ink/60 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <button onClick={() => scrollToSection('booking')} className="text-[10px] uppercase tracking-widest flex items-center gap-2 group/link">
                  Book Now <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4 italic">The Amaranthy Experience</h2>
            <p className="text-gold uppercase tracking-[0.2em] text-[10px]">Trusted by 500+ Regular Clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 relative"
              >
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg font-serif italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-[10px] uppercase tracking-widest font-sans">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl mb-8">Reserve Your <br />Moment</h2>
              <p className="text-ink/60 font-light mb-12 max-w-md">
                Ready to transform your look? Fill out the form below and our concierge will contact you to confirm your appointment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-50">Call Us</p>
                    <p className="text-sm">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-50">Follow Us</p>
                    <p className="text-sm">@amaranthy.beauty</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream p-12 shadow-2xl relative"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-50">Full Name</label>
                    <input type="text" placeholder="Jane Doe" className="luxury-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-50">Phone Number</label>
                    <input type="tel" placeholder="+62..." className="luxury-input" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">Service Interest</label>
                  <select className="luxury-input appearance-none">
                    <option>Eyelash Extensions</option>
                    <option>Nail Artistry</option>
                    <option>Beauty Rituals</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50">Preferred Date</label>
                  <input type="date" className="luxury-input" />
                </div>
                <button type="submit" className="luxury-button w-full py-5">
                  Request Appointment
                </button>
                <p className="text-[9px] text-center opacity-40 uppercase tracking-widest">
                  Our team will contact you within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl mb-8">Visit Our <br />Sanctuary</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-gold uppercase tracking-widest text-[10px] mb-2">Address</h4>
                  <p className="text-sm font-light leading-relaxed">
                    Jl. Tanjung Duren Barat I No. 12, <br />
                    Grogol Petamburan, Jakarta Barat, <br />
                    DKI Jakarta 11470
                  </p>
                </div>
                <div>
                  <h4 className="text-gold uppercase tracking-widest text-[10px] mb-2">Hours</h4>
                  <p className="text-sm font-light">Mon - Sun: 10:00 AM - 08:00 PM</p>
                </div>
                <a 
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 h-[400px] bg-white shadow-inner overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.680604164165!2d106.7869716!3d-6.1823166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7006b03d94b%3A0xe962bf43d39e44a0!2mAmaranthy%20Eyelash%2C%20Nail%20%26%20Beauty%20Salon!5e0!3m2!1sen!2sid!4v1712780000000!5m2!1sen!2sid" 
                className="w-full h-full border-0 grayscale contrast-125 opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-cream/60 pt-32 pb-12 border-t border-cream/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -bottom-20 -right-20 text-[20rem] font-serif text-cream/[0.02] select-none pointer-events-none">
          A
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-cream mb-2 tracking-tighter">AMARANTHY</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Refined Beauty Since 2020</p>
              </div>
              <p className="text-sm font-light leading-relaxed max-w-xs">
                Jakarta's premier destination for bespoke beauty treatments. We believe in enhancing your natural elegance through precision and artistry.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-cream font-sans text-[10px] uppercase tracking-[0.2em] mb-10">Navigation</h4>
              <ul className="space-y-4">
                {["Services", "Testimonials", "Location", "Booking"].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-sm font-light hover:text-gold transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-cream font-sans text-[10px] uppercase tracking-[0.2em] mb-10">Our Services</h4>
              <ul className="space-y-4">
                {["Eyelash Extensions", "Nail Artistry", "Beauty Rituals", "Bridal Packages", "Gift Vouchers"].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="text-sm font-light hover:text-gold transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="text-cream font-sans text-[10px] uppercase tracking-[0.2em] mb-10">Visit Us</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <p className="text-sm font-light leading-relaxed">
                    Jl. Tanjung Duren Barat I No. 12, Jakarta Barat
                  </p>
                </div>
                <div className="flex gap-4">
                  <Sparkles className="w-4 h-4 text-gold shrink-0" />
                  <p className="text-sm font-light">
                    Mon - Sun: 10:00 - 20:00
                  </p>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => scrollToSection('booking')}
                    className="text-[10px] uppercase tracking-widest text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8 order-2 md:order-1">
              <a href="#" className="text-[10px] uppercase tracking-widest hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase tracking-widest hover:text-gold transition-colors">Terms of Service</a>
            </div>
            
            <div className="text-center md:text-right order-1 md:order-2">
              <p className="text-[10px] uppercase tracking-widest opacity-40">
                &copy; 2026 Amaranthy Eyelash, Nail & Beauty Salon.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <button 
          onClick={() => scrollToSection('booking')}
          className="w-14 h-14 bg-gold text-ink rounded-full shadow-2xl flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
}
