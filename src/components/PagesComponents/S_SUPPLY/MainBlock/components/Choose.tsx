import React, { FC } from 'react'
import css from './components.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
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

export const Choose: FC = () => {
   return (
      <motion.section initial='hidden' whileInView='visible' viewport={{ once: true }} className={css.choose}>
         <motion.h3 variants={headVariants}>{translate('S_SUPPLY-choose_head')}</motion.h3>
         <div className={css.choose_first}>
            <div className={css.block}>
               <div>
                  {[1, 2].map((count, index) => (
                     <motion.div className={css.text} key={index} variants={textVariants(index * 0.3)}>
                        <p>{translate(`S_SUPPLY-choose_block_head-${count}`)}</p>
                        <span>{translate(`S_SUPPLY-choose_block_desc-${count}`)}</span>
                     </motion.div>
                  ))}
               </div>
               <motion.div className={css.image} variants={imageVariants}>
                  <Image src='/assets/images/pages/S_SUPPLY/choose.webp' alt='Right route logistics' fill />
               </motion.div>
            </div>
            <div className={css.footer}>
               {[3, 4, 5].map((count, index) => (
                  <motion.div className={css.text} key={index} variants={textVariants(index * 0.3 + 0.6)}>
                     <p>{translate(`S_SUPPLY-choose_block_head-${count}`)}</p>
                     <span>{translate(`S_SUPPLY-choose_block_desc-${count}`)}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </motion.section>
   )
}
