import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowDown, Bed, Bath, Maximize, MapPin, Phone, Mail,
  BarChart3, Globe, Gem, Compass, Award, ShieldCheck, Quote, Star,
} from 'lucide-react';

import Reveal from '@/components/Reveal';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutCompany from '@/components/AboutCompany';
import FeaturedLocations from '@/components/FeaturedLocations';
import Testimonials from '@/components/Testimonials';
import ContactPreview from '@/components/ContactPreview';

// import { projects } from '@/data/projects';
import { stats, reasons } from '@/data/content';


const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>> = {
  BarChart3, Globe, Gem, Compass, Award, ShieldCheck,
};

export default function Home() {
  return (
    <>

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Gradient Overlays */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Luxury estate"
            className="w-full h-full object-cover hero-zoom"
          />
          {/* Custom Overlay for Bright & Vibrant Background Visibility */}
          <div className="absolute inset-0 gradient-overlay-dark opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
        </div>

        {/* Central Luxury Hero Content */}
        <div className="relative z-10 container-luxury text-center px-4 pt-16 sm:pt-0">



          {/* ===== LUXURY MAIN HEADING ===== */}
          <h1
            className="
    font-serif
    text-3xl
    sm:text-5xl
    lg:text-6xl
    xl:text-[68px]
    text-white
    leading-[1.08]
    tracking-[-0.015em]
    mb-5
    text-balance
    max-w-5xl
    mx-auto
    [text-shadow:_0_2px_18px_rgba(0,0,0,0.65)]
  "
          >
            <span className="text-reveal active block">
              <span className="text-reveal-inner">
                Exceptional Homes
              </span>
            </span>

            <span className="text-reveal active block">
              <span
                className="text-reveal-inner"
                style={{ transitionDelay: '0.2s' }}
              >
                For Extraordinary
              </span>
            </span>

            <span className="text-reveal active block">
              <span
                className="
        text-reveal-inner
        text-[#D4AF37]
        italic
        font-normal
      "
                style={{ transitionDelay: '0.4s' }}
              >
                Lives
              </span>
            </span>
          </h1>


          {/* ===== SUBTITLE PARAGRAPH ===== */}
          <p
            className="
    text-white/85
    text-sm
    sm:text-base
    lg:text-[17px]
    max-w-2xl
    mx-auto
    mb-8
    font-sans
    font-light
    leading-[1.75]
    tracking-[0.01em]
    [text-shadow:_0_1px_10px_rgba(0,0,0,0.75)]
  "
          >
            For over fifteen years, Meridian has represented exceptional homes
            with discretion, intelligence, and an unwavering standard of excellence.
          </p>

          {/* Refined Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/properties" className="btn-gold w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-semibold shadow-[0_4px_25px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.45)] transition-all">
              <span>Explore Properties</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
            <Link to="/contact" className="btn-outline w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-semibold border-white/40 bg-black/30 backdrop-blur-md hover:border-white transition-all">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
          <ArrowDown size={22} className="text-white/80 hover:text-[#D4AF37] transition-colors" />
        </div>
      </section>


      <FeaturedProperties />
      <AboutCompany />



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


      <FeaturedLocations />


      {/* /* ===== STATISTICS =====  */}
      <section className="bg-charcoal py-10 md:py-10 overflow-hidden">
        <div className="container-luxury">

          <Reveal variant="up">

            {/* TOP LINE */}
            <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">

              <span className="w-16 md:w-24 h-px bg-white/10" />

              <p
                className="
            text-[#C6A15B]
            text-[8px]
            md:text-[11px]
            uppercase
            tracking-[0.32em]
            font-sans
            font-medium
          "
              >
                Meridian By The Numbers
              </p>

              <span className="w-16 md:w-24 h-px bg-white/10" />

            </div>


            {/* STATS */}
            <div
              className="
          grid
          grid-cols-2
          lg:grid-cols-4
          divide-x
          divide-white/10
        "
            >

              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="
              text-center
              px-5
              md:px-8
              py-3
              group
            "
                >

                  {/* VALUE */}
                  <p
                    className="
                font-serif
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                leading-none
                text-white
                mb-4
                transition-colors
                duration-500
                group-hover:text-[#D4AF37]
              "
                  >
                    {stat.value}
                  </p>


                  {/* ACCENT */}
                  <div
                    className="
                w-6
                h-px
                bg-[#C6A15B]
                mx-auto
                mb-4
                transition-all
                duration-500
                group-hover:w-10
              "
                  />


                  {/* LABEL */}
                  <p
                    className="
                text-white/45
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.24em]
                font-sans
                leading-relaxed
              "
                  >
                    {stat.label}
                  </p>

                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      <Testimonials />

<ContactPreview />
      
    </>
  );
}
