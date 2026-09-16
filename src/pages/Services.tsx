import { Link } from 'react-router-dom';
import { Key, Search, Lightbulb, TrendingUp, MapPin, Building2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { services } from '@/data/content';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>> = {
  Key, Search, Lightbulb, TrendingUp, MapPin, Building2,
};

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive luxury real estate services, delivered with discretion and an unwavering commitment to excellence."
        image="https://images.pexels.com/photos/8470844/pexels-photo-8470844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumb="Home / Services"
      />

      {/* Services grid */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} className="bg-white p-10 card-shadow group">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-all duration-500">
                    {Icon && <Icon size={28} className="text-gold group-hover:text-white transition-colors duration-500" />}
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-4">{service.title}</h3>
                  <p className="text-stone-custom leading-relaxed mb-6">{service.description}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-gold uppercase tracking-wider hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Process section */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Our Process</h2>
            <p className="text-stone-custom max-w-2xl mx-auto">
              A considered, step-by-step approach designed to make every transaction seamless.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We begin with a private conversation to understand your goals, timeline, and preferences.' },
              { step: '02', title: 'Strategy', desc: 'A tailored plan is developed, backed by market data and our team\'s collective expertise.' },
              { step: '03', title: 'Execution', desc: 'Every detail is managed with precision, from marketing to negotiation to closing.' },
              { step: '04', title: 'Ongoing Care', desc: 'Our relationship continues well beyond the transaction, with support whenever you need it.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <p className="font-serif text-6xl text-gold/20 mb-4">{item.step}</p>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-stone-custom text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Schedule a private consultation with one of our advisors today."
        image="https://images.pexels.com/photos/7937690/pexels-photo-7937690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
    </>
  );
}
