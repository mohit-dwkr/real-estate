import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, ArrowRight } from 'lucide-react';
import type { Property } from '@/data/properties';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="
        group
        block
        bg-white
        overflow-hidden
        border
        border-black/[0.06]
        transition-all
        duration-700
        ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]
      "
    >

      {/* =====================================================
          PROPERTY IMAGE
      ===================================================== */}
      <div
        className="
          property-card-image
          relative
          aspect-[4/3]
          overflow-hidden
          bg-[#e9e6df]
        "
      >

        {/* Property Image */}
        <motion.img
          src={property.image}
          alt={property.title}
          loading="lazy"
          initial={{
            scale: 1.07,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-[1200ms]
    ease-out
    group-hover:scale-[1.045]
  "
        />

        {/* Subtle cinematic overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/65
            via-black/5
            to-transparent
            opacity-60
            transition-opacity
            duration-700
            group-hover:opacity-80
          "
        />

        {/* Very subtle hover darkening */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-700
            group-hover:bg-black/[0.08]
          "
        />


        {/* =================================================
            STATUS
        ================================================= */}
        <div
          className="
            absolute
            top-4
            left-4
            px-3
            py-1.5
            bg-[#111]/75
            backdrop-blur-sm
            border
            border-white/20
            text-white
            text-[9px]
            font-sans
            uppercase
            tracking-[0.22em]
            font-medium
          "
        >
          {property.status}
        </div>


        {/* =================================================
            HOVER DETAILS
        ================================================= */}
        <div
          className="
            absolute
            left-5
            right-5
            bottom-5
            flex
            items-end
            justify-between
            translate-y-3
            opacity-0
            transition-all
            duration-700
            ease-out
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >

          <div>
            <span
              className="
                block
                text-white
                text-[9px]
                uppercase
                tracking-[0.28em]
                font-sans
                mb-1
              "
            >
              Discover
            </span>

            <span
              className="
                text-white
                font-serif
                text-xl
                leading-none
              "
            >
              View Residence
            </span>
          </div>


          {/* Elegant arrow */}
          <span
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-white/60
              bg-black/20
              backdrop-blur-sm
              transition-all
              duration-500
              group-hover:bg-[#C6A15B]
              group-hover:border-[#C6A15B]
            "
          >
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="
                text-white
                transition-transform
                duration-500
                group-hover:translate-x-0.5
              "
            />
          </span>

        </div>

      </div>


      {/* =====================================================
    PROPERTY INFORMATION
===================================================== */}
      <motion.div
        className="p-6 md:p-7"
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        {/* Type + Price */}
        <div
          className="
      flex
      items-center
      justify-between
      gap-4
      mb-3
    "
        >

          <span
            className="
        text-[9px]
        font-sans
        uppercase
        tracking-[0.25em]
        text-stone-custom
        font-medium
      "
          >
            {property.type}
          </span>

          <span
            className="
        font-serif
        text-xl
        text-[#B38F45]
        whitespace-nowrap
      "
          >
            {property.price}
          </span>

        </div>


        {/* Property Title */}
        <h3
          className="
      font-serif
      text-[25px]
      leading-[1.15]
      text-charcoal
      mb-1.5
      transition-colors
      duration-500
      group-hover:text-[#B38F45]
    "
        >
          {property.title}
        </h3>


        {/* Location */}
        <p
          className="
      text-sm
      text-stone-custom
      font-sans
      font-light
      mb-6
    "
        >
          {property.location}
        </p>


        {/* =================================================
      PROPERTY SPECS
  ================================================= */}
        <div
          className="
      flex
      items-center
      gap-4
      pt-4
      border-t
      border-black/[0.08]
      text-[11px]
      text-charcoal/65
      font-sans
    "
        >

          {/* Bedrooms */}
          <div className="flex items-center gap-1.5">
            <Bed
              size={15}
              strokeWidth={1.3}
              className="text-[#B38F45]"
            />
            <span>
              {property.bedrooms}
            </span>
            <span className="hidden sm:inline">
              Beds
            </span>
          </div>


          {/* Bathrooms */}
          <div className="flex items-center gap-1.5">
            <Bath
              size={15}
              strokeWidth={1.3}
              className="text-[#B38F45]"
            />
            <span>
              {property.bathrooms}
            </span>
            <span className="hidden sm:inline">
              Baths
            </span>
          </div>


          {/* Area */}
          <div className="flex items-center gap-1.5 min-w-0">
            <Maximize
              size={15}
              strokeWidth={1.3}
              className="text-[#B38F45] shrink-0"
            />

            <span className="truncate">
              {property.area}
            </span>
          </div>

        </div>

      </motion.div>

    </Link>
  );
}