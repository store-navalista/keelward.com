import CanonicalHref from '@/components/Canonical'
import MainBlock from '@/components/PagesComponents/S_SUPPLY/MainBlock'
import Seo from '@/components/seo'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
const page_ID = 'S_SUPPLY'

const ShipSupply: NextPage = ({ seo }: any) => {
   return (
      <>
         <CanonicalHref />
         <Seo {...seo} />
         <MainBlock />
      </>
   )
}

export default ShipSupply

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
