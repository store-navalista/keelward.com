import React, { FC } from 'react'
import css from './Logo.module.scss'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/redux'
import Link from 'next/link'

type LType = 'decor' | 'main'

const Logo: FC<{ type?: LType }> = ({ type }) => {
   const isMobile = useAppSelector((state) => state.content.mediaQuery.isMobile)

   const TypeLogo = (props) => {
      switch (props.type) {
         case 'decor':
            return !isMobile ? (
               <div className={css.decor}>
                  <Image src='/assets/images/svg/logo.svg' alt='Logo decor' width={130} height={20} />
               </div>
            ) : null
         default:
            return !isMobile ? (
               <Link href='/'>
                  <a className={css.main} />
               </Link>
            ) : null
      }
   }

   return <TypeLogo type={type} />
}

export default Logo
