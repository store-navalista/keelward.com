import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import translate from '@/i18n/translate'
import { JobsActions } from '@/store/reducers/jobsReducer'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import css from '../Boards.module.scss'
import TimeHeader from './TimeHeader/TimeHeader'
import TimeJob from './TimeJob/TimeJob'
import TimeNavigate from './TimeNavigate/TimeNavigate'
import TimeService from './services'
import { IUser } from '@/constants/users'

const Time: FC = () => {
   const [currentDate, setCurrentDate] = useState(new Date())
   const dispatch = useAppDispatch()
   const i18n = useAppSelector((state) => state.reducer.content.i18n)
   const timeService = new TimeService(i18n)
   const localUser = reactLocalStorage.getObject('jobsLocal') as IUser
   const jobs = useAppSelector((state) => state.reducer.jobs)

   useEffect(() => {
      if (Object.keys(localUser).length) {
         const existJobs = localUser.reports.find(
            (j) => j.period === currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })
         )?.jobs
         if (existJobs) dispatch(JobsActions.updateJobs(existJobs))
      }
   }, [currentDate])

   const days = timeService.getDaysOfMonth(currentDate)
   const timeServiceProps = { timeService, currentDate, setCurrentDate, days }

   return (
      <div className={css.time}>
         <h2>{translate('dashboard.timereport-title')}</h2>
         <div className={css.body}>
            <TimeHeader {...timeServiceProps} />
            {jobs.map((j, index) => {
               const jobProps = { j, days }

               return (
                  <Fragment key={index}>
                     <TimeJob {...jobProps} index={index} />
                  </Fragment>
               )
            })}
            <TimeNavigate currentDate={currentDate} />
            <button className={css.send}>{translate('dashboard.timereport-send')}</button>
         </div>
      </div>
   )
}

export default Time
