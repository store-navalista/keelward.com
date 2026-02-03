import React from 'react'
import css from './index.module.css'
import { FirstBlock } from './components/FirstBlock'
import { RequestBlock } from './components/RequestBlock'
import { AboutUs } from './components/AboutUs'
import { ServicesProvide } from './components/ServicesProvide'
import { Choose } from './components/Choose'
import { HowItWorks } from './components/HowItWorks'
import { Team } from './components/Team'
import { ContactUs } from './components/ContactUs'

export default function MainBlock() {
   return (
      <div className={css.wrapper}>
         <FirstBlock />
         <RequestBlock />
         <AboutUs />
         <ServicesProvide />
         <Choose />
         <HowItWorks />
         <Team />
         <ContactUs />
      </div>
   )
}
