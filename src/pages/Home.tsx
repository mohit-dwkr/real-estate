import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowDown, Bed, Bath, Maximize, MapPin, Phone, Mail,
  BarChart3, Globe, Gem, Compass, Award, ShieldCheck, Quote, Star,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PropertyCard from '@/components/PropertyCard';
import CTABanner from '@/components/CTABanner';
import { featuredProperties } from '@/data/properties';
import { projects } from '@/data/projects';
import { locations } from '@/data/locations';
import { testimonials, stats, reasons } from '@/data/content';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>> = {
  BarChart3, Globe, Gem, Compass, Award, ShieldCheck,
};

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Luxury estate"
            className="w-full h-full object-cover hero-zoom"
          />
          <div className="absolute inset-0 gradient-overlay-dark" />
        </div>

        <div className="relative z-10 container-luxury text-center">
          <div className="text-reveal active mb-6">
            <p className="text-gold text-sm font-sans uppercase tracking-[0.3em]">
              <span className="text-reveal-inner">Luxury Real Estate</span>
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 text-balance max-w-5xl mx-auto">
            <span className="text-reveal active block"><span className="text-reveal-inner">Where Extraordinary</span></span>
            <span className="text-reveal active block"><span className="text-reveal-inner" style={{ transitionDelay: '0.2s' }}>Properties Find Their</span></span>
            <span className="text-reveal active block"><span className="text-reveal-inner" style={{ transitionDelay: '0.4s' }}>Discerning Owners</span></span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans font-light">
            For over fifteen years, Meridian has represented the world's most exceptional homes with discretion, intelligence, and an unwavering standard of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties" className="btn-gold">
              <span>Explore Properties</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
            <Link to="/contact" className="btn-outline">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
          <ArrowDown size={24} className="text-white/60" />
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Featured Listings</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Exceptional Properties</h2>
            <p className="text-stone-custom max-w-2xl mx-auto">
              A curated selection of the finest homes currently available, each chosen for its architectural significance, location, and timeless appeal.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </Reveal>

          <div className="text-center mt-12">
            <Link to="/properties" className="btn-outline-dark">
              <span>View All Properties</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT COMPANY ===== */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left" className="relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Luxury interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-8 -right-8 bg-charcoal text-white p-8 hidden md:block">
                  <p className="font-serif text-5xl text-gold mb-2">15+</p>
                  <p className="text-sm uppercase tracking-wider text-white/60">Years of Excellence</p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">About Meridian</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                A Legacy of Discretion and Distinction
              </h2>
              <p className="text-stone-custom text-lg mb-6 leading-relaxed">
                Meridian was founded on a simple conviction: that the sale or purchase of an extraordinary home deserves a level of representation equal to the property itself.
              </p>
              <p className="text-stone-custom mb-8 leading-relaxed">
                We are not a volume business. We are a relationship business. Every client receives the full attention of a dedicated advisor, supported by a team of specialists in marketing, design, and negotiation. The result is a standard of service that our clients describe as simply unmatched.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: '250+', label: 'Properties Sold' },
                  { value: '20+', label: 'Premium Projects' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-serif text-4xl text-gold">{item.value}</p>
                    <p className="text-sm text-stone-custom uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline-dark">
                <span>Our Story</span>
                <ArrowRight size={16} className="relative z-10" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Signature Developments</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Featured Projects</h2>
            <p className="text-stone-custom max-w-2xl mx-auto">
              landmark developments that define neighborhoods and set new standards in luxury living.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.id} variant={i % 2 === 0 ? 'left' : 'right'}>
                <Link to="/projects" className="group block relative overflow-hidden h-[400px] md:h-[450px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gold text-white text-xs uppercase tracking-wider px-3 py-1">{project.status}</span>
                      <span className="text-white/60 text-sm">{project.units}</span>
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gold transition-colors duration-300">{project.name}</h3>
                    <p className="text-white/60 text-sm mb-3 flex items-center gap-2">
                      <MapPin size={14} className="text-gold" /> {project.location}
                    </p>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-pad bg-charcoal">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Why Meridian</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">A Different Standard</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Six principles that define every client relationship and every transaction we represent.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => {
              const Icon = iconMap[reason.icon];
              return (
                <div key={reason.id} className="border border-white/10 p-8 hover:border-gold/50 transition-all duration-500 group">
                  {Icon && <Icon size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />}
                  <h3 className="font-serif text-2xl text-white mb-3">{reason.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ===== PROPERTY SHOWCASE ===== */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28586234/pexels-photo-28586234.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1920"
            alt="Luxury villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-side" />
        </div>

        <div className="relative z-10 container-luxury">
          <Reveal variant="left" className="max-w-xl">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Property Showcase</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
              Where Architecture Meets Landscape
            </h2>
            <p className="text-white/70 text-lg mb-8 font-sans font-light">
              Villa Serenity is a study in coastal luxury — walls of glass open to an infinity-edge pool that merges with the ocean horizon, while warm white oak and natural stone anchor every room.
            </p>
            <Link to="/properties/3" className="btn-gold">
              <span>View Property</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Where We Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Featured Locations</h2>
            <p className="text-stone-custom max-w-2xl mx-auto">
              From coast to coast, we represent the finest properties in the most sought-after markets.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 6).map((loc) => (
              <Link key={loc.id} to="/locations" className="group relative overflow-hidden aspect-[4/5]">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs uppercase tracking-wider mb-1">{loc.region}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{loc.name}</h3>
                  <p className="text-white/50 text-sm">{loc.properties} Properties</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="bg-graphite py-20">
        <div className="container-luxury">
          <Reveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="font-serif text-5xl md:text-6xl text-gold mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Client Voices</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">What Our Clients Say</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} variant={i % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-white p-8 md:p-10 card-shadow">
                  <Quote size={40} className="text-gold/30 mb-6" />
                  <p className="text-charcoal/80 text-lg leading-relaxed mb-8 font-serif italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <p className="font-serif text-lg text-charcoal">{t.name}</p>
                      <p className="text-sm text-stone-custom">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner />

      {/* ===== CONTACT PREVIEW ===== */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Begin a Conversation</h2>
            <p className="text-stone-custom max-w-2xl mx-auto">
              Whether you are buying, selling, or simply exploring, our advisors are ready to help.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 border border-gray-200 hover:border-gold transition-colors duration-300">
              <Phone size={28} className="text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-charcoal mb-2">Call Us</h3>
              <p className="text-stone-custom text-sm">+1 (212) 555-0100</p>
              <p className="text-stone-custom text-sm">Mon – Fri, 9AM – 7PM</p>
            </div>
            <div className="text-center p-8 border border-gray-200 hover:border-gold transition-colors duration-300">
              <Mail size={28} className="text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-charcoal mb-2">Email Us</h3>
              <p className="text-stone-custom text-sm">info@meridian.com</p>
              <p className="text-stone-custom text-sm">We reply within 24 hours</p>
            </div>
            <div className="text-center p-8 border border-gray-200 hover:border-gold transition-colors duration-300">
              <MapPin size={28} className="text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-charcoal mb-2">Visit Us</h3>
              <p className="text-stone-custom text-sm">150 Madison Avenue</p>
              <p className="text-stone-custom text-sm">New York, NY 10016</p>
            </div>
          </Reveal>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-gold">
              <span>Make an Enquiry</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
