import React, { FC } from 'react'
import css from '../Timing.module.scss'
import { JobProps } from '../Timing'

const Job: FC<JobProps> = ({ currentJob, days }) => {
   const { job, hours_worked } = currentJob

   const getStyles = (val: number) => {
      switch (val) {
         case -0.5:
            return { backgroundImage: 'url(/assets/images/svg/timereport-days-dayof.svg)' }
         case -1:
            return { backgroundImage: 'url(/assets/images/svg/timereport-days-sick.svg)' }
         case -1.5:
            return { backgroundImage: 'url(/assets/images/svg/timereport-days-vac.svg)' }
         default:
            return { backgroundImage: '' }
      }
   }

   const sum = hours_worked.reduce((acc, current) => (current > 0 ? acc + current : acc), 0)

   return (
      <div className={css.row}>
         <p></p>
         <p>{job.project_number}</p>
         <p>{job.ship_name}</p>
         <p>{job.job_description}</p>
         <div className={css.days}>
            {days.map((d, i) => {
               const { day } = d
               return (
                  <span style={getStyles(hours_worked[i])} key={day}>
                     {hours_worked[i] >= 1 ? hours_worked[i] : ''}
                  </span>
               )
            })}
         </div>
         <p>{sum}</p>
      </div>
   )
}

export default Job
