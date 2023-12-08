import React, { CSSProperties, FC } from 'react'
import css from './InfoPage.module.scss'
import Image from 'next/image'
import useMD from '@/hooks/useMD'
import Loader from '@/components/UI/loader/Loader'

type Options = {
   width?: number
   height?: number
}

type Content = {
   text: string[]
   image: string
}

export const InfoPage: FC<{ content: Content; options: Options }> = ({ content, options }) => {
   const Content = useMD()

   if (!content) return <Loader />

   const { width, height } = options
   const w = width ? width : 1200
   const h = height ? height : 600
   const { text, image } = content

   return (
      <div className={css.wrapper}>
         <div
            style={{ '--width': `${w}px`, '--height': `${h}px`, '--aspect': w / h } as CSSProperties}
            className={css.image}
         >
            <h1>About us</h1>
            <Image src={`/assets/images/pages${image}`} loading='lazy' alt='Info Image' fill={true} />
         </div>
         {text.map((t, i) => (
            <Content key={i} className={css.text} type={t} />
         ))}
      </div>
   )
}
