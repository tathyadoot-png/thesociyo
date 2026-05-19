"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

interface CinematicSectionHeadingProps {
  sectionLabel?: string;
  heading: {
    first?: string;
    highlight?: string;
    last?: string;
  };
  shortText?: string;
  className?: string;
}

export default function CinematicSectionHeading({
  sectionLabel,
  heading,
  shortText,
  className = "",
}: CinematicSectionHeadingProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  const headingY = useTransform(smooth, [0, 1], [120, -40]);

  const headingScale = useTransform(
    smooth,
    [0, 1],
    [0.92, 1]
  );

  const headingOpacity = useTransform(
    smooth,
    [0, 0.2],
    [0, 1]
  );

  const blurValue = useTransform(
    smooth,
    [0, 0.15],
    [12, 0]
  );

  const blurFilter = useTransform(
    blurValue,
    (value) => `blur(${value}px)`
  );

  return (
    <div
      ref={sectionRef}
      className={`
        relative

        mb-12
        md:mb-16
        lg:mb-20

        flex
        flex-col

        gap-8
        md:gap-10
        xl:gap-16

        xl:flex-row
        xl:items-end
        xl:justify-between

        ${className}
      `}
    >
      {/* LEFT */}
      <div className="max-w-full xl:max-w-[850px]">
        {/* LABEL */}
        {sectionLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              mb-6
              md:mb-8

              flex
              items-center
              gap-5
            "
          >
            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="
                h-px

                bg-gradient-to-r
                from-[var(--accent-light)]/40
                to-transparent
              "
            />

            {/* LABEL */}
            <div className="flex items-center gap-3">
              {/* DOT */}
              <div
                className="
                  h-1.5
                  w-1.5

                  rounded-full

                  bg-[var(--accent)]

                  shadow-[0_0_14px_rgba(255,46,87,0.7)]
                "
              />

              {/* TEXT */}
              <span
                className="
                  font-body

                  text-[10px]
                  md:text-[11px]

                  uppercase
                  tracking-[0.5em]

                  text-[var(--muted)]
                "
              >
                {sectionLabel}
              </span>
            </div>
          </motion.div>
        )}

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            y: headingY,
            scale: headingScale,
            opacity: headingOpacity,
            filter: blurFilter,
          }}
          className="
            relative

            font-display
            uppercase

            text-[clamp(3.5rem,11vw,5.8rem)]
            sm:text-[clamp(4rem,10vw,6.5rem)]
            lg:text-[clamp(4.5rem,7vw,7rem)]

            leading-[0.82]

            tracking-[-0.06em]
            md:tracking-[-0.075em]

            text-[var(--text)]
          "
        >
          {/* FIRST */}
          {heading.first}

          {/* HIGHLIGHT */}
          {heading.highlight && (
            <>
              <br />

              <span
                className="
                  relative

                  text-transparent
                  bg-clip-text

                  bg-gradient-to-b
                  from-[var(--accent-light)]
                  via-[var(--accent)]
                  to-[#ffd8df]

                  drop-shadow-[0_0_35px_rgba(255,46,87,0.28)]
                "
              >
                {heading.highlight}
              </span>
            </>
          )}

          {/* LAST */}
          {heading.last && (
            <>
              <br />
              {heading.last}
            </>
          )}

          {/* AMBIENT GLOW */}
          <div
            className="
              pointer-events-none

              absolute
              inset-0

              -z-10

              bg-[radial-gradient(circle_at_center,var(--ambient-1),transparent_70%)]

              blur-3xl
              opacity-70
            "
          />
        </motion.h2>
      </div>

      {/* RIGHT TEXT */}
      {shortText && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            max-w-full
            xl:max-w-[380px]

            text-sm
            sm:text-base
            md:text-[15px]
            lg:text-base

            leading-[1.9]

            text-[var(--muted)]
          "
        >
          {shortText}
        </motion.p>
      )}
    </div>
  );
}