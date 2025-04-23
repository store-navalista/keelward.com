import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC, Fragment, useRef } from 'react'
import css from './index.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import Image from 'next/image'
import { EffectCube, Pagination, Autoplay } from 'swiper/modules'
import { PATHS } from '@/constants/pages'
import Orb from '@/components/UI/Orb/Orb'
import { useInView } from 'react-intersection-observer'
import useHover from '@/hooks/useHover'
import translate from '@/i18n/translate'

const path = '/assets/images/store/generators/'
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']

const descriptions = [
   [
      'MMPF306 - Open Type Marine Genset',
      'MMPF306 diesel generator with a capacity of 409-450 kVA (327-360 kW) with QSZ13 series diesel engines, 13 l capacity. This equipment is of medium-duty type, used in machine-building and repair enterprises, for autonomous power supply of factory premises, workshops, commercial complexes.',
      '59710 EUR per unit'
   ],
   [
      'MMPF402 - Silent Diesel Generator',
      'MMPF402 is a high-performance diesel generator with a power output of 500-550 kVA (400-440 kW), featuring a robust 15L engine. Designed for industrial applications, construction sites, and backup power for large facilities, it ensures reliable operation with low noise levels.',
      '68900 EUR per unit'
   ],
   [
      'MMPF250 - Compact Industrial Genset',
      'A compact and efficient diesel generator delivering 250 kVA (200 kW) of power. Equipped with a durable 9L engine, this unit is ideal for small factories, agricultural enterprises, and temporary power solutions in remote areas.',
      '43500 EUR per unit'
   ],
   [
      'MMPF800 - Heavy-Duty Power Station',
      'The MMPF800 is a powerful 800-850 kVA (640-680 kW) diesel generator designed for continuous and emergency power supply in large industrial complexes, data centers, and mining operations. Built with a high-capacity 22L engine, it guarantees stable energy output under heavy loads.',
      '112500 EUR per unit'
   ]
]

const Slider: FC<{ setIndex: React.Dispatch<React.SetStateAction<number>> }> = ({ setIndex }) => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, x: -100 }}
         animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: -100 }}
         transition={{ duration: 1, ease: 'easeOut' }}
      >
         <Swiper
            effect={'cube'}
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            cubeEffect={{
               shadow: true,
               slideShadows: true,
               shadowOffset: 10,
               shadowScale: 0.94
            }}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            onSlideChange={(swiper) => setIndex(swiper.realIndex)}
            className={css.slider}
         >
            {images.map((img) => {
               return (
                  <SwiperSlide key={img}>
                     <Image src={`${path}${img}`} fill alt='product 1' />
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </motion.div>
   )
}

const Heading: FC = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: -100 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
         transition={{ duration: 1, ease: 'easeOut' }}
         className={css.heading}
      >
         <h2>{translate('LIVE_STOCK-title')}</h2>
      </motion.div>
   )
}

const Description: FC<{ index: number }> = ({ index }) => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <motion.div
         ref={ref}
         key={index}
         className={css.desc}
         initial={{ opacity: 0, x: 100 }}
         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
         transition={{ duration: 1, ease: 'easeOut' }}
      >
         <h3>{descriptions[index][0]}</h3>
         <p>{descriptions[index][1]}</p>
         <p>{descriptions[index][2]}</p>
      </motion.div>
   )
}

const StoreLink: FC = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })
   const hoverRef = useRef(null)
   const isHover = useHover({ ref: hoverRef, isGlobal: true })

   return (
      <motion.div
         ref={ref}
         className={css.store_link}
         initial={{ opacity: 0 }}
         animate={inView ? { opacity: 1 } : { opacity: 0 }}
         transition={{ duration: 1.4, ease: 'easeOut' }}
      >
         <div ref={hoverRef} className={css.link}>
            <Link href={'/'}>
               {/* <Link href={PATHS.LIVE_STOCK.href}> */}
               <span>{translate('store')}</span>
               <div className={css.circle}>
                  <Orb hoverIntensity={0.3} />
               </div>
            </Link>
         </div>
      </motion.div>
   )
}

export { Slider, Description, StoreLink, Heading }
