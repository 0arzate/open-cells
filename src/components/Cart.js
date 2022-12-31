import ProductCart from '@components/ProductCart'
import Button from '@components/Button'

export default function Cart() {
  const currentProducts = 3

  return (
    <div className="p-8 bg-white w-[378px] absolute top-[129px] right-[165px] rounded-lg">
      <div className="flex items-center justify-between text-black mb-8">
        <p className="text-lg font-bold">{`CART ( ${currentProducts} )`}</p>
        <p className="text-orange-own text-sm cursor-pointer hover:underline">
          Remove all
        </p>
      </div>
      <div>
        <ProductCart />
      </div>
      <div className="flex items-center justify-between my-8">
        <p className="text-sm text-opacity-50">TOTAL</p>
        <p className="font-bold text-lg">{`$ 5,396`}</p>
      </div>
      <Button solid={true} href="/checkout" full>
        Checkout
      </Button>
    </div>
  )
}
