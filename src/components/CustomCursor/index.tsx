import { useAppSelector } from '@/hooks/redux'
import React, { useEffect, useRef } from 'react'
import css from './index.module.css'

const CustomCursor = () => {
   const isHovered = useAppSelector((state) => state.reducer.content.cursorIsHovered)
   const cursorRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
      const handlePointerMove = (e: PointerEvent) => {
         if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, calc(-50% - var(--header-height)))`
         }
      }

      document.addEventListener('pointermove', handlePointerMove)
      return () => document.removeEventListener('pointermove', handlePointerMove)
   }, [])

   return (
      <div style={{ display: 'none' }} ref={cursorRef} className={css.custom_cursor}>
         <div className={`${css.cursor_inner} ${isHovered ? css.hovered : ''}`} />
      </div>
   )
}

export default CustomCursor
