import React from 'react'
import css from './index.module.css'
import { New, Soon } from './components'
import news from './news.json'
import translate from '@/i18n/translate'
export default function NewsBlock() {
   return (
      <div className={css.news}>
         <h2>{translate('S_SUPPLY-news-title')}</h2>
         <div className={css.container}>
            <Soon />
            {/* {news.map((item) => (
               <New key={item.title} {...item} />
            ))} */}
         </div>
      </div>
   )
}
