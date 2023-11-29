import translate from '@/i18n/translate'
import React from 'react'
import { default as DM } from '@/i18n/messages/defaultMessages'
import css from './404.module.scss'
import ExploreButton from '@/components/UI/btn-explore/ExploreButton'
import Link from 'next/link'

export default function Custom404() {
   return (
      <div className={css.not_page}>
         <h1>{translate('404', DM['404'].defaultMessage)}</h1>
         <span />
         <Link href='/'>
            <a>{translate('404.button', DM['404.button'].defaultMessage)}</a>
         </Link>
      </div>
   )
}
