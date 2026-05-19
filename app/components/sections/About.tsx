"use client";

import { motion } from "framer-motion";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
export default function AboutPage() {
  return (
  <main
  className="
    relative
    overflow-hidden

    bg-[var(--bg)]

    text-[var(--text)]
  "
>
   {/* CINEMATIC BG */}
<CinematicBackground />

{/* DARK BLEND */}
<div
  className="
    absolute
    inset-0
bg-gradient-to-b
from-transparent
via-[var(--ambient-1)]/5
to-black/[0.06]

dark:to-black/35
  "
/>

      {/* HERO */}
      <section
        className="
          relative
          z-10

          min-h-screen

          px-3
          py-28

          md:px-48
     
        "
      >
        {/* TOP */}
        {/* <div
          className="
            mb-20

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
            <div
              className="
                h-px
                w-14

                bg-[var(--accent)]
              "
            />

            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.6em]

                text-[var(--muted)]
              "
            >
              About Sociyo
            </span>
          </div>

          <div
            className="
              hidden
              md:block

              text-[10px]
              uppercase

              tracking-[0.45em]

              text-[var(--muted)]
            "
          >
            Narrative • Systems • Influence
          </div>
        </div> */}

      {/* MAIN LAYOUT */}
<div
  className="
    relative

    grid
    gap-16
    pt-0
    md:mt-20

    xl:grid-cols-[1fr_420px]
    xl:items-start
  "
>
  {/* LEFT SIDE */}
  <div className="relative">
    {/* SMALL LABEL */}
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
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
          w-12

          bg-[var(--accent)]
        "
      />

      <span
        className="
          text-[10px]
          uppercase

          tracking-[0.55em]

          text-[var(--muted)]
        "
      >
        Beyond Visibility
      </span>
    </motion.div>

    {/* HEADING */}
    <motion.h1
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
        max-w-5xl

        font-display
        uppercase

        text-[3.8rem]
        sm:text-[5rem]
        md:text-[7rem]
        xl:text-[8rem]

        leading-[0.82]
        tracking-[-0.1em]

        text-[var(--text)]
      "
    >
      Beyond

      <br />

      <span
        className="
          text-transparent

          bg-gradient-to-b
          from-[var(--accent-light)]
          via-[var(--accent)]
          to-[#ffe1e6]

          bg-clip-text
        "
      >
        Visibility
      </span>
    </motion.h1>

    {/* SUBTEXT */}
    <motion.p
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      className="
        mt-10

        max-w-2xl

        text-base
        md:text-xl

        leading-[2]

        text-[var(--muted)]
      "
    >
      Sociyo builds cinematic communication systems
      where narrative, design, technology and influence
      operate together to create long-term public memory.
    </motion.p>
  </div>

  {/* RIGHT SIDE */}
  <motion.div
    initial={{
      opacity: 0,
      x: 40,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1,
      delay: 0.3,
    }}
    className="
      relative

      flex
      flex-col
      gap-5
    "
  >
    {/* CARD 1 */}
    <div
      className="
        group
        relative

        overflow-hidden

        rounded-[2rem]

        border
        border-[var(--border)]

glass-card

        p-8

   

        transition-all
        duration-500

        hover:border-[var(--accent)]
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          h-40
          w-40

          rounded-full

          bg-[var(--accent)]/10

          blur-[100px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          bg-[size:40px_40px]
        "
      />

      <div className="relative z-10">
        <div
          className="
            mb-8

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[10px]
              uppercase

              tracking-[0.5em]

              text-[var(--muted)]
            "
          >
            Philosophy
          </span>

          <span
            className="
              font-display

              text-[2.5rem]

              leading-none
              tracking-[-0.1em]

              text-[var(--text)]/[0.08]
            "
          >
            01
          </span>
        </div>

        <h2
          className="
            font-display
            uppercase

            text-[2rem]
            md:text-[2.7rem]

            leading-[0.9]
            tracking-[-0.08em]

            text-[var(--text)]
          "
        >
          Communication
          <br />
          Is Strategy.
        </h2>
      </div>
    </div>

    {/* CARD 2 */}
    <div
      className="
        group
        relative

        overflow-hidden

        rounded-[2rem]

        border
        border-[var(--border)]

        glass-card


        p-8

     

        transition-all
        duration-500

        hover:border-[var(--accent)]
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          left-0
          bottom-0

          h-40
          w-40

          rounded-full

          bg-[var(--accent)]/10

          blur-[100px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          bg-[size:40px_40px]
        "
      />

      <div className="relative z-10">
        <div
          className="
            mb-8

            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[10px]
              uppercase

              tracking-[0.5em]

              text-[var(--muted)]
            "
          >
            Systems
          </span>

          <span
            className="
              font-display

              text-[2.5rem]

              leading-none
              tracking-[-0.1em]

              text-[var(--text)]/[0.08]
            "
          >
            02
          </span>
        </div>

        <h2
          className="
            font-display
            uppercase

            text-[2rem]
            md:text-[2.7rem]

            leading-[0.9]
            tracking-[-0.08em]

            text-[var(--text)]
          "
        >
          Designed
          <br />
          For Recall.
        </h2>
      </div>
    </div>
  </motion.div>
</div>

        {/* HUGE CENTER BLOCK */}
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative

            mt-40

            border-y
            border-[var(--border)]

            py-24
          "
        >
          {/* BG WORD */}
          <div
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              font-display
              uppercase

              text-[30vw]

              leading-none
              tracking-[-0.18em]

              text-[var(--text)]/[0.02]
            "
          >
            IMPACT
          </div>

          <div
            className="
              relative
              z-10

              mx-auto

              max-w-5xl

              text-center
            "
          >
            <div
              className="
                mb-6

                text-[10px]
                uppercase

                tracking-[0.8em]

                text-[var(--muted)]
              "
            >
              Sociyo Communications
            </div>

            <h2
              className="
                font-display
                uppercase

                text-[10vw]
                md:text-[7vw]

                leading-[0.82]
                tracking-[-0.14em]

                text-[var(--text)]
              "
            >
              Not Just
              <br />

              Seen.
              <br />

              <span
                className="
                  text-transparent

                  bg-gradient-to-b
                  from-[var(--accent-light)]
                  via-[var(--accent)]
                  to-[#ffffff]

                  bg-clip-text
                "
              >
                Remembered.
              </span>
            </h2>
          </div>
        </motion.div>


{/* CINEMATIC FILMS */}
<section
  className="
    relative
    z-10

    overflow-hidden
  "
>
  {/* BG WORD */}
  <div
    className="
      pointer-events-none

      absolute
      left-1/2
      top-1/2

      -translate-x-1/2
      -translate-y-1/2

      whitespace-nowrap

      font-display
      uppercase

      text-[26vw]
      md:text-[18vw]

      leading-none
      tracking-[-0.14em]

      text-[var(--text)]/[0.02]
    "
  >
    FILMS
  </div>



  {/* FILMS */}
  <div
    className="
      relative
      z-10

      space-y-10
      md:space-y-40
    "
  >
    {/* FILM 01 */}
    <motion.a
      href="https://youtu.be/6dz3DEe2KRc"
      target="_blank"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="
  group
  relative

  block

  overflow-hidden

  rounded-[2rem]

  border
  border-[var(--border)]

  glass-card
dark:bg-white/[0.03]

  backdrop-blur-xl

  transition-all
  duration-500

  hover:border-[var(--accent)]
"
    >
      <div
        className="
          grid

          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* THUMB */}
        <div
          className="
            relative

            aspect-video

            overflow-hidden
          "
        >
          <img
            src="https://img.youtube.com/vi/6dz3DEe2KRc/maxresdefault.jpg"
            alt="Film 01"
            className="
              h-full
              w-full

              object-cover

              transition-all
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
              from-black/75
              via-black/25
              to-transparent
            "
          />

          {/* PLAY */}
          <div
            className="
              absolute
              left-8
              top-8

              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-full

                border
                border-[var(--border)]

                glass-card

                backdrop-blur-xl
              "
            >
              <div
                className="
                  ml-1

                  h-0
                  w-0

                  border-y-[10px]
                  border-y-transparent

                  border-l-[16px]
                  border-l-white
                "
              />
            </div>

            <div>
              <div
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--muted)]
                "
              >
                Watch Film
              </div>

              <div
                className="
                  mt-1

                  text-sm

                  text-[var(--text)]/70
                "
              >
                Sociyo Narrative
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="
            relative

            flex
            flex-col
            justify-between

            p-8
            md:p-10
          "
        >
          {/* BIG NUMBER */}
          <div
            className="
              absolute
              right-6
              top-4

              font-display

              text-[5rem]

              leading-none
              tracking-[-0.12em]

              text-[var(--text)]/[0.04]
            "
          >
            01
          </div>

          <div>
            <div
              className="
                mb-6

                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  w-10

                  bg-[var(--accent)]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--muted)]
                "
              >
                Influence Film
              </span>
            </div>

            <h3
              className="
                max-w-[10ch]

                font-display
                uppercase

                text-[3rem]
                md:text-[4rem]

                leading-[0.85]
                tracking-[-0.09em]

                text-[var(--text)]
              "
            >
              Influence
            </h3>
          </div>

          <div
            className="
              mt-10

              flex
              items-center
              justify-between
            "
          >
            <p
              className="
                max-w-md

                text-sm
                md:text-base

                leading-relaxed

                text-[var(--muted)]
              "
            >
              Visual storytelling built around emotion,
              narrative and strategic communication.
            </p>

            <div
              className="
                hidden
                md:flex

                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  w-10

                  bg-white/20
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--text)]/30
                "
              >
                Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>

    {/* FILM 02 */}
    <motion.a
      href="https://youtu.be/O8E-ZydMAw0"
      target="_blank"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        delay: 0.1,
      }}
     className="
  group
  relative

  block

  overflow-hidden

  rounded-[2rem]

  border
  border-[var(--border)]

  glass-card
dark:bg-white/[0.03]

  backdrop-blur-xl

  transition-all
  duration-500

  hover:border-[var(--accent)]
"
    >
      <div
        className="
          grid

          lg:grid-cols-[0.9fr_1.1fr]
        "
      >
        {/* CONTENT */}
        <div
          className="
            relative

            order-2
            lg:order-1

            flex
            flex-col
            justify-between

            p-8
            md:p-10
          "
        >
          {/* BIG NUMBER */}
          <div
            className="
              absolute
              left-6
              top-4

              font-display

              text-[5rem]

              leading-none
              tracking-[-0.12em]

              text-[var(--text)]/[0.04]
            "
          >
            02
          </div>

          <div>
            <div
              className="
                mb-6

                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  w-10

                  bg-[var(--accent)]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--muted)]
                "
              >
                Narrative Film
              </span>
            </div>

            <h3
              className="
                max-w-[10ch]

                font-display
                uppercase

                text-[3rem]
                md:text-[4rem]

                leading-[0.85]
                tracking-[-0.09em]

                text-[var(--text)]
              "
            >
              Narrative
            </h3>
          </div>

          <div
            className="
              mt-10

              flex
              items-center
              justify-between
            "
          >
            <p
              className="
                max-w-md

                text-sm
                md:text-base

                leading-relaxed

                text-[var(--muted)]
              "
            >
              Cinematic communication crafted to create
              emotional memory and attention.
            </p>

            <div
              className="
                hidden
                md:flex

                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  w-10

                  bg-white/20
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--text)]/30
                "
              >
                Open
              </span>
            </div>
          </div>
        </div>

        {/* THUMB */}
        <div
          className="
            relative

            order-1
            lg:order-2

            aspect-video

            overflow-hidden
          "
        >
          <img
            src="https://img.youtube.com/vi/O8E-ZydMAw0/maxresdefault.jpg"
            alt="Film 02"
            className="
              h-full
              w-full

              object-cover

              transition-all
              duration-700

              group-hover:scale-105
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-l
              from-black/75
              via-black/25
              to-transparent
            "
          />

          {/* PLAY */}
          <div
            className="
              absolute
              right-8
              top-8

              flex
              items-center
              gap-4
            "
          >
            <div>
              <div
                className="
                  text-right

                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--muted)]
                "
              >
                Watch Film
              </div>

              <div
                className="
                  mt-1

                  text-right
                  text-sm

                  text-[var(--text)]/70
                "
              >
                Strategic Storytelling
              </div>
            </div>

            <div
              className="
                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-full

                border
                border-[var(--border)]

                glass-card

                backdrop-blur-xl
              "
            >
              <div
                className="
                  ml-1

                  h-0
                  w-0

                  border-y-[10px]
                  border-y-transparent

                  border-l-[16px]
                  border-l-white
                "
              />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  </div>
</section>
      </section>
    </main>
  );
}