// app/components/team/DrSulabhEditorial.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { drSulabhSingh } from "@/app/data/about/drSulabhSingh";

export default function DrSulabhEditorial() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black py-20 md:py-28 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-[95%] lg:w-[88%] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-14"
        >
          <p className="uppercase tracking-[0.35em] text-orange-400 text-sm mb-4">
            Founder’s Vision
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Strategic Communication
            <span className="block text-orange-500">
              Meets Political Intelligence
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#111]">

              <Image
                src={drSulabhSingh.coverImage}
                alt={drSulabhSingh.name}
                width={900}
                height={1200}
                priority
                className="w-full h-[620px] object-cover"
              />

              {/* Simple Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 z-20 max-w-xs rounded-3xl border border-orange-500/20 bg-black/70 backdrop-blur-md p-5">

              <p className="text-sm text-orange-400 mb-2">
                Founder & CEO
              </p>

              <h3 className="text-2xl font-bold">
                Dr. Sulabh Singh
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Political strategist, communication expert and digital innovation enthusiast.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="space-y-5 text-lg leading-8 text-white/75">

              <p>
                Dr. Sulabh Singh brings extensive experience in political consulting,
                strategic communication, advertising and public relations.
              </p>

              <p>
                He has collaborated with multiple national and regional political
                parties across India in election management, campaign strategy and
                public outreach programs.
              </p>

              <p>
                In 2018, he founded Sociyo Communications with the vision of
                building a unified communication ecosystem combining strategy,
                media, execution and digital innovation.
              </p>

              <p>
                His growing focus on AI-powered communication systems and
                technology-driven public engagement continues to shape the future
                direction of Sociyo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 pt-6">

              <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md">
                <h4 className="text-4xl font-black text-orange-500">
                  2018
                </h4>

                <p className="mt-2 text-white/70">
                  Founded Sociyo Communications
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md">
                <h4 className="text-4xl font-black text-orange-500">
                  AI+
                </h4>

                <p className="mt-2 text-white/70">
                  Innovation Driven Communication Systems
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">

          {drSulabhSingh.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[1.8rem] border border-orange-500/20 bg-[#111]"
            >

              <Image
                src={img}
                alt={`gallery-${index}`}
                width={500}
                height={500}
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}