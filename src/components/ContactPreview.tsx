import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

import Reveal from '@/components/Reveal';

export default function ContactPreview() {
  return (
    <>
      {/* ===== CONTACT PREVIEW ===== */}
      <section className="section-pad bg-cream overflow-hidden">
        <div className="container-luxury">

          {/* =====================================================
        SECTION INTRO
    ===================================================== */}
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
                Get In Touch
              </p>

              <span className="w-8 h-px bg-[#C6A15B]/70" />
            </div>


            <h2
              className="
                font-serif
                text-4xl
                md:text-5xl
                lg:text-[54px]
                text-charcoal
                leading-[1.08]
                tracking-[-0.02em]
                mb-5
              "
            >
              Begin a
              <span className="italic text-[#B38F45]"> Conversation</span>
            </h2>


            <p
              className="
                text-stone-custom
                text-sm
                md:text-base
                max-w-xl
                mx-auto
                font-sans
                font-light
                leading-[1.8]
              "
            >
              Whether you are buying, selling, or simply exploring,
              our advisors are available to offer thoughtful,
              discreet guidance.
            </p>

          </Reveal>


          {/* =====================================================
        CONTACT DETAILS
    ===================================================== */}
          <Reveal
            variant="stagger"
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              max-w-5xl
              mx-auto
              border-t
              border-b
              border-black/[0.08]
            "
          >

            {/* =================================================
          PHONE
      ================================================= */}
            <a
              href="tel:+12125550100"
              className="
                group
                relative
                text-center
                px-8
                py-10
                md:py-12
                border-b
                md:border-b-0
                md:border-r
                border-black/[0.08]
                transition-colors
                duration-500
                hover:bg-white/50
              "
            >

              <div
                className="
                  w-11
                  h-11
                  mx-auto
                  mb-6
                  flex
                  items-center
                  justify-center
                  border
                  border-[#C6A15B]/40
                  transition-all
                  duration-500
                  group-hover:border-[#C6A15B]
                  group-hover:bg-[#C6A15B]/[0.06]
                "
              >
                <Phone
                  size={18}
                  strokeWidth={1.3}
                  className="text-[#B38F45]"
                />
              </div>


              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-stone-custom
                  font-sans
                  mb-3
                "
              >
                Call Us
              </p>


              <p
                className="
                  font-serif
                  text-xl
                  md:text-[22px]
                  text-charcoal
                  mb-2
                "
              >
                +1 (212) 555-0100
              </p>


              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-stone-custom/70
                  font-sans
                "
              >
                Mon – Fri · 9AM – 7PM
              </p>

            </a>


            {/* =================================================
          EMAIL
      ================================================= */}
            <a
              href="mailto:info@meridian.com"
              className="
                group
                relative
                text-center
                px-8
                py-10
                md:py-12
                border-b
                md:border-b-0
                md:border-r
                border-black/[0.08]
                transition-colors
                duration-500
                hover:bg-white/50
              "
            >

              <div
                className="
                  w-11
                  h-11
                  mx-auto
                  mb-6
                  flex
                  items-center
                  justify-center
                  border
                  border-[#C6A15B]/40
                  transition-all
                  duration-500
                  group-hover:border-[#C6A15B]
                  group-hover:bg-[#C6A15B]/[0.06]
                "
              >
                <Mail
                  size={18}
                  strokeWidth={1.3}
                  className="text-[#B38F45]"
                />
              </div>


              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-stone-custom
                  font-sans
                  mb-3
                "
              >
                Email Us
              </p>


              <p
                className="
                  font-serif
                  text-xl
                  md:text-[22px]
                  text-charcoal
                  mb-2
                "
              >
                info@meridian.com
              </p>


              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-stone-custom/70
                  font-sans
                "
              >
                We reply within 24 hours
              </p>

            </a>


            {/* =================================================
          OFFICE
      ================================================= */}
            <a
              href="#"
              className="
                group
                relative
                text-center
                px-8
                py-10
                md:py-12
                transition-colors
                duration-500
                hover:bg-white/50
              "
            >

              <div
                className="
                  w-11
                  h-11
                  mx-auto
                  mb-6
                  flex
                  items-center
                  justify-center
                  border
                  border-[#C6A15B]/40
                  transition-all
                  duration-500
                  group-hover:border-[#C6A15B]
                  group-hover:bg-[#C6A15B]/[0.06]
                "
              >
                <MapPin
                  size={18}
                  strokeWidth={1.3}
                  className="text-[#B38F45]"
                />
              </div>


              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-stone-custom
                  font-sans
                  mb-3
                "
              >
                Visit Us
              </p>


              <p
                className="
                  font-serif
                  text-xl
                  md:text-[22px]
                  text-charcoal
                  mb-2
                "
              >
                150 Madison Avenue
              </p>


              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-stone-custom/70
                  font-sans
                "
              >
                New York · NY 10016
              </p>

            </a>

          </Reveal>


          {/* =====================================================
        CTA
    ===================================================== */}
          <Reveal
            variant="up"
            className="text-center mt-12 md:mt-14"
          >

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                bg-charcoal
                text-white
                px-8
                py-4
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.24em]
                font-medium
                transition-all
                duration-500
                hover:bg-[#B38F45]
              "
            >

              <span>
                Make an Enquiry
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

            <p
              className="
                mt-4
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-stone-custom/60
                font-sans
              "
            >
              Private consultations · By appointment
            </p>
          </Reveal>

        </div>
      </section>
    </>
  );
}