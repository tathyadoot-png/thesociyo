"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowRight,
  FaXTwitter,
   FaYoutube,
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        label: "Philosophy",
        href: "/philosophy",
      },
      {
        label: "Influence",
        href: "/influence",
      },
      {
        label: "Capabilities",
        href: "/capabilities",
      },
      {
        label: "Insights",
        href: "/insights",
      },
    ],
  },

  {
    title: "Services",
    links: [
      {
        label: "Strategic Consultancy",
        href: "/",
      },
      {
        label: "Political Communication",
        href: "/",
      },
      {
        label: "Brand Positioning",
        href: "/",
      },
      {
        label: "Digital Campaigns",
        href: "/",
      },
    ],
  },
];

const socials = [
    {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/the-sociyo-com",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/thesociyocom",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/theSOCIYOcom",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/theSOCIYOcom",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@theSOCIYOcom",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-[#151210]

        text-[#F5EEE8]
      "
    >
      {/* NOISE */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.015]

          mix-blend-overlay

        "
      />

      {/* SUBTLE RED AMBIENT */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(254,0,0,0.035),transparent_60%)]
        "
      />

      <div
        className="
          relative
          z-10

          px-3
          md:px-8
          lg:px-12

          py-5
        "
      >
        {/* TOP STRIP */}
        <div
          className="
            mb-20
            md:mb-28

            flex
            items-center
            justify-between

            border-b
            border-white/[0.08]

            pb-6
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                h-px
                w-16

                bg-[linear-gradient(to_right,var(--accent),transparent)]
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]

                text-[var(--accent)]
              "
            >
              Socially Yours
            </span>
          </div>

          <div
            className="
              hidden
              lg:block

              text-right

              text-[10px]
              uppercase
              leading-[2]
              tracking-[0.45em]

              text-[#B8AEA8]
            "
          >
            Influence
            <br />
            Narrative
            <br />
            Strategy
          </div>
        </div>

        {/* BG WORD */}
        <div
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            whitespace-nowrap

            font-display
            uppercase

            text-[26vw]
            md:text-[18vw]

            leading-none
            tracking-[-0.14em]

            text-white/[0.015]
          "
        >
          SOCIYO
        </div>

        {/* MAIN */}
        <div
          className="
            grid
            gap-24
            lg:gap-32

       
lg:grid-cols-[0.9fr_1.1fr]
xl:grid-cols-[0.85fr_1.15fr]
            lg:items-start
          "
        >
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <div className="overflow-hidden">
              <Image
                src="/SociyoLogo_Agency_WhiteRed.png"
                alt="Sociyo"
                width={700}
                height={220}
                priority
                className="
                  h-auto

                  w-[140px]
sm:w-[180px]
md:w-[240px]
lg:w-[300px]
xl:w-[340px]

                  object-contain
                "
              />
            </div>

            {/* DESC */}
            <p
              className="
                mt-8
      max-w-[30rem]

                text-sm
                md:text-base

                leading-[2]

                text-[#B8AEA8]
              "
            >
              The future belongs to organizations
              that communicate with clarity, evolve
              with direction and build meaningful
              audience connection.
            </p>

            {/* SOCIALS */}
            <div className="mt-10 flex items-center gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="
                      group

                      relative

                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      overflow-hidden
                      rounded-full

                      border
                      border-white/[0.08]

                      bg-white/[0.02]

                      backdrop-blur-xl

                      transition-all
                      duration-500

                      hover:border-[var(--accent)]
                      hover:bg-[var(--accent)]/[0.06]
                    "
                  >
                    <span
                      className="
                        absolute
                        inset-0

                        translate-y-full

                        bg-[var(--accent)]/90

                        transition-transform
                        duration-500

                        group-hover:translate-y-0
                      "
                    />

                    <Icon
                      size={16}
                      className="
                        relative
                        z-10

                        text-[#EDE4DD]

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:text-white
                      "
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              gap-14

              sm:grid-cols-2
            "
          >
            {/* NAVIGATION */}
            <div>
              <h3
                className="
                  mb-6

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[var(--accent)]
                "
              >
                Navigation
              </h3>

              <div className="space-y-4">
                {footerLinks[0].links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="
                      group

                      flex
                      items-center
                      gap-2

                      text-sm

                      text-[#B8AEA8]

                      transition-all
                      duration-500

                      hover:text-[var(--accent)]
                    "
                  >
                    <span>{link.label}</span>

                    <FaArrowRight
                      size={10}
                      className="
                        opacity-0

                        transition-all
                        duration-500

                        group-hover:translate-x-1
                        group-hover:-translate-y-[2px]
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3
                className="
                  mb-6

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[var(--accent)]
                "
              >
                Services
              </h3>

              <div className="space-y-4">
                {footerLinks[1].links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="
                      group

                      flex
                      items-center
                      gap-2

                      text-sm

                      text-[#B8AEA8]

                      transition-all
                      duration-500

                      hover:text-[var(--accent)]
                    "
                  >
                    <span>{link.label}</span>

                    <FaArrowRight
                      size={10}
                      className="
                        opacity-0

                        transition-all
                        duration-500

                        group-hover:translate-x-1
                        group-hover:-translate-y-[2px]
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* WORK */}
            <div>
              <h3
                className="
                  mb-6

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[var(--accent)]
                "
              >
                Work inquiries
              </h3>

              <p
                className="
                  mb-5

                  text-sm
                  leading-[1.8]

                  text-[#B8AEA8]
                "
              >
                Interested in working with us?
              </p>

              <div className="space-y-2">
                <a
                  href="mailto:letstalk@thesociyo.com"
                  className="
                    block

                    text-base

                    text-[#EDE4DD]

                    transition-all
                    duration-500

                    hover:text-[var(--accent)]
                  "
                >
                  letstalk@thesociyo.com
                </a>

                <a
                  href="mailto:thesociyo@gmail.com"
                  className="
                    block

                    text-base

                    text-[#EDE4DD]

                    transition-all
                    duration-500

                    hover:text-[var(--accent)]
                  "
                >
                  thesociyo@gmail.com
                </a>

                <a
                  href="tel:+919555106208"
                  className="
                    block

                    text-sm

                    text-[#B8AEA8]

                    transition-all
                    duration-500

                    hover:text-[var(--accent)]
                  "
                >
                  Call: +91 95551 06208
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <h3
                className="
                  mb-6

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[var(--accent)]
                "
              >
                Address
              </h3>

              <div
                className="
                  mt-6

                  text-sm
                  leading-[1.9]

                  text-[#B8AEA8]
                "
              >
                SOCIYO Communications Pvt Ltd
                <br />
                FI-026, 5th Floor, Bansal One
                <br />
                Bhopal, Madhya Pradesh (INDIA)
                <br />
                462016
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
     <div
  className="
    mt-16
    pt-6

    border-t
    border-white/[0.08]

    flex
    flex-col
    gap-3

    text-[10px]
    uppercase
    tracking-[0.35em]

    text-white/40

    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>
  <div>
    © {new Date().getFullYear()} Sociyo Communications.
    All Rights Reserved.
  </div>

  <div>Socially Yours</div>
</div>
      </div>
    </footer>
  );
}