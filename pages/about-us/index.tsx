import { Templates } from '@/components/Pages/templates'
import Loader from '@/components/UI/loader/Loader'
import useLoading from '@/hooks/useLoading'
import useProperty from '@/hooks/useProperty'
import React, { FC } from 'react'

const ABOUT: FC = () => {
   const MD = useProperty('MD')
   const isLoading = useLoading()

   if (isLoading) return <Loader />

   return (
      <>
         <Templates.InfoPage content={MD} options={{ height: 517 }} />
      </>
   )
}

export default ABOUT
