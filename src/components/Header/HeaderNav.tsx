import React from 'react'
import css from './HeaderNav.module.scss'
import Link from 'next/link'
import translate from '../../i18n/translate'
import header from '../../i18n/components/header.json'
import { useAppSelector } from '@/hooks/redux'

const HeaderNav = () => {
   const currentPage = useAppSelector((state) => state.content.currentPage)

   const { links } = header

   return (
      <nav className={css.nav}>
         {links.map((link, i) => {
            const { id, href, defaultMessage } = link
            console.log(currentPage, id)

            return (
               <Link key={i} href={href}>
                  <a className={css.link + ` ${currentPage === id ? css.active : ''}`}>
                     {translate(`header-link.${link.id}`, defaultMessage)}
                  </a>
               </Link>
            )
         })}
      </nav>
   )
}

export default HeaderNav
