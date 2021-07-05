import Navbar from 'components/navbar'

export default function Header() {
  return (
    <section className="bg-black-light relative z-30 bg-transparent text-white font-manrope bg-gradient-to-r from-black-light via-black-light to-transparent">
      <div className="flex justify-between w-10/12 2xl:w-8/12 mx-auto py-9 border-b border-white border-opacity-20">
        <div>
          <img src="/img/shared/desktop/logo.svg" alt="logo" />
        </div>
        <Navbar />
        <div>
          <img
            src="/img/shared/desktop/icon-cart.svg"
            alt="carrrito de compra"
          />
        </div>
      </div>
    </section>
  )
}
