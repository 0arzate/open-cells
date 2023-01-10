import { useRouter } from 'next/dist/client/router'

import Button from '@components/Button'

export default function HomeHero() {
  const router = useRouter()
  return (
    <section
      className="bg-black-light text-white flex align-middle bg-image-hero"
      style={{ minHeight: '632px' }}
    >
      <div className="w-10/12 2xl:w-8/12 mx-auto flex items-center min-h-[346px] pb-40 pt-32">
        <div className="relative z-30 w-full md:w-6/12">
          <h3 className="text-center md:text-left font-normal text-sm leading-[19px] tracking-[10px] mb-6 opacity-50 tracking-2.5">
            NEW PRODUCT
          </h3>
          <h2 className="text-center md:text-left uppercase font-bold text-[56px] leading-[58px] tracking-[2px] mb-6">
            XX99 Mark II Headphones
          </h2>
          <h4 className="text-center md:text-left mx-auto md:mx-0 w-7/12 md:w-8/12 font-normal text-[15px] leading-[25px] opacity-50 mb-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h4>
          <div className="hidden md:block">
            <Button
              solid={true}
              name="See Product"
              margin="0px auto 0px auto"
              onClick={() => router.push('/product/xx99-mark-two-headphones')}
            />
          </div>
          <div className="md:hidden">
            <Button
              solid={true}
              name="See Product"
              margin="0px auto 0px auto"
              onClick={() => router.push('/product/xx99-mark-two-headphones')}
              isCenter
            />
          </div>
        </div>
      </div>
    </section>
  )
}
