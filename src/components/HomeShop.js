import { useRouter } from 'next/dist/client/router'
import { URL_IMAGE } from '../services/path'

import IconButton from '@components/IconButton'

export default function HomeShop() {
  const { push } = useRouter()

  return (
    <section className="bg-white pt-32 pb-40">
      <div className="flex justify-center w-10/12 2xl:w-8/12 mx-auto text-black font-bold text-sm">
        <div className="flex flex-col justify-between mr-8 text-center bg-gradient-to-b via-gray-own from-white to-gray-own pb-7">
          <img
            className="w-9/12 mx-auto"
            src={URL_IMAGE + 'img/shared/desktop/image-headphones.png'}
            alt="headphones shop"
          />
          <div>
            <p className="block uppercase mb-3.5">HEADPHONES</p>
            <IconButton
              name="Shop"
              onClick={() => push('/catalogue/headphones')}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between mr-8 text-center bg-gradient-to-b via-gray-own from-white to-gray-own pb-7">
          <img
            className="w-9/12 mx-auto"
            src={URL_IMAGE + 'img/shared/desktop/image-speakers.png'}
            alt="speakers shop"
          />
          <div>
            <p className="block uppercase mb-3.5">SPEAKERS</p>
            <IconButton
              name="Shop"
              onClick={() => push('/catalogue/speakers')}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between text-center bg-gradient-to-b via-gray-own from-white to-gray-own pb-7">
          <img
            className="w-9/12 mx-auto"
            src={URL_IMAGE + 'img/shared/desktop/image-earphones.png'}
            alt="earphones shop"
          />
          <div>
            <p className="block uppercase mb-3.5">EARPHONES</p>
            <IconButton
              name="Shop"
              onClick={() => push('/catalogue/earphones')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
