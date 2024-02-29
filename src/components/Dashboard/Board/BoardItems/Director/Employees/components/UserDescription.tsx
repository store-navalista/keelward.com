import translate from '@/i18n/translate'
import React, { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { UI } from '../../UI'
import css from '../Employees.module.scss'

const UserDescription: FC<Record<string, string>> = ({
   describe_name,
   describe_date,
   describe_specialization,
   describe_position
}) => {
   const staticTranslate = (id: string) => useIntl().formatMessage({ id: id, defaultMessage: id })
   const data = { describe_name, describe_date, describe_specialization, describe_position }
   const [isModal, setisModal] = useState(false)

   const deleteUser = async () => {
      console.log('removed')
   }

   return (
      <div className={css.description}>
         <p>{translate('dashboard.users-details')}</p>
         <div className={css.details}>
            <div className={css.col}>
               {['describe_name', 'describe_date'].map((input) => {
                  return (
                     <UI.Input
                        key={input}
                        defaultValue={data[input]}
                        placeholder={staticTranslate(`dashboard.users-${input}-ph`)}
                        label={staticTranslate(`dashboard.users-${input}`)}
                     />
                  )
               })}
            </div>
            <div className={css.col}>
               {['describe_specialization', 'describe_position'].map((input) => {
                  return (
                     <UI.Input
                        key={input}
                        defaultValue={data[input]}
                        placeholder={staticTranslate(`dashboard.users-${input}-ph`)}
                        label={staticTranslate(`dashboard.users-${input}`)}
                     />
                  )
               })}
            </div>
            <div className={css.buttons}>
               <button className={css.save} disabled={true} />
               <button onClick={() => setisModal(true)} className={css.remove} />
            </div>
         </div>
         {isModal && <UI.Confirm apply={deleteUser} cancel={() => setisModal(false)} />}
      </div>
   )
}

export default UserDescription
