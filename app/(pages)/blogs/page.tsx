import BlogsPage from "@/app/components/sections/Blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOCIYO Blog",

  description:
    "Read insights, strategies, industry perspectives, campaign analysis, branding ideas, communication trends, and digital growth stories from SOCIYO.",

  keywords: [
    "SOCIYO Blog",
    "Communication Insights",
    "Brand Strategy Blog",
    "Political Campaign Insights",
    "PR Trends",
    "Digital Marketing Articles",
    "Strategic Communication News",
    "Media Strategy",
  ],

  alternates: {
    canonical: "https://www.thesociyo.com/blog",
  },

  openGraph: {
    title: "SOCIYO Blog",

    description:
      "Insights, strategies, and stories from the world of communication and branding.",

    url: "https://www.thesociyo.com/blog",

    siteName: "SOCIYO",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOCIYO Blog",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SOCIYO Blog",

    description:
      "Explore communication trends, branding strategies, and impactful stories.",

    images: ["/og-image.png"],
  },
};

export default function BlogsPageComponent() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <BlogsPage />
    </main>
  );
}