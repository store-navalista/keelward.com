export type TID = 'account' | 'time' | 'qr' | 'radio' | 'employees' | 'users'

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
      id: 'users',
      icon: 'dashboard-nav-users.svg',
      title: 'dashboard.nav-users'
   }
]

const items = {
   CTO: ['account', 'employees', 'users', 'qr', 'radio'],
   Employee: ['account', 'time', 'qr', 'radio'],
   Moderator: []
}

export const DASHBOARD = {
   nav,
   items
}
