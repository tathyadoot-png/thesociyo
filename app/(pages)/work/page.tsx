// app/(pages)/work/page.tsx

"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { lenisRef } from "@/app/components/ui/SmoothScroll";
import CorporateCommunication from "@/app/components/sections/work/CorporateCommunication";
import PoliticalCommunication from "@/app/components/sections/work/PoliticalCommunication";
import SocialDevelopment from "@/app/components/sections/work/SocialDevelopment";
import TechnologyDigital from "@/app/components/sections/work/TechnologyDigital";

const tabs = [
  {
    id: "corporate",
    label: "Corporate",
    short: "Corp",
    component: <CorporateCommunication />,
  },
  {
    id: "political",
    label: "Political",
    short: "Pol",
    component: <PoliticalCommunication />,
  },
  {
    id: "social",
    label: "Social Development",
    short: "Social",
    component: <SocialDevelopment />,
  },
  {
    id: "technology",
    label: "Technology & Digital",
    short: "Tech",
    component: <TechnologyDigital />,
  },
];




export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("corporate");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <main className="relative overflow-hidden  bg-black text-white">
      {/* FLOATING NAV */}
      <div
        className="
          fixed
          left-1/2
          top-20
          z-[120]

          w-full
          -translate-x-1/2

          px-3
          sm:px-4
        "
      >
        <div className="mx-auto flex w-full justify-center">
          <div
            className="
              relative

              flex
              w-full
              max-w-fit

              items-center

              overflow-x-auto

              rounded-full

              border
              border-white/10

              bg-black/40

              p-1

              backdrop-blur-2xl

              shadow-[0_10px_60px_rgba(0,0,0,0.45)]

              scrollbar-none
            "
          >
            {/* ambient glow */}
            <div
              className="
                absolute
                inset-0

                rounded-full

                bg-[radial-gradient(circle_at_center,rgba(125,184,255,0.12),transparent_70%)]

                opacity-70
              "
            />

            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    lenisRef?.scrollTo(0, {
                      immediate: true,
                    });

                    setActiveTab(tab.id);
                  }}
                  className="
                    relative

                    flex
                    flex-shrink-0
                    items-center
                    justify-center

                    overflow-hidden

                    rounded-full

                    px-3
                    py-2.5

                    sm:px-5
                    sm:py-3

                    text-[9px]
                    sm:text-[10px]
                    md:text-xs

                    uppercase

                    tracking-[0.18em]
                    sm:tracking-[0.28em]

                    transition-all
                    duration-300
                  "
                >
                  {/* ACTIVE BG */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 24,
                      }}
                      className="
                        absolute
                        inset-0

                        rounded-full

                        border
                        border-[#7DB8FF]/30

                        bg-[#7DB8FF]/15

                        shadow-[0_0_25px_rgba(125,184,255,0.22)]
                      "
                    >
                      {/* shine */}
                      <div
                        className="
                          absolute
                          inset-0

                          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)]

                          animate-[shine_4s_linear_infinite]
                        "
                      />
                    </motion.div>
                  )}

                  <span
                    className={`
                      relative
                      z-10

                      whitespace-nowrap

                      transition-all
                      duration-300

                      ${isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white/75"
                      }
                    `}
                  >
                    {/* MOBILE */}
                    <span className="sm:hidden">
                      {tab.short}
                    </span>

                    {/* DESKTOP */}
                    <span className="hidden sm:block">
                      {tab.label}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {activeContent?.component}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}