import { useEffect, useState, MutableRefObject } from 'react'
import { useAppDispatch } from './redux'
import { ContentActions } from '@/store/reducers/contentReducer'

type UseHoverProps = {
   ref: MutableRefObject<HTMLElement>
   isGlobal?: boolean
   hoveredLink?: string
}

export default function useHover({ ref, isGlobal = false, hoveredLink = undefined }: UseHoverProps) {
   const [isHovering, setHovering] = useState(false)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (isGlobal) {
         dispatch(ContentActions.setIsHovered(isHovering))
      }
      if (hoveredLink) {
         dispatch(ContentActions.setHoveredLink(hoveredLink))
      }
   }, [isHovering])

   const on = () => setHovering(true)
   const off = () => setHovering(false)

   useEffect(() => {
      if (!ref.current) return

      const node = ref.current

      node.addEventListener('mouseenter', on)
      node.addEventListener('mousemove', on)
      node.addEventListener('mouseleave', off)

      return () => {
         node.removeEventListener('mouseenter', on)
         node.removeEventListener('mousemove', on)
         node.removeEventListener('mouseleave', off)
      }
   })

   return isHovering
}
