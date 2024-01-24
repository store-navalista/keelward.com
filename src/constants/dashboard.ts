export type TID = 'account' | 'time' | 'qr' | 'radio'

type TBoardItems = {
   id: TID
   icon: string
   title: string
}[]

const nav: TBoardItems = [
   {
      id: 'account',
      icon: 'dashboard-nav-info.svg',
      title: 'dashboard.nav-info'
   },
   {
      id: 'time',
      icon: 'dashboard-nav-time-reports.svg',
      title: 'dashboard.nav-time'
   },
   {
      id: 'qr',
      icon: 'dashboard-nav-qrcode.svg',
      title: 'dashboard.nav-qr'
   },
   {
      id: 'radio',
      icon: 'dashboard-nav-radio.svg',
      title: 'dashboard.nav-radio'
   }
]

export const DASHBOARD = {
   nav
}
