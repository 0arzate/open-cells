export default function ProductImages({ product = {} }) {
  return (
    <>
      {product.gallery ? (
        <section
          className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-2 grid-rows-2 gap-7 max-w-max max-h-min mt-40 mb-40"
          style={{ maxHeight: '592px' }}
        >
          <div className="bg-blue-800 row-start-1 row-end-2">
            <img
              className="w-full object-cover object-top"
              style={{
                maxHeight: '100%',
              }}
              src={product.gallery?.first.desktop}
              alt={product.name}
            />
          </div>
          <div className="bg-red-700 row-start-2 row-end-3 ">
            <img
              className="w-full object-cover object-top"
              style={{
                maxHeight: '100%',
              }}
              src={product.gallery?.second.desktop}
              alt={product.name}
            />
          </div>
          <div className="bg-indigo-400 row-start-1 row-end-3">
            <img
              className="w-full h-full object-cover object-top"
              src={product.gallery?.third.desktop}
              alt={product.name}
            />
          </div>
        </section>
      ) : null}
    </>
  )
}
