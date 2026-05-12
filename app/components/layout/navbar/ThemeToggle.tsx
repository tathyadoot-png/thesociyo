"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setDark(false);
    } else {
      root.classList.add("dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        group
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
      "
    >
      <div
        className="
          absolute
          inset-0
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:border-[#fe0000]
          group-hover:bg-[#fe0000]
        "
      />

      <div className="relative z-10 text-white">
        {dark ? (
          <SunMedium
            size={16}
            className="
              transition-transform
              duration-500
              group-hover:rotate-180
            "
          />
        ) : (
          <Moon
            size={16}
            className="
              transition-transform
              duration-500
              group-hover:-rotate-12
            "
          />
        )}
      </div>
    </button>
  );
}