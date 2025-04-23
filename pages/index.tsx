import CertificatesBlock from '@/components/PagesComponents/HOME/CertificatesBlock'
import MainSlider from '@/components/PagesComponents/HOME/MainSlider'
import ServicesBlock from '@/components/PagesComponents/HOME/ServicesBlock'
import StoreBlock from '@/components/PagesComponents/HOME/StoreBlock'
import SwiperBottomBlock from '@/components/PagesComponents/HOME/SwiperBottomBlock'
import Seo from '@/components/seo'
import { PageProps } from '@/constants/types'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import css from './index.module.css'

const Home: NextPage = ({ seo }: PageProps) => {
   return (
      <>
         <Seo {...seo} />
         <div className={css.wrapper}>
            <section className={css.slider_section}>
               <MainSlider />
               <SwiperBottomBlock />
            </section>
            <ServicesBlock />
            <StoreBlock />
            <CertificatesBlock />
         </div>
      </>
   )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
   const page_id = 'HOME'
   const collection = await data_collector(page_id, locale, serialize)
   const data = {
      seo: collection?.seo || {},
      content: collection?.content || {},
      locale
   }

   return {
      props: { ...data }
   }
}
