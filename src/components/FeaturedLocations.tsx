import { Link } from 'react-router-dom';

import Reveal from '@/components/Reveal';
import { locations } from '@/data/locations';

export default function FeaturedLocations() {
  return (
    <>
      {/* ===== LOCATIONS ===== */}
      <section className="section-pad bg-cream overflow-hidden">
        <div className="container-luxury">

          {/* ===== SECTION INTRO ===== */}
          <Reveal
            variant="up"
            className="text-center mb-14 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#C6A15B]/70" />

              <p
                className="
                  text-[#C6A15B]
                  text-[10px]
                  sm:text-xs
                  font-sans
                  uppercase
                  tracking-[0.32em]
                  font-medium
                "
              >
                Where We Work
              </p>

              <span className="w-8 h-px bg-[#C6A15B]/70" />
            </div>

            <h2
              className="
                font-serif
                text-4xl
                md:text-5xl
                lg:text-[52px]
                text-charcoal
                leading-[1.1]
                tracking-[-0.015em]
                mb-5
              "
            >
              Featured Locations
            </h2>

            <p
              className="
                text-stone-custom
                text-sm
                md:text-base
                max-w-2xl
                mx-auto
                font-sans
                font-light
                leading-[1.8]
              "
            >
              From established neighborhoods to emerging destinations, Meridian
              represents exceptional properties in markets defined by character,
              opportunity, and enduring appeal.
            </p>
          </Reveal>


          {/* ===== LOCATION GRID ===== */}
          <Reveal
            variant="stagger"
            className="
              grid
              grid-cols-2
              lg:grid-cols-3
              gap-4
              md:gap-6
            "
          >
            {locations.slice(0, 6).map((loc) => (
              <Link
                key={loc.id}
                to="/locations"
                className="
                  group
                  relative
                  overflow-hidden
                  aspect-[4/5]
                  bg-charcoal
                "
              >

                {/* IMAGE */}
                <img
                  src={loc.image}
                  alt={loc.name}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.045]
                  "
                />


                {/* CINEMATIC OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/20
                    to-black/5
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-700
                    group-hover:bg-black/[0.10]
                  "
                />


                {/* TOP INDEX */}
                <div
                  className="
                    absolute
                    top-5
                    left-5
                    right-5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-white/45
                      text-[9px]
                      font-sans
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    Meridian
                  </span>

                  <span
                    className="
                      w-7
                      h-7
                      flex
                      items-center
                      justify-center
                      border
                      border-white/25
                      text-white/70
                      text-[9px]
                      font-sans
                      transition-all
                      duration-500
                      group-hover:border-[#D4AF37]
                      group-hover:text-[#D4AF37]
                    "
                  >
                    ↗
                  </span>
                </div>


                {/* LOCATION CONTENT */}
                <div
                  className="
                    absolute
                    left-5
                    right-5
                    bottom-5
                    md:left-7
                    md:right-7
                    md:bottom-7
                  "
                >

                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-px bg-[#D4AF37]" />

                    <p
                      className="
                        text-[#D4AF37]
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        font-sans
                      "
                    >
                      {loc.region}
                    </p>
                  </div>

                  <h3
                    className="
                      font-serif
                      text-2xl
                      md:text-3xl
                      lg:text-[34px]
                      text-white
                      leading-none
                      mb-2
                      transition-colors
                      duration-500
                      group-hover:text-[#D4AF37]
                    "
                  >
                    {loc.name}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      pt-3
                      border-t
                      border-white/20
                    "
                  >
                    <p
                      className="
                        text-white/55
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        font-sans
                      "
                    >
                      {loc.properties} Properties
                    </p>

                    <span
                      className="
                        text-white/50
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        font-sans
                        opacity-0
                        translate-y-1
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        group-hover:translate-y-0
                      "
                    >
                      Explore
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </Reveal>

        </div>
      </section>
    </>
  );
}