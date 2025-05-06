import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const SUPPORTED_LOCALES = ['en', 'ru', 'ka', 'tr']

const CanonicalHref: React.FC = () => {
   const { locale, asPath, defaultLocale } = useRouter()

   const getHref = (targetLocale: string) => {
      if (targetLocale === defaultLocale) {
         return `https://keelward.com${asPath}`
      }
      return `https://keelward.com/${targetLocale}${asPath}`
   }

   const canonicalHref = getHref(locale || 'en')

   return (
      <Head>
         <link rel='canonical' href={canonicalHref} />
         <link rel='alternate' hrefLang='x-default' href='https://keelward.com' />
         {SUPPORTED_LOCALES.map((lng) => (
            <link key={lng} rel='alternate' hrefLang={lng} href={getHref(lng)} />
         ))}
      </Head>
   )
}

export default CanonicalHref
