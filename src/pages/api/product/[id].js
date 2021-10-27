import all from '../../../data/all.json'

export default (req, res) => {
  const { id } = req.query

  const product = all.filter((product) => product.slug === id)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(product[0]))
}
