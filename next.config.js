module.exports = {
   webpack(config, { defaultLoaders }) {
      config.module.rules.push({
         test: /\.md$/,
         use: 'raw-loader',
      })

      return config
   },
   i18n: {
      locales: ['en', 'ru', 'tr', 'ka'],
      defaultLocale: 'en',
      localeDetection: false
   },
   transpilePackages: ['@mui/x-charts'],
   async headers() {
      return [
         {
            source: '/sitemap.xml',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'application/xml',
               },
            ],
         },
         {
            source: '/sitemap-:path*.xml',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'application/xml',
               },
            ],
         },
         {
            source: '/robots.txt',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'text/plain',
               },
            ],
         },
      ];
   },
}
