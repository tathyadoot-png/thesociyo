"use client";
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import {
  testimonialsData,testimonialsHeading
} from "@/app/data/home/testimonials";

export default function TestimonialSlickCarousel() {

  return (
        <section

  className="relative overflow-hidden border-t border-[var(--border)] bg-transparent py-24 md:py-32"
>

 <div className="mt-16 testimonial-slider mx-5 md:mx-16">
  <CinematicSectionHeading
    sectionLabel={testimonialsHeading.badge}
    heading={{
      first: testimonialsHeading.title,
      highlight: testimonialsHeading.highlight,
    }}
    shortText={testimonialsHeading.subtitle}
    className="relative z-20"
  />

  <Swiper
    modules={[Autoplay]}
    loop={true}
    centeredSlides={true}
    speed={900}
    spaceBetween={24}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    breakpoints={{
      0: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="!overflow-visible py-10"
  >
    {testimonialsData.map((item) => (
      <SwiperSlide key={item.id}>
        <div
          className="
            testimonial-card

            relative

            min-h-[420px]

            overflow-hidden

            rounded-[28px]

            border
            border-white/10

            bg-[var(--glass)]

            backdrop-blur-xl

            p-8

            transition-all
            duration-500
          "
        >
          {/* Accent line */}
          <div
            className="
              absolute
              left-0
              top-0

              h-1
              w-full

              bg-gradient-to-r
              from-[var(--accent)]
              via-[var(--accent)]
              to-transparent
              opacity-70
            "
          />

          {/* Big quote */}
          <div
            className="
              absolute
              right-6
              top-2

              text-[120px]

              leading-none

              text-white/[0.04]

              font-serif
            "
          >
            "
          </div>

          {/* Company */}
          <div
            className="
              inline-flex

              rounded-full

              border
              border-[var(--accent)]/20

              bg-[var(--accent)]/10

              px-3
              py-1

              text-[11px]

              uppercase
              tracking-[0.25em]

              text-[var(--accent)]
            "
          >
            {item.company}
          </div>

          {/* Quote */}
        <p
  className="
    relative
    z-10
    mt-6

    text-[15px]
    lg:text-[16px]

    leading-[1.9]

    text-[var(--text)]

   line-clamp-8
  "
>
  {item.quote}
</p>

          {/* Footer */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0

              flex
              items-center
              justify-between

              border-t
              border-white/10

              px-8
              py-5
            "
          >
            <div>
              <h3
                className="
                  text-xl
                  font-black

                  tracking-tight

                  text-[var(--text)]
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-1

                  text-sm

                  text-[var(--muted)]
                "
              >
                {item.role}
              </p>
            </div>

            <div
              className="
                h-12
                w-12

                rounded-full

                border
                border-[var(--accent)]/20

                bg-[var(--accent)]/10

                flex
                items-center
                justify-center

                text-[var(--accent)]
                font-bold
              "
            >
              ★
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </section> 
  );
}