import Link from 'next/link'
import IconButton from 'components/icon-button'

export default function HomeShop() {
  return (
    <section className="bg-white pt-48 pb-64">
      <div className="flex w-10/12 mx-auto text-black font-bold text-2md leading-lg">
        <div className="flex flex-col justify-between mr-8 text-center bg-gradient-to-b via-gray-own from-white to-gray-own pb-7">
          <img
            className="w-9/12 mx-auto"
            src="img/shared/desktop/image-headphones.png"
            alt="headphones shop"
          />
          <div>
            <Link href="#">
              <a className="block uppercase mb-3.5">HEADPHONES</a>
            </Link>
            <IconButton name="Shop" />
          </div>
        </div>
        <div className="flex flex-col justify-between mr-8 text-center bg-gradient-to-b via-gray-own from-white to-gray-own pb-7">
          <img
            className="w-9/12 mx-auto"
            src="img/shared/desktop/image-speakers.png"
            alt="speakers shop"
          />
          <div>
            <Link href="#">
              <a className="block uppercase mb-3.5">SPEAKERS</a>
            </Link>
            <IconButton name="Shop" />
          </div>
        </div>
        <div className="flex flex-col justify-between text-center bg-gradient-to-b via-gray-own from-white to-gray-own pb-7">
          <img
            className="w-9/12 mx-auto"
            src="img/shared/desktop/image-earphones.png"
            alt="earphones shop"
          />
          <div>
            <Link href="#">
              <a className="block uppercase mb-3.5">EARPHONES</a>
            </Link>
            <IconButton name="Shop" />
          </div>
        </div>
      </div>
    </section>
  )
}
