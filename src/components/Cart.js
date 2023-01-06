import ProductCart from '@components/ProductCart'
import Button from '@components/Button'
import { useShoppingCart } from '@hooks/useShoppingCart'
import { Fragment } from 'react'

export default function Cart({ isOpen }) {
  const { products, error, removeAllProductsToShoppingCart } =
    useShoppingCart(isOpen)
  const hasProductsInCart = products.length > 0
  console.log({ products, error })

  return (
    <div className="p-8 bg-white w-[378px] absolute top-[129px] right-[165px] rounded-lg">
      <div className="flex items-center justify-between text-black mb-8">
        <p className="text-lg font-bold">{`CART ( ${products.length} )`}</p>
        <p
          className="text-orange-own text-sm cursor-pointer hover:underline"
          onClick={removeAllProductsToShoppingCart}
        >
          Remove all
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {error && !hasProductsInCart ? (
          <p className="text-center">{error}</p>
        ) : (
          products.map((product) => (
            <ProductCart key={product.id} {...product} />
          ))
        )}
      </div>
      {hasProductsInCart ? (
        <Fragment>
          <div className="flex items-center justify-between my-8">
            <p className="text-sm text-opacity-50">TOTAL</p>
            <p className="font-bold text-lg">{`$ 5,396`}</p>
          </div>
          <Button solid href="/checkout" full disabled={!hasProductsInCart}>
            Checkout
          </Button>
        </Fragment>
      ) : null}
    </div>
  )
}
