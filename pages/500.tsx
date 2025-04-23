import { ErrorScreen } from '@/components/Error/ErrorScreen'
import React from 'react'

function Custom500() {
   return (
      <>
         <div className='body-wrapper'>
            <ErrorScreen type='500' />
         </div>
      </>
   )
}

export default Custom500
