import React, { useRef, useState } from 'react'
import Image from 'next/image'
import css from './index.module.css'
import { SVG } from '@/components/SVG'
import { motion } from 'framer-motion'
import Link from 'next/link'
import translate from '@/i18n/translate'

export default function SwiperBottomBlock() {
   const [index, setIndex] = useState(0)

   const handleChange = (index: number) => {
      setIndex(index)
   }

   return (
      <div className={css.swiper_bottom_block}>
         <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={css.first_block}
         >
            <div className={css.info_block}>
               <div className={css.img}>
                  <Image src='/assets/images/svg/contact-us-bg.svg' fill alt='contacts-bg' />
               </div>
               <div className={css.info}>
                  <p>{translate('HOME-bottom-slided-1')}</p>
                  <div className={css.btn_block}>
                     {translate('contact-us-now')}
                     <button>
                        <SVG.Arrow className={css.arrow} />
                     </button>
                  </div>
               </div>
            </div>
         </motion.div>
         <motion.div
            initial={{ x: 200, y: -50, opacity: 0 }}
            animate={{ x: 0, y: -50, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className={css.third_block}
         >
            <h3>{translate('HOME-bottom-slided-2')}</h3>
            <p>{translate('HOME-bottom-slided-3')}</p>
            <Link href='/' className={css.btn}>
               {translate('explore-more')} <SVG.Arrow className={css.arrow} />
            </Link>
         </motion.div>
         <motion.div
            initial={{ x: 200, y: -50, opacity: 0 }}
            animate={{ x: 0, y: -50, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className={css.second_block}
         >
            <h3>{translate('HOME-bottom-slided-4')}</h3>
            <p>{translate('HOME-bottom-slided-5')}</p>
            <Link href='/' className={css.btn}>
               {translate('explore-more')} <SVG.Arrow className={css.arrow} />
            </Link>
         </motion.div>
      </div>
   )
}
