"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { blogs,films  } from "@/app/data/blogs/blogs";

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

  const glowY = useTransform(smooth, [0, 1], [0, -120]);

  return (
    <main
      ref={sectionRef}
      className="
        relative
        overflow-hidden
px-5
        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      {/* BG */}
      <CinematicBackground />

      {/* SOFT OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_bottom,rgba(246,241,238,0.72),rgba(246,241,238,0.96))]
        "
      />

  {/* SOFT AMBIENT */}
<div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_top,transparent_0%,var(--ambient-1)_35%,transparent_70%)]

    opacity-40
  "
/>

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.025]

          bg-[linear-gradient(rgba(17,17,19,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,19,0.04)_1px,transparent_1px)]

          bg-[size:90px_90px]
        "
      />

      {/* BG WORD */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[6%]

          -translate-x-1/2

          whitespace-nowrap

          font-display
          uppercase

          text-[26vw]

          leading-none
          tracking-[-0.14em]

          text-[var(--text)]/[0.018]
        "
      >
        NOTES
      </div>

      {/* CONTENT */}
      <section
        className="
          relative
          z-10

          mx-auto
          w-[94%]
          max-w-[1600px]
pt-24
          md:pt-40
          pb-24
        "
      >
        {/* TOP */}
        <div
          className="
            mb-24

            border-b
            border-[var(--border)]

            pb-16
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
        <div className="space-y-10 xl:space-y-14">
          {blogs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.9,
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

                  rounded-[2.5rem]

                  border
                  border-[var(--border)]

                  bg-[var(--glass)]

                  backdrop-blur-2xl

                  transition-all
                  duration-700

                  hover:-translate-y-1
                  hover:border-[var(--accent)]/20

                  shadow-[0_10px_40px_rgba(0,0,0,0.03)]
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

                    bg-[radial-gradient(circle_at_right,var(--ambient-1),transparent_55%)]
                  "
                />

                <div
                  className="
                    relative
                    z-10

                    grid

                    lg:grid-cols-[340px_1fr]
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative

                      h-[260px]
                      lg:h-full

                      overflow-hidden
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        brightness-[1]
                        contrast-[1.02]

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    {/* IMAGE OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
 bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.03)_40%,transparent_75%)]
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-col
                      justify-between

                      p-7
                      md:p-10
                    "
                  >
                    {/* TOP */}
                    <div
                      className="
                        mb-12

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

                            text-[var(--accent)]
                          "
                        >
                          {item.date}
                        </span>

                        <div
                          className="
                            h-px
                            w-8

                            bg-[var(--border)]
                          "
                        />
                      </div>

                      <span
                        className="
                          font-display

                          text-[1.3rem]

                          tracking-[-0.08em]

                          text-[var(--text)]/12
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

                          text-[2rem]
                          sm:text-[2.6rem]
                          md:text-[3.1rem]

                          leading-[0.94]
                          tracking-[-0.06em]

                          text-[var(--text)]

                          transition-all
                          duration-500

                          group-hover:translate-x-2
                        "
                      >
                        {item.title}
                      </h2>

                      <p
                        className="
                          mt-6

                          max-w-3xl

                          text-[15px]
                          md:text-[16px]

                          leading-[2]

                          text-[var(--muted)]
                        "
                      >
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                        mt-12

                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          h-px
                          w-10

                          bg-[linear-gradient(to_right,var(--accent),transparent)]

                          transition-all
                          duration-500

                          group-hover:w-24
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          uppercase

                          tracking-[0.45em]

                          text-[var(--muted)]

                          transition-colors
                          duration-500

                          group-hover:text-[var(--accent)]
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


        {/* FILMS */}
<div className="mb-24">
  {/* TOP */}
  <div
    className="
      mb-10

      flex
      items-center
      justify-between
    "
  >
   


  </div>


{/* FILMS SECTION */}
<div
  className="
    mb-24
py-10
md:py-20
    border-b
    border-[var(--border)]


  "
>
  {/* HEADING */}
  <div
    className="
      mb-14

      grid
      gap-8

      lg:grid-cols-[1fr_420px]
      lg:items-end
    "
  >
    {/* LEFT */}
    <div>
      <div
        className="
          mb-6

          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            h-px
            w-12

            bg-[var(--accent)]
          "
        />

        <span
          className="
            text-[10px]
            uppercase

            tracking-[0.45em]

            text-[var(--accent)]
          "
        >
          Visual Narratives
        </span>
      </div>

      <h2
        className="
          max-w-5xl

          font-display
          uppercase

          text-[3rem]
          sm:text-[4rem]
          lg:text-[5.5rem]

          leading-[0.88]
          tracking-[-0.08em]

          text-[var(--text)]
        "
      >
        Stories
        <br />

        <span
          className="
            text-transparent

            bg-gradient-to-b
            from-[var(--accent-light)]
            to-[var(--accent)]

            bg-clip-text
          "
        >
          In Motion
        </span>
      </h2>
    </div>

    {/* RIGHT */}
    <p
      className="
        max-w-md

        text-sm
        md:text-base

        leading-[2]

        text-[var(--muted)]
      "
    >
      Narrative-driven visual storytelling exploring
      communication, perception, culture and audience
      emotion through cinematic execution.
    </p>
  </div>

  {/* FILM GRID */}
  <div
    className="
      grid
      gap-8

      lg:grid-cols-3
    "
  >
    {films.map((film) => {
      const videoId =
        film.video.split("youtu.be/")[1];

      const thumbnail =
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      return (
        <motion.a
          key={film.id}
          href={film.video}
          target="_blank"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            group
            relative
            block

            overflow-hidden

            rounded-[2rem]

            border
            border-[var(--border)]

            bg-[var(--glass)]

            backdrop-blur-2xl

            transition-all
            duration-700

            hover:-translate-y-2
            hover:border-[var(--accent)]/20

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          {/* IMAGE */}
          <div
            className="
              relative

              aspect-[16/10]

              overflow-hidden
            "
          >
            <Image
              src={thumbnail}
              alt="Sociyo Film"
              fill
              unoptimized
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

                bg-[linear-gradient(to_top,rgba(0,0,0,0.58),transparent)]
              "
            />

            {/* PLAY */}
            <div
              className="
                absolute
                left-1/2
                top-1/2

                flex
                h-16
                w-16

                -translate-x-1/2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-white/10

                text-white

                backdrop-blur-xl

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:bg-[var(--accent)]
              "
            >
              ▶
            </div>

            {/* BOTTOM */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0

                flex
                items-center
                justify-between

                p-5
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.35em]

                  text-white/70
                "
              >
                Film {film.id}
              </span>

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.35em]

                  text-white
                "
              >
                Watch Film
              </span>
            </div>
          </div>
        </motion.a>
      );
    })}
  </div>
</div>
</div>
      </section>
    </main>
  );
}