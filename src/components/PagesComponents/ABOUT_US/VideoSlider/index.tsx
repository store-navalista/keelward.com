import dynamic from 'next/dynamic'
import React, { FC, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react'
import css from './index.module.css'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false })
const videos = [
   'h-1.mp4',
   'v-1.mp4',
   'h-2.mp4',
   'v-2.mp4',
   'h-3.mp4',
   'v-3.mp4',
   'h-4.mp4',
   'v-4.mp4',
   'h-5.mp4',
   'v-5.mp4',
   'h-6.mp4',
   'h-7.mp4',
   'h-8.mp4',
   'h-9.mp4',
   'h-10.mp4'
]

type FullScreenVideoProps = {
   fullscreenIndex: number
   setFullscreenIndex: React.Dispatch<React.SetStateAction<number>>
}

const FullScreenVideo: FC<FullScreenVideoProps> = ({ fullscreenIndex, setFullscreenIndex }) => {
   return (
      <div className={css.fullscreen} onClick={() => setFullscreenIndex(null)}>
         <DynamicReactPlayer
            url={`/video/${videos[fullscreenIndex]}`}
            muted
            playing
            controls
            width='100vw'
            height='100vh'
         />
      </div>
   )
}

export default function VideoSlider() {
   const [activeIndex, setActiveIndex] = useState(0)
   const playersRef = useRef<(ReactPlayer | null)[]>([])
   const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null)

   return (
      <>
         <div className={css.video_slider}>
            <Swiper
               navigation={true}
               slidesPerView={'auto'}
               spaceBetween={30}
               onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
               modules={[Navigation]}
               onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex)
               }}
            >
               {videos.map((src, index) => (
                  <SwiperSlide key={index} className={css.slide}>
                     <DynamicReactPlayer
                        ref={(el: ReactPlayer) => (playersRef.current[index] = el)}
                        url={`/video/${src}`}
                        muted
                        playing={index === activeIndex}
                        width={src.startsWith('h') ? '640px' : '200px'}
                        height={360}
                        onClick={() => setFullscreenIndex(index)}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         {fullscreenIndex !== null && <FullScreenVideo {...{ fullscreenIndex, setFullscreenIndex }} />}
      </>
   )
}
