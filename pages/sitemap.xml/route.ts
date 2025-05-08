import { MetadataRoute } from 'next'

const routes = [
   '',
   '/about-us',
   '/contacts',
   '/live-stock',
   '/marine-technical-services',
   '/marine-technical-services/riding-teams',
   '/marine-technical-services/ship-repair',
   '/marine-technical-services/utm',
   '/news',
   '/privacy-policy',
   '/ship-supply'
]

const locales = ['en', 'ru', 'ka', 'tr']
const defaultLocale = 'en'

export default function sitemap(): MetadataRoute.Sitemap {
   const lastModified = new Date()

   const entries: MetadataRoute.Sitemap = []

   for (const route of routes) {
      for (const locale of locales) {
         const localizedPath = locale === defaultLocale ? route : `/${locale}${route}`
         entries.push({
            url: `https://keelward.com${localizedPath}`,
            lastModified,
            changeFrequency: 'daily',
            priority: 0.7
         })
      }
   }

   return entries
}
