import "./globals.css";

import type { Metadata } from "next";

import SmoothScroll from "@/app/components/ui/SmoothScroll";
import CustomCursor from "@/app/components/ui/CustomCursor";
import { Bebas_Neue, Inter_Tight } from "next/font/google";
import Navbar from "@/app/components/layout/navbar/Navbar";
import Footer from "@/app/components/layout/Footer";
import ScrollToTop from "@/app/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title:
    "SOCIYO | Strategic Communication Consultancy",

  description:
    "SOCIYO is a strategic communication consultancy helping brands, leaders, institutions, and organizations shape perception, build authority, and create lasting influence across political, corporate, and social ecosystems.",

  keywords: [
    "Sociyo",
    "Strategic Communication",
    "PR Agency India",
    "Political Campaigns",
    "Brand Strategy",
    "Public Relations",
    "Corporate Communication",
    "Social Media Strategy",
    "Advertising Agency",
    "Digital Communication",
    "Election Campaign Strategy",
    "Bhopal Agency",
    "Strategic Consultancy",
    "Brand Positioning",
    "Media Relations",
  ],

  authors: [
    {
      name: "SOCIYO Communications",
    },
  ],

  creator: "SOCIYO Communications",

  metadataBase: new URL("https://www.thesociyo.com"),

  openGraph: {
    title:
      "SOCIYO | Strategic Communication Consultancy",

    description:
      "We help brands, leaders, and institutions shape perception, build authority, and create lasting influence.",

    url: "https://www.thesociyo.com",

    siteName: "SOCIYO",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SOCIYO | Strategic Communication Consultancy",

    description:
      "Strategies. Stories. Success.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${bebas.variable}
          ${interTight.variable}

          bg-[var(--background)]
          text-[var(--text)]
          antialiased
          overflow-x-hidden
          transition-colors
          duration-500
        `}
      >
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Smooth Scroll */}
        <SmoothScroll>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="relative">
            {children}
          </main>

          {/* Scroll To Top */}
          <ScrollToTop />

          {/* Footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}