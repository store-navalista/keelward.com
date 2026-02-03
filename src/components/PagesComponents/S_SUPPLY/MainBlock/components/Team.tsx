import React, { FC } from 'react'
import css from './components.module.css'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import translate from '@/i18n/translate'

const headVariants = {
   hidden: {
      opacity: 0,
      y: -50
   },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: 'easeOut'
      }
   }
}

const quoteVariants = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 1.8,
         duration: 0.5,
         ease: 'easeOut'
      }
   }
}

const textVariants = (delay: number) => {
   return {
      hidden: {
         opacity: 0
      },
      visible: {
         opacity: 1,
         transition: {
            delay: delay,
            duration: 1,
            ease: 'easeOut'
         }
      }
   }
}

export const Team: FC = () => {
   const intl = useIntl()
   const staticTranslate = (id: string) => intl.formatMessage({ id: id, defaultMessage: id })

   return (
      <motion.section initial='hidden' whileInView='visible' viewport={{ once: true }} className={css.team}>
         <motion.h3 variants={headVariants}>{translate('S_SUPPLY-meet_head')}</motion.h3>
         <div className={css.block}>
            {[1, 2, 3, 4].map((count, i) => {
               const names = staticTranslate(`S_SUPPLY-meet_name-${count}`).split(' ')

               return (
                  <motion.div key={i} variants={textVariants(i * 0.3)}>
                     {names.map((name) => (
                        <p key={name}>{name}</p>
                     ))}
                     <span>{translate(`S_SUPPLY-meet_name-desc-${count}`)}</span>
                  </motion.div>
               )
            })}
            <motion.span className={css.qoute} variants={quoteVariants}>
               {translate('S_SUPPLY-meet_desc')}
            </motion.span>
         </div>
      </motion.section>
   )
}
