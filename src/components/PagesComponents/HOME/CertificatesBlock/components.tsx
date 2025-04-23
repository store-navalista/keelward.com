import useHover from '@/hooks/useHover'
import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import css from './index.module.css'
import ZoomBlock from '@/components/ZoomBlock.tsx/ZoomBlock'

const Substrate: FC = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <motion.div
         initial={{ opacity: 0, y: 200 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
         transition={{ duration: 1, ease: 'easeOut' }}
         ref={ref}
         className={css.substrate}
      />
   )
}

const Card: FC = () => {
   const [isZoom, setisZoom] = useState(false)
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })
   const hoverRef = useRef(null)
   const isHover = useHover({ ref: hoverRef, isGlobal: true })

   return (
      <>
         <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            ref={ref}
            className={css.card}
            onClick={() => setisZoom(true)}
         >
            <div ref={hoverRef}>
               <Image src='/assets/certificates/cert_thumb.jpg' fill alt='certificate' />
            </div>
         </motion.div>
         {isZoom && (
            <ZoomBlock
               imageUrl='/assets/certificates/cert.jpg'
               onClose={() => {
                  setisZoom(false)
               }}
            />
         )}
      </>
   )
}

const Heading: FC = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <motion.h3
         initial={{ opacity: 0, y: 150 }}
         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
         transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
         ref={ref}
      >
         {translate('HOME-certificate-heading')}
      </motion.h3>
   )
}

export { Card, Heading, Substrate }
