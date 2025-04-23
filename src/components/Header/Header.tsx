import React, { FC } from 'react'
import css from './Header.module.css'
import Language from './components/Language'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import { useAppSelector } from '@/hooks/redux'
import { Menu } from '../Menu/Menu'

const Header: FC<{ scrollStep: number }> = ({ scrollStep }) => {
   const currentMQ = useAppSelector((state) => state.reducer.content.mediaQuery)

   return (
      <header className={css.wrapper}>
         <div className={css.header_wrapper}>
            <Logo scrollStep={scrollStep} />
            {!currentMQ.isMobile && <Navigation />}
            {!currentMQ.isMobile && <Language />}
            {currentMQ.isMobile && <Menu />}
         </div>
      </header>
   )
}

export default Header
