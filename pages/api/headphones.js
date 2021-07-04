import headphones from '../../data/headphones.json'

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(headphones))
}
