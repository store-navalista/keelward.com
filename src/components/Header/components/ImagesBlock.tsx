import { useAppSelector } from '@/hooks/redux'
import Image from 'next/image'
import React, { FC } from 'react'
import css from '../Header.module.css'

const images = ['HOME', 'S_SUPPLY', 'ABOUT_US', 'RIDING_TEAMS', 'SHIP_REPAIR', 'UTM']

const ImagesBlock: FC = () => {
   const hoveredLink = useAppSelector((state) => state.content.hoveredLink)
   const height = 260

   return (
      <div className={css.images}>
         {images.map((img) => {
            return (
               <div key={img} style={{ opacity: hoveredLink === img ? 1 : 0 }}>
                  <Image src={`/assets/images/menu/${img}.jpg`} height={height} width={height * 1.47} alt='services' />
               </div>
            )
         })}
      </div>
   )
}

export default ImagesBlock
