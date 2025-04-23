import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import css from './index.module.css'

type NewProps = {
   id: number
   title: string
   description: string
   date: string
}

const New: FC<NewProps> = ({ id, title, description, date }) => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
         transition={{ duration: 0.7, delay: id * 0.1, ease: 'easeInOut' }}
         className={css.new}
      >
         <div className={css.image}>
            <Image src={`/assets/images/news/${id}.jpg`} alt={title} fill />
         </div>
         <div className={css.content}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date}</p>
         </div>
      </motion.div>
   )
}

const Soon: FC = () => {
   return <div className={css.soon}>{translate('under-maintenance')}</div>
}

export { New, Soon }
