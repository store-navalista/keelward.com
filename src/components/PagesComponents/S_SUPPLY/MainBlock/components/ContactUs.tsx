import React, { FC } from 'react'
import css from './components.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SOCIAL_SUPPLY } from '@/constants/social'
import { RequestBlock } from './RequestBlock'
import { useIntl } from 'react-intl'
import { splitByPattern } from './services'

const headVariants = (i: number) => {
   return {
      hidden: {
         opacity: 0,
         y: i === 0 ? -50 : 50
      },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: 'easeOut'
         }
      }
   }
}

const logoVariants = (delay: number) => {
   return {
      hidden: {
         opacity: 0
      },
      visible: {
         opacity: 1,
         transition: {
            delay: delay,
            duration: 1,
            ease: 'easeOut'
         }
      }
   }
}

export const ContactUs: FC = () => {
   const intl = useIntl()
   const staticTranslate = (id: string) => intl.formatMessage({ id: id, defaultMessage: id })
   const split = splitByPattern([3])
   const heading = split(staticTranslate('S_SUPPLY-contacts_head-1'))

   return (
      <motion.section initial='hidden' whileInView='visible' viewport={{ once: true }} className={css.contact_us}>
         <div>
            {heading.map((head, i) => {
               return (
                  <motion.h3 key={head} variants={headVariants(i)} style={{ marginBottom: i === 0 && '24px' }}>
                     {head}
                  </motion.h3>
               )
            })}
         </div>
         <div className={css.logos}>
            {[1, 2, 3].map((item) => {
               return (
                  <motion.div key={item} className={css.logo} variants={logoVariants(item * 0.3)}>
                     <Image src={`/assets/images/svg/about-logo-${item}.svg`} fill alt='logo' />
                  </motion.div>
               )
            })}
         </div>
         <h3 className={css.contacts}>Contact us</h3>
         <div className={css.contacts_block}>
            <a href='/' className={css.mail}>
               director@keelward.com
            </a>
            <span>or</span>
            <div className={css.contacts_social}>
               {SOCIAL_SUPPLY.map((item, i) => {
                  const [soc, url] = Object.entries(item)[0]

                  return (
                     <div key={i} className={css.block}>
                        <div className={css.logo}>
                           <Image src={`assets/images/svg/contacts-${soc}.svg`} alt='logo' fill />
                        </div>
                        <a href={url}>{soc}</a>
                     </div>
                  )
               })}
            </div>
            <span className={css.last_dot}>or</span>
            <div className={css.request_wrapper}>
               <RequestBlock />
            </div>
         </div>
      </motion.section>
   )
}

//  'S_SUPPLY-contacts_head-1': 'ადამიანები და ბიზნესები, რომლებიც გვენდობიან',
//       'S_SUPPLY-contacts_head-2': 'დაგვიკავშირდით',
//       'S_SUPPLY-contacts_or'
