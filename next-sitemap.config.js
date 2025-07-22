/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jolaoluwa.site",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://www.jolaoluwa.site/sitemap.xml"],
  },
  // optional: if you want to exclude any pages:
  // exclude: ['/404', '/secret‑page'],
};
