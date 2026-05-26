"use client";

import { motion } from "framer-motion";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";
import { sociyoMethodData, sociyoMethodHeading } from "@/app/data/home/sociyoMethod";

export default function SociyoMethodSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-32 md:py-44 text-[var(--text)]">
      <CinematicBackground />

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-[var(--accent)]/10 blur-[180px]" />
        <div className="absolute bottom-[-10%] right-0 h-[700px] w-[700px] rounded-full bg-[var(--accent-light)]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-[96%] lg:w-[88%]">
        <CinematicSectionHeading
          sectionLabel={sociyoMethodHeading.badge}
          heading={{ first: sociyoMethodHeading.title, highlight: sociyoMethodHeading.highlight }}
          shortText={sociyoMethodHeading.subtitle}
        />

        <div className="mt-20">

          {/* ══════════════════════════════════════
              DESKTOP LAYOUT (lg+): nodes row + cards row
          ══════════════════════════════════════ */}
          <div className="hidden lg:block">

            {/* ROW 1 — nodes */}
            <div className="relative grid grid-cols-5">
              {/* horizontal chain line */}
              <div className="absolute top-1/2 left-[9%] right-[9%] h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

              {sociyoMethodData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={`node-${item.number}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative z-10 flex flex-col items-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-[-26px] rounded-full border border-[var(--accent)]/6 transition-all duration-300 group-hover:border-[var(--accent)]/12" />
                      <div className="absolute inset-[-14px] rounded-full border border-dashed border-[var(--accent)]/12 transition-all duration-300 group-hover:border-[var(--accent)]/30 group-hover:inset-[-18px]" />

                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                        className="relative z-10 flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full overflow-hidden border border-[var(--accent)]/18 bg-[var(--bg)] transition-[border-color] duration-300 group-hover:border-[var(--accent)]/38"
                      >
                        <span className="pointer-events-none absolute top-1 right-1.5 select-none font-black text-[44px] leading-none text-[var(--accent)]/[0.05]">
                          {item.number}
                        </span>
                        <div className="mb-2 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[var(--accent)]/14 bg-[var(--accent)]/8 transition-all duration-300 group-hover:bg-[var(--accent)]/15 group-hover:border-[var(--accent)]/32">
                          <Icon size={17} strokeWidth={1.7} className="text-[var(--accent)]" />
                        </div>
                        <h3 className="font-black text-[1.2rem] leading-none tracking-[-0.05em]">{item.title}</h3>
                        <p className="mt-1 text-[8.5px] uppercase tracking-[0.28em] text-[var(--muted)]">
                          Step {String(item.number).padStart(2, "0")}
                        </p>
                      </motion.div>
                    </div>

                    {/* drop line */}
                    <div className="h-8 w-px bg-gradient-to-b from-[var(--accent)]/35 to-[var(--accent)]/05" />
                  </motion.div>
                );
              })}
            </div>

            {/* ROW 2 — cards */}
            <div className="grid grid-cols-5">
              {sociyoMethodData.map((item, index) => (
                <motion.div
                  key={`card-${item.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="px-[5px]"
                >
                  <div className="group relative h-full overflow-hidden rounded-[14px] border border-[var(--accent)]/12 bg-white/[0.03] p-[16px_14px_15px] transition-[border-color] duration-300 hover:border-[var(--accent)]/28">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-2.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-[var(--accent)]/28">
                      <span className="font-black text-[10px] text-[var(--accent)]">{item.number}</span>
                    </div>
                    <p className="mb-[11px] text-[12.5px] leading-[1.85] text-[var(--text)]">{item.description}</p>
                    <div className="mb-[11px] h-px bg-[var(--accent)]/10" />
                    <div className="flex items-start gap-2">
                      <div className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(255,46,87,0.6)]" />
                      <p className="text-[11px] leading-[1.75] text-[var(--muted)]">{item.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════
              MOBILE LAYOUT (< lg): vertical timeline
          ══════════════════════════════════════ */}
          <div className="flex flex-col lg:hidden">
            {sociyoMethodData.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === sociyoMethodData.length - 1;
              return (
                <motion.div
                  key={`mobile-${item.number}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-4 items-start"
                >
                  {/* left: icon node + vertical line */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[var(--accent)]/22 bg-[var(--bg)] transition-all duration-300 group-hover:border-[var(--accent)]/45 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.7} className="text-[var(--accent)]" />
                    </div>
                    {!isLast && (
                      <div className="my-1.5 w-px flex-1 min-h-[20px] bg-gradient-to-b from-[var(--accent)]/30 to-[var(--accent)]/05" />
                    )}
                  </div>

                  {/* right: label + title + card */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-7"}`}>
                    <div className="mb-2 flex items-center gap-2.5">
                      <span className="rounded-full border border-[var(--accent)]/28 px-2.5 py-[3px] text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                        Step {String(item.number).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2.5 font-black text-[1.35rem] leading-none tracking-[-0.05em] text-[var(--text)]">
                      {item.title}
                    </h3>
                    <div className="group/card relative overflow-hidden rounded-[12px] border border-[var(--accent)]/12 bg-white/[0.03] p-[14px] transition-[border-color] duration-300 hover:border-[var(--accent)]/28">
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
                      <p className="mb-[10px] text-[13px] leading-[1.85] text-[var(--text)]">{item.description}</p>
                      <div className="mb-[10px] h-px bg-[var(--accent)]/10" />
                      <div className="flex items-start gap-2">
                        <div className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(255,46,87,0.55)]" />
                        <p className="text-[11.5px] leading-[1.75] text-[var(--muted)]">{item.details}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}