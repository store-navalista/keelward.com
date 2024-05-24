import { ILayoutComponentProps } from '@/types/layout'
import React, { FC, useEffect, useState } from 'react'
import css from './Header.module.scss'
import Cabinet from './components/Cabinet/Cabinet'
import Clock from './components/Clock/Clock'
import Logo from './components/Logo/Logo'
import MenuMobile from './components/MenuMobile/MenuMobile'
import ProgressBar from './components/ProgressBar/ProgressBar'
import QuickPanel from './components/QuickPanel/QuickPanel'
import { useCookies } from 'react-cookie'
import Logout from './components/Cabinet/Logout'

const Header: FC<ILayoutComponentProps> = () => {
   const [cookies, , removeCookie] = useCookies(['token', 'user_id'])
   const [isSignin, setisSignin] = useState(false)

   useEffect(() => {
      cookies['token'] && cookies['user_id'] ? setisSignin(true) : setisSignin(false)
   }, [cookies])

   return (
      <header className={css.wrapper}>
         <div className={css.leftBlock}>
            <MenuMobile />
            {/* <Logo type='decor' /> */}
            <Clock />
            <div className={css.auth}>
               <Cabinet />
               {isSignin ? <Logout removeCookie={removeCookie} /> : null}
            </div>
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
