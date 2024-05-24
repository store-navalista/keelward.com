import { useAppSelector } from '@/hooks/redux'
import useUserByID from '@/hooks/useUserByID'
import React, { FC } from 'react'
import css from './Board.module.scss'
import Account from './BoardItems/Account'
import { Director } from './BoardItems/Director'
import QR from './BoardItems/QR'
import Radio from './BoardItems/Radio'
import Time from './BoardItems/Time/Time'

const BoardList: FC = () => {
   const type = useAppSelector((state) => state.reducer.dashboard.dashboardItems)
   const { data: user } = useUserByID()

   return (
      <div className={css.wrapper}>
         {type.account ? <Account user={user} /> : null}
         {type.time ? <Time /> : null}
         {type.qr ? <QR /> : null}
         {type.radio ? <Radio /> : null}
         {type.employees ? <Director.Employees /> : null}
         {type.timing ? <Director.Timing /> : null}
      </div>
   )
}

export default BoardList
