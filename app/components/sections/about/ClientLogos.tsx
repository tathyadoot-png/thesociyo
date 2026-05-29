// app/components/sections/work/ClientLogos.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

import { clientLogos } from "@/app/data/creatives/clientLogos";

export default function ClientLogos() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-20
        md:py-28
      "
    >
      {/* AMBIENT */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.05), transparent 55%)",
        }}
      />

      {/* HEADING */}
      <CinematicSectionHeading
        sectionLabel="Trusted Network"
        heading={{
          first: "Brands",
          highlight: "Connected",
        }}
        shortText="
          Strategic collaborations across political,
          corporate, development and digital ecosystems.
        "
        className="
          relative
          z-10

          w-[92%]
          lg:w-[88%]
          mx-auto

          mb-16
        "
      />


    {/* LOGO STRIP */}
<div
  className="
    relative
    z-10

    w-[92%]
    lg:w-[88%]
    mx-auto

    grid
    grid-cols-1
    md:grid-cols-3

    overflow-hidden

    border
    border-black/[0.06]

    bg-white/40
    backdrop-blur-xl
  "
>
  {clientLogos.map((item, index) => (
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
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
        group
        relative

        flex
        items-center
        justify-center

        border-r
        last:border-r-0

        border-black/[0.06]

        bg-white/20

        px-10
        py-14
        md:px-14
        md:py-16

        transition-all
        duration-500

        hover:bg-white
        hover:shadow-[0_10px_40px_rgba(255,0,0,0.08)]
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
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.08), transparent 70%)",
        }}
      />

      {/* LOGO */}
      <div
        className="
          relative
          z-10

          h-20
          w-full
        "
      >
        <Image
          src={item.logo}
          alt={item.name}
          fill
          className="
            object-contain

            transition-all
            duration-500

            group-hover:scale-105
          "
        />
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}