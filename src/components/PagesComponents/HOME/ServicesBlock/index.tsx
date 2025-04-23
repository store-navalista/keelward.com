import { SVG } from '@/components/SVG'
import PixelTransition from '@/components/UI/PixelTransition/PixelTransition'
import { PAGES_IDs, PATHS } from '@/constants/pages'
import useHover from '@/hooks/useHover'
import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC, Fragment, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import css from './index.module.css'

const cards = ['SHIP_REPAIR', 'RIDING_TEAMS', 'UTM'] as PAGES_IDs[]

const LinkTo: FC<{ id: PAGES_IDs }> = ({ id }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   return (
      <div ref={ref} className={css.link + ` ${isHover ? css.active : ''}`}>
         <Link href={PATHS[id].href}>
            <span>⮞</span>
            {translate('explore-more')}
            <SVG.Arrow className={css.link_arrow} />
         </Link>
      </div>
   )
}

const Card: FC<{ id: PAGES_IDs; index: number }> = ({ id, index }) => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   const motion_options = (() => {
      switch (index) {
         case 0:
            return {
               initial: { opacity: 0, x: -80 },
               animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 },
               transition: { duration: 1.6, ease: 'easeOut' }
            }
         case 1:
            return {
               initial: { opacity: 0 },
               animate: inView ? { opacity: 1 } : { opacity: 0 },
               transition: { duration: 3.2, ease: 'easeOut' }
            }
         case 2:
            return {
               initial: { opacity: 0, x: 80 },
               animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 },
               transition: { duration: 1.6, ease: 'easeOut' }
            }
         default:
            return {
               initial: { opacity: 0 },
               animate: inView ? { opacity: 1 } : { opacity: 0 },
               transition: { duration: 0.6, ease: 'easeOut' }
            }
      }
   })()

   return (
      <motion.div
         ref={ref}
         className={css.card_block}
         initial={motion_options.initial}
         animate={motion_options.animate}
         transition={motion_options.transition}
      >
         <div className={css.text_block}>
            <h3>{translate(`page-title-${id}`)}</h3>
            <p>⮞ {translate(`${id}-slogan`)}</p>
         </div>
         <PixelTransition
            firstContent={
               <img
                  src={`/assets/images/pages/HOME/${id}.jpg`}
                  alt='service image'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
            }
            secondContent={
               <div
                  style={{
                     width: '100%',
                     height: '100%',
                     display: 'grid',
                     placeItems: 'center',
                     backgroundColor: '#333'
                  }}
               >
                  <LinkTo id={id} />
               </div>
            }
            gridSize={20}
            pixelColor='#ffffff'
            animationStepDuration={0.2}
            className={css.card}
         />
      </motion.div>
   )
}

export default function ServicesBlock() {
   return (
      <div className={css.services}>
         <h2>{translate('HOME-mt-services-heading')}</h2>
         <div className={css.cards}>
            {cards.map((card, index) => {
               return (
                  <Fragment key={card}>
                     <Card id={card} index={index} />
                  </Fragment>
               )
            })}
         </div>
      </div>
   )
}
