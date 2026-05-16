"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { insideSociyoData } from "@/app/data/home/insideSociyoData";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";   // ← Import

const { cards } = insideSociyoData;

export default function InsideSociyo() {
  return (
    <section className="relative overflow-hidden bg-[#05080F] px-4 md:px-24 py-28 md:py-40">
      
      <CinematicBackground />   
      <div
  className="
    absolute
    inset-0

    bg-black/25
  "
/>

      <div className="relative z-10 mx-auto w-[94%] max-w-[1750px]">
        <CinematicSectionHeading {...insideSociyoData} />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden lg:col-span-7 min-h-[650px] rounded-2xl"
          >
            <Image
              src="/About-Us.jpg"
              alt="Inside Sociyo"
              fill
              className="object-cover grayscale transition-all duration-[2500ms] hover:scale-105 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col justify-between lg:col-span-5">
            {cards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className="group border-b border-white/10 py-10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">0{index + 1}</span>
                  <div className="h-px w-20 bg-gradient-to-l from-white/30 to-transparent" />
                </div>

                <h3 className="font-display uppercase text-3xl md:text-5xl leading-[0.9] tracking-[-0.06em] text-white group-hover:translate-x-2 transition-all">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm md:text-base leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}