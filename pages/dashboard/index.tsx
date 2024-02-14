import { DashboardTemplate } from '@/components/Dashboard'
import Loader from '@/components/UI/loader/Loader'
import useLoading from '@/hooks/useLoading'
import React, { FC } from 'react'
import { useRouter } from 'next/router'

const Dashboard: FC = () => {
   const isLoading = useLoading()
   const router = useRouter()

   if (isLoading) return <Loader />

   router.push('/')

   return (
      <>
         <DashboardTemplate />
      </>
   )
}
export default Dashboard
