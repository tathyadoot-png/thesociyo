import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/contact-us-ver2-elementor-section",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-ver2-elementor-section",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/elementor-228707",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;