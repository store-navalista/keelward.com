import { GetServerSideProps } from 'next'

export default function Sitemap() {
   return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`)
   const sitemap = await response.text()

   res.setHeader('Content-Type', 'text/xml')
   res.write(sitemap)
   res.end()

   return { props: {} }
}
