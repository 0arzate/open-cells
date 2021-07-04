export default function ProductDescription({ product }) {
  return (
    <section>
      <div>
        <h2 className="uppercase mb-8 font-bold text-2xl leading-3xl">
          FEATURES
        </h2>
        <p className="text-black text-opacity-50 text-2sm leading-lg">
          {product.features}
        </p>
      </div>
      <div>
        <h2 className="uppercase mb-8 font-bold text-2xl leading-3xl">
          in the box
        </h2>
        <ul>
          {product.includes.map((include) => (
            <li
              className="text-black text-opacity-50 text-2sm leading-lg"
              key={include.item}
            >
              <span className="text-orange-own">{`${include.quantity}x`}</span>
              {include.item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
