import React from 'react'
import { Card, Heading, Substrate } from './components'
import css from './index.module.css'

export default function CertificatesBlock() {
   return (
      <div className={css.cert}>
         <Substrate />
         <div className={css.content}>
            <Heading />
            <Card />
         </div>
      </div>
   )
}
