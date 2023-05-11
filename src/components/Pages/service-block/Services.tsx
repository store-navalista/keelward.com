import React, { FC } from 'react'
import translate from '@/i18n/translate'
import { IMainChapter } from '@/types/pages/main'
import css from './Services.module.scss'
import ServicesBlock from './ServicesBlock'

const Services: FC<{ chapters: IMainChapter[] }> = ({ chapters }) => {
   return (
      <div className={css.wrapper}>
         <h2>{translate('main-services', 'Services')}</h2>
         <section>
            <ServicesBlock chapters={chapters} />
         </section>
      </div>
   )
}

export default Services
