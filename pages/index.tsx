import MainBlock from '@/components/Pages/main-block/MainBlock'
import Services from '@/components/Pages/service-block/Services'
import Loader from '@/components/UI/loader/Loader'
import SwiperCerts from '@/components/UI/swiper-certs/SwiperCerts'
import { CERTIFICATES } from '@/constants/certificates'
import { CHAPTERS } from '@/constants/pages'
import { useAppSelector } from '@/hooks/redux'
import { PagesData as content } from '@/i18n/pages/locales'
import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const Home: NextPage = ({ content }: any) => {
   const lang = useAppSelector((state) => state.content.i18n)
   const [isLoading, setLoading] = useState(true)
   const { services, pages } = content[lang]
   const chapters = CHAPTERS.map((c) => Object.keys(c)[0])

   const certs = Object.values(CERTIFICATES).flatMap((c) => Object.values(c).flatMap((c) => c))

   useEffect(() => {
      setLoading(false)
   })

   if (isLoading) return <Loader />

   return (
      <>
         <MainBlock content={services} />
         <Services chapters={chapters} services={services} />
         <SwiperCerts certs={certs} />
      </>
   )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
   return {
      props: {
         content
      }
   }
}
