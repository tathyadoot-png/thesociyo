"use client";

import { useState } from "react";

import NavBrand from "./NavbarBrand";
import MenuTrigger from "./MenuTrigger";
import FullscreenMenu from "./FullscreenMenu";
import ThemeToggle from "./ThemeToggle";
import NavAtmosphere from "./NavAtmosphere";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP OVERLAY */}
      <header
        className="
          fixed
          top-0
          left-0
          z-[999]
          w-full
          px-6
          md:px-10
          lg:px-16
          py-4
          pointer-events-none
        "
      >
        <div className="relative flex items-start justify-between">
          <NavAtmosphere />

          {/* LEFT */}
          <div className="pointer-events-auto">
            <NavBrand />
          </div>

          {/* RIGHT */}
          <div className="pointer-events-auto flex items-center gap-5">
            <ThemeToggle />

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