import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, ArrowRight } from 'lucide-react';
import type { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="property-card group block bg-white card-shadow"
    >
      <div className="property-card-image relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-gold text-white text-xs font-sans uppercase tracking-wider px-3 py-1.5">
          {property.status}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="text-white font-serif text-lg">View Details</span>
          <span className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <ArrowRight size={16} className="text-white" />
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-sans uppercase tracking-wider text-stone-custom">{property.type}</span>
          <span className="font-serif text-xl text-gold">{property.price}</span>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-1 group-hover:text-gold transition-colors duration-300">
          {property.title}
        </h3>
        <p className="text-sm text-stone-custom mb-5">{property.location}</p>

        <div className="flex items-center gap-5 pt-4 border-t border-gray-100 text-sm text-charcoal/70">
          <div className="flex items-center gap-2">
            <Bed size={16} className="text-gold" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={16} className="text-gold" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={16} className="text-gold" />
            <span className="truncate">{property.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
