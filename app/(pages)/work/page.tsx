"use client";

import CreativeShowcase from "@/app/components/sections/about/CreativeShowcase";
import VideoCreativeShowcase from "@/app/components/sections/about/VideoCreativeShowcase";
import ClientLogos from "@/app/components/sections/about/ClientLogos";



export default function WorkPage() {
  return (
    <main
      className="
        relative
        overflow-hidden

        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      <CreativeShowcase/>
      <ClientLogos/>
      <VideoCreativeShowcase />

    </main>
  );
}