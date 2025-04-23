import { useEffect, useState } from 'react'

export function usePortal() {
   const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

   useEffect(() => {
      const el = document.createElement('div')
      document.body.appendChild(el)
      setPortalElement(el)

      return () => {
         document.body.removeChild(el)
      }
   }, [])

   return portalElement
}
