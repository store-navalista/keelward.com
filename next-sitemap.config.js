/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://keelward.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'ka', 'tr']
    },
    alternateRefs: [
        {
            href: 'https://keelward.com/',
            hreflang: 'en',
        },
        {
            href: 'https://keelward.com/ru/',
            hreflang: 'ru',
        },
        {
            href: 'https://keelward.com/ka/',
            hreflang: 'ka',
        },
        {
            href: 'https://keelward.com/tr/',
            hreflang: 'tr',
        },
    ],
}