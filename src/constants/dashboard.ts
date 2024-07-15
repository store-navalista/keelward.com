export type TID =
   | 'greating'
   | 'ctoProperty'
   | 'account'
   | 'time'
   | 'qr'
   | 'radio'
   | 'employees'
   | 'timing'
   | 'CTO'
   | 'logout'
   | 'return'
   | 'charts'

export type TBoardItem = {
   id: TID
   icon: string
   title: string
}

export type TBoardItems = TBoardItem[]

const nav: TBoardItems = [
   {
      id: 'greating',
      icon: 'dashboard-nav-greating.svg',
      title: 'dashboard.nav-greating'
   },
   {
      id: 'return',
      icon: 'dashboard-nav-return.svg',
      title: 'dashboard.nav-return'
   },
   {
      id: 'ctoProperty',
      icon: 'dashboard-nav-ctoProperty.svg',
      title: 'dashboard.nav-ctoProperty'
   },
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
      id: 'charts',
      icon: 'dashboard-nav-charts.svg',
      title: 'dashboard.nav-charts'
   },
   {
      id: 'logout',
      icon: 'dashboard-nav-logout.svg',
      title: 'dashboard.nav-logout'
   }
]

const items = {
   CTO: ['greating', 'account', 'employees', 'timing', 'qr', 'radio', 'charts', 'charts', 'return', 'logout'],
   Employee: ['greating', 'account', 'time', 'qr', 'radio', 'return', 'charts', 'logout'],
   Moderator: ['greating', 'ctoProperty', 'CTO', 'employees', 'timing', 'qr', 'radio', 'charts', 'return', 'logout']
}

export const DASHBOARD = {
   nav,
   items
}

export const COMMON_CELL = '_common_tasks'
