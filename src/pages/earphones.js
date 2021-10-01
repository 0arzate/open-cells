import Layout from '@components/Layout'
import SectionTitle from '@components/SectionTitle'
import ProductList from '@components/ProductList'
import HomeShop from '@components/HomeShop'
import HomeDescription from '@components/HomeDescription'

export default function Earphones() {
  return (
    <Layout>
      <SectionTitle title="EARPHONES" />
      <ProductList />
      <HomeShop />
      <HomeDescription />
    </Layout>
  )
}
