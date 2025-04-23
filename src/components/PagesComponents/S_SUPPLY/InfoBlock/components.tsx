import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import css from './index.module.css'

const PresenceBlock: FC = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <div className={css.presence}>
         <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            ref={ref}
            className={css.image}
         >
            <Image src='/assets/images/general/S_SUPPLY-info-pr-bg.jpg' alt='S_SUPPLY-presence-block-image' fill />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={css.info}
         >
            <h2>{translate('S_SUPPLY-presence-block')}</h2>
            <p>{translate('S_SUPPLY-presence-block-desc')}</p>
         </motion.div>
      </div>
   )
}

export { PresenceBlock }
