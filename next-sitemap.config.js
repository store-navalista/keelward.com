/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://keelward.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'ka', 'tr']
    }
}