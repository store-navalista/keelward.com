import { User } from '@/constants/users'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiUrl = 'http://localhost:3000/api/'

export const api = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
   endpoints: (builder) => ({
      getUsers: builder.query<User[], void>({
         query: () => 'users'
      }),
      getUser: builder.query<User, number>({
         query: (userId) => `users/${userId}`
      })
   })
})

export const { useGetUsersQuery } = api
