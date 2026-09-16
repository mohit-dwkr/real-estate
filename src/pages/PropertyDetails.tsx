import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, Check, ArrowLeft, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!property) return <Navigate to="/properties" replace />;

  const similar = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  return (
    <>
      {/* Back link */}
      <div className="bg-cream pt-32 pb-6">
        <div className="container-luxury">
          <Link to="/properties" className="inline-flex items-center gap-2 text-stone-custom hover:text-gold transition-colors text-sm">
            <ArrowLeft size={18} /> Back to Properties
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-cream pb-16">
        <div className="container-luxury">
          <Reveal variant="up" className="mb-8">
            <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
              <img
                src={property.gallery[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-gold text-white text-xs uppercase tracking-wider px-4 py-2">
                {property.status}
              </div>
            </div>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {property.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`overflow-hidden aspect-[4/3] transition-all duration-300 ${
                  activeImage === i ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Property info */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Reveal variant="up">
                <p className="text-gold text-sm font-sans uppercase tracking-widest mb-3">{property.type}</p>
                <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">{property.title}</h1>
                <p className="text-stone-custom text-lg flex items-center gap-2 mb-8">
                  <MapPin size={18} className="text-gold" /> {property.location}
                </p>
                <p className="font-serif text-4xl text-gold mb-10">{property.price}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                  <div className="text-center p-6 border border-gray-200">
                    <Bed size={24} className="text-gold mx-auto mb-2" />
                    <p className="font-serif text-2xl text-charcoal">{property.bedrooms}</p>
                    <p className="text-xs uppercase tracking-wider text-stone-custom">Bedrooms</p>
                  </div>
                  <div className="text-center p-6 border border-gray-200">
                    <Bath size={24} className="text-gold mx-auto mb-2" />
                    <p className="font-serif text-2xl text-charcoal">{property.bathrooms}</p>
                    <p className="text-xs uppercase tracking-wider text-stone-custom">Bathrooms</p>
                  </div>
                  <div className="text-center p-6 border border-gray-200">
                    <Maximize size={24} className="text-gold mx-auto mb-2" />
                    <p className="font-serif text-2xl text-charcoal">{property.area.split(' ')[0]}</p>
                    <p className="text-xs uppercase tracking-wider text-stone-custom">Sq Ft</p>
                  </div>
                </div>

                {/* Description */}
                <h2 className="font-serif text-3xl text-charcoal mb-4">About This Property</h2>
                <p className="text-stone-custom leading-relaxed mb-12 text-lg">{property.description}</p>

                {/* Amenities */}
                <h2 className="font-serif text-3xl text-charcoal mb-6">Amenities & Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <Check size={16} className="text-gold" />
                      </div>
                      <span className="text-charcoal/80">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Location placeholder */}
                <h2 className="font-serif text-3xl text-charcoal mb-6">Location</h2>
                <div className="relative h-[350px] bg-gray-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="text-gold mx-auto mb-4" />
                      <p className="font-serif text-2xl text-charcoal">{property.location}</p>
                      <p className="text-stone-custom text-sm mt-2">Interactive map would appear here</p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(0deg, #ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                </div>
              </Reveal>
            </div>

            {/* Sidebar - Enquiry form */}
            <div className="lg:col-span-1">
              <Reveal variant="right" className="sticky top-32">
                <div className="bg-white p-8 card-shadow">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">Enquire About This Property</h3>
                  <p className="text-stone-custom text-sm mb-6">Our advisors will respond within 24 hours.</p>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Enquiry submitted! Our team will contact you shortly.'); }} className="space-y-4">
                    <input type="text" placeholder="Your Name" required className="input-luxury" />
                    <input type="email" placeholder="Email Address" required className="input-luxury" />
                    <input type="tel" placeholder="Phone Number" className="input-luxury" />
                    <textarea placeholder="Your Message" rows={4} className="input-luxury resize-none" />
                    <button type="submit" className="btn-gold w-full">
                      <span>Submit Enquiry</span>
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
                    <div className="flex items-center gap-3 text-sm text-charcoal/70">
                      <Phone size={18} className="text-gold" /> +1 (212) 555-0100
                    </div>
                    <div className="flex items-center gap-3 text-sm text-charcoal/70">
                      <Mail size={18} className="text-gold" /> info@meridian.com
                    </div>
                    <div className="flex items-center gap-3 text-sm text-charcoal/70">
                      <Calendar size={18} className="text-gold" /> Schedule a private tour
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="section-pad bg-cream">
          <div className="container-luxury">
            <Reveal variant="up" className="text-center mb-12">
              <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">You May Also Like</p>
              <h2 className="font-serif text-4xl text-charcoal">Similar Properties</h2>
            </Reveal>
            <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similar.map((p) => <PropertyCard key={p.id} property={p} />)}
            </Reveal>
          </div>
        </section>
      )}

      <CTABanner title="Ready to Make This Home Yours?" />
    </>
  );
}
