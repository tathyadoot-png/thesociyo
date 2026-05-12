"use client";

import Link from "next/link";

import {
    ArrowUpRight,
 
} from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        label: "Philosophy",
        href: "#philosophy",
      },
      {
        label: "Influence",
        href: "#influence",
      },
      {
        label: "Capabilities",
        href: "#capabilities",
      },
      {
        label: "Insights",
        href: "#insights",
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
    icon: ArrowUpRight,
    href: "https://instagram.com",
  },

  {
    icon: ArrowUpRight,
    href: "https://linkedin.com",
  },

  {
    icon: ArrowUpRight,
    href: "https://facebook.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[color:var(--border)]
        bg-[var(--background)]
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(254,0,0,0.12),transparent_60%)]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          px-6
          md:px-12
          lg:px-20
          py-20
        "
      >
        {/* Top Area */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.5fr_1fr]
            gap-20
            pb-20
            border-b
            border-[color:var(--border)]
          "
        >
          {/* Left */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#fe0000]
                mb-6
              "
            >
              Strategic Communication
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                leading-[0.9]
                tracking-[-0.07em]
                font-black
                uppercase
                max-w-4xl
              "
            >
              Influence
              <br />
              begins with
              <br />
              perception.
            </h2>

            <p
              className="
                mt-8
                text-lg
                md:text-xl
                leading-relaxed
                text-[var(--muted)]
                max-w-2xl
              "
            >
              Sociyo Communication is a strategic consultancy
              helping brands, leaders, and institutions build
              authority through communication, narrative, and
              influence systems.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#fe0000]
                px-6
                py-4
                text-sm
                uppercase
                tracking-[0.18em]
                text-white
                transition-all
                duration-500
                hover:scale-[1.02]
                shadow-[0px_0px_40px_rgba(254,0,0,0.2)]
              "
            >
              Start a Conversation

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>

          {/* Right */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-12
            "
          >
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted)]
                    mb-6
                  "
                >
                  {group.title}
                </h3>

                <div className="space-y-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="
                        block
                        text-lg
                        tracking-[-0.03em]
                        hover:text-[#fe0000]
                        transition-colors
                        duration-500
                      "
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Area */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-10
            pt-10
          "
        >
          {/* Left */}
          <div>
            <h3
              className="
                text-xl
                font-black
                uppercase
                tracking-[-0.05em]
              "
            >
              SOCIYO
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                text-[var(--muted)]
              "
            >
              FI-026, 5th Floor, Bansal One,
              <br />
              Bhopal, Madhya Pradesh — 462016
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[color:var(--border)]
                    bg-white/5
                    transition-all
                    duration-500
                    hover:border-[#fe0000]
                    hover:bg-[#fe0000]
                  "
                >
                  <Icon
                    size={18}
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p
            className="
              text-sm
              uppercase
              tracking-[0.15em]
              text-[var(--muted)]
            "
          >
            © 2026 SOCIYO Communications
          </p>
        </div>
      </div>
    </footer>
  );
}