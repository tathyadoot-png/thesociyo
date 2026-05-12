const theme = {
  dark: {
    background: "bg-[#111113]",
    surface: "bg-[#18181B]",
    text: "text-white",
    muted: "text-black/60 dark:text-white/60",
    border: "border-black/10 dark:border-white/10",
    accent: "#fe0000",
  },

  light: {
    background: "bg-white",
    surface: "bg-[#F8F8F8]",
    text: "text-[#111113]",
    muted: "text-black/60",
    border: "border-black/10",
    accent: "#fe0000",
  },
};

export default function SociyoHomepageStructure() {
  return (
    <main className="bg-white dark:bg-[#111113] text-[#111113] dark:text-white overflow-hidden transition-colors duration-500">
      {/* ========================================
          1. OPENING CINEMATIC HERO
      ======================================== */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-8 border-b border-black/10 dark:border-white/10 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#fe0000]/15 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#fe0000]/10 blur-3xl rounded-full" />
        </div>

        {/* Top Meta */}
        <div className="relative z-10 flex items-center justify-between">
          <p className="uppercase    text-xs text-black/50 dark:text-white/50">
            Bhopal · Est. 2018 · Strategic Communication
          </p>

          <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-[#fe0000] hover:text-white transition-all duration-500">
            Start a Conversation
          </button>
        </div>

        {/* Main Typography */}
        <div className="relative z-10 flex flex-col justify-center flex-1 py-16 md:py-24">
          <div className="space-y-8">
            <div>
              <h1 className="text-[4rem] md:text-[9rem] lg:text-[12rem] leading-[0.9]    font-display font-normal uppercase">
                Strategies
              </h1>
              <p className="text-black/60 dark:text-white/60 uppercase    text-sm md:text-base ml-2">
                shape perception
              </p>
            </div>

            <div className="pl-10 md:pl-24">
              <h1 className="text-[4rem] md:text-[9rem] lg:text-[12rem] leading-[0.9]    font-display font-normal uppercase text-[#fe0000]">
                Stories
              </h1>
              <p className="text-black/60 dark:text-white/60 uppercase    text-sm md:text-base ml-2">
                build influence
              </p>
            </div>

            <div>
              <h1 className="text-[4rem] md:text-[9rem] lg:text-[12rem] leading-[0.9]    font-display font-normal uppercase">
                Success
              </h1>
              <p className="text-black/60 dark:text-white/60 uppercase    text-sm md:text-base ml-2">
                moves markets
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] uppercase">
              SOCIYO
            </h2>
            <p className="text-black/50 dark:text-white/50 uppercase   mt-2 text-xs md:text-sm">
              Strategic Communication
            </p>
          </div>

          <p className="text-base md:text-lg text-black/75 dark:text-white/70 leading-relaxed max-w-2xl lg:ml-auto">
            Sociyo Communication is a full-service strategic consultancy
            helping brands, leaders, and institutions shape perception,
            build authority, and create lasting influence.
          </p>
        </div>
      </section>

      {/* ========================================
          2. PHILOSOPHY / PERCEPTION SECTION
      ======================================== */}
      <section className="relative px-6 md:px-12 lg:px-20 py-28 md:py-40 border-b border-black/10 dark:border-white/10 overflow-hidden">
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] dark:opacity-[0.03]">
          <h2 className="text-[20vw] font-display font-normal uppercase   ">
            PERCEPTION
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="sticky top-20">
            <p className="uppercase    text-xs text-[#fe0000] mb-6">
              Philosophy
            </p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.07em] font-display font-normal uppercase text-[#111113] dark:text-white">
              Perception
              <br />
              shapes
              <br />
              reality.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-16">
            {[
              {
                title: "Visibility creates authority",
                desc: "People trust what they repeatedly see, hear, and experience. Strategic visibility shapes long-term credibility.",
              },
              {
                title: "Stories move people",
                desc: "Whether in politics, business, or social impact — communication changes how audiences think, feel, and act.",
              },
              {
                title: "Influence is engineered",
                desc: "Public perception is never accidental. It is built through consistency, narrative, timing, and strategic communication.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-l border-black/10 dark:border-white/10 pl-8"
              >
                <h3 className="text-2xl md:text-4xl font-bold tracking-[-0.04em] mb-4 uppercase">
                  {item.title}
                </h3>

                <p className="text-black/70 dark:text-white/65 text-lg leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          3. THREE ARENAS OF INFLUENCE
      ======================================== */}
      <section className="border-b border-black/10 dark:border-white/10">
        {[
          {
            label: "Political Communication",
            title: "We don't just run campaigns.",
            subtitle: "We engineer momentum.",
            desc: "Winning an election takes more than visibility. It takes the right message reaching the right people at the right moment.",
            tone: "from-[#fe0000]/20 via-[#111113] to-[#111113]",
          },
          {
            label: "Corporate Communication",
            title: "Your brand already speaks.",
            subtitle: "We shape how it's understood.",
            desc: "Trust is built through consistency, positioning, and communication systems designed for long-term authority.",
            tone: "from-white/5 to-black",
          },
          {
            label: "Social Impact Communication",
            title: "Impact grows",
            subtitle: "when people believe in it.",
            desc: "Communication helps missions reach people, build trust, and create meaningful public engagement.",
            tone: "from-[#fe0000]/10 via-[#111113] to-[#111113]",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`min-h-screen bg-gradient-to-br ${item.tone} px-6 md:px-12 lg:px-20 py-24 flex items-center border-b border-black/5 dark:border-white/5`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
              <div>
                <p className="uppercase    text-xs text-[#fe0000] mb-8">
                  {item.label}
                </p>

                <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.07em] font-display font-normal uppercase text-[#111113] dark:text-white">
                  {item.title}
                </h2>

                <h3 className="text-3xl md:text-5xl text-black/60 dark:text-white/60    mt-6 uppercase font-bold">
                  {item.subtitle}
                </h3>
              </div>

              <div>
                <p className="text-xl md:text-2xl text-black/75 dark:text-white/70 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ========================================
          4. CAPABILITIES EXPERIENCE
      ======================================== */}
      <section className="px-6 md:px-12 lg:px-20 py-28 md:py-40 border-b border-black/10 dark:border-white/10">
        <div className="mb-20">
          <p className="uppercase    text-xs text-[#fe0000] mb-6">
            Capabilities
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.07em] font-display font-normal uppercase max-w-5xl">
            One brief or a full transformation.
          </h2>
        </div>

        <div className="space-y-16">
          {[
            "Strategic Consultancy",
            "Branding & Identity",
            "Digital & Social Media",
            "Advertising & Campaigns",
            "Events & Experiences",
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 border-t border-black/10 dark:border-white/10 pt-10"
            >
              <div>
                <span className="text-[#fe0000] text-3xl md:text-5xl font-display font-normal   ">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-bold    uppercase mb-5">
                  {item}
                </h3>

                <p className="text-black/70 dark:text-white/65 text-lg leading-relaxed max-w-3xl">
                  Strategic systems designed to strengthen communication,
                  shape perception, and build long-term brand authority.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
