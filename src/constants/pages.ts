export type PageNames =
   | 'SD'
   | 'BWTS'
   | 'TOWAGE'
   | 'BOOKLETS'
   | 'TONNAGE'
   | 'CARGO'
   | 'MACHINERY'
   | 'SCANSURV'
   | 'ERS'
   | 'REPAIR'
   | 'UTM'
   | 'IHM'
   | 'CONDSURV'
   | 'EEXI'
   | 'TECHADV'
   | 'LEGALADV'
   | 'SHIPREG'
   | 'SCANSURVCIV'

interface Submenu {
   brochure?: string
   works?: string
}

interface Page {
   path: string
   image: string
   submenu?: Submenu
   disabled: boolean
}

export type IPAGES = {
   [key in PageNames]?: Page
}

export const PAGES: IPAGES[] = [
   {
      SD: {
         path: 'ship-design',
         image: 'ship-design.jpg',
         submenu: {
            brochure: '/',
            works: '/'
         },
         disabled: false
      }
   },
   {
      BWTS: {
         path: 'ballast-water-treatment-system-design-and-installation',
         image: 'bwts.jpg',
         submenu: {
            brochure: '/'
         },
         disabled: true
      }
   },
   {
      TOWAGE: {
         path: 'towage-and-passage',
         image: 'towage.jpg',
         submenu: {
            works: '/'
         },
         disabled: true
      }
   },
   {
      BOOKLETS: {
         path: 'ship-technical-booklets',
         image: 'booklets.jpg',
         disabled: true
      }
   },
   {
      TONNAGE: {
         path: 'tonnage-calculation',
         image: 'tonnage.jpg',
         disabled: true
      }
   },
   {
      CARGO: {
         path: 'heavy-lift-oversized-cargo',
         image: 'heavy-lift.jpg',
         disabled: true
      }
   },
   {
      MACHINERY: {
         path: 'system-and-machinery',
         image: 'machinery.jpg',
         disabled: true
      }
   },
   {
      SCANSURV: {
         path: 'scanning-survey',
         image: 'scanning-survey.jpg',
         disabled: true
      }
   },
   {
      ERS: {
         path: 'emergency-response-service',
         image: 'ers.jpg',
         disabled: true
      }
   },
   {
      REPAIR: {
         path: 'shipbuilding-and-ship-repair',
         image: 'repair.jpg',
         disabled: true
      }
   },
   {
      UTM: {
         path: 'ultrasonic-thickness-measurements',
         image: 'utm.jpg',
         disabled: true
      }
   },
   {
      IHM: {
         path: 'inventory-of-hazardous-materials',
         image: 'ihm.jpg',
         disabled: true
      }
   },
   {
      CONDSURV: {
         path: 'ships-condition-related-surveys',
         image: 'condsurv.jpg',
         disabled: true
      }
   },
   {
      EEXI: {
         path: 'energy-efficiency-existing-ship-index',
         image: 'eexi.jpg',
         disabled: true
      }
   },
   {
      TECHADV: {
         path: 'technical-advisory-and-consultancy',
         image: 'techadv.jpg',
         disabled: true
      }
   },
   {
      LEGALADV: {
         path: 'legal-advisory-and-consultancy',
         image: 'legaladv.jpg',
         disabled: true
      }
   },
   {
      SHIPREG: {
         path: 'ship-registration',
         image: 'shipreg.jpg',
         disabled: true
      }
   },
   {
      SCANSURVCIV: {
         path: 'scanning-civil-engineering',
         image: 'scansurvciv.jpg',
         disabled: true
      }
   }
]
