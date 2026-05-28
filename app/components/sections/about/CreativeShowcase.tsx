"use client";

import { creatives } from "@/app/data/creatives/creatives";

import CinematicBackground from "../../cinematic/CinematicBackground";
import CinematicSectionHeading from "../../ui/CinematicSectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CreativeShowcase() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* cinematic bg */}
      <CinematicBackground />

      {/* heading */}
      <CinematicSectionHeading
        sectionLabel="Creative Work"
        heading={{
          first: "Creative",
          highlight: "Showcase",
        }}
        shortText="
          Strategic visuals, campaign identities and
          high-impact creatives designed to shape
          perception and drive engagement.
        "
        className="
          w-[92%]
          lg:w-[88%]
          mx-auto
          relative
          z-20
        "
      />

      {/* grid */}
      <div
        className="
          relative
          z-20
          w-[92%]
          lg:w-[88%]
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5
          mt-14
        "
      >
        {creatives.map((item) => {
          return (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                h-[520px]
                shadow-2xl
                shadow-black/20
              "
            >
              {/* CAROUSEL TAG */}
              {item.type === "carousel" && (
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    z-30
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-black/60
                    backdrop-blur-md
                    px-3
                    py-1.5
                    border
                    border-white/10
                  "
                >
                  <Images className="w-3.5 h-3.5 text-white" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                    Carousel
                  </span>

                  <span className="text-[10px] text-white/70">
                    ({item.images.length})
                  </span>
                </div>
              )}

              {/* SINGLE IMAGE */}
              {item.type === "single" ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    !opacity-100
                    !mix-blend-normal
                    !filter-none
                  "
                />
              ) : (
                <>
                  {/* LEFT ARROW */}
                  <div
                    className={`
                      creative-prev-${item.id}
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      z-30
                      w-10
                      h-10
                      rounded-full
                      bg-black/50
                      backdrop-blur-md
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      transition-all
                      duration-300
                      opacity-0
                      group-hover:opacity-100
                    `}
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </div>

                  {/* RIGHT ARROW */}
                  <div
                    className={`
                      creative-next-${item.id}
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      z-30
                      w-10
                      h-10
                      rounded-full
                      bg-black/50
                      backdrop-blur-md
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      transition-all
                      duration-300
                      opacity-0
                      group-hover:opacity-100
                    `}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>

                  {/* SWIPER */}
                  <Swiper
                    modules={[
                      Autoplay,
                      Pagination,
                      Navigation,
                    ]}
                    slidesPerView={1}
                    loop
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      prevEl: `.creative-prev-${item.id}`,
                      nextEl: `.creative-next-${item.id}`,
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {item.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          alt={item.alt}
                          className="
                            w-full
                            h-full
                            object-cover
                            !opacity-100
                            !mix-blend-normal
                            !filter-none
                          "
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}

              {/* overlay */}
              <div
                className="
                  absolute
                  inset-0
                  z-10
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  pointer-events-none
                "
              />

              {/* content */}
              <div className="absolute bottom-0 left-0 z-20 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {item.category}
                </p>

                <h3 className="mt-2 text-2xl font-black text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}