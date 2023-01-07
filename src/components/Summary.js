import { useCheckout } from '@hooks/useCheckout'
import { useShoppingCart } from '@hooks/useShoppingCart'
import { USDFormat } from 'utils/currencyUtils'
import Button from './Button'
import ProductCart from './ProductCart'

export default function Summary({ handleContinue }) {
  const { products, totalCost } = useShoppingCart()
  const { grandTotal } = useCheckout()

  return (
    <div className="p-8 min-w-[350px] bg-white h-min">
      <h2 className="font-bold text-lg mb-8">summary</h2>
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <ProductCart key={product.id} read {...product} />
        ))}
      </div>
      <div className="my-8 grid grid-cols-1 gap-6"></div>
      <div className="grid grid-cols-1 gap-2 font-medium text-[15px] mb-6">
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">TOTAL</p>
          <p className="text-lg font-bold">{USDFormat(totalCost)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">SHIPPING</p>
          <p className="text-lg font-bold">
            {USDFormat(grandTotal.shippingCost)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">VAT (INCLUDED)</p>
          <p className="text-lg font-bold">{USDFormat(grandTotal.vat)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-black text-opacity-50">GRAND TOTAL</p>
        <p className="text-lg font-bold text-orange-own">
          {USDFormat(grandTotal.grandTotal)}
        </p>
      </div>
      <Button solid full onClick={handleContinue}>
        CONTINUE & PAY
      </Button>
    </div>
  )
}
