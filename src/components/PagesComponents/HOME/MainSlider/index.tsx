import { PATHS } from '@/constants/pages'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controls, MoreDetailsButton, TextBlock } from './Components'
import css from './index.module.css'

const slides = [
   {
      img: 'slider_1.jpg',
      text: ['company', 'section-title-MT_SERVICES', 'HOME-slider-first-desc'],
      href: PATHS['MT_SERVICES'].href
   },
   {
      img: 'slider_2.jpg',
      text: ['company', 'page-title-S_SUPPLY', 'HOME-slider-second-desc'],
      href: PATHS['S_SUPPLY'].href
   }
]

export default function MainSlider() {
   const [index, setIndex] = useState(0)
   const swiperRef = useRef(null)

   return (
      <div className={css.slider_part}>
         <Swiper
            loop={true}
            // autoplay={{ delay: 8000, disableOnInteraction: true }}
            slidesPerView='auto'
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setIndex(swiper.realIndex)}
            className={css.main_slider}
         >
            {slides.map((slide, i) => {
               const { img, text, href } = slide

               return (
                  <SwiperSlide key={i}>
                     <Image
                        src={`/assets/images/pages/HOME/${img}`}
                        alt={`Slide ${i + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                     />
                     <motion.div
                        key={index}
                        className={css.info_block}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                     >
                        <TextBlock {...{ text, index }} />
                        <MoreDetailsButton {...{ index, href }} />
                     </motion.div>
                  </SwiperSlide>
               )
            })}
         </Swiper>
         <Controls onNext={() => swiperRef.current?.slideNext()} onPrev={() => swiperRef.current?.slidePrev()} />
      </div>
   )
}
