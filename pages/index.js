import Header from 'components/header'
import HomeHero from 'components/home-hero'
import HomeShop from 'components/home-shop'
import HomeProduct from 'components/home-product'
import HomeDescription from 'components/home-description'

export default function Home() {
  return (
    <>
      <main className="bg-gray-own min-h-screen max-h-screen font-manrope">
        <Header />
        <HomeHero />
        <HomeShop />
        <HomeProduct />
        <HomeDescription />
      </main>
    </>
  )
}
