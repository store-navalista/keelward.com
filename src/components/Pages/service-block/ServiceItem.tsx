import Image from 'next/image'
import React, { FC, useRef } from 'react'
import { IMainService } from '@/types/pages/main'
import css from './ServiceItem.module.scss'
import { useAppSelector } from '@/hooks/redux'
import Link from 'next/link'
import useHover from '@/hooks/useHover'
import ConditionalLink from '@/components/UI/conditional-link/ConditionalLink'
import { CSSTransition } from 'react-transition-group'
import { useIntl } from 'react-intl'

const ServiceItem: FC<{ service: IMainService }> = ({ service }) => {
   const isMobile = useAppSelector((state) => state.content.mediaQuery.isMobile)

   const intl = useIntl()
   const ref = useRef(null)
   const isHover = useHover(ref)
   const { title, description, disabled, path, image, submenu } = service

   return (
      <>
         <div ref={ref} className={`${css.wrapper}${isHover ? ` ${css.hover}` : ''}`}>
            <ConditionalLink href={`/${path}`} className={css.block} disabled={disabled}>
               <div className={css.membrane} />
               <div className={css.frame} />
               <Image
                  src={`/assets/images/pages/main/${image}`}
                  alt={'service'}
                  width={400}
                  height={400}
                  className={css.image}
               />
               <div className={css.textbox}>
                  <h2>{title}</h2>
                  <span />
                  <p>{description}</p>
               </div>
            </ConditionalLink>
            <CSSTransition
               in={isHover}
               timeout={300}
               classNames={{
                  enter: css.enter,
                  enterActive: css.enterActive,
                  exit: css.exit,
                  exitActive: css.exitActive
               }}
               unmountOnExit
            >
               <div className={css.submenu}>
                  {submenu?.works && (
                     <Link href={submenu.works}>
                        <a
                           title={intl.formatMessage({ id: `main.service-work`, defaultMessage: 'Our works' })}
                           className={css.works}
                        />
                     </Link>
                  )}
                  {submenu?.brochure && (
                     <Link href={submenu.brochure}>
                        <a
                           title={intl.formatMessage({ id: `main.service-brochure`, defaultMessage: 'See brochure' })}
                           className={css.brochure}
                        />
                     </Link>
                  )}
               </div>
            </CSSTransition>
         </div>
      </>
   )
}

export default ServiceItem
