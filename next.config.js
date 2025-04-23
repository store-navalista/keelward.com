module.exports = {
   webpack(config, { defaultLoaders }) {
      config.module.rules.push({
         test: /\.md$/,
         use: 'raw-loader',
      })

      return config
   },
   i18n: {
      locales: ['en', 'ru', 'tr', 'ge'],
      defaultLocale: 'en',
      localeDetection: false
   },
   transpilePackages: ['@mui/x-charts']
}
