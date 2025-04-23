import { MENU } from '@/constants/pages'
import translate from '@/i18n/translate'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import css from './Menu.module.css'
import { LangTogler } from './LangTogler'
import { FC } from 'react'

export const handleLinkColor = (condition: boolean) => {
   return { color: condition ? 'var(--color-red)' : '#1d1d1d' }
}

export const Navigation: FC<{ toggleOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ toggleOpen }) => {
   return (
      <nav className={css.wrapper}>
         <Image src='/assets/images/svg/logo-full.svg' width={60} height={60} alt='logo' style={{ margin: '0 auto' }} />
         <ul>
            {MENU.map((opt) => {
               const [value] = Object.values(opt)

               return (
                  <li className={css.link} key={value}>
                     <Link onClick={() => toggleOpen(false)} href={opt.href}>
                        {translate(`page-title-${value}`)}
                     </Link>
                  </li>
               )
            })}
         </ul>
         <LangTogler toggleOpen={toggleOpen} />
      </nav>
   )
}
