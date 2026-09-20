import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import Reveal from '@/components/Reveal';
import PropertyCard from '@/components/PropertyCard';
import { featuredProperties } from '@/data/properties';

export default function FeaturedProperties() {
  return (
    <>
      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="section-pad bg-cream">
        <div className="container-luxury">

          {/* ===== SECTION INTRO ===== */}
          <Reveal
            variant="up"
            className="text-center mb-14 md:mb-16"
          >
            {/* Editorial Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C6A15B]/70" />

              <p className="
                text-[#C6A15B]
                text-[10px]
                sm:text-xs
                font-sans
                uppercase
                tracking-[0.32em]
                font-medium
              ">
                Featured Listings
              </p>

              <span className="w-8 h-px bg-[#C6A15B]/70" />
            </div>

            {/* Main Heading */}
            <h2 className="
              font-serif
              text-4xl
              md:text-5xl
              lg:text-[52px]
              text-charcoal
              leading-[1.1]
              tracking-[-0.015em]
              mb-5
            ">
              Exceptional Properties
            </h2>

            {/* Description */}
            <p className="
              text-stone-custom
              text-sm
              md:text-base
              max-w-2xl
              mx-auto
              font-sans
              font-light
              leading-[1.8]
            ">
              A curated collection of distinctive residences, selected for
              their architecture, location, and enduring character.
            </p>
          </Reveal>


          {/* ===== PROPERTY GRID ===== */}
          <motion.div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-7
              lg:gap-8
            "
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.18,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.08,
                },
              },
            }}
          >
            {featuredProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    scale: 0.975,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 1.15,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>


          {/* ===== VIEW ALL CTA ===== */}
          <div className="text-center mt-12 md:mt-14">
            <Link
              to="/properties"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                border
                border-charcoal/30
                px-7
                py-3.5
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.24em]
                font-medium
                text-charcoal
                hover:border-[#C6A15B]
                hover:text-[#A88442]
                transition-all
                duration-400
              "
            >
              <span>View All Properties</span>

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-400
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}