module.exports = {
   webpack(config, { defaultLoaders }) {
      config.module.rules.push({
         test: /\.md$/,
         use: 'raw-loader',
      })

      return config
   },
   async headers() {
      return [
         {
            source: '/sitemap-:path*',
            headers: [
               {
                  key: 'Content-Type',
                  value: 'application/xml',
               },
            ],
         },
      ]
   },
   i18n: {
      locales: ['en', 'ru', 'tr', 'ka'],
      defaultLocale: 'en',
      localeDetection: false
   },
   transpilePackages: ['@mui/x-charts']
}
