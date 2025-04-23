import translate from '@/i18n/translate'
import { motion, useCycle } from 'framer-motion'
import css from './Menu.module.css'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import React, { FC, useCallback, useRef, useState } from 'react'
import { LANGS } from '@/constants/languages'
import useCurrentLanguage from '../hooks/useCurrentLanguage'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import Image from 'next/image'

type LangProps = {
   title: string
   isActive: boolean
   loc: string
   changeLanguage: (loc: string) => void
}

const Lang: FC<LangProps> = ({ title, isActive, loc, changeLanguage }) => {
   // const [cookie, setCookie] = useCookies(['cookie_notice_accepted', 'language'])

   return (
      <div className={css.lang_item} data-active={isActive} onClick={() => changeLanguage(loc)} key={loc}>
         <Image src={`/assets/images/svg/flag_round_${loc}.svg`} fill alt='locale' />
      </div>
   )
}

export const LangTogler: FC<{ toggleOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ toggleOpen }) => {
   const router = useRouter()
   const currentLang = useCurrentLanguage()

   const changeLanguage = useCallback(
      (lang: string) => {
         router.push(router.pathname, router.asPath, { locale: lang.substring(0, 2) })
         toggleOpen(false)
      },
      [router.pathname]
   )

   return (
      <div className={css.lang}>
         {LANGS.map((l, index) => {
            const { loc, title } = l
            const isActive = loc.substring(0, 2) === currentLang

            return <Lang key={`${loc}-${index}`} {...{ title, isActive, loc, changeLanguage }} />
         })}
      </div>
   )
}
