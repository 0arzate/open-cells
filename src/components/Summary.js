import { useShoppingCart } from '@hooks/useShoppingCart'
import { USDFormat } from 'utils/currencyUtils'
import Button from './Button'
import ProductCart from './ProductCart'

export default function Summary({ handleContinue }) {
  const { products, totalCost } = useShoppingCart()
  const shippingCost = 50
  const vat = 1079
  const grandTotal = shippingCost + vat + totalCost

  return (
    <div className="p-8 min-w-[350px] bg-white h-min">
      <h2 className="font-bold text-lg">summary</h2>
      {products.map((product) => (
        <ProductCart key={product.id} read {...product} />
      ))}
      <div className="my-8 grid grid-cols-1 gap-6"></div>
      <div className="grid grid-cols-1 gap-2 font-medium text-[15px] mb-6">
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">TOTAL</p>
          <p className="text-lg font-bold">{USDFormat(totalCost)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">SHIPPING</p>
          <p className="text-lg font-bold">{USDFormat(shippingCost)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">VAT (INCLUDED)</p>
          <p className="text-lg font-bold">{USDFormat(vat)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-black text-opacity-50">GRAND TOTAL</p>
        <p className="text-lg font-bold text-orange-own">
          {USDFormat(grandTotal)}
        </p>
      </div>
      <Button solid full onClick={handleContinue}>
        CONTINUE
      </Button>
    </div>
  )
}
