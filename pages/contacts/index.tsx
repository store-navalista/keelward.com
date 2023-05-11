import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import st from './index.module.scss'
import { IAboutProps } from '../../src/types/pages/about'
import { ContactsContent as content } from '@/i18n/pages/locales'
import { useAppSelector } from '@/hooks/redux'
import Loader from '@/components/UI/loader/Loader'

const Contacts: NextPage = ({ content }: IAboutProps) => {
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

export default Contacts
