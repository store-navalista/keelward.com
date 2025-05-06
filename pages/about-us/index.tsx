import Seo from '@/components/seo'
import { PageProps } from '@/constants/types'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import css from '/styles/MDX.module.css'
import { Template } from '@/components/PagesComponents/Template'
import VideoSlider from '@/components/PagesComponents/ABOUT_US/VideoSlider'
import CanonicalHref from '@/components/Canonical'

const page_ID = 'ABOUT_US'

const AboutUs: NextPage = ({ seo, content }: PageProps) => {
   return (
      <>
         <CanonicalHref />
         <Seo {...seo} />
         <Template page_ID={page_ID} />
         <div className={css.mdx}>
            <MDXRemote {...content} />
         </div>
         {/* <VideoSlider /> */}
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
