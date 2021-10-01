import { useRouter } from 'next/dist/client/router'

import Button from '@components/Button'

export default function HomeProduct() {
  const router = useRouter()

  return (
    <section className="bg-white pb-52">
      <div className="w-10/12 2xl:w-8/12 mx-auto">
        <div className="flex bg-orange-own text-white mb-12 bg-product-image">
          <div className="w-6/12 relative">
            <img
              className="w-6/12 absolute bottom-0 left-28"
              src="/img/home/desktop/image-speaker-zx9.png"
              alt="speaker zx9"
            />
          </div>
          <div className="w-6/12 mr-auto mt-32 pb-32">
            <h2 className="font-bold text-6xl mb-9">
              ZX9
              <br />
              SPEAKER
            </h2>
            <p className="w-8/12 font-normal text-sm mb-16">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              solid={true}
              bgColor="bg-black"
              name="See Product"
              onClick={() => router.push('/product/zx9-speaker')}
            />
          </div>
        </div>
        <div className="relative mb-12">
          <div className="absolute top-1/3 ml-36">
            <h2 className="font-bold text-xl tracking-widest mb-8">
              ZX7 SPEAKER
            </h2>
            <Button
              ghost={true}
              name="See Product"
              onClick={() => router.push('/product/zx7-speaker')}
            />
          </div>
          <img
            className="w-full"
            src="/img/home/desktop/image-speaker-zx7.jpg"
            alt="speaker zx7"
          />
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div>
            <img
              className="w-full"
              src="/img/home/desktop/image-earphones-yx1.jpg"
              alt="earphones yx1"
            />
          </div>
          <div className="flex items-center bg-gray-own">
            <div className="ml-36">
              <h2 className="font-bold text-xl tracking-widest mb-8">
                YX1 EARPHONES
              </h2>
              <Button
                ghost={true}
                name="See Product"
                onClick={() => router.push('/product/yx1-earphones')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
