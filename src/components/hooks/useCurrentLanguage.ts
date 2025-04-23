import { useRouter } from 'next/router'

const useCurrentLanguage = () => {
   const { locale } = useRouter()

   return locale || 'en'
}

export default useCurrentLanguage
