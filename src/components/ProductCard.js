import { useRouter } from 'next/dist/client/router'

import Button from '@components/Button'
import InputAmount from '@components/InputAmount'
import { useShoppingCart } from '@hooks/useShoppingCart'
import { useState } from 'react'
import { _0 } from 'utils/constants'

export default function ProductCard({
  isNew = false,
  reverse = false,
  addToCard = false,
  product = {},
}) {
  const [amountToAdd, setAmountToAdd] = useState(_0)
  const { addProductToShoppingCart } = useShoppingCart()
  const { push } = useRouter()
  const NEW = isNew ? 'inline-block' : 'hidden'
  const DIRECTION = reverse ? 'flex-row-reverse' : ''
  const PADDING_IMAGE = reverse ? 'pr-32' : 'pl-32'

  const changeRoute = () => {
    push(`/product/${product.id}`)
  }

  const getProductsToCart = (amount) => {
    setAmountToAdd(amount.value)
  }

  return (
    <article className={`${DIRECTION} flex items-center mb-40`}>
      <div className="w-7/12">
        <span className={`${NEW} text-orange-own text-sm tracking-2.5 mb-4`}>
          NEW PRODUCT
        </span>
        <h2 className="w-5/12 uppercase text-4xl font-bold mb-8">
          {product.name}
        </h2>
        <p className="w-7/12 text-sm text-black opacity-50 mb-10">
          {product.description}
        </p>
        <div className={addToCard ? 'hidden' : 'block'}>
          <Button solid={true} name="See Product" onClick={changeRoute} />
        </div>
        <div className={addToCard ? 'flex gap-8' : 'hidden'}>
          <InputAmount handleChange={getProductsToCart} />
          <Button
            solid={true}
            name="ADD TO CART"
            onClick={() =>
              addProductToShoppingCart({
                productId: product.id,
                amount: amountToAdd,
              })
            }
          />
        </div>
      </div>
      <div className="w-6/12">
        <img
          className={`${PADDING_IMAGE}`}
          src={`${product.image?.desktop}`}
          alt={product.name}
        />
      </div>
    </article>
  )
}
