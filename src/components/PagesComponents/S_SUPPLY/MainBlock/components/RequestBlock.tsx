import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import 'react-phone-number-input/style.css'
import css from './components.module.css'
import DragDrop from './DragDrop'

interface RequestFormData {
   email: string
   vessel_name: string
   amount: string
   phoneInputWithCountrySelect: string
   comment: string
   attachment?: File
}

export const RequestBlock: FC = () => {
   const [file, setFile] = React.useState<File | undefined>(undefined)
   const { register, handleSubmit, control, setValue, reset } = useForm<RequestFormData>({
      defaultValues: {
         attachment: undefined
      }
   })

   const onSubmit: SubmitHandler<RequestFormData> = async (data) => {
      const formData = new FormData()

      formData.append('email', data.email)
      formData.append('vessel_name', data.vessel_name)
      formData.append('amount', data.amount)
      formData.append('phone', data.phoneInputWithCountrySelect)
      formData.append('comment', data.comment ?? '')

      if (data.attachment) {
         formData.append('attachment', data.attachment)
      }

      await fetch('/api/send-request', {
         method: 'POST',
         body: formData
      })

      // reset()
      // setFile(undefined)
   }

   return (
      <section className={css.request}>
         <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.item}>
               <p>Email</p>
               <input
                  type='text'
                  placeholder='user@gmail.com'
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
               />
            </div>
            <div className={css.comp} style={{ gridTemplateColumns: '3fr 1fr' }}>
               <div className={css.item}>
                  <p>Vessel Name</p>
                  <input
                     type='text'
                     placeholder='HMS Victory (1765)'
                     {...register('vessel_name', { required: true })}
                  />
               </div>
               <div className={css.item}>
                  <p>IMO</p>
                  <input
                     type='text'
                     inputMode='numeric'
                     pattern='[0-9]*'
                     placeholder='0000000'
                     {...register('amount', {
                        required: true,
                        onChange: (e) => {
                           e.target.value = e.target.value.replace(/\D/g, '')
                        }
                     })}
                  />
               </div>
            </div>
            <div className={css.item}>
               <p>Phone</p>
               <PhoneInputWithCountry
                  international
                  defaultCountry='US'
                  name='phoneInputWithCountrySelect'
                  control={control}
                  rules={{ required: true }}
               />
            </div>
            <div className={css.comp} style={{ padding: '24px 0 24px 0', gridTemplateColumns: '1fr 4fr' }}>
               <DragDrop
                  uploadedFile={file}
                  setUploadedFile={(file) => {
                     setFile(file)
                     setValue('attachment', file, { shouldValidate: true })
                  }}
               />
               <div className={css.comment_block}>
                  <p>Comments</p>
                  <textarea
                     className={css.comments}
                     rows={4}
                     placeholder='Here you can leave a comment for our manager.'
                     {...register('comment')}
                  />
               </div>
            </div>
            <input className={css.send} value='Send' type='submit' />
         </form>
      </section>
   )
}
