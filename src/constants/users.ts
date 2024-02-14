import { IReport } from './jobs'

type TCurrentTask = {
   value: string
   time: string
}

export interface User {
   _id: string
   employee: string
   avatar: string
   describe_name: string
   describe_date: string
   describe_specialization: string
   describe_position: string
   describe_role: 'CTO' | 'Employee' | 'Moderator'
   currentTask: TCurrentTask
   reports: IReport[]
}
