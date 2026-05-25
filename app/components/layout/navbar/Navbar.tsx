"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBrand from "./NavbarBrand";
import MenuTrigger from "./MenuTrigger";
import FullscreenMenu from "./FullscreenMenu";
import NavAtmosphere from "./NavAtmosphere";

import { links } from "./MenuLinks";

export default function Navbar() {
  const pathname = usePathname();
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

      px-2
      md:px-10
      lg:px-16
pt-0
    
    "
  >
    {/* ATMOSPHERE */}
    <NavAtmosphere />

    {/* LEFT BRAND */}
    <div className="relative  z-20">
      <NavBrand />
    </div>

{/* CENTER DESKTOP NAV */}
<div
  className={`
    absolute
    left-1/2
    top-6

    z-30

    hidden
    lg:block

    -translate-x-1/2

    transition-all
    duration-700

    ${
      scrolled
        ? "scale-[0.96] translate-y-0"
        : "scale-100 translate-y-0"
    }
  `}
>
  <div
    className={`
      relative

      flex
      items-center

      overflow-hidden

      rounded-full

      border

      px-4
      py-[0.95rem]

      transition-all
      duration-700

      ${
        scrolled
          ? `
            border-white/20
            bg-black/65
            backdrop-blur-2xl

            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          `
          : `
            border-black/5
            bg-white/88
            backdrop-blur-xl

            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          `
      }
    `}
  >
    {/* RED AMBIENT */}
    <div
      className="
        pointer-events-none

        absolute
        left-1/2
        top-1/2

        h-24
        w-[26rem]

        -translate-x-1/2
        -translate-y-1/2

        bg-[radial-gradient(circle,rgba(254,0,0,0.14),transparent_72%)]

        blur-[70px]
      "
    />

    {/* GLOSS */}
    <div
      className="
        pointer-events-none

        absolute
        inset-0

        bg-[linear-gradient(180deg,rgba(255,255,255,0.35),transparent_45%)]

        opacity-60
      "
    />
{/* LINKS */}
<div className="relative z-10 flex items-center">
  {links.map((item, index) => {
    const isActive =
      pathname === item.href;

    return (
      <div
        key={item.label}
        className="flex items-center"
      >
        <Link
          href={item.href}
          className={`
            group
            relative

            flex
            items-center
            gap-3

            rounded-full

            px-6
            py-2

            transition-all
            duration-500

            ${
              isActive
                ? `
               bg-[linear-gradient(135deg,rgba(254,0,0,0.32),rgba(254,0,0,0.12))]
                `
                : ""
            }
          `}
        >
          {/* HOVER BG */}
          <div
            className={`
              absolute
              inset-0

              rounded-full

              transition-all
              duration-500

             bg-[linear-gradient(135deg,rgba(254,0,0,0.32),rgba(254,0,0,0.12))]

              ${
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
              }
            `}
          />

          {/* ACTIVE LINE */}
          <div
            className={`
              absolute
              left-1/2
              bottom-1

              h-[2px]

              -translate-x-1/2

              rounded-full

              bg-[var(--accent)]

              transition-all
              duration-500

              ${
                isActive
                  ? "w-8"
                  : "w-0 group-hover:w-8"
              }
            `}
          />

          {/* NUMBER */}
          <span
            className={`
              relative
              z-10

              text-[10px]

              font-medium

              tracking-[0.32em]

              transition-all
              duration-500

              ${
                isActive
                  ? "text-white"
                  : scrolled
                  ? "text-white/45"
                  : "text-black/45"
              }

              group-hover:text-[var(--accent)]
            `}
          >
            0{index + 1}
          </span>

          {/* LABEL */}
          <span
            className={`
              relative
              z-10
font-semibold
              text-[12px]
              uppercase

              tracking-[0.34em]

              transition-all
              duration-500

              ${
                isActive
                  ? "text-white"
                  : scrolled
                  ? "text-white/90"
                  : "text-black/80"
              }

              group-hover:text-[var(--accent)]
            `}
          >
            {item.label}
          </span>
        </Link>

        {/* DIVIDER */}
        {index !== links.length - 1 && (
          <div
            className={`
              mx-1

              h-5
              w-px

              ${
                scrolled
                  ? "bg-white/10"
                  : "bg-black/[0.06]"
              }
            `}
          />
        )}
      </div>
    );
  })}
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
        <div className="h-px w-10 bg-[var(--accent)]" />

        <span
          className="
            text-[10px]
            uppercase

            tracking-[0.4em]

            text-[var(--text)]/75
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