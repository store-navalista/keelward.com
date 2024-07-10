import { DASHBOARD } from '@/constants/dashboard'
import { useAppSelector } from '@/hooks/redux'
import useActiveID from '@/hooks/useActiveID'
import { useMenuHandler } from '@/hooks/useMenuHandler'
import useUserByID from '@/hooks/useUserByID'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import css from './Board.module.scss'
import Account from './BoardItems/Account'
import CTOProperty from './BoardItems/CTOProperty/CTOProperty'
import { Director } from './BoardItems/Director'
import Greating from './BoardItems/Greating/Greating'
import QRCodeGenerator from './BoardItems/QRCodeGenerator/QRCodeGenerator'
import Radio from './BoardItems/Radio/Radio'
import RadioNavigate from './BoardItems/Radio/RadioNavigate'
import Time from './BoardItems/Time/Time'

const BoardList: FC<{ isOpen: boolean }> = ({ isOpen }) => {
   const type = useAppSelector((state) => state.reducer.dashboard.dashboardItems)
   const radioData = useAppSelector((state) => state.reducer.radio)
   const { data: user } = useUserByID()
   const { return_button_accept } = DASHBOARD
   const activeID = useActiveID()
   const handler = useMenuHandler('greating')
   const [notNullVolume, setNotNullVolume] = useState(1)

   return (
      <div className={css.wrapper}>
         {type.greating ? <Greating /> : null}
         {type.ctoProperty ? <CTOProperty /> : null}
         {type.account ? <Account user={user} /> : null}
         {type.time ? <Time /> : null}
         {type.qr ? <QRCodeGenerator /> : null}
         {type.radio ? <Radio /> : null}
         {type.employees ? <Director.Employees /> : null}
         {type.timing ? <Director.Timing /> : null}
         {radioData.isRadioNavigate ? <RadioNavigate {...{ isOpen, notNullVolume, setNotNullVolume }} /> : null}
         {return_button_accept.includes(activeID) ? (
            <button onClick={handler} className={css.to_main}>
               <div>
                  <Image src={'/assets/images/svg/dashboard-nav-to-main.svg'} alt='icon service' fill />
               </div>
            </button>
         ) : null}
      </div>
   )
}

export default BoardList
