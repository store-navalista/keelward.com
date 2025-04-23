import MainLayout from '@/components/Main.layout'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { I18nProvider } from '@/i18n'
import { ContentActions } from '@/store/reducers/contentReducer'
import store from '@/store/store'
import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import { Provider } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import '../styles/globals.css'
import CustomCursor from '@/components/CustomCursor'
import CookieNotice from '@/components/CookieNotice'
import { isMobile as isMobileDetect } from 'react-device-detect'

type IAppWrapperProps = Pick<AppProps, 'Component' | 'pageProps'>

function AppWrapper({ Component, pageProps }: IAppWrapperProps) {
   const currentMQ = useAppSelector((state) => state.reducer.content.mediaQuery)
   const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' }) || isMobileDetect
   const isMobile = useMediaQuery({ query: '(max-width: 670px)' }) || isMobileDetect
   const dispatch = useAppDispatch()
   const [showCookieNotice, setShowCookieNotice] = useState(false)
   const [cookie] = useCookies(['cookie_notice_accepted'])

   useEffect(() => {
      dispatch(ContentActions.setMediaQuery({ ...currentMQ, isMobile }))
   }, [isMobile])

   useEffect(() => {
      dispatch(ContentActions.setMediaQuery({ ...currentMQ, isLaptop }))
   }, [isLaptop])

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
                  <AppWrapper Component={Component} pageProps={pageProps} />
               </>
            </I18nProvider>
         </CookiesProvider>
      </Provider>
   )
}

export default MyApp
