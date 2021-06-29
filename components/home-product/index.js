import Button from 'components/button'

export default function HomeProduct() {
  return (
    <section className="bg-white pb-80">
      <div className="w-10/12 mx-auto">
        <div
          className="flex bg-orange-own text-white mb-12"
          style={{
            backgroundImage: 'url(/img/home/desktop/pattern-circles.svg)',
            backgroundSize: '60%',
            backgroundPosition: '-20% -30px',
            backgroundRepeat: 'no-repeat',
            maxHeight: '560px',
          }}
        >
          <div className="w-6/12 pt-36 ml-30 mr-56">
            <img
              className="w-8/12"
              src="/img/home/desktop/image-speaker-zx9.png"
              alt="speaker zx9"
            />
          </div>
          <div className="w-6/12 mr-auto mt-36">
            <h2 className="font-bold text-8xl leading-9xl mb-6">
              ZX9
              <br />
              SPEAKER
            </h2>
            <p className="w-7/12 font-normal text-2sm leading-lg mb-16">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button solid={true} bgColor="bg-black" name="See Product" />
          </div>
        </div>
        <div className="relative mb-12">
          <div className="absolute top-1/3 ml-36">
            <h2 className="font-bold text-xl leading-3xl tracking-widest mb-8">
              ZX7 SPEAKER
            </h2>
            <Button ghost={true} name="See Product" />
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
              <h2 className="font-bold text-xl leading-3xl tracking-widest mb-8">
                YX1 EARPHONES
              </h2>
              <Button ghost={true} name="See Product" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
