import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Reveal from '@/components/Reveal';

export default function AboutCompany() {
  return (
    <>
      {/* ===== ABOUT COMPANY ===== */}
      <section className="section-pad bg-ivory overflow-hidden">
        <div className="container-luxury">

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-24 items-center">

            {/* =====================================================
          IMAGE — EDITORIAL COMPOSITION
      ===================================================== */}
            <Reveal variant="left" className="relative">

              <div className="relative pr-5 md:pr-10">

                {/* Main Image */}
                <div className="relative overflow-hidden">

                  <img
                    src="https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1000"
                    alt="Luxury interior"
                    className="
                      w-full
                      h-[520px]
                      md:h-[620px]
                      object-cover
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      hover:scale-[1.025]
                    "
                  />

                  {/* Cinematic overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-black/5
                    "
                  />

                </div>


                {/* =================================================
              EXPERIENCE BLOCK
          ================================================= */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    md:right-0
                    translate-y-6
                    bg-charcoal
                    text-white
                    px-7
                    py-7
                    md:px-9
                    md:py-9
                    min-w-[190px]
                    shadow-[0_20px_50px_rgba(0,0,0,0.16)]
                  "
                >

                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-px bg-[#C6A15B]" />

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.28em]
                        text-white/50
                        font-sans
                      "
                    >
                      Established
                    </span>
                  </div>

                  <p
                    className="
                      font-serif
                      text-5xl
                      md:text-6xl
                      leading-none
                      text-[#D4AF37]
                    "
                  >
                    15+
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-white/55
                      font-sans
                    "
                  >
                    Years of Excellence
                  </p>

                </div>

              </div>

            </Reveal>


            {/* =====================================================
          CONTENT
      ===================================================== */}
            <Reveal variant="right">

              <div className="max-w-xl">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6">

                  <span className="w-9 h-px bg-[#C6A15B]" />

                  <p
                    className="
                      text-[#B38F45]
                      text-[11px]
                      uppercase
                      tracking-[0.32em]
                      font-sans
                      font-medium
                    "
                  >
                    About Meridian
                  </p>

                </div>


                {/* Heading */}
                <h2
                  className="
                    font-serif
                    text-4xl
                    md:text-5xl
                    lg:text-[54px]
                    leading-[1.08]
                    tracking-[-0.02em]
                    text-charcoal
                    mb-7
                  "
                >
                  A Legacy of
                  <br />
                  <span className="italic text-[#B38F45]">
                    Discretion
                  </span>{' '}
                  and Distinction
                </h2>


                {/* Intro */}
                <p
                  className="
                    text-charcoal/80
                    text-lg
                    md:text-[19px]
                    font-serif
                    leading-[1.7]
                    mb-6
                  "
                >
                  Meridian was founded on a simple conviction: that the sale or
                  purchase of an extraordinary home deserves a level of
                  representation equal to the property itself.
                </p>


                {/* Supporting text */}
                <p
                  className="
                    text-stone-custom
                    text-sm
                    md:text-[15px]
                    font-sans
                    font-light
                    leading-[1.9]
                    mb-9
                  "
                >
                  We are not a volume business. We are a relationship business.
                  Every client receives the full attention of a dedicated advisor,
                  supported by specialists in marketing, design, and negotiation.
                  The result is a standard of service built around discretion,
                  precision, and enduring trust.
                </p>


                {/* =================================================
              STATS
          ================================================= */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-8
                    md:gap-12
                    pt-7
                    mb-9
                    border-t
                    border-black/[0.08]
                  "
                >

                  <div>
                    <p
                      className="
                        font-serif
                        text-4xl
                        md:text-5xl
                        leading-none
                        text-charcoal
                        mb-2
                      "
                    >
                      250<span className="text-[#B38F45]">+</span>
                    </p>

                    <p
                      className="
                        text-[9px]
                        md:text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-stone-custom
                        font-sans
                      "
                    >
                      Properties Sold
                    </p>
                  </div>


                  <div>
                    <p
                      className="
                        font-serif
                        text-4xl
                        md:text-5xl
                        leading-none
                        text-charcoal
                        mb-2
                      "
                    >
                      20<span className="text-[#B38F45]">+</span>
                    </p>

                    <p
                      className="
                        text-[9px]
                        md:text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-stone-custom
                        font-sans
                      "
                    >
                      Premium Projects
                    </p>
                  </div>

                </div>


                {/* CTA */}
                <Link
                  to="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.24em]
                    font-medium
                    text-charcoal
                  "
                >

                  <span
                    className="
                      relative
                      pb-1.5
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:w-full
                      after:h-px
                      after:bg-[#C6A15B]
                      after:origin-left
                      after:scale-x-100
                      group-hover:after:scale-x-0
                      after:transition-transform
                      after:duration-500
                    "
                  >
                    Our Story
                  </span>

                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>

            </Reveal>

          </div>

        </div>
      </section>
    </>
  );
}