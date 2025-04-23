import MotionCustom from '@/components/HOC/MotionCustom'
import { SVG } from '@/components/SVG'
import { NavigateItemType, OptionType, PATHS } from '@/constants/pages'
import useHover from '@/hooks/useHover'
import translate from '@/i18n/translate'
import Link from 'next/link'
import React, { FC, Fragment, useRef } from 'react'
import css from './Options.module.css'
import GearButton from './GearButton'
import GearLink from './GearLink'

const CustomLink: FC<{ id: string; href: string }> = ({ id, href }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   return (
      <div ref={ref}>
         <SVG.Arrow className={css.arrow} />
         <Link href={href}>{translate(`page-title-${id}`)}</Link>
      </div>
   )
}

const MainServiceLink: FC<{ id: string }> = ({ id }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   return (
      <div ref={ref} key={'div-' + id}>
         <GearLink isHover={isHover} className={css.main_service_link} href={PATHS[id].href}>
            {translate(`section-title-${id}`)}
         </GearLink>
      </div>
   )
}

const CustomSingleBlock: FC<{ options: OptionType[] }> = ({ options }) => {
   return (
      <ul className={css.options_list}>
         {options.map((opt) => {
            const { id, href } = opt

            return (
               <li key={id}>
                  <CustomLink {...{ id, href }} />
               </li>
            )
         })}
      </ul>
   )
}

const CustomBlock: FC<{ option: OptionType }> = ({ option }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   const { id, opt } = option

   return (
      <ul key={id} className={css.options_list}>
         <MainServiceLink id={id} />
         {opt.map((opt) => {
            const { id, href } = opt

            return (
               <li key={'li-' + id}>
                  <CustomLink {...{ id, href }} />
               </li>
            )
         })}
      </ul>
   )
}

const Options: FC<NavigateItemType> = ({ id, options }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref })
   const isSingle = options.find((opt) => opt.href)

   return (
      <div ref={ref} className={css.options}>
         <div style={{ position: 'relative' }}>
            <div className={css.fake_line} />
            <GearButton {...{ isOpen: isHover }}>{translate(`section-title-${id}`)}</GearButton>
         </div>
         {isHover && (
            <MotionCustom className={css.options_wrapper} as='div'>
               {isSingle ? (
                  <CustomSingleBlock options={options} />
               ) : (
                  options.map((option, index) => {
                     const { id, opt } = option

                     return opt ? (
                        <CustomBlock key={`custom-block-${index}`} option={option} />
                     ) : (
                        <MainServiceLink key={`main-service-link-${index}`} id={id} />
                     )
                  })
               )}
            </MotionCustom>
         )}
      </div>
   )
}

export default Options
