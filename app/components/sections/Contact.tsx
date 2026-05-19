"use client";

import { useState } from "react";

import CinematicBackground from "@/app/components/cinematic/CinematicBackground";
import CinematicSectionHeading from "@/app/components/ui/CinematicSectionHeading";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      {/* BG */}
      <CinematicBackground />

      {/* SOFT OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_bottom,rgba(246,241,238,0.82),rgba(246,241,238,0.96))]
        "
      />

      {/* AMBIENT */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,var(--ambient-1)_0%,transparent_65%)]

          opacity-60
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.022]

          bg-[linear-gradient(rgba(17,17,19,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,19,0.04)_1px,transparent_1px)]

          bg-[size:90px_90px]
        "
      />

      {/* CONTENT */}
      <section
        className="
          relative
          z-10

          mx-auto
          w-[94%]
          max-w-[1600px]

          pt-28
          pb-16
        "
      >
        {/* HERO */}
        <div
          className="
            relative

            grid
            gap-16

            xl:grid-cols-[0.85fr_1fr]
            xl:gap-24
            xl:items-center
          "
        >
          {/* LEFT */}
          <div
            className="
              relative

              flex
              flex-col
              justify-center
            "
          >
            <CinematicSectionHeading
              sectionLabel="Sociyo Communications"
              heading={{
                first: "Start",
                highlight: "The",
                last: "Conversation",
              }}
              shortText="
                Let’s build systems, experiences and
                communication that people don’t just notice —
                but remember.
              "
              className="
                !mb-0
                !pb-0
              "
            />

            {/* BG WORD */}
            <div
              className="
                pointer-events-none

                absolute
                -left-10
                bottom-0

                font-display
                uppercase

                text-[24vw]

                leading-none
                tracking-[-0.14em]

                text-[var(--text)]/[0.02]
              "
            >
              TALK
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              relative

              w-full
              max-w-2xl

              xl:ml-auto
            "
          >
            <div
              className="
                relative
                overflow-hidden

                rounded-[2.5rem]

                border
                border-[var(--border)]

                bg-[var(--glass)]

                p-7
                sm:p-10
                md:p-12

                backdrop-blur-2xl

                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  right-0
                  top-0

                  h-52
                  w-52

                  bg-[var(--ambient-1)]

                  blur-[100px]

                  opacity-70
                "
              />

              <div className="relative z-10">
                {/* TOP */}
                <div
                  className="
                    mb-8

                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      h-px
                      w-10

                      bg-[var(--accent)]
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      uppercase

                      tracking-[0.55em]

                      text-[var(--muted)]
                    "
                  >
                    Let’s Begin
                  </span>
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mb-8

                    font-display

                    text-[2.6rem]
                    sm:text-[3rem]
                    md:text-[4rem]

                    leading-[0.84]
                    tracking-[-0.08em]

                    text-[var(--text)]
                  "
                >
                  Discover.
                  <br />

                  <span
                    className="
                      text-transparent

                      bg-gradient-to-b
                      from-[var(--accent-light)]
                      to-[var(--accent)]

                      bg-clip-text
                    "
                  >
                    Decode.
                  </span>

                  <br />

                  Deliver.
                </h2>

                {/* DESC */}
                <p
                  className="
                    max-w-lg

                    text-sm
                    sm:text-base
                    md:text-lg

                    leading-[2]

                    text-[var(--muted)]
                  "
                >
                  Let’s build systems, experiences and communication
                  that people don’t just notice — but remember.
                </p>

                {/* CONTACT GRID */}
                <div
                  className="
                    mt-12

                    grid
                    gap-5

                    sm:grid-cols-2
                  "
                >
                  {/* EMAIL */}
                  <div
                    className="
                      rounded-[1.8rem]

                      border
                      border-[var(--border)]

                      bg-[rgba(255,255,255,0.42)]

                      p-6

                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        mb-5

                        text-[10px]
                        uppercase

                        tracking-[0.45em]

                        text-[var(--muted)]
                      "
                    >
                      Email
                    </div>

                    <div className="space-y-3">
                      <a
                        href="mailto:letstalk@thesociyo.com"
                        className="
                          block

                          text-sm
                          md:text-base

                          text-[var(--text)]

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

                          text-sm
                          md:text-base

                          text-[var(--text)]/65

                          transition-all
                          duration-500

                          hover:text-[var(--accent)]
                        "
                      >
                        thesociyo@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div
                    className="
                      rounded-[1.8rem]

                      border
                      border-[var(--border)]

                      bg-[rgba(255,255,255,0.42)]

                      p-6

                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        mb-5

                        text-[10px]
                        uppercase

                        tracking-[0.45em]

                        text-[var(--muted)]
                      "
                    >
                      Phone
                    </div>

                    <a
                      href="tel:+919555106208"
                      className="
                        text-sm
                        md:text-base

                        text-[var(--text)]

                        transition-all
                        duration-500

                        hover:text-[var(--accent)]
                      "
                    >
                      +91 9555-106208
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div
                  className="
                    mt-5

                    rounded-[1.8rem]

                    border
                    border-[var(--border)]

                    bg-[rgba(255,255,255,0.42)]

                    p-6

                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      mb-5

                      text-[10px]
                      uppercase

                      tracking-[0.45em]

                      text-[var(--muted)]
                    "
                  >
                    Location
                  </div>

                  <p
                    className="
                      text-sm
                      md:text-base

                      leading-[1.9]

                      text-[var(--text)]/70
                    "
                  >
                    FI-026, 5th Floor, Bansal One
                    <br />
                    Bhopal, Madhya Pradesh – 462016
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div
          className="
            mt-20

            grid
            gap-8

            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* MAP */}
          <div
            className="
              relative
              overflow-hidden

              rounded-[2.5rem]

              border
              border-[var(--border)]

              min-h-[420px]
              lg:min-h-[680px]
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4349.259941416157!2d77.43814669999999!3d23.222881400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43b2a961c525%3A0x31120be3bbc5cf27!2sSOCIYO%20Communications!5e1!3m2!1sen!2sin!4v1778746488788!5m2!1sen!2sin"
              loading="lazy"
              className="
                absolute
                inset-0
                h-full
                w-full

                contrast-110
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-[linear-gradient(to_top,rgba(246,241,238,0.24),rgba(246,241,238,0.04),transparent)]
              "
            />
          </div>

          {/* FORM */}
          <div
            className="
              relative
              overflow-hidden

              rounded-[2.5rem]

              border
              border-[var(--border)]

              bg-[var(--glass)]

              backdrop-blur-2xl

              p-8
              md:p-10

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                right-0
                top-0

                h-40
                w-40

                bg-[var(--ambient-1)]

                blur-[90px]

                opacity-70
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mb-10

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[var(--accent)]
                "
              >
                Send Inquiry
              </div>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="
                      w-full

                      border-b
                      border-[rgba(17,17,19,0.12)]

                      bg-transparent

                      pb-5

                      text-lg
                      text-[var(--text)]

                      outline-none

                      transition-all
                      duration-500

                      placeholder:text-[var(--muted)]

                      focus:border-[var(--accent)]
                    "
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="
                      w-full

                      border-b
                      border-[rgba(17,17,19,0.12)]

                      bg-transparent

                      pb-5

                      text-lg
                      text-[var(--text)]

                      outline-none

                      transition-all
                      duration-500

                      placeholder:text-[var(--muted)]

                      focus:border-[var(--accent)]
                    "
                  />
                </div>

                <div>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project or vision"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="
                      w-full

                      resize-none

                      border-b
                      border-[rgba(17,17,19,0.12)]

                      bg-transparent

                      pb-5

                      text-lg
                      text-[var(--text)]

                      outline-none

                      transition-all
                      duration-500

                      placeholder:text-[var(--muted)]

                      focus:border-[var(--accent)]
                    "
                  />
                </div>

                <a
                  href={`mailto:letstalk@sociyo.com?subject=${encodeURIComponent(
                    `New Inquiry from ${name}`
                  )}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                  )}`}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    overflow-hidden

                    rounded-full

                    border
                    border-[var(--border)]

                    bg-[rgba(255,255,255,0.45)]

                    px-8
                    py-5

                    text-xs
                    uppercase
                    tracking-[0.35em]

                    text-[var(--text)]

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:border-[var(--accent)]/20
                    hover:bg-[var(--soft-accent)]
                  "
                >
                  <span
                    className="
                      relative
                      z-10

                      transition-colors
                      duration-500

                      group-hover:text-[var(--accent)]
                    "
                  >
                    Send Message
                  </span>

                  <span
                    className="
                      absolute
                      inset-0

                      bg-[var(--soft-accent)]

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  />
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}