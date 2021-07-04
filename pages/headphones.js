import Layout from 'components/layout'
import SectionTitle from 'components/section-titile'
import ProductList from 'components/product-list'
import HomeShop from 'components/home-shop'
import HomeDescription from 'components/home-description'

export default function Headphones() {
  return (
    <Layout>
      <SectionTitle title="HEADPHONES" />
      <ProductList />
      <HomeShop />
      <HomeDescription />
    </Layout>
  )
}
