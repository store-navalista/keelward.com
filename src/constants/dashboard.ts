export type TID = 'greating' | 'account' | 'time' | 'qr' | 'radio' | 'employees' | 'timing' | 'CTO' | 'logout'

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
   },
   {
      id: 'employees',
      icon: 'dashboard-nav-employees.svg',
      title: 'dashboard.nav-employees'
   },
   {
      id: 'timing',
      icon: 'dashboard-nav-timing.svg',
      title: 'dashboard.nav-timing'
   },
   {
      id: 'logout',
      icon: 'dashboard-nav-logout.svg',
      title: 'dashboard.nav-logout'
   }
]

const items = {
   CTO: ['greating', 'account', 'employees', 'timing', 'qr', 'logout'],
   Employee: ['greating', 'account', 'time', 'qr', 'radio', 'logout'],
   Moderator: ['greating', 'CTO', 'employees', 'timing', 'qr', 'radio', 'logout']
}

export const DASHBOARD = {
   nav,
   items
}
