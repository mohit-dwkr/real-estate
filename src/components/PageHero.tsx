import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Image with Dark Gradient & Radial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Dark Vignette Layer for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-12">
        <Reveal variant="up">
          {breadcrumb && (
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <p className="text-[#D4AF37] text-[11px] font-sans uppercase tracking-[0.35em] font-semibold">
                {breadcrumb}
              </p>
            </div>
          )}

          {/* Title - Clean & Balanced Proportions */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.2] tracking-tight mb-6 max-w-4xl mx-auto drop-shadow-2xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/85 text-sm sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed tracking-wide mb-10 drop-shadow">
              {subtitle}
            </p>
          )}

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/properties"
              className="w-full sm:w-auto px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] font-semibold text-black bg-gradient-to-r from-[#D4AF37] via-[#f3e5ab] to-[#B38F29] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Properties &rarr;
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] font-semibold text-white border border-white/40 backdrop-blur-md hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/70 font-light">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}