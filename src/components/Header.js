import Navbar from '@components/Navbar'
import { useRouter } from 'next/router'

export default function Header({ setOpenModal }) {
  const { asPath } = useRouter()

  return (
    <section className="relative z-30 bg-transparent text-white font-manrope bg-[#0A0A0A]">
      <div className="flex justify-between w-10/12 2xl:w-8/12 mx-auto py-9 border-b border-white border-opacity-20">
        <div>
          <img src="/img/shared/desktop/logo.svg" alt="logo" />
        </div>
        <Navbar />
        {asPath === '/checkout' ? null : (
          <div>
            <img
              className="cursor-pointer hover:scale-90 transform transition-transform"
              src="/img/shared/desktop/icon-cart.svg"
              alt="carrrito de compra"
              onClick={setOpenModal}
            />
          </div>
        )}
      </div>
    </section>
  )
}
