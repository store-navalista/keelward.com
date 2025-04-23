import CookieNotice from '@/components/CookieNotice'
import CustomCursor from '@/components/CustomCursor'
import MainLayout from '@/components/Main.layout'
import MediaInitializer from '@/components/MediaInitializer/MediaInitializer'
import { I18nProvider } from '@/i18n'
import { makeStore } from '@/store/store'
import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import { Provider } from 'react-redux'
import '../styles/globals.css'

type IAppWrapperProps = Pick<AppProps, 'Component' | 'pageProps'>

const store = makeStore()

function AppWrapper({ Component, pageProps }: IAppWrapperProps) {
   const [showCookieNotice, setShowCookieNotice] = useState(false)
   const [cookie] = useCookies(['cookie_notice_accepted'])

   useEffect(() => {
      setShowCookieNotice(cookie['cookie_notice_accepted'] === undefined)
   }, [cookie])

   return (
      <MainLayout>
         {showCookieNotice && <CookieNotice />}
         <Component {...pageProps} />
      </MainLayout>
   )
}

const MyApp = ({ Component, pageProps }: IAppWrapperProps) => {
   return (
      <Provider store={store}>
         <CookiesProvider>
            <I18nProvider locale={pageProps.locale}>
               <>
                  <CustomCursor />
                  <MediaInitializer />
                  <AppWrapper Component={Component} pageProps={pageProps} />
               </>
            </I18nProvider>
         </CookiesProvider>
      </Provider>
   )
}

export default MyApp
