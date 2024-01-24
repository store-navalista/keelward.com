import React, { FC } from 'react'
import css from './Employees.module.scss'
import Image from 'next/image'
import translate from '@/i18n/translate'
import { useGetUsersQuery } from '@/store/reducers/apiReducer'

const Employees: FC = () => {
   const { data, error, isLoading } = useGetUsersQuery()
   console.log(data)

   // if (isLoading) {
   //    return <div>Loading...</div>;
   //  }

   //  if (error) {
   //    return <div>Error: {error.message}</div>;
   //  }
   return <div className={css.account}></div>
}

export default Employees
