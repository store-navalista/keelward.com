'use client'
import React from 'react'
import css from './index.module.css'
import { Chains, Marquee } from './сomponents'

export default function Partners() {
   return (
      <div className={css.partners}>
         <Chains />
         <Marquee />
      </div>
   )
}
