import { useRouter } from 'next/router'

import Layout from '@components/Layout'
import SectionTitle from '@components/SectionTitle'
import ProductList from '@components/ProductList'
import HomeShop from '@components/HomeShop'
import HomeDescription from '@components/HomeDescription'

export default function Earphones() {
  const { query } = useRouter()

  return (
    <Layout>
      <SectionTitle title={query.id} />
      <ProductList />
      <HomeShop />
      <HomeDescription />
    </Layout>
  )
}
