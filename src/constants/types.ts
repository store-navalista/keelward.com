import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface PageProps {
   seo: {
      pageTitle: string
      description: string
   }
   content?: MDXRemoteSerializeResult
}

export interface GoodsProps {
   id: number
}
