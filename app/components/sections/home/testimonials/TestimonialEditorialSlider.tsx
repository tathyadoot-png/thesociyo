"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
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
  modules={[EffectCoverflow, Autoplay]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  speed={800}
  autoplay={{
    delay: 4500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 20,
    stretch: 0,
    depth: 180,
    modifier: 1,
    scale: 0.92,
    slideShadows: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
  className="testimonial-coverflow mt-12"
>
  {testimonialsData.map((item) => (
    <SwiperSlide key={item.id}>
      <div
        className="
          testimonial-card
          relative
          min-h-[420px]
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[var(--glass)]
          backdrop-blur-xl
          p-8
          transition-all
          duration-500
        "
      >
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top, rgba(254,0,0,.08), transparent 60%)",
          }}
        />

        {/* Accent Line */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-[var(--accent)]
            via-[var(--accent)]
            to-transparent
            opacity-70
          "
        />

        {/* Quote */}
        <div
          className="
            absolute
            right-4
            top-0
            font-display
            text-[8rem]
            md:text-[10rem]
            leading-none
            text-[var(--accent)]/[0.04]
            pointer-events-none
          "
        >
          "
        </div>

        {/* Company */}
        <div
          className="
            relative z-10
            inline-flex
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[var(--accent)]
          "
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          {item.company}
        </div>

        <div
          className="
            mt-5
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[var(--muted)]
          "
        >
          Client Testimonial
        </div>

        <p
          className="
            relative z-10
            mt-6
            text-[15px]
            lg:text-[16px]
            leading-[2]
            text-[var(--text)]
            line-clamp-6
          "
        >
          {item.quote}
        </p>

        <div
          className="
            absolute
            left-8
            right-8
            bottom-24
            h-px
            bg-gradient-to-r
            from-transparent
            via-[var(--accent)]/30
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            flex
            items-center
            justify-between
            px-8
            py-5
          "
        >
          <div>
            <h3
              className="
                font-display
                text-2xl
                leading-none
                tracking-tight
                text-[var(--text)]
              "
            >
              {item.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              {item.role}
            </p>
          </div>

          <div
            className="
              h-14
              w-14
              rounded-full
              border
              border-[var(--accent)]/20
              bg-[var(--accent)]/10
              flex
              items-center
              justify-center
              font-display
              text-xl
              text-[var(--accent)]
            "
          >
            {item.name.charAt(0)}
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