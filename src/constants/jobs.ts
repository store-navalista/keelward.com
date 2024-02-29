interface IJS {
   NAV: { name: string; type: 'icon-btn' | 'file-btn' }[]
}

export interface IJob {
   _id: string
   job: {
      project_number: string
      ship_name: string
      job_description: string
   }
   hours_worked: number[]
}

export interface IReport {
   period: string
   jobs: IJob[]
}

export const JC: IJS = {
   NAV: [
      { name: 'add', type: 'icon-btn' },
      { name: 'save', type: 'icon-btn' },
      { name: 'download', type: 'file-btn' },
      { name: 'upload', type: 'icon-btn' },
      { name: 'reset', type: 'icon-btn' },
      { name: 'clean', type: 'icon-btn' }
   ] // navigate buttons
}
