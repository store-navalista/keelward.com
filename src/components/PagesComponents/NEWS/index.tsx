import React from 'react'
import css from './index.module.css'

const data = [
   {
      id: 1,
      image: 'https://picsum.photos/id/10/400/300',
      title: 'News Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-10-01'
   },
   {
      id: 2,
      image: 'https://picsum.photos/id/14/400/300',
      title: 'News Title 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2023-09-28'
   },
   {
      id: 3,
      image: 'https://picsum.photos/id/15/400/300',
      title: 'News Title 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      date: '2023-09-25'
   },
   {
      id: 1,
      image: 'https://picsum.photos/id/10/400/300',
      title: 'News Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-10-01'
   },
   {
      id: 2,
      image: 'https://picsum.photos/id/14/400/300',
      title: 'News Title 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2023-09-28'
   },
   {
      id: 3,
      image: 'https://picsum.photos/id/15/400/300',
      title: 'News Title 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      date: '2023-09-25'
   }
]

const Card = ({ image, title, description, date }) => {
   return (
      <div className={css.card}>
         <div className={css.imageWrapper}>
            <img src={image} alt={title} className={css.image} />
         </div>
         <div className={css.content}>
            <h3 className={css.title}>{title}</h3>
            <p className={css.description}>{description}</p>
            <span className={css.date}>{date}</span>
         </div>
      </div>
   )
}

export default function News() {
   return (
      <div className={css.news}>
         <div className={css.grid}>
            {data.map((item) => (
               <Card key={item.id} {...item} />
            ))}
         </div>
      </div>
   )
}
