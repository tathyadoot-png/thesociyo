// app/components/home/VideoCreativeShowcase.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  videoCreatives,
  films,
} from "@/app/data/creatives/videoCreatives";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import CinematicBackground from "../../cinematic/CinematicBackground";

export default function VideoCreativeShowcase() {
  return (
<section
  className="
    relative
    isolate

    w-full
    overflow-hidden

    border-y
   border-black/10



    py-20
    md:py-28
  "
>
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
<div className="relative aspect-[9/16] overflow-hidden">
  {item.video ? (
    <video
      src={item.video}
      poster={item.thumbnail}
      muted
      loop
      playsInline
      autoPlay
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  ) : (
    <Image
      src={item.thumbnail}
      alt={item.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

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
    relative

    mt-28

    overflow-hidden



    border
    border-[var(--border)]

    bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]

    px-5
    py-14

    md:px-10
    lg:px-14
  "
>


<CinematicSectionHeading
  sectionLabel="Motion Cinema"
  heading={{
    first: "Featured",
    highlight: "Films",
  }}
  shortText="
    Cinematic narratives designed to shape perception,
    emotion and public engagement through motion-led
    storytelling.
  "
  className="
    relative
    z-10

    mb-14
  "
/>
  {/* GRID */}
  <div
    className="
      relative
      z-10

      grid
      gap-6

      lg:grid-cols-3
    "
  >
    {films.map((film, index) => {
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
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.08,
          }}
          className="
            group
            relative
            block

            overflow-hidden



            border
            border-white/10

            bg-black

            transition-all
            duration-700

            hover:-translate-y-2
            hover:border-[var(--accent)]/30
            hover:shadow-[0_25px_70px_rgba(255,0,0,0.16)]
          "
        >
          {/* THUMB */}
          <div
            className="
              relative

              aspect-[16/9]

              overflow-hidden
            "
          >
            <Image
              src={thumbnail}
              alt="Film Thumbnail"
              fill
              unoptimized
              className="
                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
              "
            />

            {/* DARK */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
            />

            {/* PLAY */}
            <div
              className="
                absolute
                left-1/2
                top-1/2

                flex
                h-20
                w-20

                -translate-x-1/2
                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-white/10

                backdrop-blur-xl

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:bg-[var(--accent)]
              "
            >
              <Play
                className="
                  h-7
                  w-7

                  fill-white
                  text-white
                "
              />
            </div>

            {/* BOTTOM */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0

                flex
                items-end
                justify-between

                p-6
              "
            >
              <div>
                <div
                  className="
                    text-[10px]
                    uppercase

                    tracking-[0.35em]

                    text-white/60
                  "
                >
                  Film {film.id}
                </div>

                <div
                  className="
                    mt-2

                    text-2xl

                    font-bold
                    uppercase

                    tracking-[-0.04em]

                    text-white
                  "
                >
                  Narrative
                </div>
              </div>

              <div
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.35em]

                  text-white
                "
              >
                Watch
              </div>
            </div>
          </div>
        </motion.a>
      );
    })}
  </div>
</div>      

      </div>
    </section>
  );
}