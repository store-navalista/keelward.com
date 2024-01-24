import { Buttons } from '@/components/UI/dashboard'
import { Input } from '@/components/UI/input/Input'
import { IReport, JC } from '@/constants/jobs'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { JobsActions } from '@/store/reducers/jobsReducer'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { reactLocalStorage } from 'reactjs-localstorage'
import css from './TimeNavigate.module.scss'
import { Services } from './services'
import { IconTooltip } from '@/components/UI/icon-tooltip/IconTooltip'

const TimeNavigate: FC<{ currentDate: Date }> = ({ currentDate }) => {
   const dispatch = useAppDispatch()
   const [currentTask, setCurrentTask] = useState({ value: '', time: '' })
   const jobs = useAppSelector((state) => state.jobs)
   const staticTranslate = (id: string) => useIntl().formatMessage({ id: id, defaultMessage: id })
   const local = reactLocalStorage.getObject('jobsLocal') as IReport
   const period = currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })
   const services = new Services()

   useEffect(() => {
      if (local?.currentTask) setCurrentTask(local.currentTask)
   }, [currentDate, jobs])

   const actions = (type: string) => {
      switch (type) {
         case 'add':
            return () => dispatch(JobsActions.addJob())
         case 'save':
            return () => services.save(period, jobs)
         case 'download':
            return (e: ChangeEvent<HTMLInputElement>) => services.download(e, dispatch)
         case 'upload':
            return () => services.upload()
         case 'reset':
            return () => dispatch(JobsActions.resetJobs())
         case 'clean':
            return () => dispatch(JobsActions.cleanCache())
         case 'send_task':
            return () => services.send_task(currentTask.value, period)
         default:
            return
      }
   }

   return (
      <div className={css.wrapper}>
         <nav className={css.nav}>
            {JC.NAV.map((b) => {
               const { name, type } = b
               const handler = actions(name)

               return (
                  <Buttons.DashboardButton
                     style={{ backgroundImage: `url(/assets/images/svg/timereport-job-${name}.svg)` }}
                     key={name}
                     btn_type={type}
                     tooltip={{ message: staticTranslate(`dashboard.timereport-job-${name}`) }}
                     onClick={handler as () => void}
                     onChange={handler as () => void}
                  />
               )
            })}
         </nav>
         <IconTooltip
            className={css.warning}
            image={'/assets/images/svg/timereport-job-warning.svg'}
            message={staticTranslate('dashboard.timereport-job-current-task')}
         />
         <Input
            className={css.task}
            type='s'
            value={currentTask.value}
            placeholder={staticTranslate('dashboard.timereport-job-placeholders-current')}
            onChange={(v) => setCurrentTask({ ...currentTask, value: v.target.value })}
         />
         <Buttons.DashboardButton
            style={{ backgroundImage: `url(/assets/images/svg/timereport-job-task-send.svg)` }}
            btn_type='icon-btn'
            tooltip={{ message: staticTranslate('dashboard.timereport-task-send') }}
            onClick={actions('send_task') as () => void}
         />
      </div>
   )
}

export default TimeNavigate
