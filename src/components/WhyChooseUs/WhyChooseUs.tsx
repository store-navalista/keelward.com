import translate from '@/i18n/translate'
import React from 'react'
import css from './WhyChooseUs.module.css'

const parts = ['first', 'second', 'third', 'fourth']

export const WhyChooseUs = () => {
   return (
      <div className={css.why}>
         <div className={css.circle}>
            <p>{translate('why-choose-us-description')}</p>
            <div className={css.text}>{translate('why-choose-us')}</div>
            <div className={css.types}>
               {parts.map((part, index) => {
                  const text = `why-choose-us-${part}`

                  return (
                     <div key={index}>
                        {index + 1}
                        <span>- {translate(text)}</span>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
