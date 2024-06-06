import Loader from '@/components/UI/loader/Loader'
import translate from '@/i18n/translate'
import Image from 'next/image'
import React, { FC } from 'react'
import css from './Greating.module.scss'
import useUserByID from '@/hooks/useUserByID'
import { IUser } from '@/constants/users'

const Greating: FC = () => {
   const { data: user = {} } = useUserByID()
   const { describe_name } = user as IUser

   if (!user) return <Loader />

   return (
      <div className={css.greating}>
         <Image
            className={css.image}
            src='/assets/images/dashboard/greating/great.jpg'
            alt='Greating'
            width={400}
            height={400}
         />
         <p>
            {`${describe_name} `}
            {translate('dashboard.users-welcome')}
         </p>
      </div>
   )
}

export default Greating
