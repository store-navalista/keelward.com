import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { MainContent as content } from '@/i18n/pages/locales'
import { IMainProps } from '@/types/pages/main'
import { useAppSelector } from '@/hooks/redux'
import MainBlock from '@/components/Pages/main-block/MainBlock'
import Loader from '@/components/UI/loader/Loader'
import Services from '@/components/Pages/service-block/Services'
import SwiperCerts from '@/components/UI/swiper-certs/SwiperCerts'
import { CERTIFICATES } from '@/constants/certificates'

const Home: NextPage = ({ content }: IMainProps) => {
   const lang = useAppSelector((state) => state.content.i18n)
   const [isLoading, setLoading] = useState(true)

   const certs = Object.values(CERTIFICATES).flatMap((c) => Object.values(c).flatMap((c) => c))

   useEffect(() => {
      setLoading(false)
   })

   if (isLoading) return <Loader />

   return (
      <>
         <MainBlock content={content[lang]} />
         <Services chapters={content[lang].chapters} />
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
