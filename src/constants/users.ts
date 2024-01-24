import { IReport } from './jobs'

type TCurrentTask = {
   value: string
   time: string
}

export interface User {
   employee: string
   avatar: string
   describe_name: string
   describe_date: string
   describe_specialization: string
   describe_position: string
   describe_role: string
   currentTask: TCurrentTask
   reports: IReport[]
}
