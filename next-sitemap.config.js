/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.flexistrive.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './public'
}
