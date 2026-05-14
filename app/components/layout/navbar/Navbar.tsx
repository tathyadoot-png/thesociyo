"use client";

import { useEffect, useState } from "react";

import NavBrand from "./NavbarBrand";
import MenuTrigger from "./MenuTrigger";
import FullscreenMenu from "./FullscreenMenu";
import ThemeToggle from "./ThemeToggle";
import NavAtmosphere from "./NavAtmosphere";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // always show at top
      if (currentScroll < 80) {
        setShowNav(true);
      }

      // scrolling down
      else if (currentScroll > lastScroll) {
        setShowNav(false);
      }

      // scrolling up
      else {
        setShowNav(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* TOP OVERLAY */}
      <header
        className={`
          fixed
          top-0
          left-0
          z-[999]
          w-full

          px-2
          md:px-10
          lg:px-16

          py-4

          pointer-events-none

          transition-all
          duration-500

          ${
            showNav
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        <div className="relative flex items-start justify-between">
          <NavAtmosphere />

          {/* LEFT */}
          <div className="pointer-events-auto">
            <NavBrand />
          </div>

          {/* RIGHT */}
          <div className="pointer-events-auto flex items-center gap-5">
            {/* <ThemeToggle /> */}

            <MenuTrigger
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <FullscreenMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}