import Link from 'next/link'

export default function Header() {
  return (
    <section className="relative z-30 bg-transparent text-white font-manrope bg-gradient-to-r from-black-light via-black-light to-transparent">
      <div className="flex justify-between w-10/12 mx-auto py-9 border-b border-white border-opacity-20">
        <div>
          <img src="/img/shared/desktop/logo.svg" alt="logo" />
        </div>
        <nav>
          <ul className="flex uppercase font-bold text-sm leading-10">
            <Link href="/#">
              <a className="mr-9">Home</a>
            </Link>
            <Link href="/#">
              <a className="mr-9">HEADPHONES</a>
            </Link>
            <Link href="/#">
              <a className="mr-9">SPEAKERS</a>
            </Link>
            <Link href="/#">
              <a>EARPHONES</a>
            </Link>
          </ul>
        </nav>
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
