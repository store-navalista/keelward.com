import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import st from './index.module.scss'
import { IAboutProps } from '@/types/pages/about'
import { AboutContent as content } from '@/i18n/pages/locales'
import { useAppSelector } from '@/hooks/redux'
import Loader from '@/components/UI/loader/Loader'

const About: NextPage = ({ content }: IAboutProps) => {
   const lang = useAppSelector((state) => state.content.i18n)
   const loc = content[lang]
   const [isLoading, setLoading] = useState(true)

   if (isLoading) return <Loader />

   return (
      <div className={st.wrapper}>
         <h1>{loc.title}</h1>
      </div>
   )
}

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {
         content
      }
   }
}

export default About
