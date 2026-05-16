"use client";

import Link from "next/link";
import Image from "next/image";
import CinematicBackground from "@/app/components/cinematic/CinematicBackground";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowRight,
  FaXTwitter,
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
    icon: FaInstagram,
    href: "https://www.instagram.com/the_sociyo",
  },

  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/sociyo-communication-pvt-ltd",
  },

  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/theSociyo",
  },

  {
    icon: FaXTwitter,
    href: "https://x.com/theSociyo",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
   
       bg-[#05080F]
        text-white
      "
    >
      {/* CINEMATIC BG */}
<CinematicBackground />

{/* DARK OVERLAY */}
<div
  className="
    absolute
    inset-0

    bg-black/25
  "
/>

  
      
      <div
        className="
          relative
          z-10

     px-3
          py-20

    
         
        "
      >
        {/* TOP STRIP */}
        <div
          className="
            mb-16

            flex
            items-center
            justify-between

            border-b
            border-white/10

            pb-6
          "
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#fe0000]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]

                text-[#fe0000]
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

              text-white/20
            "
          >
            Influence
            <br />
            Narrative
            <br />
            Strategy
          </div>
        </div>

        {/* MAIN */}
        <div
          className="
            grid
            gap-20
px-5 md:px-36
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          "
        >
          {/* LEFT SIDE */}
          <div>
            {/* BIG LOGO */}
            <div className="overflow-hidden">
              <Image
                src="/SociyoLogo_Agency_WhiteRed.png"
                alt="Sociyo"

                width={700}
                height={220}

                priority

                className="
      h-auto
      w-[240px]

      sm:w-[120px]
      md:w-[220px]
      lg:w-[400px]

      object-contain
    "
              />
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-xl

                text-sm
                md:text-base

                leading-[2]

                text-white/50
              "
            >
              The future belongs to organizations that communicate with clarity, evolve with direction and build meaningful audience connection.

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
                      border-white/10

                      bg-white/[0.03]

                      transition-all
                      duration-500

                      hover:border-[#fe0000]
                    "
                  >
                    <span
                      className="
                        absolute
                        inset-0

                        translate-y-full

                        bg-[#fe0000]

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

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
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

                  text-[#fe0000]
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

                      text-white/60

                      transition-all
                      duration-500

                      hover:text-white
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

                  text-[#fe0000]
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

                      text-white/60

                      transition-all
                      duration-500

                      hover:text-white
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

                  text-[#fe0000]
                "
              >
                Work inquiries
              </h3>

              <p
                className="
                  mb-5

                  text-sm
                  leading-[1.8]

                  text-white/50
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

                    text-white

                    transition-all
                    duration-500

                    hover:text-[#fe0000]
                  "
                >
                  letstalk@thesociyo.com

                </a>

                <a
                  href="mailto:thesociyo@gmail.com"
                  className="
                    block

                    text-base

                    text-white

                    transition-all
                    duration-500

                    hover:text-[#fe0000]
                  "
                >

                  thesociyo@gmail.com
                </a>

                <a
                  href="tel:+919555106208"
                  className="
                    block

                    text-sm

                    text-white/60

                    transition-all
                    duration-500

                    hover:text-white
                  "
                >
                  Call: +91 95551 06208
                </a>
              </div>
            </div>

            {/* CAREER + ADDRESS */}
            <div>

              <h3
                className="
                  mb-6

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[#fe0000]
                "
              >
                Address
              </h3>
              {/* ADDRESS */}
              <div
                className="
                  mt-6

                  text-sm
                  leading-[1.9]

                  text-white/40
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
            border-white/10

            flex
            flex-col
            gap-3

            text-[10px]
            uppercase
            tracking-[0.35em]

            text-white/25

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            © {new Date().getFullYear()} Sociyo Communication
          </div>

          <div>
            Socially Yours
          </div>
        </div>
      </div>
    </footer>
  );
}