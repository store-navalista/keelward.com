import { IJob } from '@/constants/jobs'
import { useAppSelector } from '@/hooks/redux'
import translate from '@/i18n/translate'
import { useGetUsersQuery } from '@/store/reducers/apiReducer'
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react'
import TimeService from '../../Time/services'
import Filters from './Components/Filters'
import Header from './Components/Header'
import Job from './Components/Job'
import Person from './Components/Person'
import css from './Timing.module.scss'

type Days = { days: ReturnType<TimeService['getDaysOfMonth']> }

export type IOpenedJobs = {
   id: string
   isOpen: boolean
}[]

interface Props extends Days {
   openedJobs?: IOpenedJobs
   setOpenedJobs?: React.Dispatch<React.SetStateAction<IOpenedJobs>>
}

export interface HeaderProps extends Props {
   timeService: TimeService
   currentDate: Date
   setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

export interface PersonProps extends Props {
   _id: string
   employee: string
   isReportExist: boolean
   currentJobs: IJob[]
}

export interface JobProps extends Props {
   currentJob: IJob
}

const Timing: FC = () => {
   const { data: users, error, isLoading } = useGetUsersQuery()
   const [currentDate, setCurrentDate] = useState(new Date())
   const [openedJobs, setOpenedJobs] = useState<IOpenedJobs>([])
   const [activeFilter, setActiveFilter] = useState(null)
   const i18n = useAppSelector((state) => state.reducer.content.i18n)
   const timeService = new TimeService(i18n)
   const days = timeService.getDaysOfMonth(currentDate)

   const filters = useMemo(() => [new Set(), new Set(), new Set()] as Set<string>[], [currentDate])

   const currentFormattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
   })

   useEffect(() => {
      if (users) {
         setOpenedJobs(
            users.map((user) => {
               return { id: user._id, isOpen: false }
            })
         )
         users.forEach((user) => {
            user.reports
               .find((r) => r.period === currentFormattedDate)
               ?.jobs.forEach((j) => {
                  filters[0].add(j.job.project_number)
                  filters[1].add(j.job.ship_name)
                  filters[2].add(j.job.job_description)
               })
         })
      }
   }, [users, currentDate])

   useEffect(() => {
      setActiveFilter(null)
   }, [currentDate])

   if (isLoading) {
      return <div>Loading...</div>
   }

   return (
      <div className={css.wrapper}>
         <h2>{translate('dashboard.timereport-director-timing-title')}</h2>
         <div className={css.timing}>
            <Filters filters={filters} setActiveFilter={setActiveFilter} />
            <Header {...{ timeService, currentDate, setCurrentDate, days, openedJobs, setOpenedJobs, filters }} />
            {users.map((user) => {
               const { _id, employee, reports } = user
               const isOpen = openedJobs.find((j) => j.id === _id)?.isOpen

               const filteredJobs = () => {
                  const jobs = reports.find((r) => r.period === currentFormattedDate)?.jobs || []
                  if (activeFilter) {
                     const [key, value] = [...Object.keys(activeFilter), ...Object.values(activeFilter)] as string[]
                     return jobs.filter((obj) => obj.job[key] === value)
                  }
                  return jobs
               }
               const currentJobs = filteredJobs()
               const isReportExist = !!currentJobs.length

               return (
                  <Fragment key={_id}>
                     <Person {...{ _id, days, employee, isReportExist, currentJobs, setOpenedJobs, openedJobs }} />
                     {isOpen
                        ? currentJobs.map((currentJob, i) => (
                             <Fragment key={i}>
                                <Job currentJob={currentJob} days={days} />
                             </Fragment>
                          ))
                        : null}
                  </Fragment>
               )
            })}
         </div>
      </div>
   )
}

export default Timing
