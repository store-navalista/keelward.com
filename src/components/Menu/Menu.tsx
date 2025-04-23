import translate from '@/i18n/translate'
import { motion, useCycle } from 'framer-motion'
import css from './Menu.module.css'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import _ from 'lodash'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const Menu: React.FC = () => {
   const [isOpen, toggleOpen] = useState(false)

   useEffect(() => {
      const navElement = document.querySelector(`.${css.wrapper}`) as HTMLElement
      if (navElement) {
         navElement.style.display = isOpen ? 'block' : 'none'
      }
   }, [isOpen])

   return (
      <>
         <MenuToggle {...{ toggle: toggleOpen, isOpen }} />
         <motion.nav
            className={css.wrapper}
            animate={{ opacity: isOpen ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
         >
            {isOpen && <Navigation toggleOpen={toggleOpen} />}
         </motion.nav>
      </>
   )
}
