import React, { FC } from 'react'
import { PersonProps } from '../Timing'
import css from '../Timing.module.scss'

const Person: FC<PersonProps> = ({ _id, days, employee, isReportExist, currentJobs, setOpenedJobs, openedJobs }) => {
   const summedHours = currentJobs.reduce((accumulator, currentValue) => {
      currentValue.hours_worked.forEach((value, index) => {
         if (value > 0) {
            if (accumulator[index] === undefined) {
               accumulator[index] = value
            } else {
               accumulator[index] += value
            }
         }
      })
      return accumulator
   }, [])

   const expandHandler = () => {
      setOpenedJobs(
         openedJobs.map((j) => {
            if (j.id === _id) {
               return { ...j, isOpen: !j.isOpen }
            }
            return j
         })
      )
   }

   const sum = summedHours.reduce((acc, current) => (current > 0 ? acc + current : acc), 0)

   return (
      <div className={css.row}>
         <p style={{ paddingLeft: isReportExist ? '22px' : '5px' }}>
            {employee}
            {isReportExist ? (
               <button
                  onClick={expandHandler}
                  style={{
                     backgroundImage: `url(/assets/images/svg/custom-button-icon-${
                        openedJobs.find((j) => j.id === _id)?.isOpen ? 'minus' : 'plus'
                     }.svg)`
                  }}
                  className={css.expand}
               />
            ) : null}
         </p>
         <p></p>
         <p></p>
         <p></p>
         <div className={css.days}>
            {days.map((d, i) => {
               const { day } = d
               return (
                  <span data-type='sum' key={day}>
                     {summedHours[i]}
                  </span>
               )
            })}
         </div>
         <p style={{ backgroundColor: '#97d9f31f', borderRight: '2px solid var(--main-blue' }}>{sum}</p>
      </div>
   )
}

export default Person
