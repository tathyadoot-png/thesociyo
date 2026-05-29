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
  src="/logoBlack.png"
  alt="SOCIYO Communications"
  width={140}
  height={50}
  priority
  className="
    h-auto
    w-[80px]
    md:w-[130px]

    object-contain

    transition-all
    duration-500
md:-mt-2
mt-0
    group-hover:opacity-80
  "
/>
    </Link>
  );
}