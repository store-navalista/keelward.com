import React, { FC, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type GearButtonProps = {
   children: ReactNode
   isHover: boolean
   className?: string
   href: string
}

const GearLink: FC<GearButtonProps> = ({ isHover, className, children, href }) => {
   const imgOptions = {
      transition: 'transform 0.3s'
   }

   return (
      <Link className={className} href={href}>
         <Image
            src={`/assets/images/svg/gear.svg`}
            style={{ transform: `rotate(${isHover ? 90 : 0}deg)`, ...imgOptions }}
            width={10}
            height={10}
            alt='gear'
         />
         {children}
      </Link>
   )
}

export default GearLink
