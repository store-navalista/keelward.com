import { Templates } from '@/components/Pages/templates'
import Loader from '@/components/UI/loader/Loader'
import { useAppSelector } from '@/hooks/redux'
import useLoading from '@/hooks/useLoading'
import { PagesData as content } from '@/i18n/pages/locales'
import React, { FC } from 'react'

const SD: FC = () => {
   const isLoading = useLoading()
   const i18n = useAppSelector((state) => state.reducer.content.i18n)
   const cnt = content[i18n].services.SD.content

   if (isLoading) return <Loader />

   return <Templates.TypeAPage content={cnt} />
}
export default SD
