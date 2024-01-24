import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import '../styles/main.scss'
import MainLayout from '@/components/Main.layout'
import { I18nProvider } from '@/i18n'
import { Provider } from 'react-redux'
import store from '@/store/store'
import { CookiesProvider } from 'react-cookie'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { Cookies } from 'react-cookie'
import { ContentActions } from '@/store/reducers/contentReducer'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import './styles/index.css'
import { PAGES, SERVICES } from '@/constants/pages'
import DashboardLayout from '@/components/Dashboard.layout'

type IAppWrapperProps = Pick<AppProps, 'Component' | 'pageProps'>

function AppWrapper({ Component, pageProps }: IAppWrapperProps) {
   const dispatch = useAppDispatch()
   const currentMQ = useAppSelector((state) => state.content.mediaQuery)
   const isLoading = useAppSelector((state) => state.content.loading)
   const cookies = new Cookies().get('language')
   const isMobile = useMediaQuery({ query: '(max-width: 870px)' })
   const isLaptop = useMediaQuery({ query: '(max-width: 1366px)' })
   const router = useRouter()
   const path = useAppSelector((state) => state.content.currentPage)
   const [serv] = [...PAGES, ...SERVICES].filter((p) => Object.values(p)[0].path === path)

   useEffect(() => {
      if (serv) {
         const id = Object.keys(serv)[0]
         dispatch(ContentActions.setID(id))
         if (cookies) dispatch(ContentActions.setLanguage(cookies))
         dispatch(ContentActions.setLoading(false))
      }
   })

   useEffect(() => {
      dispatch(ContentActions.setCurrentPage(router.pathname.length !== 1 ? router.pathname.slice(1) : '/'))
   }, [router.pathname])

   useEffect(() => {
      dispatch(
         ContentActions.setMediaQuery({
            ...currentMQ,
            isMobile: isMobile,
            isLaptop: isLaptop
         })
      )
   }, [isLoading])

   useEffect(() => {
      dispatch(ContentActions.setMediaQuery({ ...currentMQ, isMobile: isMobile }))
   }, [isMobile])

   useEffect(() => {
      dispatch(ContentActions.setMediaQuery({ ...currentMQ, isLaptop: isLaptop }))
   }, [isLaptop])

   return (
      <MainLayout>
         <Component {...pageProps} />
      </MainLayout>
   )
}

function DashboardWrapper({ Component, pageProps }: IAppWrapperProps) {
   return (
      <DashboardLayout>
         <Component {...pageProps} />
      </DashboardLayout>
   )
}

const MyApp = ({ Component, pageProps }: IAppWrapperProps) => {
   const router = useRouter()
   const isDashboard = router.pathname === '/dashboard'

   return (
      <Provider store={store}>
         <CookiesProvider>
            <I18nProvider>
               {isDashboard ? (
                  <DashboardWrapper Component={Component} pageProps={pageProps} />
               ) : (
                  <AppWrapper Component={Component} pageProps={pageProps} />
               )}
            </I18nProvider>
         </CookiesProvider>
      </Provider>
   )
}

export default MyApp
