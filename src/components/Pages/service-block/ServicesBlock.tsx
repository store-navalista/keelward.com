import React, { FC } from 'react'
import { IMainChapter } from '@/types/pages/main'
import css from './ServicesBlock.module.scss'
import ServiceItem from './ServiceItem'
import { PAGES } from '@/constants/pages'

const ServicesBlock: FC<{ chapters: IMainChapter[] }> = ({ chapters }) => {
   return (
      <>
         {chapters.map((chapter, i) => {
            const { services, title } = chapter
            return (
               <div key={i} className={css.wrapper}>
                  <h3>{title}</h3>
                  <div className={css.block}>
                     {services.map((service, i) => {
                        const ext_service = () => {
                           const constants = PAGES.find((serv) => Object.keys(serv)[0] === service.page)
                           return {
                              ...service,
                              ...constants[service.page]
                           }
                        }
                        return <ServiceItem key={`${i}-serv`} service={ext_service()} />
                     })}
                  </div>
               </div>
            )
         })}
      </>
   )
}

export default ServicesBlock
