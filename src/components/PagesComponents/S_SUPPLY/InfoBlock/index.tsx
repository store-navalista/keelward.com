import React from 'react'
import css from './index.module.css'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { PresenceBlock } from './components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function InfoBlock({ content }: any) {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   console.log(inView)

   return (
      <div className={css.wrapper}>
         <div className={css.container}>
            <motion.div
               ref={ref}
               initial={{ opacity: 0, x: -100 }}
               animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
               transition={{ duration: 0.5, ease: 'easeOut' }}
               className={css.mdx}
            >
               <MDXRemote {...content} />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, ease: 'easeOut' }}
               className={css.image}
            >
               <Image
                  src='/assets/images/general/S_SUPPLY-info-bg.jpg'
                  alt='S_SUPPLY-info-block-image'
                  fill
                  style={{ objectFit: 'cover' }}
               />
            </motion.div>
         </div>
         <PresenceBlock />
      </div>
   )
}
