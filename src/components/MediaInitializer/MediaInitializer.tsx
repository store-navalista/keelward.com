import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useAppDispatch } from '@/hooks/redux'
import { ContentActions } from '@/store/reducers/contentReducer'

const MediaInitializer = () => {
   const dispatch = useAppDispatch()
   const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' })
   const isMobile = useMediaQuery({ query: '(max-width: 670px)' })

   useEffect(() => {
      dispatch(ContentActions.setMediaQuery({ isLaptop, isMobile }))
   }, [isLaptop, isMobile])

   return null
}

export default MediaInitializer
