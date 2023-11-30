import Portal from '@/HOC/Portal'
import { SOCIAL } from '@/constants/data'
import { MENU, PAGES, SERVICES } from '@/constants/pages'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { PagesData } from '@/i18n/pages/locales'
import translate from '@/i18n/translate'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import LanguageSwitcher from '../../QuickPanel/LanguageSwitcher/LanguageSwitcher'
import css from '../MenuMobile.module.scss'
import { ContentActions } from '@/store/reducers/contentReducer'

type Props = {
   activeTab: number
   setActiveTab?: React.Dispatch<React.SetStateAction<number>>
   lang?: string
   toggle?(): React.Dispatch<React.SetStateAction<boolean>>
}

const Social: FC = () => {
   const social = Object.keys(SOCIAL)

   return (
      <div className={css.social}>
         {social.map((s, i) => {
            return (
               <a
                  href={SOCIAL[s]}
                  key={i}
                  style={{ '--social-icon': `url(/assets/images/svg/mobile-${s}.svg)` } as CSSProperties}
                  target='_blank'
                  rel='noreferrer'
                  className={css.button}
               />
            )
         })}
      </div>
   )
}

const Tabs: FC<Props> = ({ activeTab, setActiveTab, toggle }) => {
   return (
      <div className={css.tabs}>
         {['home', 'ship', 'repair', 'survey', 'legal', 'build'].map((b, i) => {
            return (
               <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  data-active={i === activeTab}
                  style={{ '--icon': `url(/assets/images/svg/tab-${b}.svg)` } as CSSProperties}
                  className={css.button}
               />
            )
         })}
      </div>
   )
}

const Body: FC<Props> = ({ activeTab, lang }) => {
   const [title, pages] = Object.entries(MENU[activeTab])[0]
   const pagesConstants = [...PAGES, ...SERVICES]
   const pagesContents = { ...PagesData[lang].pages, ...PagesData[lang].services }
   const currentPage = useAppSelector((state) => state.content.currentPage)
   const dispatch = useAppDispatch()

   return (
      <div className={css.links}>
         {pages.map((n, i) => {
            const [page] = Object.values(pagesConstants.find((p) => n in p))
            const { mobile_title } = pagesContents[n]
            const active = page.path === currentPage

            return (
               <div key={i} data-active={active}>
                  <span />
                  <Link href={page.path} className={css.link} onClick={() => dispatch(ContentActions.setID(n))}>
                     {mobile_title}
                  </Link>
               </div>
            )
         })}
      </div>
   )
}

const Dropdown: FC<any> = ({ isOpen, toggle }) => {
   const isMobile = useAppSelector((state) => state.content.mediaQuery.isMobile)
   const lang = useAppSelector((state) => state.content.i18n)
   const [activeTab, setActiveTab] = useState(0)
   const [title] = Object.entries(MENU[activeTab])[0]
   const startCoord = { x: 16, y: 96 }
   const [position, setPosition] = useState(startCoord)
   const [offset, setOffset] = useState({ x: 0, y: 0 })

   const dragImageRef = useRef()

   const onDrag = (e) => {
      if (e.clientX === 0 && e.clientY === 0) {
         return
      }
      setPosition({
         x: e.clientX - offset.x,
         y: e.clientY - offset.y
      })
   }

   const onDragStart = (e) => {
      const rect = e.target.getBoundingClientRect()
      setOffset({
         x: e.clientX - rect.left,
         y: e.clientY - rect.top
      })
   }

   const draggableStyle = {
      left: `${position.x}px`,
      top: `${position.y}px`
   }

   useEffect(() => {
      return () => {
         setActiveTab(0)
         setPosition(startCoord)
      }
   }, [isOpen])

   return (
      <Portal selector='#portal'>
         <AnimatePresence mode='wait'>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <div
                     style={draggableStyle}
                     onDragStart={onDragStart}
                     onDrag={onDrag}
                     draggable={true}
                     className={css.dropdown}
                  >
                     <div className={css.header}>
                        <span />
                        <h4>{translate(`menu.title-${title}`)}</h4>
                        <button onClick={() => toggle()} className={css.close} />
                     </div>
                     <Body lang={lang} activeTab={activeTab} />
                     <LanguageSwitcher type='mobile' />
                     <Tabs toggle={toggle} activeTab={activeTab} setActiveTab={setActiveTab} />
                     <Social />
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         <div ref={dragImageRef} style={{ display: 'none' }}></div>
      </Portal>
   )
}

export default Dropdown
