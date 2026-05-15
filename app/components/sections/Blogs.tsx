"use client";

import Link from "next/link";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const blogs = [
  {
    id: "01",
    category: "Strategy",
    title: "Attention Is No Longer Communication.",
    description:
      "Visibility without emotional connection disappears instantly. Modern communication requires memory, clarity and narrative consistency.",
    href: "/blogs/attention-is-no-longer-communication",
  },

  {
    id: "02",
    category: "Narrative",
    title: "Influence Begins Before Campaigns Start.",
    description:
      "Public perception is shaped long before advertising begins. Systems, behavior and storytelling create credibility first.",
    href: "/blogs/influence-begins-before-campaigns-start",
  },

  {
    id: "03",
    category: "Digital",
    title: "Brands Are Becoming Living Ecosystems.",
    description:
      "Web, media, identity, motion and interaction now function together as one continuous communication layer.",
    href: "/blogs/brands-are-becoming-living-ecosystems",
  },

  {
    id: "04",
    category: "Philosophy",
    title: "People Remember Emotional Precision.",
    description:
      "The strongest communication is not louder. It is sharper, emotionally aligned and strategically intentional.",
    href: "/blogs/people-remember-emotional-precision",
  },
];

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

        bg-black
        text-white
      "
    >
      {/* ATMOSPHERE */}
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

          bg-[#ff2d2d]/10

          blur-[160px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]

          bg-[size:90px_90px]
        "
      />

      {/* BG WORD */}
      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[10%]

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
          {/* LABEL */}
          <div
            className="
              mb-8

              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-px
                w-14

                bg-[#ff2d2d]
              "
            />

            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.6em]

                text-white/40
              "
            >
              Thoughts & Perspectives
            </span>
          </div>

          {/* HERO */}
          <div
            className="
              grid
              gap-10

              xl:grid-cols-[1fr_380px]
              xl:items-end
            "
          >
            <div>
              <h1
                className="
                  max-w-6xl

                  font-display
                  uppercase

                  text-[4rem]
                  sm:text-[6rem]
                  md:text-[8rem]
                  xl:text-[10rem]

                  leading-[0.8]
                  tracking-[-0.13em]

                  text-white
                "
              >
                Ideas
                <br />

                Become
                <br />

                <span
                  className="
                    text-transparent

                    bg-gradient-to-b
                    from-[#ff2d2d]
                    via-[#ff8a8a]
                    to-white

                    bg-clip-text
                  "
                >
                  Influence
                </span>
              </h1>
            </div>

            <p
              className="
                max-w-md

                text-base
                md:text-lg

                leading-[1.9]

                text-white/55
              "
            >
              Thoughts around communication, systems,
              digital behavior, public perception and
              cinematic storytelling.
            </p>
          </div>
        </div>

        {/* BLOG FLOW */}
        <div className="space-y-6">
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
                duration: 1,
                delay: index * 0.08,
              }}
            >
              <Link
                href={item.href}
                className="
                  group
                  relative

                  block

                  overflow-hidden

                  border
                  border-white/10

                  bg-white/[0.02]

                  p-6
                  md:p-10
                "
              >
                {/* HOVER LIGHT */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    transition-opacity
                    duration-700

                    group-hover:opacity-100

                    bg-[radial-gradient(circle_at_top_right,rgba(255,45,45,0.14),transparent_45%)]
                  "
                />

                {/* TOP */}
                <div
                  className="
                    relative
                    z-10

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

                        text-white/30
                      "
                    >
                      {item.category}
                    </span>

                    <div
                      className="
                        h-px
                        w-10

                        bg-[#ff2d2d]
                      "
                    />
                  </div>

                  <div
                    className="
                      font-display

                      text-[1.6rem]

                      leading-none
                      tracking-[-0.08em]

                      text-white/15
                    "
                  >
                    {item.id}
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    grid
                    gap-10

                    xl:grid-cols-[1fr_320px]
                    xl:items-end
                  "
                >
                  <h2
                    className="
                      max-w-5xl

                      font-display
                      uppercase

                      text-[2.4rem]
                      sm:text-[3rem]
                      md:text-[4rem]
                      xl:text-[5rem]

                      leading-[0.88]
                      tracking-[-0.09em]

                      text-white

                      transition-all
                      duration-700

                      group-hover:translate-x-3
                    "
                  >
                    {item.title}
                  </h2>

                  <div>
                    <p
                      className="
                        text-sm
                        md:text-base

                        leading-[1.9]

                        text-white/55
                      "
                    >
                      {item.description}
                    </p>

                    <div
                      className="
                        mt-8

                        flex
                        items-center
                        gap-4
                      "
                    >
                      <div
                        className="
                          h-px
                          w-12

                          bg-white/20

                          transition-all
                          duration-700

                          group-hover:w-20
                          group-hover:bg-[#ff2d2d]
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          uppercase

                          tracking-[0.45em]

                          text-white/30
                        "
                      >
                        Read Note
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          className="
            relative

            mt-28

            border-t
            border-white/10

            pt-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <p
              className="
                max-w-2xl

                text-lg
                md:text-2xl

                leading-[1.7]

                text-white/55
              "
            >
              Communication evolves constantly.
              Attention disappears quickly.
              Meaningful systems survive longer.
            </p>

            <h2
              className="
                font-display
                uppercase

                text-[4rem]
                md:text-[6rem]

                leading-[0.85]
                tracking-[-0.12em]

                text-transparent

                bg-gradient-to-b
                from-[#ff2d2d]
                via-[#ff8a8a]
                to-white

                bg-clip-text
              "
            >
              NOTES
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}