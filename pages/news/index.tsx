import News from '@/components/PagesComponents/NEWS'
import { Template } from '@/components/PagesComponents/Template'
import Seo from '@/components/seo'
import { PageProps } from '@/constants/types'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
const page_ID = 'NEWS'

const NewsBlock: NextPage = ({ seo }: PageProps) => {
   return (
      <>
         <Seo {...seo} />
         <Template page_ID={page_ID} type='heading' />
         <News />
      </>
   )
}

export default NewsBlock

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
   const collection = await data_collector(page_ID, locale, serialize)
   const data = {
      seo: collection?.seo || {},
      content: collection?.content || {},
      locale
   }

   return {
      props: { ...data }
   }
}
