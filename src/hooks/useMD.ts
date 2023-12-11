import { useAppSelector } from './redux'
import * as content from '@/i18n/pages/locales'

export default function useMD() {
   const pageID = useAppSelector((state) => state.content._id)
   const i18n = useAppSelector((state) => state.content.i18n)
   const Content = content.MD[i18n][pageID]?.Content

   return Content
}
