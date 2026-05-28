import About from "@/app/components/sections/About";
import CreativeShowcase from "@/app/components/sections/about/CreativeShowcase";
import DrSulabhEditorial from "@/app/components/sections/about/team/DrSulabhEditorial";
import VideoCreativeShowcase from "@/app/components/sections/about/VideoCreativeShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOCIYO",

  description:
    "Learn about SOCIYO — a strategic communication consultancy helping brands, leaders, institutions, and organizations shape perception, strengthen influence, and create meaningful impact.",

  keywords: [
    "About SOCIYO",
    "Strategic Communication Consultancy",
    "PR Agency",
    "Corporate Communication",
    "Political Strategy",
    "Brand Consultancy",
    "Media Strategy",
    "Public Relations India",
  ],

  alternates: {
    canonical: "https://www.thesociyo.com/about",
  },

  openGraph: {
    title: "About SOCIYO",
    description:
      "Discover SOCIYO’s vision, expertise, and strategic communication approach.",

    url: "https://www.thesociyo.com/about",

    siteName: "SOCIYO",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About SOCIYO",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About SOCIYO",

    description:
      "Strategic communication consultancy shaping influence and impact.",

    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="">
      <About />
      {/* <DrSulabhEditorial /> */}
      <CreativeShowcase />
      <VideoCreativeShowcase/>
    </main>
  );
}