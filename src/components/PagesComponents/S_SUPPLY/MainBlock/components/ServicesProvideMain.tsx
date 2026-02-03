import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'
import css from './components.module.css'

const blockVariants = (i: number, direction: 'left' | 'right') => {
   return {
      hidden: {
         x: direction === 'left' ? -200 : 200,
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

export const ServicesProvideMain: FC = () => {
   return (
      <div className={css.services_provide_main}>
         {[1, 2, 3].map((count, index) => (
            <motion.div
               initial='hidden'
               whileInView='visible'
               viewport={{ once: true }}
               className={css.block}
               key={index}
            >
               <motion.div className={css.text} variants={blockVariants(index, index % 2 === 0 ? 'left' : 'right')}>
                  <p>{translate(`S_SUPPLY-provide_block_head-${count}`)}</p>
                  <p>{translate(`S_SUPPLY-provide_block_desc-${count}`)}</p>
               </motion.div>
               <motion.div className={css.image} variants={blockVariants(index, index % 2 === 0 ? 'right' : 'left')}>
                  <Image
                     src={`/assets/images/pages/S_SUPPLY/about-us-${count}.webp`}
                     alt='serv'
                     fill
                     style={{ objectFit: 'cover' }}
                  />
               </motion.div>
            </motion.div>
         ))}
      </div>
   )
}
