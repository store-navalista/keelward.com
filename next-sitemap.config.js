/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://keelward.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 10000,
    generateIndexSitemap: false,
    outDir: './public',
    exclude: ['/privacy-policy'],
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