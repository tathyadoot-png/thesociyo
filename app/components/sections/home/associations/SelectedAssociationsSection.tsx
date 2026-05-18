"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import CinematicLayer from "@/app/components/cinematic/CinematicLayer";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import {
  associations,
  associationsHeading,
} from "@/app/data/home/associations";

export default function SelectedAssociationsSection() {
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
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

      bg-[#18090B]
border-t border-white/20
        py-24
        md:py-32
      "
    >
      {/* BACKGROUND */}
      <CinematicBackground />
 

     



      <div
        className="
          relative
          z-20

    

          px-10
          md:px-44
         
        "
      >
        {/* TOP */}
        <div
          className="
            mb-20
            md:mb-24

            grid
            gap-12

            xl:grid-cols-[1fr_420px]
            xl:items-end
          "
        >
          {/* LEFT */}
          <motion.div
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
            }}
            transition={{
              duration: 1,
            }}
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
              <span
                className="
                  font-display

                  text-[1rem]

                  tracking-[0.3em]

                  text-[#ff2d2d]
                "
              >
                {associationsHeading.sectionNumber}
              </span>

              <div
                className="
                  h-px
                  w-12

                  bg-[#ff2d2d]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.55em]

                  text-white/40
                "
              >
                {associationsHeading.sectionLabel}
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-5xl

                font-display
                uppercase

                text-[3rem]
                sm:text-[4rem]
                md:text-[5rem]
                xl:text-[7rem]

                leading-[0.82]
                tracking-[-0.12em]

                text-white
              "
            >
              {associationsHeading.heading.first}

              <span
                className="
                  text-transparent

                  bg-gradient-to-r
                  from-[#ff2d2d]
                  via-[#ff8a8a]
                  to-[#ffffff]

                  bg-clip-text
                "
              >
                {" "}
                {associationsHeading.heading.highlight}
              </span>

              <br />

              {associationsHeading.heading.last}
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.15,
            }}
            className="
              text-base
              md:text-lg

              leading-relaxed

              text-white/60
            "
          >
            {associationsHeading.shortText}
          </motion.p>
        </div>

{/* CINEMATIC LOGO CLOUD */}
<div
  className="
    relative

    mt-20
    md:mt-32

    overflow-hidden
  "
>
  {/* CENTER GLOW */}
  <div
    className="
      absolute
      left-1/2
      top-1/2

      h-[16rem]
      w-[16rem]

      md:h-[28rem]
      md:w-[28rem]

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-[#ff2d2d]/10

      blur-[120px]
    "
  />

  

  {/* MOBILE VIEW */}
  <div
    className="
      relative
      z-20

      grid
      grid-cols-2

      gap-4

      md:hidden
    "
  >
    {associations.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.04,
        }}
        className="
          group
          relative

          overflow-hidden

          rounded-[1.8rem]

          border
          border-white/10

          bg-black/70

          p-5

          backdrop-blur-xl
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            inset-0

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-[radial-gradient(circle_at_top,rgba(255,45,45,0.16),transparent_70%)]
          "
        />

        {/* NUMBER */}
        <div
          className="
            relative
            z-10

            mb-6

            font-display

            text-[1.4rem]

            leading-none
            tracking-[-0.08em]

            text-white/20
          "
        >
          {item.id}
        </div>

        {/* LOGO */}
        <div
          className="
            relative
            z-10

            mb-6

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              relative

              h-10
              w-24
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="
                object-contain
              "
            />
          </div>
        </div>

        {/* NAME */}
        <h3
          className="
            relative
            z-10

            text-center

            text-[10px]
            uppercase

            tracking-[0.18em]

            text-white/65
          "
        >
          {item.name}
        </h3>
      </motion.div>
    ))}
  </div>

  {/* DESKTOP FLOATING CLOUD */}
<div
  className="
    relative

    hidden
    md:block

    h-[900px]
    xl:h-[1100px]
  "
>
  {associations.map((item, index) => {
    const positions = [
      // TOP
      "left-[18%] top-[10%]",
      "left-[42%] top-[2%]",
      "right-[18%] top-[10%]",

      // MID
      "left-[8%] top-[38%]",
      "left-[32%] top-[30%]",
      "right-[32%] top-[30%]",
      "right-[8%] top-[38%]",

      // BOTTOM
      "left-[18%] bottom-[10%]",
      "left-[42%] bottom-[2%]",
      "right-[18%] bottom-[10%]",

      // CENTER
      "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    ];

    return (
      <motion.div
        key={item.id}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: index * 0.05,
        }}
        animate={{
          y: [0, -12, 0],
        }}
        className={`
          absolute
          ${positions[index]}
        `}
      >
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="
            group
            relative

            flex
            flex-col
            items-center
            justify-center

            h-[170px]
            w-[170px]

            rounded-full

            border
            border-white/10

            bg-black/60

            backdrop-blur-xl

            transition-all
            duration-500

            hover:border-[#ff2d2d]/40
          "
        >
          {/* OUTER RING */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute

              h-[130px]
              w-[130px]

              rounded-full

              border
              border-white/10
            "
          />

          {/* INNER GLOW */}
          <div
            className="
              absolute

              h-20
              w-20

              rounded-full

              bg-[#ff2d2d]/10

              blur-[40px]
            "
          />

          {/* LOGO */}
          <div
            className="
              relative
              z-10

              h-12
              w-24
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="
                object-contain
              "
            />
          </div>

          {/* NAME */}
          <div
            className="
              absolute
              bottom-7

              px-4

              text-center
            "
          >
            <h3
              className="
                text-[10px]
                uppercase

                tracking-[0.18em]

                text-white/60
              "
            >
              {item.name}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    );
  })}

  {/* CENTER CORE */}
  <div
    className="
      absolute
      left-1/2
      top-1/2

      -translate-x-1/2
      -translate-y-1/2
    "
  >
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="
        absolute
        left-1/2
        top-1/2

        h-32
        w-32

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-[#ff2d2d]/20

        blur-[60px]
      "
    />

  
  </div>
</div>
</div>


        {/* BOTTOM */}
        <motion.div
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
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative

            mt-20
            md:mt-24

            border-t
            border-white/10

            pt-10
            md:pt-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

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

                leading-relaxed

                text-white/65
              "
            >
              And collaborations across corporate, political,
              social and digital ecosystems.
            </p>

            <h2
              className="
                font-display
                uppercase

                text-[3rem]
                sm:text-[4rem]
                md:text-[6rem]

                leading-[0.85]
                tracking-[-0.12em]

                text-transparent

                bg-gradient-to-b
                from-[#ff2d2d]
                via-[#ff8a8a]
                to-[#ffffff]

                bg-clip-text
              "
            >
              Trusted.
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}