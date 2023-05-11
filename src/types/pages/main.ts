import { PageNames } from '@/constants/pages'

export interface IMainService {
   page: PageNames
   title: string
   description: string
   image: string
   path: string
   disabled: boolean
   submenu?: {
      brochure?: string
      works?: string
   }
}

export interface IMainBlock {
   page: PageNames
   title: string
   description: string
   block: boolean
   icon: string
   url: string
}

export interface IMainChapter {
   title: string
   services: IMainService[]
}

export interface IMainProps {
   [locale: string]: {
      title: string
      mainBlocks: IMainBlock[]
      chapters: IMainChapter[]
   }
}
