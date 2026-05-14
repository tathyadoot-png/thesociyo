"use client";
import { useState } from "react";


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
        bg-black
        text-white
      "
    >
      {/* ATMOSPHERE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(254,0,0,0.12),transparent_38%)]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />



      <section
        className="
          relative
          z-10

          px-6
          pt-28
          pb-16

          md:px-10
          lg:px-16
        "
      >
        {/* TOP BAR */}
        <div
          className="
            mb-10

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
              Contact
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
            Narrative
            <br />
            Strategy
            <br />
            Systems
          </div>
        </div>

        {/* HERO */}
        <div
          className="
            flex
            flex-col
            gap-14

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* TITLE */}
          <div className="max-w-5xl">
            <h1
              className="
                font-display
                uppercase

                leading-[0.82]
                tracking-[-0.07em]

                text-[18vw]
                sm:text-[14vw]
                md:text-[10vw]
                lg:text-[7vw]

                text-white
              "
            >
              Start
              <br />
              The
              <br />
              Conversation
            </h1>
          </div>

          {/* INFO */}
          <div
            className="
              w-full
              max-w-md

              space-y-10
            "
          >
            <p
              className="
                text-sm
                md:text-base

                leading-[2]

                text-white/60
              "
            >
              Strategic communication, cinematic branding,
              influence architecture, political positioning,
              and narrative systems.
            </p>

            <div className="space-y-8">
              <div>
                <div
                  className="
                    mb-2
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-white/30
                  "
                >
                  Email
                </div>

                <a
                  href="mailto:letstalk@sociyo.com"
                  className="
                    text-xl
                    text-white
                    transition-opacity
                    duration-500
                    hover:opacity-60
                  "
                >
                  letstalk@sociyo.com
                </a>


              </div>

              <div>
                <div
                  className="
                    mb-2
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-white/30
                  "
                >
                  Location
                </div>

                <p className="text-xl text-white">
                  SOCIYO Communications Pvt Ltd
                  FI-026, 5th Floor, Bansal One
                  Bhopal, Madhya Pradesh (INDIA)
                  462016
                </p>
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

            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* MAP */}
          <div
            className="
              relative
              overflow-hidden

              rounded-[2rem]

              border
              border-white/10

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

           
                contrast-125
              "
            />



            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black
                via-black/20
                to-black/10
              "
            />
          </div>

          {/* FORM */}
          <div
            className="
              relative
              overflow-hidden

              rounded-[2rem]

              border
              border-white/10

              bg-white/[0.02]

              p-8
              md:p-10
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

                bg-[#fe0000]/10

                blur-[100px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  mb-10

                  text-[10px]
                  uppercase
                  tracking-[0.45em]

                  text-[#fe0000]
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
                      border-white/10

                      bg-transparent

                      pb-5

                      text-lg
                      text-white

                      outline-none


                      placeholder:text-white/25
                      focus:border-[#fe0000]
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
                      border-white/10

                      bg-transparent

                      pb-5

                      text-lg
                      text-white

                      outline-none

                      placeholder:text-white/25
                      focus:border-[#fe0000]
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
                      border-white/10

                      bg-transparent

                      pb-5

                      text-lg
                      text-white

                      outline-none

                      placeholder:text-white/25
                      focus:border-[#fe0000]
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

    border
    border-white/10

    px-8
    py-5

    text-xs
    uppercase
    tracking-[0.4em]

    text-white

    transition-all
    duration-500

    hover:border-[#fe0000]
  "
                >
                  <span className="relative z-10">
                    Send Message
                  </span>

                  <span
                    className="
      absolute
      inset-0
      w-0
      bg-[#fe0000]
      transition-all
      duration-500
      group-hover:w-full
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


