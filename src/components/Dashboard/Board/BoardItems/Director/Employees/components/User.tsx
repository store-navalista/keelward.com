import React, { CSSProperties, FC, useEffect, useMemo, useState } from 'react'
import css from '../Employees.module.scss'
import translate from '@/i18n/translate'
import Image from 'next/image'
import UserDescription from './UserDescription'
import { UI } from '../../UI'

const User: FC<any> = ({ expand, setExpand, user }) => {
   if (!expand) return
   const { _id, avatar, describe_name, describe_date, describe_specialization, describe_position, describe_role } = user
   const userExpand = expand.find((item: { id: string; isOpen: boolean }) => item.id === user._id)

   const [data, setData] = useState()

   const openDescription = () => {
      const correctExpands = expand.map((item) => {
         if (item.id === user._id) return { id: _id, isOpen: !userExpand.isOpen }
         return item
      })
      setExpand(correctExpands)
   }

   return (
      <div className={css.users}>
         <div className={css.user}>
            <div className={css.info}>
               <button
                  onClick={openDescription}
                  className={css.expand}
                  style={
                     {
                        '--btn_bg': `url(/assets/images/svg/custom-button-icon-${
                           userExpand?.isOpen ? 'minus' : 'plus'
                        }.svg)`
                     } as CSSProperties
                  }
               />
               <Image
                  className={css.avatar}
                  alt='avatar'
                  src={`/assets/images/dashboard/mini-${avatar}`}
                  width={30}
                  height={30}
               />
               <p className={css.name}>{describe_name}</p>
               <UI.Input data-type='id' icon='user-managment-id.svg' value={_id} readOnly />
               <UI.Input icon='user-managment-password.svg' placeholder='Password' />
               <button className={css.save} disabled={true} />
            </div>
            {userExpand?.isOpen ? (
               <UserDescription
                  {...{ describe_name, describe_date, describe_specialization, describe_position, describe_role }}
               />
            ) : null}
         </div>
      </div>
   )
}

export default User
