import { URL_IMAGE } from 'services/path'

export default function ProductImages({ product = {} }) {
  return (
    <section
      className="grid grid-cols-2 grid-rows-2 gap-7 max-w-max max-h-min mt-64 mb-64 mx-auto"
      style={{ maxHeight: '592px' }}
    >
      <div className="bg-blue-800 row-start-1 row-end-2">
        <img
          className="w-full object-cover object-top"
          style={{
            maxHeight: '100%',
          }}
          src={URL_IMAGE + product.gallery.first.desktop}
          alt={product.name}
        />
      </div>
      <div className="bg-red-700 row-start-2 row-end-3 ">
        <img
          className="w-full object-cover object-top"
          style={{
            maxHeight: '100%',
          }}
          src={URL_IMAGE + product.gallery.second.desktop}
          alt={product.name}
        />
      </div>
      <div className="bg-indigo-400 row-start-1 row-end-3">
        <img
          className="object-cover"
          src={URL_IMAGE + product.gallery.third.desktop}
          alt={product.name}
        />
      </div>
    </section>
  )
}
