import { TID } from '@/constants/dashboard'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import translate from '@/i18n/translate'
import { DashboardActions } from '@/store/reducers/dashboardReducer'
import { motion } from 'framer-motion'
import * as React from 'react'
import css from './Menu.module.scss'

const variants = {
   open: {
      y: 0,
      opacity: 1,
      transition: {
         y: { stiffness: 1000, velocity: -100 }
      }
   },
   closed: {
      y: 50,
      opacity: 0,
      transition: {
         y: { stiffness: 1000 }
      }
   }
}

interface MenuItemProps {
   i: {
      id: TID
      icon: string
      title: string
   }
}

export const MenuItem: React.FC<MenuItemProps> = React.memo(({ i }) => {
   const dispatch = useAppDispatch()
   const dashboarItems = useAppSelector((state) => state.dashboard.dashboardItems)
   const { id, icon, title } = i

   return (
      <motion.li
         onClick={() => dispatch(DashboardActions.setDahsboardItems({ ...dashboarItems, [id]: !dashboarItems[id] }))}
         variants={variants}
         whileHover={{ scale: 1.04 }}
         whileTap={{ scale: 1 }}
      >
         <div style={{ '--image': `url(/assets/images/svg/${icon})` } as React.CSSProperties} className={css.icon} />
         <h3>{translate(title)}</h3>
         <span className={css.checkbox}>{dashboarItems[id] ? <span></span> : null}</span>
      </motion.li>
   )
})

MenuItem.displayName = 'MenuItem'
