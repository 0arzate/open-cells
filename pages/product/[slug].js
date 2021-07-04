import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

import Layout from 'components/layout'

export default function Product() {
  const [product, setProduct] = useState({})
  const Router = useRouter()

  const getProduct = () => {
    console.log(Router)
    console.log(product)
  }

  useEffect(() => {
    getProduct()
    setProduct({})
  }, [])

  return (
    <Layout>
      <p></p>
    </Layout>
  )
}
