import { useAppSelector } from '@/hooks/redux'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundaryComponent } from './Error/Error'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import st from './Main.layout.module.scss'
import Seo from './seo'

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
   const isLaptop = useAppSelector((state) => state.content.mediaQuery.isLaptop)
   const [scrollStep, setcrollStep] = useState(0)
   const scroll = () => {
      setcrollStep(window.pageYOffset)
   }

   useEffect(() => {
      window.addEventListener('scroll', scroll)
   })

   return (
      <>
         <Seo />
         <main className={st.wrapper}>
            <Header scrollStep={scrollStep} />
            <ErrorBoundary fallbackRender={ErrorBoundaryComponent}>{children}</ErrorBoundary>
            <Footer scrollStep={scrollStep} isLaptop={isLaptop} />
         </main>
      </>
   )
}

export default MainLayout
