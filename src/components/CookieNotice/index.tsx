import translate from '@/i18n/translate'
import Link from 'next/link'
import React, { FC } from 'react'
import { useCookies } from 'react-cookie'
import css from './index.module.css'

const CookieNotice: FC = () => {
   const [_, setCookie] = useCookies(['cookie_notice_accepted'])

   const accept = () => {
      setCookie('cookie_notice_accepted', true)
   }

   const cancel = () => {
      setCookie('cookie_notice_accepted', false)
   }

   return (
      <div className={css.cn}>
         <div>
            <span>{translate('cookie-notive-accept')}</span>
            <button className={css.link} onClick={accept}>
               {translate('ok')}
            </button>
            <Link className={css.link} href='privacy-policy'>
               {translate('cookie-notive-privacy')}
            </Link>
            <button onClick={cancel} className={css.close}>
               ✖
            </button>
         </div>
      </div>
   )
}

export default CookieNotice
