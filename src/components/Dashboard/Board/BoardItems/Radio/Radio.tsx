import { STATIONS } from '@/constants/radio'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { RadioActions } from '@/store/reducers/radioReducer'
import React, { FC, Fragment, useCallback, useEffect } from 'react'
import css from '../Boards.module.scss'
import Station from './Station'

const Radio: FC = () => {
   const radioData = useAppSelector((state) => state.reducer.radio)
   const dispatch = useAppDispatch()
   const { artist, title } = radioData.description
   const currentStation = STATIONS.filter((s) => s.id === radioData.current.id)[0]

   const fetchData = useCallback(async () => {
      try {
         const response = await fetch(radioData.current.meta)
         const result = await response.json()
         if (result) dispatch(RadioActions.setDescription(result))
      } catch (error) {
         dispatch(RadioActions.setDescription({ title: 'Unknown', artist: 'Unknown' }))
         console.error('Error fetching data:', error)
      }
   }, [dispatch, radioData.current.meta])

   useEffect(() => {
      fetchData()

      const interval = setInterval(fetchData, 10000)

      return () => clearInterval(interval)
   }, [fetchData])

   return (
      <div className={css.radio}>
         <div className={css.flex}>
            {STATIONS.map((s) => {
               return (
                  <Fragment key={s.title}>
                     <Station s={s} />
                  </Fragment>
               )
            })}
         </div>
         <div className={css.description}>
            <h2>{currentStation?.title ?? 'Station'}</h2>
            <h3>{artist}</h3>
            <p>{title}</p>
         </div>
      </div>
   )
}

export default Radio
