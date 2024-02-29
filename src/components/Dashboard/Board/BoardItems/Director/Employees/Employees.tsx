import { useGetUsersQuery } from '@/store/reducers/apiReducer'
import React, { FC, useEffect, useState } from 'react'
import css from './Employees.module.scss'
import User from './components/User'
import Portal from '@/HOC/Portal'
import { AnimatePresence, motion } from 'framer-motion'
import PortalModal from '@/components/UI/modals/PortalModal'
import { UI } from '../UI'

const Employees: FC = () => {
   const { data: users, error, isLoading } = useGetUsersQuery()
   const [expand, setExpand] = useState(null)
   const [isModal, setisModal] = useState(false)

   const expands = users
      ? users.map((user) => {
           return { id: user._id, isOpen: false }
        })
      : []

   useEffect(() => {
      setExpand(expands)
   }, [users])

   if (isLoading) {
      return <div>Loading...</div>
   }

   return (
      <div className={css.wrapper}>
         <p className={css.title}>Company Employees</p>
         {users.map((user) => {
            return <User key={user._id} {...{ expand, setExpand, user }} />
         })}
         <button className={css.add_user} />
         {isModal && <UI.Confirm {...{ setisModal }} />}
      </div>
   )
}

export default Employees
