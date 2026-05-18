"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import NavBrand from "./NavbarBrand";
import MenuTrigger from "./MenuTrigger";
import FullscreenMenu from "./FullscreenMenu";
import NavAtmosphere from "./NavAtmosphere";

import { links } from "./MenuLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 30);

      if (currentScroll < 80) {
        setShowNav(true);
      } else if (
        currentScroll > lastScroll
      ) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
<header
  className={`
    fixed
    top-0
    left-0
    z-[999]
    w-full

    transition-all
    duration-700

    ${
      showNav
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0"
    }
  `}
>
  <div
    className="
      relative

      flex
      items-center
      justify-between

      px-5
      md:px-10
      lg:px-16

      pt-5
    "
  >
    {/* ATMOSPHERE */}
    <NavAtmosphere />

    {/* LEFT BRAND */}
    <div className="relative z-20">
      <NavBrand />
    </div>

    {/* CENTER DESKTOP NAV */}
    <div
      className={`
        absolute
        left-1/2
        top-5

        z-10

        hidden
        lg:block

        -translate-x-1/2

        transition-all
        duration-700

        ${
          scrolled
            ? "scale-[0.98] opacity-100"
            : "scale-100 opacity-100"
        }
      `}
    >
      {/* OUTER FRAME */}
      <div
        className={`
          relative

          overflow-hidden

          rounded-full

          border

          px-3
          py-3

          transition-all
          duration-700

          ${
            scrolled
              ? `
                border-white/10
                bg-black/40
                backdrop-blur-2xl
                shadow-[0_0_60px_rgba(0,0,0,0.45)]
              `
              : `
                border-white/5
                bg-white/[0.03]
                backdrop-blur-xl
              `
          }
        `}
      >
        {/* CINEMATIC GLOW */}
        <div
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            h-20
            w-[20rem]

            -translate-x-1/2
            -translate-y-1/2

            bg-[#fe0000]/10

            blur-[70px]
          "
        />

        {/* MOVING LIGHT */}
        <div
          className="
            absolute
            inset-0

            opacity-40

            bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)]

            bg-[length:200%_100%]

            animate-[shine_8s_linear_infinite]
          "
        />

        {/* LINKS */}
        <div
          className="
            relative
            z-10

            flex
            items-center
            gap-1
          "
        >
          {links.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                group
                relative

                overflow-hidden

                rounded-full

                px-6
                py-3
              "
            >
              {/* HOVER BG */}
              <div
                className="
                  absolute
                  inset-0

                  scale-50

                  rounded-full

                  opacity-0

                  transition-all
                  duration-500

                  bg-[#fe0000]/12

                  group-hover:scale-100
                  group-hover:opacity-100
                "
              />

              {/* TOP LIGHT */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0

                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-[#fe0000]
                  to-transparent

                  opacity-0

                  transition-all
                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    text-[9px]

                    tracking-[0.35em]

                    text-white/20

                    transition-all
                    duration-500

                    group-hover:text-[#fe0000]
                  "
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    text-[11px]
                    uppercase

                    tracking-[0.35em]

                    text-white

                    transition-all
                    duration-500

                    group-hover:text-white
                  "
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div
      className="
        relative
        z-20

        hidden
        lg:flex

        items-center
        gap-5
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <div className="h-px w-10 bg-[#fe0000]" />

        <span
          className="
            text-[10px]
            uppercase

            tracking-[0.4em]

            text-white/75
          "
        >
          Digital Agency
        </span>
      </div>
    </div>

    {/* MOBILE */}
    <div
      className="
        relative
        z-20

        lg:hidden
      "
    >
      <MenuTrigger
        open={open}
        setOpen={setOpen}
      />
    </div>
  </div>
</header>

      {/* MOBILE FULLSCREEN MENU */}
      <FullscreenMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}