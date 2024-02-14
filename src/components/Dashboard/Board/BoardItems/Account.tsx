import React, { FC, useDeferredValue } from 'react'
import css from './Boards.module.scss'
import Image from 'next/image'
import translate from '@/i18n/translate'

const rows = ['name', 'date', 'specialization', 'position', 'role']

const user = {
   avatar: 'otinov_a_v.png',
   describe_name: 'Otinov Anton',
   describe_date: '02.03.1985',
   describe_specialization: 'Engineer',
   describe_position: 'Chief Engineer',
   describe_role: 'Employee',
   time_report: [
      {
         job_description: '',
         timing: []
      },
      {
         job_description: '',
         timing: []
      }
   ]
}

const Account: FC = () => {
   const w = 250

   return (
      <div className={css.account}>
         <div className={css.avatar}>
            <div>
               <Image src={`/assets/images/dashboard/${user.avatar}`} alt={'Person'} width={w} height={w} />
            </div>
            <div className={css.describe}>
               {rows.map((r, i) => {
                  return (
                     <p key={i}>
                        <b>{translate(`dashboard.account-describe_${r}`)}</b>&#32;- {user[`describe_${r}`]}
                     </p>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Account
