interface IJS {
   WT: number[]
   NAV: { name: string; type: 'icon-btn' | 'file-btn' }[]
}

export interface IReport {
   employee: string
   currentTask: {
      value: string
      time: string
   }
   reports: {
      period: string
      jobs: {
         _id: string
         job_name: string
         hours_worked: number[]
      }[]
   }[]
}

export const JC: IJS = {
   WT: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], //count work hours per day
   NAV: [
      { name: 'add', type: 'icon-btn' },
      { name: 'save', type: 'icon-btn' },
      { name: 'download', type: 'file-btn' },
      { name: 'upload', type: 'icon-btn' },
      { name: 'reset', type: 'icon-btn' },
      { name: 'clean', type: 'icon-btn' }
   ] // navigate buttons
}
