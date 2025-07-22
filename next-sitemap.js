// next-sitemap.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jolaoluwa.site",
  generateRobotsTxt: true, // <-- this creates robots.txt for you
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://www.jolaoluwa.site/sitemap.xml"],
  },
};
