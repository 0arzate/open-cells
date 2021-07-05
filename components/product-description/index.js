export default function ProductDescription({ product }) {
  return (
    <section className="flex justify-between">
      <div className="w-7/12">
        <h2 className="uppercase mb-8 font-bold text-2xl leading-3xl">
          FEATURES
        </h2>
        <p className="mb-8 text-black text-opacity-50 text-2sm leading-lg">
          {product.features}
        </p>
        <p className="text-black text-opacity-50 text-2sm leading-lg">
          {product.description}
        </p>
      </div>
      <div className="w-4/12">
        <h2 className="uppercase mb-8 font-bold text-2xl leading-3xl">
          in the box
        </h2>
        <ul>
          {product.includes.map((include) => (
            <li
              className="text-black mb-2 text-opacity-50 text-2sm leading-lg"
              key={include.item}
            >
              <span className="mr-6 text-orange-own">{`${include.quantity}x`}</span>
              {include.item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
