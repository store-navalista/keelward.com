import * as React from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import css from './Menu.module.scss'
import translate from '@/i18n/translate'

const sidebar = {
   open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
         type: 'spring',
         stiffness: 20,
         restDelta: 2
      }
   }),
   closed: {
      clipPath: 'circle(25px at 39px 65px)',
      transition: {
         delay: 0.5,
         type: 'spring',
         stiffness: 400,
         damping: 40
      }
   }
}

export const Menu: React.FC<{ isOpen: boolean; toggleOpen: () => void }> = ({ isOpen, toggleOpen }) => {
   const containerRef = useRef(null)
   const { height } = useDimensions(containerRef)

   return (
      <motion.nav
         className={css.wrapper}
         style={{ '--shadow': isOpen ? 'var(--shadow-out)' : 'none' } as React.CSSProperties}
         initial={false}
         animate={isOpen ? 'open' : 'closed'}
         custom={height}
         ref={containerRef}
      >
         <motion.div className={css.background} variants={sidebar} />
         <Navigation isOpen={isOpen} />
         <MenuToggle toggle={() => toggleOpen()} />
         <h3 style={{ '--opacity': isOpen ? 1 : 0 } as React.CSSProperties} className={css.author}>
            {translate('dashboard.nav-author')}
         </h3>
      </motion.nav>
   )
}
