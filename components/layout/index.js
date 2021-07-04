import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <section className="bg-gray-own min-h-screen max-h-screen font-manrope">
      <Header />
      {children}
      <Footer />
    </section>
  )
}
