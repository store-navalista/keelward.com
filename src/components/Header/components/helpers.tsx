import React, { FC } from 'react'
import Image from 'next/image'
import css from './helpers.module.css'
import { useRouter } from 'next/router'
import { PATHS } from '@/constants/pages'

const isCurrentPage = () => {
   const router = useRouter()

   for (const page in PATHS) {
      if (PATHS[page].href === router.pathname) {
         return page
      }
   }
}

const ActivePoint: FC<{ condition: boolean }> = ({ condition }) => {
   const styles = {
      transition: 'opacity 0.3s',
      opacity: condition ? 1 : 0
   }

   return (
      <div className={css.active_point}>
         <Image src='/assets/images/svg/point.svg' fill alt='point' />
         <Image src='/assets/images/svg/point_circle.svg' fill alt='point' style={styles} />
      </div>
   )
}

export { ActivePoint, isCurrentPage }
