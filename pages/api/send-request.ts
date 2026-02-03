import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import formidable, { File } from 'formidable'
import fs from 'fs'

function row(label: string, value?: string) {
   return `
   <tr>
     <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#475569;width:35%;font-weight:bold;">
       ${label}
     </td>
     <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#0f172a;">
       ${value || '—'}
     </td>
   </tr>
   `
}

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

      const comment = Array.isArray(fields.comment) && !!fields.comment[0] ? fields.comment[0] : 'no comments'

      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0;padding:20px;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          
          <tr>
            <td style="background:#0f172a;color:#ffffff;padding:16px 24px;font-size:18px;font-weight:bold;">
              New request from website
            </td>
          </tr>

          <tr>
            <td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                
                ${row('Email', fields.email)}
                ${row('Vessel name', fields.vessel_name)}
                ${row('IMO / Amount', fields.amount)}
                ${row('Phone', fields.phone)}

              </table>

              <div style="margin-top:24px;">
                <div style="font-weight:bold;margin-bottom:8px;color:#0f172a;">Comment</div>
                <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:6px;padding:12px;color:#334155;white-space:pre-line;">
                  ${comment}
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td style="background:#f1f5f9;padding:12px 24px;font-size:12px;color:#64748b;">
              Sent automatically from website form
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

      await transporter.sendMail({
         from: `"Website" <${process.env.SMTP_USER}>`,
         to: process.env.SMTP_DELIVERY,
         subject: 'New request from website',
         html,
         attachments
      })

      return res.status(200).json({ success: true })
   } catch (error) {
      console.error(error)
      return res.status(500).json({ success: false })
   }
}
