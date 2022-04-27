import InputAmount from '@components/InputAmount'

export default function ProductCart() {
  return (
    <div className="h-[65px] flex items-center">
      <img
        className="max-w-[64px] mr-4"
        src="/img/product-xx59-headphones/desktop/image-product.jpg"
        alt="producto"
      />
      <div className="flex items-center justify-between w-full">
        <div className="text-sm w-max">
          <p className="font-bold mb-1">XX99 MK II</p>
          <p className="text-opacity-50">{`$ 2,999`}</p>
        </div>
        <InputAmount />
      </div>
    </div>
  )
}
