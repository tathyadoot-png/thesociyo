module.exports = {
  siteUrl: "https://thesociyo.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  exclude: [
    "/contact-us-ver2-elementor-section",
    "/about-ver2-elementor-section",
    "/elementor-228707",
  ],

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://thesociyo.com/sitemap.xml",
    ],
  },
};