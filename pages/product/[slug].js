import { useState, useEffect } from 'react'
import { URL_API } from 'services/ulr'
import { useRouter } from 'next/dist/client/router'

import Layout from 'components/layout'
import ProductCard from 'components/product-card'

export default function Product() {
  const [product, setProduct] = useState(false)
  const router = useRouter()

  const getProduct = async () => {
    const request = await fetch(URL_API + `/all`)
    const response = await request.json()
    const product = await response.filter(
      (product) => product.slug === router.query.slug
    )
    setProduct(product[0])
  }

  useEffect(() => {
    getProduct()
  }, [router])

  return (
    <Layout>
      <section className="w-10/12 mx-auto">
        {product ? <ProductCard product={product} reverse={true} /> : null}
      </section>
    </Layout>
  )
}
