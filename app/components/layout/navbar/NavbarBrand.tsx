"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBrand() {
  return (
    <Link
      href="/"
      className="
        group
        relative
        inline-flex
        items-center
      "
    >
      <Image
        src="/SociyoLogo_Agency_WhiteRed.png"
        alt="SOCIYO Communication"

        width={200}
        height={60}

        priority

        className="
          h-auto
          w-[100px]

          md:w-[160px]

          object-contain

          transition-all
          duration-500

          group-hover:opacity-80
        "
      />
    </Link>
  );
}