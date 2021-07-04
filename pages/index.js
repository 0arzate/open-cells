import Layout from 'components/layout'
import HomeHero from 'components/home-hero'
import HomeShop from 'components/home-shop'
import HomeProduct from 'components/home-product'
import HomeDescription from 'components/home-description'

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeShop />
      <HomeProduct />
      <HomeDescription />
    </Layout>
  )
}
