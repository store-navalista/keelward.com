import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useTransition, a } from '@react-spring/web'
import Image from 'next/image'

import css from './Masonry.module.css'
import { useAppSelector } from '@/hooks/redux'

interface MasonryItem {
   id: string | number
   height: number
   url: string
}

interface GridItem extends MasonryItem {
   x: number
   y: number
   width: number
   height: number
}

interface MasonryProps {
   data: MasonryItem[]
   zoomHandler: (url: string) => void
}

const Masonry: React.FC<MasonryProps> = ({ data, zoomHandler }) => {
   const isMobile = useAppSelector((state) => state.content.mediaQuery.isMobile)
   const [columns, setColumns] = useState<number>(2)
   const sortedData = useMemo(() => {
      if (isMobile) {
         return data.slice(0, 4)
      }
      return data
   }, [isMobile])

   useEffect(() => {
      const updateColumns = () => {
         if (window.matchMedia('(min-width: 1500px)').matches) {
            setColumns(5)
         } else if (window.matchMedia('(min-width: 1000px)').matches) {
            setColumns(4)
         } else if (window.matchMedia('(min-width: 600px)').matches) {
            setColumns(3)
         } else {
            setColumns(1)
         }
      }

      updateColumns()
      window.addEventListener('resize', updateColumns)
      return () => window.removeEventListener('resize', updateColumns)
   }, [])

   const ref = useRef<HTMLDivElement>(null)
   const [width, setWidth] = useState<number>(0)

   useEffect(() => {
      const handleResize = () => {
         if (ref.current) {
            setWidth(ref.current.offsetWidth)
         }
      }

      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
      const heights = new Array(columns).fill(0)
      const gridItems = sortedData.map((child) => {
         const column = heights.indexOf(Math.min(...heights))
         const x = (width / columns) * column
         const y = (heights[column] += child.height / 2) - child.height / 2
         return {
            ...child,
            x,
            y,
            width: width / columns,
            height: child.height / 2
         }
      })
      return [heights, gridItems]
   }, [columns, sortedData, width])

   const transitions = useTransition<
      GridItem,
      { x: number; y: number; width: number; height: number; opacity: number }
   >(gridItems, {
      keys: (item) => item.id,
      from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
      enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
      update: ({ x, y, width, height }) => ({ x, y, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25
   })

   return (
      <div ref={ref} className={css.masonry} style={{ height: Math.max(...heights) }}>
         {transitions((style, item) => {
            return (
               <a.div key={item.id} onClick={() => zoomHandler(`${item.url}${item.id}.jpg`)} style={style}>
                  <div>
                     <Image src={`${item.url}min-${item.id}.jpg`} fill alt='services' style={{ objectFit: 'cover' }} />
                  </div>
               </a.div>
            )
         })}
      </div>
   )
}

export default Masonry
