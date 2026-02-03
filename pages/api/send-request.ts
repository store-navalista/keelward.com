import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import formidable, { File } from 'formidable'
import fs from 'fs'

export const config = {
   api: {
      bodyParser: false
   }
}

type Fields = {
   email?: string
   vessel_name?: string
   amount?: string
   phone?: string
   comment?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method !== 'POST') {
      return res.status(405).end()
   }

   try {
      const form = formidable()

      const { fields, files } = await new Promise<{
         fields: Fields
         files: { attachment?: File }
      }>((resolve, reject) => {
         form.parse(req, (err, fields, files) => {
            if (err) reject(err)
            else resolve({ fields, files })
         })
      })

      const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: Number(process.env.SMTP_PORT),
         secure: false,
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
         },
         tls: {
            rejectUnauthorized: false
         }
      })

      const attachments = []

      const attachment = files.attachment

      if (attachment) {
         const fileArray = Array.isArray(attachment) ? attachment : [attachment]

         for (const file of fileArray) {
            attachments.push({
               filename: file.originalFilename || 'file',
               content: fs.readFileSync(file.filepath),
               contentType: file.mimetype
            })
         }
      }

      await transporter.sendMail({
         from: `"Website" <${process.env.SMTP_USER}>`,
         to: process.env.SMTP_DELIVERY,
         subject: 'New request from website',
         text: `
Email: ${fields.email}
Vessel: ${fields.vessel_name}
IMO: ${fields.amount}
Phone: ${fields.phone}

Comment:
${fields.comment}
         `,
         attachments
      })

      return res.status(200).json({ success: true })
   } catch (error) {
      console.error(error)
      return res.status(500).json({ success: false })
   }
}
