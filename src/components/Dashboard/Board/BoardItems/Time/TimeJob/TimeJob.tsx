import { Input } from '@/components/UI/input/Input'
import { IJob } from '@/constants/jobs'
import useHover from '@/hooks/useHover'
import translate from '@/i18n/translate'
import React, { CSSProperties, FC, useRef, useState } from 'react'
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
   jobs: IJob[]
   updateJobs: any
}

const TimeJob: FC<ITimeJob> = ({ j, days, index, jobs, updateJobs }) => {
   const ref = useRef(null)
   const isHover = useHover(ref)

   const { hours_worked } = j

   const [isTimingOpen, setisTimingOpen] = useState(undefined)

   const fields = [
      {
         field: 'project_number',
         styles: { textAlign: 'center' },
         options: { ph: '3240010' }
      },
      { field: 'ship_name', options: { ph: 'CHELSEA-2' } },
      {
         field: 'job_description',
         options: { ph: 'DG INSTALLATION DESIGN' }
      }
   ]

   const sum = j.hours_worked.length ? hours_worked.reduce((acc, current) => (current > 0 ? acc + current : acc), 0) : 0

   return (
      <div className={css.job} style={{ marginTop: index === 0 ? '25px' : '20px' }}>
         <div className={css.desc}>
            <button ref={ref} className={css.remove} onClick={() => updateJobs({ type: 'remove', payload: index })} />
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
                        value={j[field]}
                        placeholder={options.ph}
                        onChange={(e) => updateJobs({ type: field, payload: { val: e.target.value, index } })}
                     />
                  </div>
               )
            })}
            <p>{sum}</p>
         </div>
         <ul style={{ opacity: isHover ? 0.3 : 1 }}>
            {days.map((_, i) => {
               const WorkedTimeProps = { j, i, days, updateJobs, index, colors, setisTimingOpen }

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
