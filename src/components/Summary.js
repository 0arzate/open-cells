import Button from './Button'
import ProductCart from './ProductCart'

export default function Summary({ handleContinue }) {
  return (
    <div className="p-8 min-w-[350px] bg-white h-min">
      <h2 className="font-bold text-lg">summary</h2>
      <div className="my-8 grid grid-cols-1 gap-6">
        <ProductCart read />
        <ProductCart read />
        <ProductCart read />
      </div>
      <div className="grid grid-cols-1 gap-2 font-medium text-[15px] mb-6">
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">TOTAL</p>
          <p className="text-lg font-bold">{`$ 5,396`}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">SHIPPING</p>
          <p className="text-lg font-bold">{`$ 50`}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-opacity-50">VAT (INCLUDED)</p>
          <p className="text-lg font-bold">{`$ 1,079`}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-black text-opacity-50">GRAND TOTAL</p>
        <p className="text-lg font-bold text-orange-own">{`$ 5,446`}</p>
      </div>
      <Button solid full onClick={handleContinue}>
        CONTINUE
      </Button>
    </div>
  )
}
