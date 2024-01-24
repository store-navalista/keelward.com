import React from 'react'
import css from './Menu/Menu.module.scss'
import Board from './Board/Board'
import { Menu } from './Menu/Menu'
import { useCycle } from 'framer-motion'

export const DashboardTemplate = () => {
   const [isOpen, toggleOpen] = useCycle(false, true)

   return (
      <>
         <Menu isOpen={isOpen} toggleOpen={toggleOpen} />
         <Board isOpen={isOpen} />
      </>
   )
}
