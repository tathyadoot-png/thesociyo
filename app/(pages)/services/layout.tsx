import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | SOCIYO",

  description:
    "Explore SOCIYO’s work across political campaigns, strategic communication, public relations, digital outreach, branding, advocacy, and media engagement projects.",

  keywords: [
    "SOCIYO Work",
    "Campaign Strategy",
    "Political Communication",
    "PR Campaigns",
    "Branding Projects",
    "Media Campaigns",
    "Digital Outreach",
    "Communication Portfolio",
  ],

  alternates: {
    canonical: "https://www.thesociyo.com/work",
  },

  openGraph: {
    title: "Our Services | SOCIYO",

    description:
      "See how SOCIYO builds influence through strategic campaigns and communication.",

    url: "https://www.thesociyo.com/services",

    siteName: "SOCIYO",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOCIYO Service Portfolio",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Our Services | SOCIYO",

    description:
      "Strategic campaigns, branding, communication, and impact-driven initiatives.",

    images: ["/og-image.png"],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}