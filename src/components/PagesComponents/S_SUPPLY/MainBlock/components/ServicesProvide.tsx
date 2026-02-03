import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import css from './components.module.css'
import { splitByPattern } from './services'
import { ServicesProvideMain } from './ServicesProvideMain'

const wordVariants = (i: number) => {
   const direction = () => {
      switch (i) {
         case 0:
            return { x: -100, y: 0 }
         case 1:
            return { x: 0, y: -100 }
         case 2:
            return { x: 100, y: 0 }
         case 3:
            return { x: 0, y: 100 }
         default:
            return { x: 0, y: 0 }
      }
   }

   return {
      hidden: {
         ...direction(),
         opacity: 0
      },
      visible: {
         x: 0,
         y: 0,
         opacity: 1,
         transition: {
            delay: i * 0.3,
            duration: 1,
            ease: 'easeOut'
         }
      }
   }
}

export const ServicesProvide: FC = () => {
   const intl = useIntl()
   const staticTranslate = (id: string) => intl.formatMessage({ id: id, defaultMessage: id })
   const split = splitByPattern([1, 1])
   const heading = split(staticTranslate('S_SUPPLY-provide_heading'))

   return (
      <section className={css.services_provide}>
         <div>
            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} className={css.heading_block}>
               {heading.map((word, i) => (
                  <motion.span key={i} variants={wordVariants(i)}>
                     {word}
                  </motion.span>
               ))}
            </motion.div>
            <ServicesProvideMain />
         </div>
      </section>
   )
}
