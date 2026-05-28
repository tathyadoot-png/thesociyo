// app/components/home/VideoCreativeShowcase.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { videoCreatives } from "@/app/data/creatives/videoCreatives";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import CinematicBackground from "../../cinematic/CinematicBackground";

export default function VideoCreativeShowcase() {
  return (
    <section className="w-full overflow-hidden py-20 md:py-28">
        <CinematicBackground />
      {/* heading */}
<CinematicSectionHeading
  sectionLabel="Motion Work"
  heading={{
    first: "Video",
    highlight: "Creatives",
  }}
  shortText="
    Cinematic storytelling, branded reels and motion
    creatives crafted to capture attention instantly.
  "
  className="
    w-[92%]
    lg:w-[88%]
    mx-auto
  "
/>

      {/* grid */}
      <div
        className="
          w-[92%]
          lg:w-[88%]
          mx-auto

          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4

          gap-5
        "
      >
        {videoCreatives.map((item, index) => (
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
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative

              overflow-hidden

              border
              border-black/10

              bg-black

              transition-all
              duration-700

              hover:-translate-y-1
              hover:border-primary/20
              hover:shadow-[0_20px_60px_rgba(255,0,0,0.12)]
            "
          >
            {/* video */}
            <div className="relative aspect-[9/16] overflow-hidden">
              <video
                src={item.video}
                poster={item.thumbnail}
                muted
                loop
                playsInline
                autoPlay
                className="
                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />

              {/* overlay */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />
            </div>

            {/* content */}
            {/* <div
              className="
                absolute
                bottom-0
                left-0

                w-full

                p-5
              "
            >
              <span
                className="
                  text-[10px]

                  uppercase

                  tracking-[0.3em]

                  text-white/60
                "
              >
                {item.category}
              </span>

              <h3
                className="
                  mt-2

                  text-lg

                  font-bold

                  uppercase

                  tracking-[0.06em]

                  text-white
                "
              >
                {item.title}
              </h3>
            </div> */}

            {/* play button */}
            <div
              className="
                absolute
                inset-0

                flex
                items-center
                justify-center
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
                  border-white/10

                  bg-white/10

                  backdrop-blur-md

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:bg-primary
                "
              >
                <Play
                  className="
                    h-6
                    w-6

                    fill-white
                    text-white
                  "
                />
              </div>
            </div>

            {/* top index */}
            <div
              className="
                absolute
                left-4
                top-4

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-black/40

                backdrop-blur-md
              "
            >
              <span
                className="
                  text-[10px]

                  font-medium

                  tracking-[0.2em]

                  text-white
                "
              >
                {item.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}