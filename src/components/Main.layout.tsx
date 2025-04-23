import { Map } from '@/components/Map'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import css from './Main.layout.module.css'
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs'

const fadeVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1 },
   exit: { opacity: 0 }
}

const Partners = dynamic(() => import('./PagesComponents/HOME/Partners'), { ssr: false })

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
   const [scrollStep, setScrollStep] = useState(0)
   const location = useRouter()

   const scroll = useCallback(() => {
      setScrollStep(window.pageYOffset)
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', scroll)
      return () => window.removeEventListener('scroll', scroll)
   }, [scroll])

   return (
      <main className={css.wrapper}>
         <Header scrollStep={scrollStep} />
         <AnimatePresence mode='wait'>
            <motion.div
               key={location.pathname}
               variants={fadeVariants}
               initial='hidden'
               animate='visible'
               exit='exit'
               transition={{ duration: 0.5 }}
               className={css.body}
            >
               {children}
            </motion.div>
         </AnimatePresence>
         <WhyChooseUs />
         <Partners />
         <Map />
         <Footer />
      </main>
   )
}

export default MainLayout
