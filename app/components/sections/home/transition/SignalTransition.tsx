"use client";

import { motion } from "framer-motion";

const words = [
    "Influence",
    "Perception",
    "Narrative",
    "Psychology",
    "Systems",
    "Authority",
    "Culture",
];

export default function SignalTransition() {
    return (
        <section
            className="
        relative

        overflow-hidden

        border-y
        border-white/10

        bg-black

py-8 md:py-10
      "
        >
            {/* ATMOSPHERE */}
            <div
                className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.08),transparent_70%)]
        "
            />

            {/* MOVING TRACK */}
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
          flex
          whitespace-nowrap
        "
            >
                {[...words, ...words, ...words].map(
                    (word, index) => (
                        <div
                            key={index}
                            className="
               mx-6

                flex
                items-center
                gap-10
              "
                        >
                            {/* WORD */}
                            <span
                                className="
                 text-xl md:text-3xl

                  font-display
                  uppercase

                  tracking-[-0.06em]

                  text-white/10
                "
                            >
                                {word}
                            </span>

                            {/* DOT */}
                            <div
                                className="
                  h-2
                  w-2

                  rounded-full

                  bg-[#fe0000]
                "
                            />
                        </div>
                    )
                )}
            </motion.div>

            {/* CENTER TEXT */}
            {/* <div
                className="
          pointer-events-none

          absolute
          inset-0

          flex
          items-center
          justify-center
        "
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="
            border
            border-white/10

            bg-black/60
            backdrop-blur-xl

           px-4 py-2

            text-[10px]
            uppercase

            tracking-[0.45em]

            text-white/60
          "
                >
                    Strategic Narrative Systems
                </motion.div>
            </div> */}

            {/* NOISE */}
            <div
                className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.04]

          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
            />
        </section>
    );
}