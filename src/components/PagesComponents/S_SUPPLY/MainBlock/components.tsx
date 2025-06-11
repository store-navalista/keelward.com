import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'
import css from './index.module.css'
import { SVG } from '@/components/SVG'
import { SOCIAL } from '@/constants/social'

const BottomBlock: FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
         className={css.bottom_block_content}
      >
         <p>{translate('S_SUPPLY-call-us')}</p>
         <a href='mailto:info@g-supply.com'>
            <SVG.AltMail />
         </a>
         <a href={`whatsapp://send?phone=${SOCIAL.watsapp}`}>
            <SVG.Whatsup />
         </a>
      </motion.div>
   )
}

const infos = ['expertise', 'prices', 'save']

const InfoBlock: FC = () => {
   return (
      <div className={css.info_block_content}>
         {infos.map((info, index) => {
            return (
               <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                  key={info}
                  className={css.info_item}
                  style={{
                     zIndex: infos.length - index,
                     backgroundImage: `url('/assets/images/general/S_SUPPLY-tip-${index + 1}.jpg')`
                  }}
               >
                  <h3>{translate(`S_SUPPLY-info-${info}`)}</h3>
                  <p>{translate(`S_SUPPLY-info-${info}-desc-1`)}</p>
                  <p>{translate(`S_SUPPLY-info-${info}-desc-2`)}</p>
                  {index !== 2 ? <div className={css.info_picture}></div> : null}
               </motion.div>
            )
         })}
      </div>
   )
}

const RightBlock: FC = () => {
   return (
      <div className={css.right_block_content}>
         <motion.p
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
         >
            {translate('S_SUPPLY-right-block')}
         </motion.p>
         <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className={css.vendor}
         >
            <Link href={'/sdad'}>{translate('let-go')}</Link>
         </motion.div>
      </div>
   )
}

const Heading: FC = () => {
   return (
      <div className={css.heading}>
         <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
         >
            {translate('S_SUPPLY-heading')}
         </motion.h1>
         <motion.p
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
         >
            {translate('S_SUPPLY-desc')}
         </motion.p>
         <motion.button
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
         >
            {translate('let-go')}
         </motion.button>
      </div>
   )
}

export { BottomBlock, Heading, InfoBlock, RightBlock }
