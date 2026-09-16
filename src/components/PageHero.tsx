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
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover hero-zoom" />
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      <div className="relative z-10 container-luxury pb-16">
        <Reveal variant="up">
          {breadcrumb && (
            <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">{breadcrumb}</p>
          )}
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-white/70 text-lg max-w-2xl font-sans font-light">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
