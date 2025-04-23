import React, { FC } from 'react'
import css from './index.module.css'

const contactsData = [
   {
      id: 1,
      image: '/assets/images/general/contacts-1.jpg',
      name: 'Owen Wang',
      region: 'Region: China, Korea, Japan and Southeast Asia',
      email: 'support@keelward.com',
      phone: '+66 990395139'
   },
   {
      id: 2,
      image: '/assets/images/general/contacts-2.jpg',
      name: 'Maxim Petrau',
      region: 'Region: Europe, Türkiye and Russia',
      email: 'support@keelward.com'
      // phone: '+987654321'
   }
]

type ContactCardProps = {
   image: string
   name: string
   region: string
   email: string
   phone?: string
}

const ContactCard: FC<ContactCardProps> = ({ image, name, region, email, phone }) => {
   return (
      <div className={css.card}>
         <div className={css.imageWrapper} style={{ backgroundImage: `url(${image})` }} />
         <div className={css.content}>
            <h3 className={css.name}>{name}</h3>
            <p className={css.position}>{region}</p>
            <p className={css.email}>{email}</p>
            {phone && <p className={css.phone}>{phone}</p>}
         </div>
      </div>
   )
}

export default function Contacts() {
   return (
      <div className={css.contacts}>
         <div className={css.grid}>
            {contactsData.map((contact) => (
               <ContactCard key={contact.id} {...contact} />
            ))}
         </div>
      </div>
   )
}
