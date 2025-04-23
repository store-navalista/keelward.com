import translate from '@/i18n/translate'
import React, { FC, Fragment, useRef, useState } from 'react'
import css from './index.module.css'
import { STOCK } from '@/constants/stock'
import Image from 'next/image'
import useHover from '@/hooks/useHover'
import { GoodsProps } from '@/constants/types'
import { motion } from 'framer-motion'

type ListItemProps = {
   index: number
   currentSection: number
   setCurrentSection: React.Dispatch<React.SetStateAction<number>>
}

const ListItem: FC<ListItemProps> = ({ currentSection, index, setCurrentSection }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })
   const isCurrentHover = isHover || currentSection === index

   const span_styles = {
      opacity: isCurrentHover ? 1 : 0,
      translate: isCurrentHover ? '-18px 1px' : '-24px 1px'
   }

   return (
      <li
         onClick={() => setCurrentSection(index)}
         ref={ref}
         style={{ color: isCurrentHover ? 'var(--color-blue-alt' : 'var(--color-blue' }}
      >
         <span style={span_styles}>⮞</span>
         {translate(`stock-nav-${index}`)}
      </li>
   )
}

type NavigateProps = {
   currentSection: number
   setCurrentSection: React.Dispatch<React.SetStateAction<number>>
   setisOpenNavigate: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigate: FC<NavigateProps> = ({ currentSection, setCurrentSection, setisOpenNavigate }) => {
   return (
      <motion.ul
         initial={{ opacity: 0, x: -200 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.4, ease: 'easeOut' }}
         className={css.navigate}
      >
         <div className={css.heading}>
            <Image src='/assets/images/svg/shop.svg' alt='shop' width={24} height={24} />
            <h1>{translate('page-title-LIVE_STOCK')}</h1>
         </div>

         {STOCK.equipment_types.map((type, index) => {
            return (
               <Fragment key={type}>
                  <ListItem {...{ currentSection, setCurrentSection, index }} />
               </Fragment>
            )
         })}
         <button onClick={() => setisOpenNavigate(false)} className={css.close}>
            ×
         </button>
      </motion.ul>
   )
}

const Card: FC = () => {
   return <div className={css.card}></div>
}

const Button: FC<{ setisOpenNavigate: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setisOpenNavigate }) => {
   const handleOpen = () => {
      setisOpenNavigate((prevState) => !prevState)
   }

   return <button onClick={handleOpen} className={css.btn} />
}

export const LiveStock: FC<{ goods: GoodsProps }> = ({ goods }) => {
   const [currentSection, setCurrentSection] = useState(0)
   const [isOpenNavigate, setisOpenNavigate] = useState(false)

   const arr = new Array(15).fill(1)

   return (
      <div className={css.live_stock}>
         <Button setisOpenNavigate={setisOpenNavigate} />
         {isOpenNavigate && <Navigate {...{ currentSection, setCurrentSection, setisOpenNavigate }} />}
         <div className={css.cards}>
            {arr.map((item, index) => {
               return (
                  <Fragment key={index}>
                     <Card />
                  </Fragment>
               )
            })}
         </div>
      </div>
   )
}
