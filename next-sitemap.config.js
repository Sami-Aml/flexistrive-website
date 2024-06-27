/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://flexistrive.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './public'
}
