import Navbar from '@components/Navbar'

export default function Header() {
  return (
    <section className="text-white font-manrope bg-black">
      <div className="relative z-30 max-w-[1500px] mx-auto">
        <div className="flex justify-between w-10/12 2xl:w-8/12 mx-auto py-9 border-b border-white border-opacity-20">
          <div>
            <img src="/img/shared/desktop/logo.svg" alt="logo" />
          </div>
          <Navbar />
        </div>
      </div>
    </section>
  )
}
