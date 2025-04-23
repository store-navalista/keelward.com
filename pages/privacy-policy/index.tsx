import Seo from '@/components/seo'
import { PageProps } from '@/constants/types'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import css from '/styles/MDX.module.css'

const page_ID = 'PRIVACY_POLICY'

const AboutUs: NextPage = ({ seo, content }: PageProps) => {
   return (
      <>
         <Seo {...seo} />
         <div className={css.mdx}>
            <MDXRemote {...content} />
         </div>
      </>
   )
}

export default AboutUs

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
