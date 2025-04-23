import translate from '@/i18n/translate'
import Link from 'next/link'
import React from 'react'
import css from './ErrorScreen.module.css'

export const ErrorScreen = ({ type }) => {
   const background = `rgba(19, 19, 19, 0.9) url('/assets/images/svg/${
      type === '404' ? 404 : 500
   }_bg.svg') 50% 50% / cover no-repeat`

   return (
      <div className={css.error} style={{ background }}>
         <Link className={css.link} href='/'>
            {translate('404.button')}
         </Link>
      </div>
   )
}
