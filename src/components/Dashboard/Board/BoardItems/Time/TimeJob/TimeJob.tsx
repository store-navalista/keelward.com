import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import css from './TimeJob.module.scss'
import translate from '@/i18n/translate'
import useHover from '@/hooks/useHover'
import { useAppDispatch } from '@/hooks/redux'
import { JobsActions } from '@/store/reducers/jobsReducer'
import TimeService from '../services'
import WorkedTime from './WorkedTime'
import { IconTooltip } from '@/components/UI/icon-tooltip/IconTooltip'
import { useIntl } from 'react-intl'
import Image from 'next/image'
import { Input } from '@/components/UI/input/Input'

const getStyle = (day_of: boolean) => {
   const style = {
      '--day-of': day_of ? '#29abe2' : '#fff',
      '--text-color': day_of ? '#fff' : '#000'
   }

   return style
}

interface ITimeJob {
   j: any
   days: ReturnType<TimeService['getDaysOfMonth']>
}

const TimeJob: FC<ITimeJob> = ({ j, days }) => {
   const dispatch = useAppDispatch()
   const ref = useRef(null)
   const isHover = useHover(ref)
   const staticTranslate = (id: string) => useIntl().formatMessage({ id: id, defaultMessage: id })
   const errorMessage = staticTranslate('dashboard.timereport-job-errors-empty')

   const [error, setError] = useState('')

   const { _id, job_name, hours_worked } = j
   const [isTimingOpen, setisTimingOpen] = useState(undefined)

   useEffect(() => {
      if (!hours_worked.length) {
         const emptyArr = []
         days.forEach((_, i) => (emptyArr[i] = 0))
         dispatch(JobsActions.updateJob({ ...j, hours_worked: [...hours_worked, ...emptyArr] }))
      }
   }, [hours_worked, isTimingOpen])

   useEffect(() => {
      job_name.length < 2 ? setError(errorMessage) : setError('')
   }, [job_name])

   if (!j)
      return (
         <div className={css.preloader}>
            <Image src={'/assets/images/svg/timereport-preloader.svg'} width={32} height={32} alt='preloader' />
         </div>
      )

   return (
      <div className={css.job}>
         <div className={css.desc}>
            <button ref={ref} className={css.remove} onClick={() => dispatch(JobsActions.removeJob(_id))}>
               <span>{translate('dashboard.timereport-job-remove')}</span>
            </button>
            <Input
               type='l'
               className={css.job_name}
               style={
                  {
                     '--input-color': isHover ? '#fff' : '#000',
                     '--placeholder': isHover ? '#fff' : '#aaaaaa'
                  } as CSSProperties
               }
               value={job_name}
               placeholder={staticTranslate('dashboard.timereport-job-placeholders-input')}
               onChange={(v) => dispatch(JobsActions.updateJob({ ...j, job_name: v.target.value }))}
            />
            {error ? <IconTooltip image={'/assets/images/svg/timereport-job-alarm.svg'} message={error} /> : null}
         </div>
         <ul style={{ opacity: isHover ? 0.3 : 1 }}>
            {days.map((d, i) => {
               const { formatDay, day_of } = d
               const WorkedTimeProps = { j, i, days, setisTimingOpen }

               return (
                  <li title={formatDay} style={getStyle(day_of) as CSSProperties} key={i}>
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
