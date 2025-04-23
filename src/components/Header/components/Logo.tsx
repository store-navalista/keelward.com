import React, { CSSProperties, FC } from 'react'
import Image from 'next/image'
import css from '../Header.module.css'
import { useAppSelector } from '@/hooks/redux'

const Logo: FC<{ scrollStep: number }> = ({ scrollStep }) => {
   const isLaptop = useAppSelector((state) => state.reducer.content.mediaQuery.isLaptop)
   const logoHeight = scrollStep > 0 || isLaptop ? '54px' : '80px'

   return (
      <>
         <div className={css.logo} style={{ '--logo-height': logoHeight } as CSSProperties}>
            <Image src='/assets/images/svg/logo.svg' alt='logo' fill />
         </div>
      </>
   )
}

export default Logo
