import React from 'react'
import { Heading, InfoBlock, RightBlock, BottomBlock } from './components'
import css from './index.module.css'

export default function MainBlock() {
   return (
      <div className={css.wrapper}>
         <div className={css.content}>
            <div className={css.container}>
               <div className={css.left_block}>
                  <Heading />
                  <InfoBlock />
               </div>
               <div className={css.right_block}>
                  <RightBlock />
               </div>
            </div>
            <div className={css.bottom_block}>
               <BottomBlock />
            </div>
         </div>
      </div>
   )
}
