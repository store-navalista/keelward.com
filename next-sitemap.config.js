/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: 'https://keelward.com',
   generateRobotsTxt: true,
   changefreq: 'daily',
   priority: 0.7,
   sitemapSize: 10000,
   generateIndexSitemap: false,
   outDir: './public',
   exclude: ['/privacy-policy', '/404'],
   additionalPaths: async (config) => [
      {
         loc: '/', // Главная страница
         priority: 1.0,
         changefreq: 'daily',
      },
      {
         loc: '/contacts',
         priority: 0.9,
         changefreq: 'weekly',
      },
      {
         loc: '/about-us',
         priority: 0.9,
         changefreq: 'weekly',
      },
      {
         loc: '/marine-technical-services',
         priority: 0.8,
         changefreq: 'monthly',
      },
      {
         loc: '/ship-supply',
         priority: 0.8,
         changefreq: 'monthly',
      },
      {
         loc: '/marine-technical-services/ship-repair',
         priority: 0.7,
         changefreq: 'monthly',
      },
      {
         loc: '/marine-technical-services/riding-teams',
         priority: 0.7,
         changefreq: 'monthly',
      },
      {
         loc: '/marine-technical-services/utm',
         priority: 0.7,
         changefreq: 'monthly',
      },
      {
         loc: '/live-stock',
         priority: 0.6,
         changefreq: 'monthly',
      },
      {
         loc: '/news',
         priority: 0.5,
         changefreq: 'monthly',
      },
   ],
}