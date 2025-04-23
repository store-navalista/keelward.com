import { BRANDS } from '@/constants/brands'
import React, { FC } from 'react'
import css from './index.module.css'

const Chains = () => {
   return (
      <div className={css.chains}>
         <div className={css.upper} />
         <div className={css.lower} />
      </div>
   )
}

interface MarqueeRowProps {
   items: string[]
   reverse?: boolean
}

const MarqueeRow: FC<MarqueeRowProps> = ({ items, reverse = false }) => {
   return (
      <div className={reverse ? css.marqueeReverse : css.marquee}>
         <div className={css.track}>
            {items.map((name, i) => (
               <span key={i} className={css.text_upper}>
                  {` ${name} •`}
               </span>
            ))}
         </div>
      </div>
   )
}

const Marquee: FC = () => {
   return (
      <div className={css.text_wrapper}>
         <MarqueeRow items={BRANDS.OTHER_BRANDS} />
         <MarqueeRow items={BRANDS.SHIP_COMPONENTS} reverse />
      </div>
   )
}

export { Chains, Marquee }
