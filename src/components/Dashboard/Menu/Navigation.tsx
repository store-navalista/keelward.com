import LanguageSwitcher from '@/components/Header/components/QuickPanel/LanguageSwitcher/LanguageSwitcher'
import { DASHBOARD } from '@/constants/dashboard'
import { motion } from 'framer-motion'
import * as React from 'react'
import css from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import translate from '@/i18n/translate'

const variants = {
   open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
   },
   closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
   }
}

export const Navigation: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
   const { nav } = DASHBOARD

   return (
      <motion.ul style={{ display: isOpen ? 'block' : 'none' }} variants={variants}>
         <LanguageSwitcher
            style={{ '--opacity': isOpen ? 1 : 0 } as React.CSSProperties}
            className={css.lang}
            filter={['EN', 'RU']}
            type='mobile'
         />
         <h2 style={{ '--opacity': isOpen ? 1 : 0 } as React.CSSProperties} className={css.title}>
            {translate('dashboard.nav-title')}
         </h2>
         {nav.map((i, inx) => (
            <MenuItem i={i} key={inx} />
         ))}
      </motion.ul>
   )
}
