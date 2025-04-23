import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   try {
      const filePath = path.join(process.cwd(), 'src/constants/goods.json')

      const data = fs.readFileSync(filePath, 'utf-8')
      const goods = JSON.parse(data)

      const page = parseInt(req.query.page as string) || 1
      const pageSize = 10
      const startIndex = (page - 1) * pageSize
      const paginatedGoods = goods.slice(startIndex, startIndex + pageSize)

      res.status(200).json({ goods: paginatedGoods, total: goods.length, page, pageSize })
   } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении товаров' })
   }
}
