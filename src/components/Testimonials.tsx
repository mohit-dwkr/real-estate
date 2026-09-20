import Reveal from '@/components/Reveal';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <>
      {/* ===== TESTIMONIALS ===== */}
      <section className="section-pad bg-ivory overflow-hidden">
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
                Client Voices
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
              A Remarkable Experience
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
              The relationships we build are as enduring as the homes we represent.
            </p>

          </Reveal>


          {/* =====================================================
        TESTIMONIAL GRID
    ===================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {testimonials.map((t, i) => (

              <Reveal
                key={t.id}
                variant={i % 2 === 0 ? 'left' : 'right'}
              >

                <article
                  className="
                    group
                    relative
                    bg-white
                    border
                    border-black/[0.06]
                    p-8
                    md:p-10
                    lg:p-12
                    min-h-[360px]
                    flex
                    flex-col
                    justify-between
                    transition-all
                    duration-700
                    hover:-translate-y-1
                    hover:shadow-[0_22px_55px_rgba(0,0,0,0.08)]
                  "
                >

                  {/* =================================================
                QUOTE MARK
            ================================================= */}
                  <div className="relative">

                    <span
                      className="
                        absolute
                        -top-5
                        -left-2
                        font-serif
                        text-[100px]
                        leading-none
                        text-[#C6A15B]/[0.12]
                        pointer-events-none
                      "
                    >
                      “
                    </span>


                    {/* Small Editorial Label */}
                    <div className="flex items-center gap-3 mb-8">

                      <span className="w-8 h-px bg-[#C6A15B]" />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-stone-custom
                          font-sans
                        "
                      >
                        Client Perspective
                      </span>

                    </div>


                    {/* Quote */}
                    <p
                      className="
                        relative
                        z-10
                        font-serif
                        italic
                        text-[21px]
                        md:text-[23px]
                        lg:text-[25px]
                        leading-[1.55]
                        text-charcoal
                        max-w-2xl
                      "
                    >
                      {t.quote}
                    </p>

                  </div>


                  {/* =================================================
                CLIENT INFORMATION
            ================================================= */}
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      pt-7
                      mt-10
                      border-t
                      border-black/[0.08]
                    "
                  >

                    {/* Avatar */}
                    <div
                      className="
                        w-12
                        h-12
                        overflow-hidden
                        rounded-full
                        ring-1
                        ring-black/10
                        shrink-0
                      "
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    </div>


                    {/* Name / Role */}
                    <div>

                      <p
                        className="
                          font-serif
                          text-lg
                          text-charcoal
                          leading-none
                          mb-1.5
                        "
                      >
                        {t.name}
                      </p>

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-stone-custom
                          font-sans
                        "
                      >
                        {t.role}
                      </p>

                    </div>


                    {/* Gold Accent */}
                    <div
                      className="
                        ml-auto
                        w-8
                        h-px
                        bg-[#C6A15B]/60
                        transition-all
                        duration-500
                        group-hover:w-12
                      "
                    />

                  </div>

                </article>

              </Reveal>

            ))}
          </div>

        </div>
      </section>
    </>
  );
}