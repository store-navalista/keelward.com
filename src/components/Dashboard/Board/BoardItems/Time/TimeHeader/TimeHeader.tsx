import React, { CSSProperties, FC } from 'react'
import TimeService from '../services'
import css from './TimeHeader.module.scss'
import { useAppDispatch } from '@/hooks/redux'
import { JobsActions } from '@/store/reducers/jobsReducer'

interface ITimeHeader {
   timeService: TimeService
   currentDate: Date
   setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
   days: ReturnType<TimeService['getDaysOfMonth']>
}

const getStyle = (day_of: boolean) => {
   const style = {
      '--day-of': day_of ? '#29abe2' : '#fff',
      '--text-color': day_of ? '#fff' : '#000'
   }

   return style
}

const TimeHeader: FC<ITimeHeader> = ({ timeService, currentDate, setCurrentDate, days }) => {
   const dispatch = useAppDispatch()

   const previousMonth = () => {
      dispatch(JobsActions.resetJobs())
      setCurrentDate((prevDate) => timeService.getPreviousMonth(prevDate))
   }

   const nextMonth = () => {
      dispatch(JobsActions.resetJobs())
      setCurrentDate((prevDate) => timeService.getNextMonth(prevDate))
   }

   function getCurrentMonth(): string {
      return timeService.formatDateToMonthYear(currentDate)
   }

   return (
      <div className={css.wrapper}>
         <div className={css.date}>
            <button onClick={previousMonth} aria-label='Previous Month'>
               &#9664;
            </button>
            <span>{getCurrentMonth().replace(/(\d+).*/g, '$1')}</span>
            <button onClick={nextMonth} aria-label='Next Month'>
               &#9654;
            </button>
         </div>
         <ul className={css.calendar}>
            {days.map((d, i) => {
               const { day, formatDay, day_of } = d
               return (
                  <li style={getStyle(day_of) as CSSProperties} key={i}>
                     {day}
                     <span className={css.tooltip}>{formatDay}</span>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default TimeHeader
