import React, { useState } from 'react'
import { Description, Heading, Slider, StoreLink } from './components'
import css from './index.module.css'

export default function StoreBlock() {
   const [index, setIndex] = useState(0)

   return (
      <div className={css.store}>
         <Heading />
         <div className={css.store_block}>
            <Slider setIndex={setIndex} />
            <StoreLink />
            <Description index={index} />
         </div>
      </div>
   )
}
