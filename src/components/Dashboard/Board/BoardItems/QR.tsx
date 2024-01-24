import React, { FC } from 'react'
import css from './Boards.module.scss'

const QR: FC = () => {
   return (
      <div className={css.qr}>
         <h3>Generate QR Code</h3>
      </div>
   )
}

export default QR
