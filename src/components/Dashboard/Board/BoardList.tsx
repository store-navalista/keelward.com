import { useAppSelector } from '@/hooks/redux'
import React, { FC } from 'react'
import css from './Board.module.scss'
import Account from './BoardItems/Account'
import QR from './BoardItems/QR'
import Radio from './BoardItems/Radio'
import Time from './BoardItems/Time/Time'

const BoardList: FC = () => {
   const type = useAppSelector((state) => state.dashboard.dashboardItems)

   return (
      <div className={css.wrapper}>
         {type.account ? <Account /> : null}
         {type.time ? <Time /> : null}
         {type.qr ? <QR /> : null}
         {type.radio ? <Radio /> : null}
      </div>
   )
}

export default BoardList
