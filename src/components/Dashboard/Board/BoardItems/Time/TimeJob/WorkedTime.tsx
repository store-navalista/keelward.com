import { JC } from '@/constants/jobs'
import { useAppDispatch } from '@/hooks/redux'
import useOutsideClick from '@/hooks/useOutsideClick'
import { JobsActions } from '@/store/reducers/jobsReducer'
import React, { FC, useRef } from 'react'
import TimeService from '../services'
import css from './TimeJob.module.scss'

interface ITimeJob {
   j: any
   days: ReturnType<TimeService['getDaysOfMonth']>
}

interface IWorkedTime extends ITimeJob {
   setisTimingOpen: React.Dispatch<React.SetStateAction<boolean>>
   i: number
}

const WorkedTime: FC<IWorkedTime> = ({ j, i, days, setisTimingOpen }) => {
   const dispatch = useAppDispatch()
   const ref = useRef(null)
   const { hours_worked } = j

   useOutsideClick(ref, () => setisTimingOpen(undefined))

   function chooseTime(t: number, i: number) {
      const changedArr = [...hours_worked].with(i, t)
      dispatch(JobsActions.updateJob({ ...j, hours_worked: changedArr }))
      setisTimingOpen(undefined)
   }

   const calculatePosition = (index: number, totalItems: number) => {
      const radius = 60
      const angle = (2 * Math.PI) / totalItems
      const x = radius * Math.cos(index * angle)
      const y = radius * Math.sin(index * angle)
      return { left: `${x}px`, top: `${y}px` }
   }

   const { day, formatDay } = days[i]

   return (
      <div ref={ref} className={css.worked_time}>
         <div>
            {JC.WT.map((t, index) => (
               <button key={index} onClick={() => chooseTime(t, i)} style={calculatePosition(index, JC.WT.length)}>
                  {t}
               </button>
            ))}
            <div className={css.info}>
               <span>{`${formatDay} ${day}`}</span>
               <span>{`${j.hours_worked[i]}h.`}</span>
            </div>
         </div>
      </div>
   )
}

export default WorkedTime
