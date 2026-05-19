// app/(pages)/work/page.tsx

"use client";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { lenisRef } from "@/app/components/ui/SmoothScroll";

import CorporateCommunication from "@/app/components/sections/work/CorporateCommunication";
import PoliticalCommunication from "@/app/components/sections/work/PoliticalCommunication";
import SocialDevelopment from "@/app/components/sections/work/SocialDevelopment";
import TechnologyDigital from "@/app/components/sections/work/TechnologyDigital";

const tabs = [
    {
    id: "political",
    label: "Political",
    desc: "Narrative & influence",
    component: <PoliticalCommunication />,
  },
  {
    id: "corporate",
    label: "Corporate",
    desc: "Strategic brand systems",
    component: <CorporateCommunication />,
  },
 {
    id: "social",
    label: "Social",
    desc: "Impact development",
    component: <SocialDevelopment />,
  },
  {
    id: "technology",
    label: "Technology",
    desc: "Digital ecosystems",
    component: <TechnologyDigital />,
  },
 
];

export default function WorkPage() {
  const [activeTab, setActiveTab] =
    useState("political");

  const activeContent = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <main
      className="
        relative
        overflow-hidden

        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      {/* DESKTOP CINEMATIC SWITCHER */}
      <div
        className="
          fixed
          right-10
          top-1/2
          z-[120]

          hidden
          xl:flex

          -translate-y-1/2

          flex-col
          gap-4
        "
      >
        {tabs.map((tab, index) => {
          const isActive =
            activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                lenisRef?.scrollTo(0, {
                  immediate: true,
                });

                setActiveTab(tab.id);
              }}
              className={`
                group
                relative

                overflow-hidden

                rounded-[2rem]

                border

                text-left

                transition-all
                duration-500

                ${
                  isActive
                    ? `
                      w-[320px]

                      border-[var(--accent)]/15

                      bg-white

                      shadow-[0_25px_60px_rgba(254,0,0,0.10)]
                    `
                    : `
                      w-[220px]

                      border-black/[0.06]

                      bg-white/55

                      backdrop-blur-xl

                      hover:w-[260px]
                      hover:bg-white/75
                    `
                }
              `}
            >
              {/* ACTIVE GLOW */}
              {isActive && (
                <motion.div
                  layoutId="work-switcher"
                  className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_right,rgba(254,0,0,0.08),transparent_72%)]
                  "
                />
              )}

              {/* TOP LIGHT */}
              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-[linear-gradient(180deg,rgba(255,255,255,0.7),transparent_40%)]

                  opacity-70
                "
              />

              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  justify-between

                  px-6
                  py-5
                "
              >
                {/* LEFT */}
                <div className="flex flex-col">
                  {/* NUMBER */}
                  <span
                    className={`
                      text-[9px]

                      tracking-[0.35em]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[var(--accent)]"
                          : "text-[var(--muted)]"
                      }
                    `}
                  >
                    0{index + 1}
                  </span>

                  {/* LABEL */}
                  <span
                    className={`
                      mt-2

                      text-[13px]
                      uppercase

                      tracking-[0.24em]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[var(--text)]"
                          : "text-[var(--muted)]"
                      }
                    `}
                  >
                    {tab.label}
                  </span>

                  {/* DESC */}
                  <span
                    className="
                      mt-2

                      text-[11px]

                      text-[var(--muted)]
                    "
                  >
                    {tab.desc}
                  </span>
                </div>

                {/* RIGHT INDICATOR */}
                <div
                  className={`
                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-full

                    text-sm

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-[var(--accent)]

                          text-white

                          shadow-[0_0_30px_rgba(254,0,0,0.35)]
                        `
                        : `
                          border
                          border-black/10

                          text-[var(--muted)]
                        `
                    }
                  `}
                >
                  ↗
                </div>
              </div>

              {/* ACTIVE EDGE */}
              {isActive && (
                <div
                  className="
                    absolute
                    left-0
                    top-0

                    h-full
                    w-[4px]

                    bg-[var(--accent)]
                  "
                />
              )}
            </button>
          );
        })}
      </div>

      {/* MOBILE SWITCHER */}
      <div
        className="
          fixed
          bottom-5
          left-1/2
          z-[120]

          flex
          xl:hidden

          -translate-x-1/2

          items-center
          gap-2

          rounded-full

          border
          border-white/10

          bg-white/75

          p-2

          backdrop-blur-xl

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
      >
        {tabs.map((tab, index) => {
          const isActive =
            activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                lenisRef?.scrollTo(0, {
                  immediate: true,
                });

                setActiveTab(tab.id);
              }}
              className={`
                rounded-full

                px-4
                py-3

                text-[10px]
                uppercase

                tracking-[0.25em]

                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      bg-[var(--accent)]

                      text-white
                    `
                    : `
                      text-[var(--muted)]
                    `
                }
              `}
            >
              0{index + 1}
            </button>
          );
        })}
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -40,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {activeContent?.component}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}