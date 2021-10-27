import earphones from '../../../data/earphones.json'
import headphones from '../../../data/headphones.json'
import speakers from '../../../data/speakers.json'
import all from '../../../data/all.json'

export default (req, res) => {
  const { id } = req.query

  const products =
    id === 'earphones'
      ? earphones
      : id === 'headphones'
      ? headphones
      : id === 'speakers'
      ? speakers
      : id === 'all'
      ? all
      : null

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(products))
}
