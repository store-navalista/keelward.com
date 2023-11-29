import Tooltip from '@/components/UI/tooltip/Tooltip'
import useHover from '@/hooks/useHover'
import React, { useRef } from 'react'
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import css from './QuickPanel.module.scss'
import Timer from './Timer/Timer'
import Button from './UI/Button/Button'
import Separator from './UI/Separator/Separator'

const pages = ['career', 'certificates', 'about-us']

const QuickPanel = () => {
   const isHoveringRefs = pages.map(() => useRef(null))

   return (
      <div className={css.wrapper}>
         <Timer />
         {pages.map((b, i) => {
            const isHovering = useHover(isHoveringRefs[i])

            return (
               <div ref={isHoveringRefs[i]} key={i}>
                  <Button icon={`url(/assets/images/svg/header-${b}.svg)`} href={b}>
                     <Tooltip content={b} correctPosition={[4, 0]} isShow={isHovering} />
                  </Button>
               </div>
            )
         })}
         <Separator />
         <LanguageSwitcher type='desktop' />
      </div>
   )
}

export default QuickPanel
