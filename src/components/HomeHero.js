import { useRouter } from 'next/dist/client/router'

import Button from '@components/Button'

export default function HomeHero() {
  const router = useRouter()
  return (
    <section
      className="bg-black-light text-white"
      style={{ minHeight: '632px' }}
    >
      <div className="w-10/12 2xl:w-8/12 mx-auto flex items-center pb-40 pt-32">
        <div className="relative z-30 w-6/12">
          <h3 className="font-normal text-sm mb-6 opacity-50 tracking-2.5">
            NEW PRODUCT
          </h3>
          <h2 className="uppercase font-bold text-6xl mb-6">
            XX99 Mark II Headphones
          </h2>
          <h4 className="w-7/12 font-normal text-sm opacity-50 mb-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h4>
          <Button
            solid={true}
            name="See Product"
            onClick={() => router.push('/product/xx99-mark-two-headphones')}
          />
        </div>
        <img
          className="absolute top-0 bottom-0 right-0"
          src="/img/home/desktop/image-hero.jpg"
          alt="banner"
        />
      </div>
    </section>
  )
}
