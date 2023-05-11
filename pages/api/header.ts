import content from '../../src/i18n/components/header.json'

export default function header(req, res) {
   res.status(200).json(content)
}
