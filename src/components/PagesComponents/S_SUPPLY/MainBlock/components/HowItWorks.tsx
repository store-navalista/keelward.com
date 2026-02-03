import React, { FC } from 'react'
import css from './components.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import translate from '@/i18n/translate'

const text_block = [
   ['Request', 'Send us your enquiry through the website form or via the email address at the bottom of the page.'],
   [
      'Connection',
      'We get in touch quickly to review your request, clarify items and quantities and agree on delivery dates, quality and budget.'
   ],
   ['Selection', 'We prepare at least three suitable options and move forward after receiving your confirmation.'],
   [
      'Delivery',
      'You simply wait while we ship from stock or order directly from the manufacturer, arranging delivery and customs so your order arrives on board in the right port at the agreed day.'
   ]
]

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

const imageVariants = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 0.5,
         duration: 1.5,
         ease: 'easeOut'
      }
   }
}

const textVariants = (delay: number) => {
   return {
      hidden: {
         opacity: 0,
         y: -50
      },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            delay: delay,
            duration: 1,
            ease: 'easeOut'
         }
      }
   }
}

//   'S_SUPPLY-works_head': 'Nasıl çalışıyor?',
//       'S_SUPPLY-works_head-1': 'Rica etmek',
//       'S_SUPPLY-works_desc-1

export const HowItWorks: FC = () => {
   return (
      <motion.section initial='hidden' whileInView='visible' viewport={{ once: true }} className={css.works}>
         <div className={css.block}>
            <motion.h3 variants={headVariants}>{translate('S_SUPPLY-works_head')}</motion.h3>
            <div className={css.main_block}>
               <motion.div className={css.image} variants={imageVariants}>
                  <Image src='/assets/images/svg/logo-trans.svg' alt='How it works' fill />
               </motion.div>
               <div className={css.text_block}>
                  {[1, 2, 3, 4].map((count, index) => (
                     <motion.div className={css.text} key={index} variants={textVariants(index * 0.3)}>
                        <p>{`0${index + 1}.`}</p>
                        <p>{translate(`S_SUPPLY-works_head-${count}`)}</p>
                        <span>{translate(`S_SUPPLY-works_desc-${count}`)}</span>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </motion.section>
   )
}
