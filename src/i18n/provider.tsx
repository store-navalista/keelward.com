import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import { LOCALES } from './locales'
import messages from './messages'

interface IProvider {
   children: JSX.Element
   locale?: string
}

const Provider = ({ children, locale }: IProvider) => {
   const unicodeLang =
      LOCALES[locale === 'ge' ? 'ka' : locale] || (typeof navigator !== 'undefined' ? navigator.language : 'en')

   return (
      <IntlProvider
         locale={unicodeLang || navigator.language}
         textComponent={Fragment}
         messages={messages[unicodeLang]}
      >
         {children}
      </IntlProvider>
   )
}

export default Provider
