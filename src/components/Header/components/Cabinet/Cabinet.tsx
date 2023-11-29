import React, { FC, useEffect, useRef, useState } from 'react'
import css from './Cabinet.module.scss'
import Portal from '@/HOC/Portal'
import { AnimatePresence, motion } from 'framer-motion'
import useOutsideClick from '@/hooks/useOutsideClick'
import Tooltip from '@/components/UI/tooltip/Tooltip'
import useHover from '@/hooks/useHover'

const Cabinet: FC = () => {
   const [isOpen, setisOpen] = useState(false)
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const wrapperRef = useRef(null)
   const hoverRef = useRef(null)
   const isHovering = useHover(hoverRef)

   useOutsideClick(wrapperRef, () => setisOpen(false))

   const logIn = () => {
      setisOpen(false)
   }

   useEffect(() => {
      const htmlElement = document.documentElement

      if (isOpen) {
         htmlElement.style.overflow = 'hidden'
      } else {
         htmlElement.style.overflow = ''
      }

      return () => {
         htmlElement.style.overflow = ''
      }
   }, [isOpen])

   return (
      <>
         <button ref={hoverRef} onClick={() => setisOpen(!isOpen)} className={css.button}>
            <Tooltip content='cabinet' isShow={isHovering && !isOpen} />
         </button>

         <Portal selector='#portal'>
            <AnimatePresence mode='wait'>
               {isOpen && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <div className={css.wrapper}>
                        <div ref={wrapperRef} className={css.block}>
                           <h3>AUTH</h3>
                           <div className={css.username}>
                              <h4>Username</h4>
                              <div>
                                 <input
                                    type='text'
                                    placeholder='user@gmail.com'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                 />
                              </div>
                           </div>
                           <div className={css.password}>
                              <h4>Password</h4>
                              <div>
                                 <input
                                    type='password'
                                    placeholder='password123'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                 />
                              </div>
                           </div>
                           <button className={css.login} onClick={logIn}>
                              Log In
                           </button>
                           <button className={css.close} onClick={() => setisOpen(false)}>
                              &#215;
                           </button>
                        </div>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </Portal>
      </>
   )
}

export default Cabinet
