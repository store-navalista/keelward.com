import { SVG } from '@/components/SVG'
import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'
import css from './index.module.css'

const TextBlock: FC<{ text: string[]; index: number }> = ({ text, index }) => {
   const x = -300

   return text.map((t, i) => {
      if (i === 1) {
         return (
            <motion.h2
               key={`${t}-${index}`}
               initial={{ x, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            >
               {translate(t)}
            </motion.h2>
         )
      } else {
         return (
            <motion.p
               key={`${t}-${index}`}
               initial={{ x, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            >
               {translate(t)}
            </motion.p>
         )
      }
   })
}

const MoreDetailsButton: FC<{ index: number; href: string }> = ({ index, href }) => {
   const x = -300

   return (
      <motion.div
         key={`link-${index}`}
         initial={{ x, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
         className={css.more_detailes_link}
      >
         <Link href={href}>
            {translate('more-details')} <SVG.Arrow className={css.arrow} />
         </Link>
      </motion.div>
   )
}

type ControlsProps = {
   onPrev: () => void
   onNext: () => void
}

const Controls: FC<ControlsProps> = ({ onNext, onPrev }) => {
   return (
      <motion.div
         className={css.controls}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
      >
         <button onClick={onPrev} className={css.control}>
            <div className={css.alt_button}>
               <SVG.Arrow className={css.control_arrow_prev_alt} />
            </div>
            <div className={css.button}>
               <SVG.Arrow className={css.control_arrow_prev} />
               {translate('prev')}
            </div>
         </button>
         <button onClick={onNext} className={css.control}>
            <div className={css.alt_button}>
               <SVG.Arrow className={css.control_arrow_next_alt} />
            </div>
            <div className={css.button}>
               {translate('next')}
               <SVG.Arrow className={css.control_arrow_next} />
            </div>
         </button>
      </motion.div>
   )
}

export { Controls, MoreDetailsButton, TextBlock }
