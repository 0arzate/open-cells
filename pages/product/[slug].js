import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { URL_API } from 'services/path'

import IconButton from 'components/icon-button'
import Layout from 'components/layout'
import ProductCard from 'components/product-card'
import ProductDescription from 'components/product-description'
import ProductImages from 'components/product-images'
import ProductRandom from 'components/product-random'
import HomeShop from 'components/home-shop'
import HomeDescription from 'components/home-description'

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
      {product ? (
        <>
          <div className="w-10/12 mx-auto">
            <IconButton
              name="Go back"
              iconName=""
              onClick={() => router.back()}
              margin="72px 0px 72px 0px"
            />
            {product ? <ProductCard product={product} reverse={true} /> : null}
          </div>
          <ProductDescription product={product} />
          <ProductImages product={product} />
          <ProductRandom />
          <HomeShop />
          <HomeDescription />
        </>
      ) : null}
    </Layout>
  )
}
