import { useGetUserQuery } from '@/store/reducers/apiReducer'

export default function useUserByID() {
   const urlParams = new URLSearchParams(window.location.search)
   const userId = urlParams.get('id')
   const { data } = useGetUserQuery({ userId })

   return { data }
}
