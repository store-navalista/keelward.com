import LanguageSwitcher from '@/components/Header/components/QuickPanel/LanguageSwitcher/LanguageSwitcher'
import { DASHBOARD } from '@/constants/dashboard'
import { IUser } from '@/constants/users'
import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import * as React from 'react'
import css from './Menu.module.scss'
import { MenuItem } from './MenuItem'

const variants = {
   open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
   },
   closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
   }
}

export const Navigation: React.FC<{ isOpen: boolean; user: IUser }> = ({ isOpen, user }) => {
   const { nav, items } = DASHBOARD
   const mutateNav = []

   const { describe_role } = user

   nav.forEach((item) => {
      if (describe_role && items[describe_role].includes(item.id)) mutateNav.push(item)
   })

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
         {mutateNav.map((i, inx) => (
            <MenuItem i={i} key={inx} />
         ))}
      </motion.ul>
   )
}
