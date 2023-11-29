import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import useOutsideClick from '@/hooks/useOutsideClick'
import { LOCALES } from '@/i18n'
import { ContentActions } from '@/store/reducers/contentReducer'
import React, { FC, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import Button from '../UI/Button/Button'
import css from './LanguageSwitcher.module.scss'
import Tooltip from '@/components/UI/tooltip/Tooltip'
import useHover from '@/hooks/useHover'

const LanguageSwitcher: FC<{ type: 'desktop' | 'mobile' }> = ({ type = 'desktop' }) => {
   const [isOpen, setisOpen] = useState(false)
   const dispatch = useAppDispatch()
   const currentLanguage = useAppSelector((state) => state.content.currentLang)
   const [cookies, setCookie] = useCookies(['language'])
   const wrapperRef = useRef(null)
   const hoverRef = useRef(null)
   const isHovering = useHover(hoverRef)

   useOutsideClick(wrapperRef, () => setisOpen(false))

   const changeLanguage = (lang: string): void => {
      setCookie('language', lang)
      dispatch(ContentActions.setLanguage(lang))
   }

   const chooseLang = (lang: string) => {
      const dashIndex = LOCALES[lang].indexOf('-')
      changeLanguage(lang)
      setisOpen(false)
   }

   switch (type) {
      case 'mobile':
         return (
            <div className={css.mobile}>
               {Object.keys(LOCALES).map((lang, i) => {
                  return (
                     <Button
                        key={i}
                        type='button'
                        className={lang === currentLanguage && css.active}
                        onClick={() => chooseLang(lang)}
                     >
                        {lang.substring(0, 2)}
                     </Button>
                  )
               })}
            </div>
         )
      default:
         return (
            <div ref={wrapperRef} className={css.wrapper + ` ${isOpen ? css.open : ''}`}>
               <div ref={hoverRef}>
                  <Button onClick={() => setisOpen(!isOpen)} type='button' className={css.handler}>
                     {currentLanguage.substring(0, 2)}
                     <Tooltip content='language' correctPosition={[-6, 0]} isShow={isHovering && !isOpen} />
                  </Button>
               </div>
               <div className={css.choose}>
                  {Object.keys(LOCALES).map((lang, i) => {
                     return (
                        <Button
                           key={i}
                           type='button'
                           onClick={() => chooseLang(lang)}
                           className={lang === currentLanguage && css.active}
                        >
                           {lang.substring(0, 2)}
                        </Button>
                     )
                  })}
               </div>
            </div>
         )
   }
}

export default LanguageSwitcher
