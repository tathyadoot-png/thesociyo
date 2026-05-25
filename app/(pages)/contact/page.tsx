import Contact from "@/app/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SOCIYO",

  description:
    "Get in touch with SOCIYO for strategic communication, political consulting, branding, PR campaigns, digital outreach, and media strategy solutions.",

  keywords: [
    "Contact SOCIYO",
    "Communication Consultancy Contact",
    "PR Agency Contact",
    "Political Campaign Agency",
    "Brand Strategy Agency",
    "Media Relations",
    "Digital Outreach",
    "Bhopal PR Agency",
  ],

  alternates: {
    canonical: "https://www.thesociyo.com/contact",
  },

  openGraph: {
    title: "Contact SOCIYO",

    description:
      "Connect with SOCIYO for strategic communication and growth solutions.",

    url: "https://www.thesociyo.com/contact",

    siteName: "SOCIYO",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact SOCIYO",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact SOCIYO",

    description:
      "Reach out to SOCIYO for branding, communication, and campaign strategy.",

    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Contact />
    </main>
  );
}