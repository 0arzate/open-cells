import Layout from '@components/Layout'
import HomeHero from '@components/HomeHero'
import HomeShop from '@components/HomeShop'
import HomeProduct from '@components/HomeProduct'
import HomeDescription from '@components/HomeDescription'

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
