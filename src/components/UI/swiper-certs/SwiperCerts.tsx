import React, { FC, MouseEvent } from 'react'
import { EffectCards } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ICert } from '@/constants/certificates'
import css from './SwiperCerts.module.scss'
import 'swiper/css'
import 'swiper/css/effect-cards'
import Modal from '../modals/Modal'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { ContentActions } from '@/store/reducers/contentReducer'
import { default as DM } from '@/i18n/messages/defaultMessages'
import translate from '@/i18n/translate'
import { Content } from '@/i18n/pages/locales/en-US/md/main'

const SwiperCerts: FC<{ certs: ICert[] }> = ({ certs }) => {
   const modalProps = useAppSelector((state) => state.content.modalProps)
   const dispatch = useAppDispatch()

   const zoom = (e: MouseEvent<HTMLButtonElement>, src: string) => {
      dispatch(ContentActions.setModalProps(src))
      dispatch(ContentActions.toggleModalShow(true))
   }

   return (
      <div className={css.wrapper}>
         <div className={css.block}>
            <h2>{translate('main.certificate-heading', DM['main.certificate-heading'].defaultMessage)}</h2>
            <div>
               <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className={css.swiper}>
                  {certs.map((item, i: number) => {
                     const { img } = item
                     const PATH = '/assets/images/pages/main/slider/'

                     return (
                        <SwiperSlide key={i} className={css.slide}>
                           <Image src={`${PATH}min-${img}`} alt='image' width={300} height={429} />
                           <button onClick={(e) => zoom(e, img)} />
                        </SwiperSlide>
                     )
                  })}
               </Swiper>
               <Content className={css.content} type='cert_desc' />
            </div>
         </div>
         <Modal type='zoomImage' image={modalProps} />
      </div>
   )
}

export default SwiperCerts
