import PortalModal from '@/components/UI/modals/PortalModal'
import translate from '@/i18n/translate'
import React, { CSSProperties, FC, useState } from 'react'
import css from './index.module.scss'
import Image from 'next/image'

type ConfirmProps = {
   apply(): Promise<Record<string, string>>
   cancel(): void
}

const Confirm: FC<ConfirmProps> = ({ apply, cancel }) => {
   const [isLoading, setisLoading] = useState(false)

   const confirm = async () => {
      setisLoading(true)
      const result = await apply()
      // if(result)
   }

   const style = {
      backgroundColor: isLoading && '#cfcfcf'
   }

   return (
      <PortalModal>
         <div className={css.prompt}>
            <Image src='/assets/images/svg/timereport-job-warning.svg' width={30} height={30} alt='attention' />
            <p>{translate('dashboard.modal-attention')}</p>
            <div className={css.buttons}>
               <button style={style as CSSProperties} onClick={confirm} disabled={isLoading}>
                  {isLoading ? (
                     <Image src='/assets/images/svg/request-loader.svg' width={15} height={15} alt='loader' />
                  ) : (
                     'OK'
                  )}
               </button>
               <button onClick={cancel} disabled={isLoading}>
                  {translate('cancel')}
               </button>
            </div>
         </div>
      </PortalModal>
   )
}

export default Confirm
