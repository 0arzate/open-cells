import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import ProductCard from 'components/product-card'

export default function ProductList() {
  const [product, setProduct] = useState([])
  const Router = useRouter()

  const getData = async () => {
    const product = Router.asPath
    const url =
      window.location.origin === 'http://localhost:3000'
        ? 'http://localhost:3000/api'
        : 'https://planets-fact.vercel.app/api/'

    const request = await fetch(url + product)
    const response = await request.json()

    setProduct(response)
  }

  const renderProduct = () =>
    product.map((product, key) => {
      const reverse = (key + 1) % 2 === 0

      return (
        <ProductCard
          key={product.id}
          product={product}
          reverse={reverse}
          isNew={reverse}
        />
      )
    })

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="py-64">
      <div className="w-10/12 mx-auto">{renderProduct()}</div>
    </section>
  )
}
