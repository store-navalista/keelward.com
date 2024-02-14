import { NextApiRequest, NextApiResponse } from 'next'

const user = {
   _id: 'sad123sad',
   employee: 'Otinov_AV',
   avatar: 'otinov_a_v.png',
   currentTask: {
      value: 'FF',
      time: '14.56 January 2024'
   },
   describe_name: 'Otinov Anton',
   describe_date: '02.03.1985',
   describe_specialization: 'Engineer',
   describe_position: 'Chief Engineer',
   describe_role: 'Employee',
   reports: [
      {
         period: 'January 2024',
         jobs: [
            {
               _id: '3e96db28-65a9-4d8b-b8db-63d8b687255d',
               job_name: 'DB',
               hours_worked: [
                  2, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
               ]
            },
            {
               _id: 'a7f4c8da-1117-42eb-bcf0-51d7394c3d00',
               job_name: 'DA',
               hours_worked: [
                  0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
               ]
            }
         ]
      }
   ]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(user)
}
