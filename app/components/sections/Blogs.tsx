"use client";

import Link from "next/link";
import Image from "next/image";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import { blogs } from "@/app/data/blogs/blogs";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "../ui/CinematicSectionHeading";

export default function BlogsPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const glowY = useTransform(
    smooth,
    [0, 1],
    [0, -120]
  );

  return (
    <main
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        px-0
        md:px-40

        bg-[#18090B]
        text-white
      "
    >
      {/* CINEMATIC BG */}
      <CinematicBackground />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[#18090B]/50
        "
      />

      {/* RED GLOW */}
      <motion.div
        style={{
          y: glowY,
        }}
        className="
          absolute
          left-1/2
          top-0

          h-[40rem]
          w-[40rem]

          -translate-x-1/2

          rounded-full

          bg-[#fe0000]/8

          blur-[160px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]

          bg-[size:90px_90px]
        "
      />

      {/* BG WORD */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[8%]

          -translate-x-1/2

          whitespace-nowrap

          font-display
          uppercase

          text-[28vw]

          leading-none
          tracking-[-0.15em]

          text-white/[0.02]
        "
      >
        NOTES
      </div>

      <section
        className="
          relative
          z-10

          px-6
          pt-28
          pb-24

          md:px-10
          xl:px-16
        "
      >
   
      {/* TOP */}
<div
  className="
    mb-20

    border-b
    border-white/10

    pb-14
  "
>
  <CinematicSectionHeading
    sectionLabel="Thoughts & Perspectives"
    heading={{
      first: "Ideas",
      highlight: "Become",
      last: "Influence",
    }}
    shortText="
      Thoughts around communication, systems,
      digital behavior, public perception and
      cinematic storytelling.
    "
    className="
      !mb-0
      !pb-0
    "
  />
</div>

        {/* BLOG FLOW */}
        <div className="space-y-8
    md:space-y-10
    xl:space-y-14">
          {blogs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
              }}
            >
              <Link
                href={item.link}
                target="_blank"
                className="
                  group
                  relative

                  block

                  overflow-hidden

                  rounded-[2rem]

                  border
                  border-white/10

                  bg-[#07111F]/60

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:border-[#fe0000]/30
                "
              >
                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    transition-opacity
                    duration-700

                    group-hover:opacity-100

                    bg-[radial-gradient(circle_at_right,rgba(0,140,255,0.10),transparent_45%)]
                  "
                />

                <div
                  className="
                    relative
                    z-10

                    grid
                    gap-0

                    md:grid-cols-[260px_1fr]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative

                      h-[240px]
                      md:h-full

                      overflow-hidden
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-r
                        from-[#18090B]
                        via-[#07111F]/70
                        to-transparent
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-col
                      justify-between

                      p-6
                      md:p-8
                    "
                  >
                    {/* TOP */}
                    <div
                      className="
                        mb-10

                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-4
                          
                        "
                      >
                        <span
                          className="
                            text-[10px]
                            uppercase

                            tracking-[0.45em]

                            text-[#fe0000]
                          "
                        >
                          {item.date}
                        </span>

                        <div
                          className="
                            h-px
                            w-8

                            bg-white/20
                          "
                        />
                      </div>

                      <span
                        className="
                          font-display

                          text-[1.2rem]

                          tracking-[-0.08em]

                          text-white/15
                        "
                      >
                        {item.id}
                      </span>
                    </div>

                    {/* MAIN */}
                    <div>
                      <h2
                        className="
                          max-w-4xl

                          font-display
                          uppercase

                          text-[1.8rem]
                          sm:text-[2.2rem]
                          md:text-[2.7rem]

                          leading-[0.9]
                          tracking-[-0.08em]

                          text-white

                          transition-all
                          duration-500

                          group-hover:translate-x-2
                        "
                      >
                        {item.title}
                      </h2>

                      <p
                        className="
                          mt-5

                          max-w-3xl

                          text-sm
                          md:text-[15px]

                          leading-[1.9]

                          text-white/50
                        "
                      >
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                        mt-10

                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          h-px
                          w-10

                          bg-[#fe0000]

                          transition-all
                          duration-500

                          group-hover:w-20
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          uppercase

                          tracking-[0.45em]

                          text-white/35
                        "
                      >
                        Open Article
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}