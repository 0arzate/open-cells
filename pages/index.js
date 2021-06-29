import Header from 'components/header'
import HomeHero from 'components/home-hero'
import HomeShop from 'components/home-shop'
import HomeProduct from 'components/home-product'

export default function Home() {
  return (
    <>
      <main className="bg-gray-own min-h-screen max-h-screen font-manrope">
        <Header />
        <HomeHero />
        <HomeShop />
        <HomeProduct />
      </main>
    </>
  )
}
