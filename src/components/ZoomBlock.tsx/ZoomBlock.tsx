import { usePortal } from '@/hooks/usePortal'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import css from './ZoomBlock.module.css'

export default function ZoomBlock({ imageUrl, onClose }) {
   const portalElement = usePortal()

   useEffect(() => {
      document.body.style.overflow = 'hidden'
      return () => {
         document.body.style.overflow = ''
      }
   }, [])

   if (!portalElement) return null

   return ReactDOM.createPortal(
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         className={css.overlay}
         onClick={onClose}
      >
         <img src={imageUrl} alt='Zoomed' className={css.zoomedImage} />
      </motion.div>,
      portalElement
   )
}
