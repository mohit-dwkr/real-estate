import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { locations } from '@/data/locations';

export default function Locations() {
  return (
    <>
      <PageHero
        title="Locations"
        subtitle="From coast to coast, we represent the finest properties in the most sought-after markets."
        image="https://images.pexels.com/photos/1497417/pexels-photo-1497417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumb="Home / Locations"
      />

      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.id} className="group">
                <div className="relative overflow-hidden h-[400px] mb-5">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute top-6 right-6 bg-white/90 text-charcoal text-xs uppercase tracking-wider px-3 py-1.5">
                    {loc.properties} Properties
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-gold text-xs uppercase tracking-wider mb-1">{loc.region}</p>
                    <h3 className="font-serif text-3xl text-white">{loc.name}</h3>
                  </div>
                </div>
                <p className="text-stone-custom leading-relaxed mb-5">{loc.description}</p>
                <Link
                  to="/properties"
                  className="inline-flex items-center gap-2 text-sm text-gold uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Explore Properties <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Location?"
        subtitle="We represent properties across the country. Contact us to learn about opportunities in your area."
        image="https://images.pexels.com/photos/15629500/pexels-photo-15629500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
    </>
  );
}
