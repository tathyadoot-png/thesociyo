// app/components/home/TestimonialEditorialSlider.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

import {
  testimonialsData,
  testimonialsHeading,
} from "@/app/data/home/testimonials";

export default function TestimonialEditorialSlider() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) =>
      prev === testimonialsData.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0
        ? testimonialsData.length - 1
        : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const item = testimonialsData[active];

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-32 md:py-44 text-[var(--text)]">
      <CinematicBackground />

      {/* ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-[var(--accent)]/10 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[var(--accent-light)]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-[96%] lg:w-[88%]">
        {/* heading */}
        <CinematicSectionHeading
          sectionLabel={testimonialsHeading.badge}
          heading={{
            first: testimonialsHeading.title,
            highlight:
              testimonialsHeading.highlight,
          }}
          shortText={testimonialsHeading.subtitle}
        />



<div className="relative mt-20">
  {/* top bar */}
  <div
    className="
      mb-8

      flex
      items-center
      justify-between
    "
  >
    <div className="flex items-center gap-4">
      <div
        className="
          h-px
          w-12

          bg-white/10
        "
      />

      <p
        className="
          text-[10px]

          uppercase
          tracking-[0.45em]

          text-[var(--muted)]
        "
      >
        Testimonials
      </p>
    </div>

    {/* arrows */}
    <div className="flex items-center gap-2">
      <button
        onClick={prevSlide}
        className="
          flex
          h-10
          w-10

          items-center
          justify-center

          border
          border-white/10

          bg-white/[0.02]

          transition-all
          duration-300

          hover:border-white/20
        "
      >
        <ArrowLeft size={16} />
      </button>

      <button
        onClick={nextSlide}
        className="
          flex
          h-10
          w-10

          items-center
          justify-center

          border
          border-white/10

          bg-white/[0.02]

          transition-all
          duration-300

          hover:border-white/20
        "
      >
        <ArrowRight size={16} />
      </button>
    </div>
  </div>

  {/* slider */}
  <div className="overflow-hidden">
    <motion.div
      animate={{
        x:
          typeof window !== "undefined" &&
          window.innerWidth >= 1024
            ? `calc(-${active} * (54% + 24px))`
            : `-${active * 100}%`,
      }}
      transition={{
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        flex
        gap-6
      "
    >
      {testimonialsData.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -5,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            group
            relative

            min-w-full
            lg:min-w-[54%]

            overflow-hidden

            border
            border-white/10

            bg-[var(--bg)]
          "
        >
          {/* cinematic line */}
          <div
            className="
              absolute
              left-0
              top-0

              h-px
              w-full

              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
            "
          />

          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-[260px_1fr]
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative

                h-[280px]

                overflow-hidden

                md:h-full
              "
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.04]
                "
              />

              {/* overlay */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              />

              {/* index */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5

                  text-[11px]

                  uppercase
                  tracking-[0.35em]

                  text-white/50
                "
              >
                0{index + 1}
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
                relative

                flex
                flex-col
                justify-between

                p-7
                md:p-9
              "
            >
              {/* giant quote */}
              <div
                className="
                  pointer-events-none

                  absolute
                  right-5
                  top-[-20px]

                  font-serif

                  text-[120px]

                  leading-none

                  text-white/[0.03]
                "
              >
                “
              </div>

              {/* quote */}
              <div className="relative z-10">
                {/* top mini */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      h-px
                      w-8

                      bg-white/15
                    "
                  />

                  <span
                    className="
                      text-[10px]

                      uppercase
                      tracking-[0.35em]

                      text-[var(--muted)]
                    "
                  >
                    Client Experience
                  </span>
                </div>

                {/* text */}
                <p
                  className="
                    mt-8

                    max-w-[620px]

                    font-light

                    text-[1.4rem]
                    md:text-[1.75rem]
                    lg:text-[2.15rem]

                    leading-[1.5]

                    tracking-[-0.04em]

                    text-[var(--text)]
                  "
                >
                  {item.quote}
                </p>
              </div>

              {/* footer */}
              <div
                className="
                  relative
                  z-10

                  mt-10

                  flex
                  items-end
                  justify-between

                  border-t
                  border-white/10

                  pt-5
                "
              >
                {/* left */}
                <div>
                  <h3
                    className="
                      font-black

                      text-[1.35rem]

                      leading-none
                      tracking-[-0.04em]
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

                {/* right */}
                <div className="text-right">
                  <p
                    className="
                      text-[10px]

                      uppercase
                      tracking-[0.35em]

                      text-white/35
                    "
                  >
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* progress */}
  <div
    className="
      mt-8

      flex
      items-center
      justify-center
      gap-2
    "
  >
    {testimonialsData.map((_, i) => (
      <button
        key={i}
        onClick={() => setActive(i)}
        className={`
          transition-all
          duration-500

          ${
            active === i
              ? "h-[2px] w-16 bg-white"
              : "h-[2px] w-6 bg-white/10"
          }
        `}
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
}