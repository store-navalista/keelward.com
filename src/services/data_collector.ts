import SEO_DATA from '@/i18n/seo.json'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

export const data_collector = async (page_id: string, locale: string, serializeFn: typeof serialize) => {
   try {
      const sData = SEO_DATA[page_id]
      const filePath = path.join(process.cwd(), `/src/i18n/content/${locale}/${page_id}.mdx`)
      let fileContent = ''

      try {
         fileContent = fs.readFileSync(filePath, 'utf-8')
      } catch (err) {
         console.log(`File not found: ${filePath}`)
      }

      const seo = sData
         ? SEO_DATA[page_id][locale || 'en']
         : { description: 'Error', pageTitle: 'Error Page', siteTitle: 'Keelward' }

      if (fileContent) {
         const mdxSource = await serializeFn(fileContent)

         return {
            seo,
            content: mdxSource
         }
      } else {
         return { seo }
      }
   } catch (e) {
      console.log(e)
   }
}
