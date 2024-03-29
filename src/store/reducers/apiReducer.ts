import { IUser } from '@/constants/users'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiUrl = 'http://localhost:3000/api/'

export const api = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
   endpoints: (builder) => ({
      getUsers: builder.query<IUser[], void>({
         query: () => 'employees'
      }),
      getUser: builder.query<IUser, void>({
         query: () => 'user'
      })
   })
})

export const { useGetUsersQuery, useGetUserQuery } = api
