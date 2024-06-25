import React, { FC, useRef, useState } from 'react'
import css from '../Timing.module.scss'
import translate from '@/i18n/translate'

type FiltersType = 'project_number' | 'ship_name' | 'job_description'

interface IFiltersProps {
   filters: Set<string>[]
   setActiveFilter: React.Dispatch<React.SetStateAction<{ [key in FiltersType]: string } | null>>
}

const cells: FiltersType[] = ['project_number', 'ship_name', 'job_description']

const Filters: FC<IFiltersProps> = ({ filters, setActiveFilter }) => {
   const selectsRef = useRef(null)

   // temp
   const [isCommonFilter, setisCommonFilter] = useState(false)
   //

   const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>, c: FiltersType) => {
      setActiveFilter(null)
      setActiveFilter((prevFilters) => {
         const newFilter: { [key in FiltersType]: string } = {
            ...prevFilters,
            [c]: e.target.value
         }

         if (e.target[0]['value'] === e.target.value) {
            delete newFilter[c]
         }

         return Object.values(newFilter).length ? newFilter : null
      })
   }

   return (
      <div ref={selectsRef} className={css.filter}>
         {cells.map((c, i) => {
            const filter = Array.from(filters[i])

            return (
               <div key={c}>
                  <span>{translate(`dashboard.timereport-job-${c}`)}</span>
                  <select onChange={(e) => filterHandler(e, c)}>
                     <option>{translate('dashboard.timereport-director-timing-filterall')}</option>
                     {filter.map((f, i) => (
                        <option key={i}>{f}</option>
                     ))}
                  </select>
               </div>
            )
         })}
         <div>
            <span>{translate('dashboard.timereport-job-common-tasks')}</span>
            <button
               onClick={() => setisCommonFilter(!isCommonFilter)}
               className={css.common_filter + `${isCommonFilter ? ' ' + css.turned_on : ''}`}
            >
               {translate(`dashboard.timereport-workedtime-tooltip-common-turn-${isCommonFilter ? 'off' : 'on'}`)}
            </button>
         </div>
      </div>
   )
}

export default Filters
