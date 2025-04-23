import { ErrorScreen } from '@/components/Error/ErrorScreen'
import React from 'react'
import css from './404.module.css'

function Custom404() {
   return (
      <>
         <div className={css.error_wrapper}>
            <ErrorScreen type='404' />
         </div>
      </>
   )
}

export default Custom404
