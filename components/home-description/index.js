export default function HomeDescription() {
  return (
    <section className="bg-white pb-80">
      <div className="w-10/12 mx-auto flex items-center">
        <div className="w-6/12">
          <h2 className="uppercase mb-8 text-4xl leading-5xl font-bold">
            Bringing you the
            <br /> <strong className="text-orange-own">best</strong> audio gear
          </h2>
          <p className="text-2sm leading-lg text-opacity-50 text-black">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-6/12">
          <img
            className="w-full pl-30"
            src="/img/shared/desktop/image-best-gear.jpg"
            alt="beast gear"
          />
        </div>
      </div>
    </section>
  )
}
