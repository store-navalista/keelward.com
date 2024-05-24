import { DashboardTemplate } from '@/components/Dashboard'
import Loader from '@/components/UI/loader/Loader'
import useLoading from '@/hooks/useLoading'
import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const Dashboard: FC = () => {
   const isLoading = useLoading()
   const router = useRouter()
   const [cookies] = useCookies()

   useEffect(() => {
      if (!cookies['token'] || !cookies['user_id']) {
         router.push({
            pathname: '/'
         })
      } else {
         router.push({
            pathname: '/dashboard',
            query: { id: cookies['user_id'] }
         })
      }
   }, [cookies])

   if (isLoading) return <Loader />

   return (
      <>
         <DashboardTemplate />
      </>
   )
}
export default Dashboard
