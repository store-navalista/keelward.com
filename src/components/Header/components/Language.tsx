import MotionCustom from '@/components/HOC/MotionCustom'
import useCurrentLanguage from '@/components/hooks/useCurrentLanguage'
import { LANGS } from '@/constants/languages'
import useHover from '@/hooks/useHover'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useCallback, useRef } from 'react'
import { useCookies } from 'react-cookie'
import css from './Language.module.css'

type LangProps = {
   title: string
   isActive: boolean
   loc: string
   changeLanguage: (loc: string) => void
}

const Lang: FC<LangProps> = ({ title, isActive, loc, changeLanguage }) => {
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })
   const [cookie, setCookie] = useCookies(['cookie_notice_accepted', 'language'])

   return (
      <div ref={ref} data-active={isActive} onClick={() => changeLanguage(loc)} key={loc}>
         <Image
            className={css.img}
            src={`/assets/images/svg/flag_round_${loc}.svg`}
            width={20}
            height={20}
            alt='locale'
         />
         <li>{title}</li>
      </div>
   )
}

const Language: FC = () => {
   const ref = useRef(null)

   const router = useRouter()
   const isHover = useHover({ ref })
   const currentLang = useCurrentLanguage()

   const changeLanguage = useCallback(
      (lang: string) => {
         router.push(router.pathname, router.asPath, { locale: lang.substring(0, 2) })
      },
      [router.pathname]
   )

   return (
      <div ref={ref} className={css.language}>
         <div className={css.btn}>
            <Image src='/assets/images/svg/lang.svg' fill alt='lang' />
            <div className={css.fake_line} />
         </div>
         <Image
            className={css.gear}
            style={{ transform: `translate(-50%, -50%) rotate(${isHover ? '35deg' : '0deg'})` }}
            src='/assets/images/svg/gear-medium.svg'
            width={40}
            height={40}
            alt='medium gear'
         />
         {isHover && (
            <MotionCustom className={css.language_list} as='ul'>
               {LANGS.map((l) => {
                  const { loc, title } = l
                  const isActive = loc.substring(0, 2) === currentLang

                  return <Lang key={loc} {...{ title, isActive, loc, changeLanguage }} />
               })}
            </MotionCustom>
         )}
      </div>
   )
}

export default Language
