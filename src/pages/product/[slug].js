import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { URL_API } from 'services/path'

import IconButton from '@components/IconButton'
import Layout from '@components/Layout'
import ProductCard from '@components/ProductCard'
import ProductDescription from '@components/ProductDescription'
import ProductImages from '@components/ProductImages'
import ProductRandom from '@components/productRandom'
import HomeShop from '@components/HomeShop'
import HomeDescription from '@components/HomeDescription'

export default function Product() {
  const [product, setProduct] = useState({})
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
      <div className="w-10/12 2xl:w-8/12 mx-auto">
        <IconButton
          name="Go back"
          iconName=""
          onClick={() => router.back()}
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
