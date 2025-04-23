import { LiveStock } from '@/components/PagesComponents/LIVE_STOCK'
import Seo from '@/components/seo'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'

const page_ID = 'LIVE_STOCK'

const LiveStockPage: NextPage = ({ seo, goods }: any) => {
   return (
      <>
         <Seo {...seo} />
         {/* <LiveStock goods={goods} /> */}
      </>
   )
}

export default LiveStockPage

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
   const collection = await data_collector(page_ID, locale, serialize)

   // const page = query.page || 1
   // const res = await fetch(`http://localhost:3000/api/getGoods?page=${page}`)
   // const goods = await res.json()

   const data = {
      seo: collection?.seo || {},
      content: collection?.content || {},
      locale
      // goods: goods || []
   }

   return {
      props: { ...data }
   }
}
