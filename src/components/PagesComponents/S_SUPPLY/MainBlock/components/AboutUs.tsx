import React, { FC, useRef } from 'react'
import css from './components.module.css'
import { motion } from 'framer-motion'
import translate from '@/i18n/translate'

const aside_text_block = ['>1500', '57', '3', '37', '15']

export const AboutUs: FC = () => {
   const ref = useRef<HTMLDivElement>(null)

   const asideVariants = {
      hidden: {
         opacity: 0,
         x: -100
      },
      visible: {
         x: 0,
         opacity: 1,
         transition: {
            delay: 0.5,
            duration: 1,
            ease: 'easeOut'
         }
      }
   }

   const textVariants = {
      hidden: {
         opacity: 0
      },
      visible: {
         opacity: 1,
         transition: {
            duration: 1,
            ease: 'easeOut'
         }
      }
   }

   return (
      <motion.section
         initial='hidden'
         whileInView='visible'
         viewport={{ once: true }}
         className={css.about_us}
         ref={ref}
      >
         <motion.p className={css.heading} variants={textVariants}>
            {translate(`S_SUPPLY-about-us_heading`)}
         </motion.p>
         <motion.div className={css.paragraph} variants={textVariants}>
            {[1, 2, 3].map((count) => (
               <span key={count}>{translate(`S_SUPPLY-about-us_${count}`)}</span>
            ))}
         </motion.div>
         <motion.aside className={css.text_block} variants={asideVariants}>
            {aside_text_block.map((number, index) => (
               <div key={index}>
                  <span>{number}</span>
                  <span>{translate(`S_SUPPLY-about-us_desc_${index + 1}`)}</span>
               </div>
            ))}
         </motion.aside>
      </motion.section>
   )
}
