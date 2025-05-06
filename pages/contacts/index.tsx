import CanonicalHref from '@/components/Canonical'
import Contacts from '@/components/PagesComponents/CONTACTS'
import { Template } from '@/components/PagesComponents/Template'
import Seo from '@/components/seo'
import { PageProps } from '@/constants/types'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'

const page_ID = 'CONTACTS'

const ContactsPage: NextPage = ({ seo }: PageProps) => {
   return (
      <>
         <CanonicalHref />
         <Seo {...seo} />
         <Template page_ID={page_ID} type='heading' />
         <Contacts />
      </>
   )
}

export default ContactsPage

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
