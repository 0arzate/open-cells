import Layout from 'components/layout'
import SectionTitle from 'components/section-titile'
import ProductList from 'components/product-list'
import HomeShop from 'components/home-shop'
import HomeDescription from 'components/home-description'

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
