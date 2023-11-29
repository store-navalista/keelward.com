import React, { FC } from 'react'
import css from './Header.module.scss'
import { ILayoutComponentProps } from '@/types/layout'
import { useAppSelector } from '@/hooks/redux'
import MenuMobile from './components/MenuMobile/MenuMobile'
import Logo from './components/Logo/Logo'
import Cabinet from './components/Cabinet/Cabinet'
import Clock from './components/Clock/Clock'
import ProgressBar from './components/ProgressBar/ProgressBar'
import QuickPanel from './components/QuickPanel/QuickPanel'

const Header: FC<ILayoutComponentProps> = ({ scrollStep }) => {
   const isMobile = useAppSelector((state) => state.content.mediaQuery.isMobile)
   return (
      <header className={css.wrapper}>
         <div className={css.leftBlock}>
            <MenuMobile />
            <Logo type='decor' />
            <Clock />
            <Cabinet />
         </div>
         <Logo />
         <div className={css.rightBlock}>
            <ProgressBar />
            <QuickPanel />
         </div>
         <span className={css.blur} />
      </header>
   )
}

export default Header
