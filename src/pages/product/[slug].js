import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

import IconButton from '@components/IconButton'
import Layout from '@components/Layout'
import ProductCard from '@components/ProductCard'
import ProductDescription from '@components/ProductDescription'
import ProductImages from '@components/ProductImages'
import ProductRandom from '@components/productRandom'
import HomeShop from '@components/HomeShop'
import HomeDescription from '@components/HomeDescription'
import { URL } from 'utils/constants'

export default function Product() {
  const [product, setProduct] = useState({})
  const { query, back } = useRouter()

  const getProduct = async () => {
    if (query.slug) {
      const request = await fetch(URL + `products/id/${query.slug}`)
      const response = await request.json()
      setProduct(response.data[0])
    }
  }

  useEffect(() => {
    getProduct()
  }, [query.slug])

  return (
    <Layout>
      <div className="w-10/12 2xl:w-8/12 mx-auto">
        <IconButton
          name="Go back"
          iconName=""
          onClick={() => back()}
          margin="72px 0px 72px 0px"
        />
        <ProductCard product={product} reverse={true} addToCard={true} />
      </div>
      <ProductDescription product={product} />
      <ProductImages product={product} />
      <ProductRandom />
      <HomeShop />
      <HomeDescription />
    </Layout>
  )
}
