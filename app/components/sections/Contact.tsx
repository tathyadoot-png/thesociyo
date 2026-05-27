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
md:px-10
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

    mx-auto
    max-w-[1650px]

    overflow-hidden

    rounded-[3rem]

    border
    border-[var(--border)]

    bg-[linear-gradient(135deg,#f7f3f1_0%,#f1ece8_100%)]

    shadow-[0_30px_100px_rgba(0,0,0,0.06)]
  "
>
  {/* GRID */}
  <div
    className="
      grid

      xl:grid-cols-[1fr_520px]
    "
  >
    {/* LEFT CONTENT */}
    <div
      className="
        relative

        flex
        flex-col
        justify-between

        px-6
        py-12

        sm:px-10
        lg:px-16
        xl:px-20
      "
    >
      {/* TOP */}
      <div className="flex items-center gap-5">
        <div
          className="
            h-px
            w-14

            bg-[var(--accent)]
          "
        />

        <span
          className="
            text-[10px]
            uppercase

            tracking-[0.45em]

            text-[var(--muted)]
          "
        >
          Sociyo Communications
        </span>
      </div>

      {/* HERO */}
      <div className="relative py-16 lg:py-28">
        {/* BG WORD */}
        <div
          className="
            pointer-events-none

            absolute
            -left-4
            top-0

            hidden
            lg:block

            font-display
            uppercase

            text-[12rem]

            leading-none
            tracking-[-0.12em]

            text-black/[0.03]
          "
        >
          TALK
        </div>

        {/* MAIN TITLE */}
        <div className="relative z-10">
          <h1
            className="
              max-w-[10ch]

              font-display
              uppercase

              text-[3.2rem]
              sm:text-[4.5rem]
              lg:text-[6rem]
              xl:text-[7rem]

              leading-[0.88]

              tracking-[-0.08em]

              text-[var(--text)]
            "
          >
            Start The
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
              Conversation
            </span>
          </h1>

          {/* DESC */}
          <p
            className="
              mt-10

              max-w-[42ch]

              text-base
              md:text-lg

              leading-[2]

              text-[var(--muted)]
            "
          >
            Let’s build systems, experiences and
            communication that people don’t just notice -
            but remember.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="
                rounded-full

                bg-[var(--accent)]

                px-8
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-white

                transition-all
                duration-500

                hover:scale-[1.04]
              "
            >
              Start Project
            </button>

            <button
              className="
                rounded-full

                border
                border-[var(--border)]

                bg-white/60

                px-8
                py-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-[var(--text)]

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-[var(--accent)]/20
              "
            >
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          flex
          items-center
          justify-between

          border-t
          border-[var(--border)]

          pt-6
        "
      >
        <span
          className="
            text-[10px]
            uppercase

            tracking-[0.42em]

            text-[var(--muted)]
          "
        >
          Strategy • Narrative • Influence
        </span>

        <span
          className="
            hidden
            md:block

            font-display

            text-5xl

            tracking-[-0.08em]

            text-black/[0.05]
          "
        >
          2026
        </span>
      </div>
    </div>

    {/* RIGHT PANEL */}
    <div
      className="
        relative

        border-t
        xl:border-t-0
        xl:border-l

        border-[var(--border)]

        bg-white/40

        backdrop-blur-2xl
      "
    >
      {/* PANEL */}
      <div
        className="
          flex
          h-full
          flex-col
          justify-between

          p-6
          sm:p-8
          lg:p-10
        "
      >
        {/* HEADER */}
        <div>
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>
              <span
                className="
                  text-[10px]
                  uppercase

                  tracking-[0.45em]

                  text-[var(--muted)]
                "
              >
                Let’s Begin
              </span>

              <h2
                className="
                  mt-5

                  font-display

                  text-[2.4rem]
                  md:text-[3rem]

                  leading-[0.92]

                  tracking-[-0.06em]
                "
              >
                Discover.
                <br />

                <span className="text-[var(--accent)]">
                  Decode.
                </span>

                <br />

                Deliver.
              </h2>
            </div>

            {/* ICON */}
            <div
              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-full

                border
                border-[var(--border)]

                bg-white

                text-xl

                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              "
            >
              ↗
            </div>
          </div>

          <p
            className="
              mt-8

              text-sm
              md:text-base

              leading-[1.9]

              text-[var(--muted)]
            "
          >
            Let’s create communication systems that move
            people, shape perception and build long-term
            influence.
          </p>
        </div>

        {/* CONTACTS */}
        <div className="mt-10 space-y-5">
          {/* EMAIL */}
          <div
            className="
              rounded-[2rem]

              border
              border-[var(--border)]

              bg-white/60

              p-6

              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.42em]

                text-[var(--muted)]
              "
            >
              Email
            </span>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:letstalk@thesociyo.com"
                className="
                  block

                  break-all

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

                  break-all

                  text-sm
                  md:text-base

                  text-[var(--text)]/60

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
              rounded-[2rem]

              border
              border-[var(--border)]

              bg-white/60

              p-6

              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.42em]

                text-[var(--muted)]
              "
            >
              Phone
            </span>

            <a
              href="tel:+919555106208"
              className="
                mt-5
                block

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

          {/* LOCATION */}
          <div
            className="
              rounded-[2rem]

              border
              border-[var(--border)]

              bg-white/60

              p-6

              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                uppercase

                tracking-[0.42em]

                text-[var(--muted)]
              "
            >
              Location
            </span>

            <p
              className="
                mt-5

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
</div>

        {/* MAIN */}
     <div
  className="
    mt-20

    grid
    gap-10
    xl:gap-14

    xl:grid-cols-[1.05fr_0.95fr]
    xl:items-stretch
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

      min-h-[320px]
      md:min-h-[420px]
      xl:min-h-[760px]

      shadow-[0_10px_50px_rgba(0,0,0,0.05)]
    "
  >
      <a
    href="https://maps.google.com/?q=SOCIYO+Communications+Bhopal"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-20"
    aria-label="Open Google Maps"
  />
    {/* MAP */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4349.259941416157!2d77.43814669999999!3d23.222881400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43b2a961c525%3A0x31120be3bbc5cf27!2sSOCIYO%20Communications!5e1!3m2!1sen!2sin!4v1778746488788!5m2!1sen!2sin"
      loading="lazy"
      className="
        absolute
        inset-0

        h-full
        w-full

        grayscale-[0.1]
        contrast-110
      "
    />

    {/* <iframe src="https://www.google.com/maps/embed?pb=!4v1779863696202!6m8!1m7!1sLsUyfHP6oAhz1SHG8oPPnw!2m2!1d23.22295458081733!2d77.43760193551738!3f92.43671744120823!4f18.303313199813488!5f0.4000000000000002" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

    {/* OVERLAY */}
    <div
      className="
        absolute
        inset-0

        bg-[linear-gradient(to_top,rgba(246,241,238,0.32),rgba(246,241,238,0.06),transparent)]
      "
    />

    {/* FLOAT CARD */}
    {/* <div
      className="
        absolute

        bottom-5
        left-5
        right-5

        md:bottom-8
        md:left-8
        md:right-auto

        max-w-sm

        rounded-[2rem]

        border
        border-white/10

        bg-black/40

        p-6

        backdrop-blur-2xl
      "
    >
      <div
        className="
          mb-4

          text-[10px]
          uppercase

          tracking-[0.4em]

          text-white/50
        "
      >
        Headquarters
      </div>

      <h3
        className="
          font-display

          text-[2rem]
          md:text-[2.6rem]

          leading-[0.9]

          tracking-[-0.06em]

          text-white
        "
      >
        SOCIYO
        <br />
        Communications
      </h3>

      <p
        className="
          mt-5

          text-sm

          leading-[1.9]

          text-white/70
        "
      >
        FI-026, 5th Floor, Bansal One
        <br />
        Bhopal, Madhya Pradesh – 462016
      </p>
    </div> */}
  </div>

  {/* FORM PANEL */}
  <div
    className="
      relative
      overflow-hidden

      rounded-[2.5rem]

      border
      border-[var(--border)]

      bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.58))]

      backdrop-blur-2xl

      p-6
      sm:p-8
      md:p-10
      xl:p-12

      shadow-[0_10px_50px_rgba(0,0,0,0.04)]
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

        blur-[120px]

        opacity-70
      "
    />

    <div className="relative z-10">
      {/* TOP */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <div
            className="
              text-[10px]
              uppercase

              tracking-[0.45em]

              text-[var(--accent)]
            "
          >
            Send Inquiry
          </div>

          <h2
            className="
              mt-6

              font-display

              text-[2.4rem]
              sm:text-[3rem]
              xl:text-[3.6rem]

              leading-[0.9]

              tracking-[-0.07em]

              text-[var(--text)]
            "
          >
            Let’s Build
            <br />

            <span className="text-[var(--accent)]">
              Something
            </span>

            <br />

            Meaningful.
          </h2>
        </div>

        {/* ICON */}
        <div
          className="
            hidden
            md:flex

            h-14
            w-14

            items-center
            justify-center

            rounded-full

            border
            border-[var(--border)]

            bg-white

            text-xl

            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
          "
        >
          ↗
        </div>
      </div>

      {/* DESC */}
      <p
        className="
          mt-8

          max-w-[34ch]

          text-sm
          md:text-base

          leading-[1.9]

          text-[var(--muted)]
        "
      >
        Whether you're building a brand, movement,
        campaign or ecosystem - we’d love to hear
        your vision.
      </p>

      {/* FORM */}
      <form className="mt-12 space-y-8">
        {/* NAME */}
        <div>
          <label
            className="
              mb-3
              block

              text-[10px]
              uppercase

              tracking-[0.38em]

              text-[var(--muted)]
            "
          >
            Your Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ram Kumar"
            className="
              w-full

              rounded-[1.5rem]

              border
              border-[var(--border)]

              bg-white/60

              px-6
              py-5

              text-base
              text-[var(--text)]

              outline-none

              transition-all
              duration-500

              placeholder:text-[var(--muted)]

              focus:border-[var(--accent)]
              focus:bg-white
            "
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            className="
              mb-3
              block

              text-[10px]
              uppercase

              tracking-[0.38em]

              text-[var(--muted)]
            "
          >
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="
              w-full

              rounded-[1.5rem]

              border
              border-[var(--border)]

              bg-white/60

              px-6
              py-5

              text-base
              text-[var(--text)]

              outline-none

              transition-all
              duration-500

              placeholder:text-[var(--muted)]

              focus:border-[var(--accent)]
              focus:bg-white
            "
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label
            className="
              mb-3
              block

              text-[10px]
              uppercase

              tracking-[0.38em]

              text-[var(--muted)]
            "
          >
            Project Vision
          </label>

          <textarea
            rows={6}
            placeholder="Tell us about your project or vision"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full

              resize-none

              rounded-[1.5rem]

              border
              border-[var(--border)]

              bg-white/60

              px-6
              py-5

              text-base
              text-[var(--text)]

              outline-none

              transition-all
              duration-500

              placeholder:text-[var(--muted)]

              focus:border-[var(--accent)]
              focus:bg-white
            "
          />
        </div>

        {/* BUTTON */}
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

            bg-[var(--accent)]

            px-10
            py-5

            text-[10px]
            uppercase

            tracking-[0.35em]

            text-white

            shadow-[0_10px_30px_rgba(255,0,0,0.18)]

            transition-all
            duration-500

            hover:scale-[1.03]
          "
        >
          <span className="relative z-10">
            Send Message
          </span>

          <span
            className="
              absolute
              inset-0

              translate-y-full

              bg-black/10

              transition-transform
              duration-500

              group-hover:translate-y-0
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