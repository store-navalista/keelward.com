import { DashboardTemplate } from '@/components/Dashboard'
import Loader from '@/components/UI/loader/Loader'
import useLoading from '@/hooks/useLoading'
import React, { FC } from 'react'

const Dashboard: FC = () => {
   const isLoading = useLoading()

   if (isLoading) return <Loader />

   return (
      <>
         <DashboardTemplate />
      </>
   )
}
export default Dashboard
