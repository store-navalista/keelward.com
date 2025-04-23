export type PAGES_IDs =
   | 'HOME'
   | 'LIVE_STOCK'
   | 'S_SUPPLY'
   | 'SHIP_REPAIR'
   | 'RIDING_TEAMS'
   | 'UTM'
   | 'ABOUT_US'
   | 'MT_SERVICES'
   | 'PRIVACY_POLICY'
   | 'NEWS'
   | 'CONTACTS'

export type PathConfig = {
   href: string
}

export type PathsType = {
   [key in PAGES_IDs]: PathConfig
}

export const PATHS: Partial<PathsType> = {
   HOME: {
      href: '/'
   },
   LIVE_STOCK: {
      href: '/live-stock'
   },
   S_SUPPLY: {
      href: '/ship-supply'
   },
   SHIP_REPAIR: {
      href: '/marine-technical-services/ship-repair'
   },
   RIDING_TEAMS: {
      href: '/marine-technical-services/riding-teams'
   },
   UTM: {
      href: '/marine-technical-services/utm'
   },
   ABOUT_US: {
      href: '/about-us'
   },
   MT_SERVICES: {
      href: '/marine-technical-services'
   },
   PRIVACY_POLICY: {
      href: '/privacy-policy'
   },
   NEWS: {
      href: '/news'
   },
   CONTACTS: {
      href: '/contacts'
   }
}

export type OptionType = {
   id: string
   href?: string
   opt?: {
      id: string
      href?: string
   }[]
}

export type NavigateItemType = {
   id: string
   href?: string
   type?: string
   options?: OptionType[]
}

export const NAV: NavigateItemType[] = [
   { id: 'HOME', href: PATHS.HOME.href },
   {
      id: 'COMPANY',
      options: [
         { id: 'ABOUT_US', href: PATHS.ABOUT_US.href },
         { id: 'CONTACTS', href: PATHS.CONTACTS.href }
         // { id: 'NEWS', href: PATHS.NEWS.href }
      ]
   },
   {
      id: 'SERVICES',
      options: [
         {
            id: 'MT_SERVICES',
            opt: [
               { id: 'SHIP_REPAIR', href: PATHS.SHIP_REPAIR.href },
               { id: 'RIDING_TEAMS', href: PATHS.RIDING_TEAMS.href },
               { id: 'UTM', href: PATHS.UTM.href }
            ]
         }
      ]
   },
   { id: 'S_SUPPLY', href: PATHS.S_SUPPLY.href, type: 'type A' }
   // { id: 'LIVE_STOCK', href: PATHS.LIVE_STOCK.href, type: 'type A' }
]

export const MENU = [
   { id: 'HOME', href: PATHS.HOME.href },
   { id: 'ABOUT_US', href: PATHS.ABOUT_US.href },
   { id: 'CONTACTS', href: PATHS.CONTACTS.href },
   { id: 'S_SUPPLY', href: PATHS.S_SUPPLY.href },
   { id: 'MT_SERVICES', href: PATHS.MT_SERVICES.href },
   { id: 'SHIP_REPAIR', href: PATHS.SHIP_REPAIR.href },
   { id: 'RIDING_TEAMS', href: PATHS.RIDING_TEAMS.href },
   { id: 'UTM', href: PATHS.UTM.href }
]
