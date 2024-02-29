import { NextApiRequest, NextApiResponse } from 'next'

const users = [
   {
      _id: '999999995',
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
            period: 'February 2024',
            jobs: [
               {
                  _id: '477756f6-5af6-4267-8dcf-894db8fcf8e2',
                  job: {
                     project_number: '32434',
                     ship_name: 'EXE First',
                     job_description: 'EXE First Description'
                  },
                  hours_worked: [
                     4, -0.5, -0.5, 5, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0,
                     0, 0, 0, 0, -0.5, -0.5
                  ]
               }
            ]
         }
      ]
   },
   {
      _id: '999999997',
      employee: 'Bogdich_AV',
      avatar: 'sylaieva_m_n.png',
      currentTask: {
         value: 'FF',
         time: '14.56 January 2024'
      },
      describe_name: 'Sylaieva Marina',
      describe_date: '02.03.1985',
      describe_specialization: 'Engineer',
      describe_position: 'Chief Engineer',
      describe_role: 'Employee',
      reports: []
   },
   {
      _id: '999999998',
      employee: 'Otinov_SV',
      avatar: 'kazantsev_n.png',
      currentTask: {
         value: 'FF',
         time: '14.56 January 2024'
      },
      describe_name: 'Kazantsev Nikolay',
      describe_date: '02.03.1985',
      describe_specialization: 'Engineer',
      describe_position: 'Chief Engineer',
      describe_role: 'Employee',
      reports: [
         {
            period: 'February 2024',
            jobs: [
               {
                  _id: '477756f6-5af6-4267-8dcf-894db8fcf8e2',
                  job: {
                     project_number: '234234',
                     ship_name: 'EXE Second',
                     job_description: 'EXE Second Description'
                  },
                  hours_worked: [
                     4, 5, -0.5, -0.5, 4, -1, -1, -1.5, 0, -0.5, -0.5, 5, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5,
                     -0.5, 0, 0, 0, 0
                  ]
               },
               {
                  _id: '858da739-b6f2-44cd-b32d-baa6a4385e35',
                  job: {
                     project_number: '3423425',
                     ship_name: 'DUEXE Third',
                     job_description: 'DUEXE Third Description'
                  },
                  hours_worked: [
                     3, 3, -0.5, -0.5, 4, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5,
                     0, 0, 0, 0
                  ]
               }
            ]
         },
         {
            period: 'March 2024',
            jobs: [
               {
                  _id: '477756f6-5af6-4267-8dcf-894db8fcf8e2',
                  job: {
                     project_number: '32434',
                     ship_name: 'sdfsdf',
                     job_description: 'sdfsfsfsdf'
                  },
                  hours_worked: [
                     4, -0.5, -0.5, 5, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0,
                     0, 0, 0, 0, -0.5, -0.5
                  ]
               }
            ]
         }
      ]
   },
   {
      _id: '999999999',
      employee: 'Otinov_SV',
      avatar: 'kisenko_r_o.png',
      currentTask: {
         value: 'FF',
         time: '14.56 January 2024'
      },
      describe_name: 'Kisenko Roman',
      describe_date: '02.03.1985',
      describe_specialization: 'Engineer',
      describe_position: 'Chief Engineer',
      describe_role: 'Employee',
      reports: [
         {
            period: 'February 2024',
            jobs: [
               {
                  _id: '477756f6-5af6-4267-8dcf-894db8fcf8e2',
                  job: {
                     project_number: '234234',
                     ship_name: 'DUEXE Third',
                     job_description: 'DUEXE Third Description'
                  },
                  hours_worked: [
                     4, 5, -0.5, -0.5, 4, -1, -1, -1.5, 0, -0.5, -0.5, 5, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5,
                     -0.5, 0, 0, 0, 0
                  ]
               },
               {
                  _id: '858da739-b6f2-44cd-b32d-baa6a4385e35',
                  job: {
                     project_number: '3423425',
                     ship_name: 'sdfsfsd',
                     job_description: 'sdfsfsfd'
                  },
                  hours_worked: [
                     3, 3, -0.5, -0.5, 4, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5,
                     0, 0, 0, 0
                  ]
               }
            ]
         },
         {
            period: 'March 2024',
            jobs: [
               {
                  _id: '477756f6-5af6-4267-8dcf-894db8fcf8e2',
                  job: {
                     project_number: '32434',
                     ship_name: 'sdfsdf',
                     job_description: 'sdfsfsfsdf'
                  },
                  hours_worked: [
                     4, -0.5, -0.5, 5, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0, 0, 0, 0, 0, -0.5, -0.5, 0,
                     0, 0, 0, 0, -0.5, -0.5
                  ]
               }
            ]
         }
      ]
   }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(users)
}
