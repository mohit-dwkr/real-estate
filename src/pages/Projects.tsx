import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <>
      <PageHero
        title="Signature Projects"
        subtitle="Landmark developments that define neighborhoods and set new standards in luxury living."
        image="https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumb="Home / Projects"
      />

      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <Reveal key={project.id} variant={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="relative overflow-hidden h-[400px] md:h-[500px] group [direction:ltr]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6 bg-gold text-white text-xs uppercase tracking-wider px-4 py-2">
                      {project.status}
                    </div>
                  </div>

                  <div className="[direction:ltr]">
                    <p className="text-gold text-sm font-sans uppercase tracking-widest mb-3">{project.units}</p>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">{project.name}</h2>
                    <p className="text-stone-custom flex items-center gap-2 mb-5">
                      <MapPin size={18} className="text-gold" /> {project.location}
                    </p>
                    <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">{project.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {project.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2 text-sm text-charcoal/70">
                          <Check size={16} className="text-gold shrink-0" /> {amenity}
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn-outline-dark">
                      <span>View Project</span>
                      <ArrowRight size={16} className="relative z-10" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Investing in a Project?"
        subtitle="Speak with our development team about current and upcoming opportunities."
        image="https://images.pexels.com/photos/31656167/pexels-photo-31656167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
    </>
  );
}
