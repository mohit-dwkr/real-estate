import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function CTABanner({
  title = 'Begin Your Property Journey',
  subtitle = 'Let our advisors guide you to the extraordinary. Schedule a private consultation today.',
  image = 'https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
}: CTABannerProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative z-10 container-luxury text-center">
        <Reveal variant="up">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 text-balance">{title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 font-sans font-light">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">
              <span>Enquire Now</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
            <Link to="/properties" className="btn-outline">
              <span>Explore Properties</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
