"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  heroLines,
  heroMeta,
} from "@/app/data/home/heroTextData";

export default function HeroText() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.08]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.45], [0, 8]);
  const blurFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);

  return (
    <motion.section
      style={{ opacity: heroOpacity, scale: heroScale, filter: blurFilter }}
      className="relative flex min-h-[100svh] md:min-h-screen items-center justify-center overflow-hidden sm:px-6"
    >
      {/* SOFT CINEMATIC SWEEP - Left side ka heavy red kam kiya */}
      <motion.div
        animate={{ x: ["-100%", "120%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="
          absolute top-0 left-0 h-full w-[25vw]
          bg-[linear-gradient(to_right,transparent,rgba(254,0,0,0.06),transparent)]
          blur-3xl
          pointer-events-none
        "
      />

      {/* Editorial Frame */}
      <div className="pointer-events-none absolute inset-1 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-10 border border-white/10 opacity-40" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex w-full max-w-[1700px] flex-col items-center justify-center text-center pt-20">
        <div className="relative flex flex-col items-center justify-center gap-2 md:gap-0">
          {heroLines.map((line, index) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, index === 0 ? -220 : index === 1 ? -120 : -60]);
            const x = useTransform(scrollYProgress, [0, 1], [0, index === 0 ? -120 : index === 1 ? 0 : 80]);
            const scale = useTransform(scrollYProgress, [0, 1], [1, index === 1 ? 1.15 : 0.9]);
            const rotate = useTransform(scrollYProgress, [0, 1], [0, index === 0 ? -4 : index === 2 ? 4 : 0]);

            return (
              <motion.div
                key={line.text}
                style={{ y, x, scale, rotate }}
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center justify-center"
              >
                {/* SOFT RED GLOW for DECODE */}
                {line.accent && (
                  <motion.div
                    animate={{ opacity: [0.18, 0.35, 0.18], scale: [1, 1.08, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="
                      absolute inset-0 
                      bg-[radial-gradient(circle_at_center,rgba(254,0,0,0.22),transparent_65%)]
                      blur-3xl pointer-events-none
                    "
                  />
                )}

                {/* TYPOGRAPHY WRAPPER */}
                <div className="relative overflow-hidden">
                  {/* MAIN WORD */}
                  <motion.h1
                    initial={{ y: "120%", opacity: 0, filter: "blur(12px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.8, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`
                      relative z-20 whitespace-nowrap font-display uppercase
                      text-[clamp(5rem,14vw,14rem)] md:text-[clamp(5rem,11vw,12rem)]
                      leading-[0.82] select-none will-change-transform
                      ${line.accent
                        ? `text-transparent bg-clip-text bg-gradient-to-b from-[#ff0033] via-[#ff3366] to-[#ff9999] 
                           drop-shadow-[0_0_50px_rgba(254,0,0,0.45)]`
                        : `text-white`
                      }
                    `}
                    style={{
                      textShadow: line.accent ? "0 0 40px rgba(254,0,0,0.35)" : "0 0 20px rgba(255,255,255,0.04)",
                    }}
                  >
                    {line.text}
                  </motion.h1>
                </div>

                {/* SIGNAL LINE */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 + index * 0.15 }}
                  className="mt-2 h-px w-[140px] md:w-[240px] origin-center bg-gradient-to-r from-transparent via-red-500 to-transparent"
                />

                {/* SUBTITLE */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 + index * 0.15 }}
                  className="my-1 md:my-3 font-body text-[10px] md:text-xs uppercase text-white/60"
                >
                  {line.subtitle}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Side Labels */}
      <div className="absolute left-5 top-1/2 hidden xl:flex -translate-y-1/2 rotate-180" style={{ writingMode: "vertical-rl" }}>
        <span className="font-body text-[10px] uppercase text-white/80">{heroMeta.sideLabel}</span>
      </div>
      <div className="absolute right-5 top-1/2 hidden xl:flex -translate-y-1/2 rotate-180" style={{ writingMode: "vertical-rl" }}>
        <span className="font-body text-[10px] uppercase text-white/80">{heroMeta.sideLabel}</span>
      </div>
    </motion.section>
  );
}