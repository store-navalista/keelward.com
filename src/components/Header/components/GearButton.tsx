import React, { FC, ReactNode } from 'react'
import Image from 'next/image'

type GearButtonProps = {
   children: ReactNode
   handler?: () => void
   isOpen: boolean
   className?: string
}

const GearButton: FC<GearButtonProps> = ({ handler, isOpen, className, children }) => {
   const imgOptions = {
      transition: 'transform 0.3s'
   }

   return (
      <button className={className} onClick={handler}>
         <Image
            src={`/assets/images/svg/gear.svg`}
            style={{ transform: `rotate(${isOpen ? 90 : 0}deg)`, ...imgOptions }}
            width={10}
            height={10}
            alt='gear'
         />
         {children}
         <Image
            src={'/assets/images/svg/down.svg'}
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)`, ...imgOptions }}
            width={12}
            height={12}
            alt='direction'
         />
      </button>
   )
}

export default GearButton
