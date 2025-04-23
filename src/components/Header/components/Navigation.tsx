import { handleLinkColor } from '@/components/Menu/Navigation'
import { NAV } from '@/constants/pages'
import translate from '@/i18n/translate'
import Link from 'next/link'
import React, { FC, Fragment, useRef } from 'react'
import css from '../Header.module.css'
import Options from './Options'
import { ActivePoint, isCurrentPage } from './helpers'
import useHover from '@/hooks/useHover'

const CustomLink: FC<{ id: string; href: string }> = ({ id, href }) => {
   const currentPage = isCurrentPage()
   const ref = useRef(null)
   const isHover = useHover({ ref, isGlobal: true })

   return (
      <div ref={ref} className={css.nav_button}>
         <ActivePoint condition={id === currentPage || isHover} />
         <Link key={id} href={href} style={handleLinkColor(id === currentPage)}>
            {translate(`page-title-${id}`)}
         </Link>
      </div>
   )
}

const Navigation = () => {
   return (
      <div className={css.navigation}>
         {NAV.map((item) => {
            const { id, href, options } = item

            return (
               <Fragment key={id}>
                  {href ? <CustomLink {...{ id, href }} /> : <Options {...{ id, options }} />}
               </Fragment>
            )
         })}
      </div>
   )
}

export default Navigation
