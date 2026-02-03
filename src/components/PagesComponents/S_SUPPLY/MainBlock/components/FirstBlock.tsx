import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import css from './components.module.css'
import { splitByPattern } from './services'

const titleItemVariants = (delay: number) => ({
   hidden: {
      y: -60,
      opacity: 0
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         delay,
         duration: 1,
         ease: 'easeOut'
      }
   }
})

const descVariants = {
   hidden: {
      y: 10,
      opacity: 0
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         delay: 1.5,
         duration: 0.5,
         ease: 'easeOut'
      }
   }
}

export const FirstBlock: FC = () => {
   const intl = useIntl()
   const staticTranslate = (id: string) => intl.formatMessage({ id: id, defaultMessage: id })
   const split = splitByPattern([2, 4, 4])
   const heading = split(staticTranslate('S_SUPPLY-first_block'))

   return (
      <section className={css.first_block}>
         <div className={css.block}>
            <div className={css.title}>
               {heading.map((text, i) => {
                  const delay = i % 2 === 0 ? 0 : 0.5
                  return (
                     <motion.span key={text} variants={titleItemVariants(delay)}>
                        {text}
                     </motion.span>
                  )
               })}
            </div>
            <motion.span className={css.desc} variants={descVariants}>
               {translate('S_SUPPLY-first_block_desc')}
            </motion.span>
         </div>
      </section>
   )
}
