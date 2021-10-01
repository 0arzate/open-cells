import Layout from '@components/Layout'
import SectionTitle from '@components/SectionTitle'
import ProductList from '@components/ProductList'
import HomeShop from '@components/HomeShop'
import HomeDescription from '@components/HomeDescription'

export default function Speakers() {
  return (
    <Layout>
      <SectionTitle title="SPEAKERS" />
      <ProductList />
      <HomeShop />
      <HomeDescription />
    </Layout>
  )
}
