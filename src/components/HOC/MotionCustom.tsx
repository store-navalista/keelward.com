import { motion, MotionProps } from 'framer-motion'
import React, { ElementType, FC, ReactNode } from 'react'

type MotionListProps = {
   children: ReactNode
   className: string
   as?: ElementType
} & MotionProps

const MotionCustom: FC<MotionListProps> = ({ children, as: Component = 'ul', className, ...motionProps }) => {
   const MotionComponent = motion(Component)
   return (
      <MotionComponent
         className={className}
         initial={{ opacity: 0, scale: 0.95, x: '-50%', y: -20 }}
         animate={{
            opacity: 1,
            scale: 1,
            x: '-50%',
            y: 0,
            transition: {
               type: 'spring',
               stiffness: 300,
               damping: 30
            }
         }}
         exit={{
            opacity: 0,
            scale: 0.95,
            x: '-50%',
            y: -20,
            transition: {
               duration: 0.2
            }
         }}
         style={{ transformOrigin: 'center' }}
         {...motionProps}
      >
         {children}
      </MotionComponent>
   )
}

export default MotionCustom
