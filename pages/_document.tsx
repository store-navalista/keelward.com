import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'
import { companyInfo } from '@/constants/companyInfo'

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
      let locale = ctx.locale || 'en'

      if (ctx.locale === 'ge') {
         locale = 'ka'
      }

      return { ...initialProps, locale }
   }

   render() {
      return (
         <Html lang={this.props.locale}>
            <Head>
               <link rel='shortcut icon' href='/favicon-192x192.png' />
               <script async src='https://www.googletagmanager.com/gtag/js?id=G-SZYEM08QN0'></script>
               <script
                  dangerouslySetInnerHTML={{
                     __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SZYEM08QN0');
            `
                  }}
               />
               <script
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{
                     __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: companyInfo.name,
                        url: companyInfo.url,
                        logo: companyInfo.logo,
                        sameAs: companyInfo.sameAs,
                        description: companyInfo.description,
                        address: {
                           '@type': 'PostalAddress',
                           ...companyInfo.address
                        },
                        contactPoint: {
                           '@type': 'ContactPoint',
                           telephone: companyInfo.phone,
                           contactType: 'customer support',
                           areaServed: companyInfo.address.addressCountry,
                           availableLanguage: ['English', 'Russian', 'Turkish', 'Georgian']
                        }
                     })
                  }}
               />
            </Head>
            <body>
               <Main />
               <div id='portal' />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
