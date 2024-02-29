import React, { CSSProperties, FC } from 'react'
import css from './index.module.scss'
import translate from '@/i18n/translate'
import Image from 'next/image'

type InputProps = {
   icon?: string
   label?: string
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<InputProps> = ({ icon, label, ...rest }) => {
   return (
      <div className={css.field}>
         <div data-type={rest['data-type']} className={css.input}>
            <label data-label={label ? 'labeled' : ''}>
               {label ? label : <Image src={`/assets/images/svg/${icon}`} width={8} height={8} alt='icon' />}
            </label>
            <input {...rest} />
         </div>
      </div>
   )
}

export default Input
