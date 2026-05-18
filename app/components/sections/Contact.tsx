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

    bg-[#18090B]

    text-white
  "
>
      {/* ATMOSPHERE */}
      {/* CINEMATIC BG */}
<CinematicBackground />

{/* DARK OVERLAY */}
<div
  className="
    absolute
    inset-0

    bg-[#18090B]/45
  "
/>

{/* RED GLOW */}
<div
  className="
    absolute
    left-1/2
    top-0

    h-[38rem]
    w-[38rem]

    -translate-x-1/2

    rounded-full

    bg-[#fe0000]/8

    blur-[160px]
  "
/>

{/* GRID */}
<div
  className="
    absolute
    inset-0

    opacity-[0.03]

    bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]

    bg-[size:90px_90px]
  "
/>

      <section
        className="
          relative
          z-10

          px-5
          pt-28
          pb-16

          md:px-40
    
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

{/* LEFT SIDE */}
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

  {/* FADED WORD */}
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

      text-white/[0.02]
    "
  >
    TALK
  </div>
</div>

  {/* RIGHT SIDE */}
  <div
    className="
      relative

      w-full
      max-w-2xl

      xl:ml-auto
    "
  >
    {/* PANEL */}
    <div
      className="
        relative
        overflow-hidden

       rounded-[2.8rem]

        border
        border-white/10

       bg-[#07111F]/60

        p-7
        sm:p-10
        md:p-12

        backdrop-blur-xl
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

          bg-[#ff2d2d]/10

          blur-[120px]
        "
      />

      {/* TOP */}
      <div className="relative z-10">
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

              bg-[#ff2d2d]
            "
          />

          <span
            className="
              text-[10px]
              uppercase

              tracking-[0.55em]

              text-white/35
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
            uppercase

            text-[2.6rem]
            sm:text-[3rem]
            md:text-[4rem]

            leading-[0.84]
            tracking-[-0.1em]

            text-white
          "
        >
          Discover.
          <br />

          <span
            className="
              text-transparent

              bg-gradient-to-b
              from-[#ff2d2d]
              via-[#ff8a8a]
              to-[#ffffff]

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

            text-white/60
          "
        >
          Let’s build systems, experiences and
          communication that people don’t just notice —
          but remember.
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
              border-white/10

              bg-[#0B1628]/60

              p-6
            "
          >
            <div
              className="
                mb-5

                text-[10px]
                uppercase

                tracking-[0.45em]

                text-white/30
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

                  text-white

                  transition-all
                  duration-500

                  hover:text-[#ff8a8a]
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

                  text-white/65

                  transition-all
                  duration-500

                  hover:text-[#ff8a8a]
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
              border-white/10

              bg-[#0B1628]/60

              p-6
            "
          >
            <div
              className="
                mb-5

                text-[10px]
                uppercase

                tracking-[0.45em]

                text-white/30
              "
            >
              Phone
            </div>

            <a
              href="tel:+919555106208"
              className="
                text-sm
                md:text-base

                text-white

                transition-all
                duration-500

                hover:text-[#ff8a8a]
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
            border-white/10

            bg-[#0B1628]/60

            p-6
          "
        >
          <div
            className="
              mb-5

              text-[10px]
              uppercase

              tracking-[0.45em]

              text-white/30
            "
          >
            Location
          </div>

          <p
            className="
              text-sm
              md:text-base

              leading-[1.9]

              text-white/70
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

              bg-[#07111F]/60
backdrop-blur-xl
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
transition-all
duration-500
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
transition-all
duration-500
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


