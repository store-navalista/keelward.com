import React, { FC, useRef } from 'react'
import css from './Footer.module.css'
import Link from 'next/link'
import translate from '@/i18n/translate'
import { SOCIAL, SocialKeys } from '@/constants/social'
import { SVG } from '../SVG'
import { PATHS } from '@/constants/pages'
import useHover from '@/hooks/useHover'
import { Serv } from '../services'

const services = ['MT_SERVICES', 'SHIP_REPAIR', 'RIDING_TEAMS', 'UTM', 'S_SUPPLY']
const company = ['HOME', 'ABOUT_US', 'CONTACTS']

const first_block = [
   { type: 'mail', cnt: 'mail_1' },
   { type: 'tel', cnt: 'phone_1' }
]

const CustomLink: FC<{ href: string; text: string }> = ({ href, text }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   return (
      <Link ref={ref} href={href} className={css.custom_link}>
         <span>⮞</span>
         {translate(text)}
      </Link>
   )
}

const SocialLink: FC<{ type: SocialKeys }> = ({ type }) => {
   const Icon = SVG[Serv.capitalizeFirstLetter(type)]
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   return (
      <a href={SOCIAL[type]} target='_blank' rel='noreferrer' ref={ref}>
         <Icon className={css.icon + ` ${isHover ? css.hover : ''}`} />
      </a>
   )
}

const FirstBlock = () => {
   return (
      <div>
         <p>{translate('footer-slogan')}</p>
         <div className={css.tel}>
            {first_block.map((item, index) => {
               const { type, cnt } = item
               const a_type = type === 'tel' ? 'tel:' : 'mailto:'

               const ref = useRef(null)
               const isHover = useHover({ ref, isGlobal: true })

               return (
                  <a ref={ref} key={index} href={`${a_type}${SOCIAL[cnt]}`}>
                     {type === 'tel' ? <SVG.Phone className={css.icon} /> : <SVG.Mail className={css.icon} />}
                     {SOCIAL[cnt]}
                  </a>
               )
            })}
         </div>
      </div>
   )
}

const Footer: FC = () => {
   return (
      <footer className={css.footer}>
         <div className={css.blocks}>
            <div className={css.main_block}>
               <FirstBlock />
               <div>
                  <h3>{translate('section-title-COMPANY')}</h3>
                  {company.map((id) => {
                     return <CustomLink key={id} href={PATHS[id].href} text={`page-title-${id}`} />
                  })}
               </div>
               <div>
                  <h3>{translate('section-title-SERVICES')}</h3>
                  {services.map((id) => {
                     return <CustomLink key={id} href={PATHS[id].href} text={`page-title-${id}`} />
                  })}
               </div>
               <div>
                  <div>
                     <h3>{translate('follow-us')}</h3>
                     <SocialLink type='instagram' />
                     <SocialLink type='linkedin' />
                  </div>
                  <p>{SOCIAL.address}</p>
               </div>
            </div>
            <div className={css.trademark}>
               <div>
                  <p>{translate('footer-trademark-disclaimer')}</p>
                  <p>©2025</p>
               </div>
               <CustomLink href='/privacy-policy' text='cookie-notive-privacy' />
            </div>
         </div>
      </footer>
   )
}

export default Footer
