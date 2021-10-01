export default function ProductDescription({ product = {} }) {
  return (
    <section>
      <div className="w-10/12 2xl:w-8/12 mx-auto flex justify-between">
        <div className="w-7/12">
          <h2 className="uppercase mb-8 font-bold text-2xl">FEATURES</h2>
          <p className="mb-8 text-black text-opacity-50 text-sm">
            {product.features}
          </p>
          <p className="text-black text-opacity-50 text-sm">
            {product.description}
          </p>
        </div>
        <div className="w-4/12">
          <h2 className="uppercase mb-8 font-bold text-2xl">in the box</h2>
          <ul>
            {product.includes?.map((include) => (
              <li
                className="text-black mb-2 text-opacity-50 text-sm"
                key={include.item}
              >
                <span className="mr-6 text-orange-own">{`${include.quantity}x`}</span>
                {include.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
