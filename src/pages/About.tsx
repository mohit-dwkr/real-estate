import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { team, stats, reasons } from '@/data/content';
import { BarChart3, Globe, Gem, Compass, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>> = {
  BarChart3, Globe, Gem, Compass, Award, ShieldCheck,
};

export default function About() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Fifteen years of representing the world's most extraordinary properties with discretion and distinction."
        image="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumb="Home / About"
      />

      {/* Company Story */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left" className="relative">
              <img
                src="https://images.pexels.com/photos/8559989/pexels-photo-8559989.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                alt="Our team"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold text-white p-8 hidden md:block">
                <p className="font-serif text-5xl mb-2">2009</p>
                <p className="text-sm uppercase tracking-wider text-white/80">Year Founded</p>
              </div>
            </Reveal>

            <Reveal variant="right">
              <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">The Meridian Story</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Built on Relationships, Defined by Results
              </h2>
              <p className="text-stone-custom text-lg mb-4 leading-relaxed">
                Meridian began with a simple observation: the buying and selling of extraordinary homes had become transactional when it should be personal.
              </p>
              <p className="text-stone-custom mb-4 leading-relaxed">
                Our founder, Alexander Whitmore, set out to build a different kind of firm — one where every client receives the full attention of a dedicated advisor, where marketing is bespoke rather than templated, and where discretion is not a feature but a foundation.
              </p>
              <p className="text-stone-custom leading-relaxed">
                Fifteen years later, that conviction has been validated by hundreds of successful transactions, record-setting sales, and a client roster that includes some of the world's most discerning individuals and families.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 card-shadow">
              <Target size={36} className="text-gold mb-6" />
              <h3 className="font-serif text-3xl text-charcoal mb-4">Our Mission</h3>
              <p className="text-stone-custom leading-relaxed">
                To represent every property and every client with a standard of service that honors the significance of the transaction — providing intelligence, discretion, and results that consistently exceed expectations.
              </p>
            </div>
            <div className="bg-white p-10 card-shadow">
              <Eye size={36} className="text-gold mb-6" />
              <h3 className="font-serif text-3xl text-charcoal mb-4">Our Vision</h3>
              <p className="text-stone-custom leading-relaxed">
                To be the most trusted name in luxury real estate — the firm that discerning clients think of first, and the standard against which all others are measured.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Statistics */}
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

      {/* Team */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Our People</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Meet the Team</h2>
            <p className="text-stone-custom max-w-2xl mx-auto">
              Experienced advisors who combine deep market intelligence with a genuine commitment to client success.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-gold text-sm uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-stone-custom text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-ivory">
        <div className="container-luxury">
          <Reveal variant="up" className="text-center mb-16">
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Why Meridian</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">What Sets Us Apart</h2>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => {
              const Icon = iconMap[reason.icon];
              return (
                <div key={reason.id} className="border border-gray-200 p-8 hover:border-gold transition-all duration-500 group">
                  {Icon && <Icon size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />}
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{reason.title}</h3>
                  <p className="text-stone-custom text-sm leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
