import { Input } from '@/components/UI/input/Input'
import { IJob } from '@/constants/jobs'
import { useAppDispatch } from '@/hooks/redux'
import useHover from '@/hooks/useHover'
import translate from '@/i18n/translate'
import { JobsActions } from '@/store/reducers/jobsReducer'
import Image from 'next/image'
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import TimeService from '../services'
import css from './TimeJob.module.scss'
import WorkedTime from './WorkedTime'

const colors = ['#29abe2', '#9dd251', '#eb5757']

const getStyle = (type: number) => {
   switch (type) {
      case -0.5: // day of
         return {
            '--borderColor': colors[0],
            '--bg-icon': 'url(/assets/images/svg/timereport-days-dayof.svg)'
         }
      case -1: //sick day
         return {
            '--borderColor': colors[1],
            '--bg-icon': 'url(/assets/images/svg/timereport-days-sick.svg)'
         }
      case -1.5: //vacation
         return {
            '--borderColor': colors[2],
            '--bg-icon': 'url(/assets/images/svg/timereport-days-vac.svg)'
         }
      default: //default
         return {
            '--borderColor': '#fff'
         }
   }
}

interface ITimeJob {
   j: IJob
   days: ReturnType<TimeService['getDaysOfMonth']>
   index: number
}

const TimeJob: FC<ITimeJob> = ({ j, days, index }) => {
   const dispatch = useAppDispatch()
   const ref = useRef(null)
   const isHover = useHover(ref)
   const staticTranslate = (id: string) => useIntl().formatMessage({ id: id, defaultMessage: id })
   const errorMessage = staticTranslate('dashboard.timereport-job-errors-empty')
   const [error, setError] = useState('')

   const { _id, job, hours_worked } = j
   const [isTimingOpen, setisTimingOpen] = useState(undefined)

   useEffect(() => {
      if (!hours_worked.length) {
         const emptyArr = []
         days.forEach((_, i) => {
            if (_.day_of) return (emptyArr[i] = -0.5)
            emptyArr[i] = 0
         })
         dispatch(JobsActions.updateJob({ ...j, hours_worked: [...hours_worked, ...emptyArr] }))
      }
   }, [hours_worked, isTimingOpen])

   if (!j)
      return (
         <div className={css.preloader}>
            <Image src={'/assets/images/svg/timereport-preloader.svg'} width={32} height={32} alt='preloader' />
         </div>
      )

   const fields = [
      {
         field: 'project_number',
         styles: { textAlign: 'center' },
         options: { ph: '3240010', onlyDigits: true }
      },
      { field: 'ship_name', options: { ph: 'CHELSEA-2' } },
      {
         field: 'job_description',
         options: { ph: 'DG INSTALLATION DESIGN' }
      }
   ]

   const sum = j.hours_worked.length
      ? j.hours_worked.reduce((acc, current) => (current > 0 ? acc + current : acc), 0)
      : 0

   return (
      <div className={css.job} style={{ marginTop: index === 0 ? '25px' : '20px' }}>
         <div className={css.desc}>
            <button ref={ref} className={css.remove} onClick={() => dispatch(JobsActions.removeJob(_id))} />
            {fields.map((f) => {
               const { field, styles, options } = f

               return (
                  <div
                     style={{ transform: index === 0 ? 'translateY(-69%)' : 'translateY(-50%)' }}
                     className={css.inputs}
                     key={field}
                  >
                     {index === 0 ? <span>{translate(`dashboard.timereport-job-${field}`)}</span> : null}
                     <Input
                        type='l'
                        className={css.job_name}
                        style={styles as CSSProperties}
                        value={job[field]}
                        placeholder={options.ph}
                        onChange={(v) => {
                           if (options.onlyDigits) {
                              const digitOnlyValue = v.target.value.replace(/\D/g, '')
                              dispatch(JobsActions.updateJob({ ...j, job: { ...job, [field]: digitOnlyValue } }))
                           } else {
                              dispatch(JobsActions.updateJob({ ...j, job: { ...job, [field]: v.target.value } }))
                           }
                        }}
                     />
                  </div>
               )
            })}
            <p>{sum}</p>
         </div>
         <ul style={{ opacity: isHover ? 0.3 : 1 }}>
            {days.map((_, i) => {
               const WorkedTimeProps = { j, i, days, colors, setisTimingOpen }

               return (
                  <li style={getStyle(hours_worked[i]) as CSSProperties} key={i}>
                     <button onClick={() => setisTimingOpen(i)}>{hours_worked[i] > 0 ? hours_worked[i] : ''}</button>
                     {isTimingOpen === i ? <WorkedTime {...WorkedTimeProps} /> : null}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default TimeJob
