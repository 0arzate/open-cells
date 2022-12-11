import Button from './Button'

export default function CheckoutSuccess() {
  return (
    <div className="p-12 bg-white max-w-[540px] rounded-lg">
      <img src="/img/icons/check.png" alt="check" />
      <h2 className="font-bold mb-6 mt-8 text-3xl text-black">
        THANK YOU <br /> FOR YOUR ORDER
      </h2>
      <p className="mb-8 text-sm text-black text-opacity-50">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex items-center mb-12">
        <div className="bg-[#F1F1F1] p-6">
          <div className="flex justify-between w-full">
            <img
              className="max-w-[50px] mr-4"
              src="/img/product-xx59-headphones/desktop/image-product.jpg"
              alt="producto"
            />
            <div className="text-sm w-max">
              <p className="font-bold mb-1">XX99 MK II</p>
              <p className="text-opacity-50">{`$ 2,999`}</p>
            </div>
            <p className="font-bold text-sm text-opacity-50 ml-10 text-black">{`x1`}</p>
          </div>
          <p className="text-xs text-center mt-3 pt-3 border-t border-black border-opacity-10 text-black text-opacity-50">
            and 2 other item(s)
          </p>
        </div>
        <div className="bg-black py-10 pl-8 pr-16 text-white h-full">
          <p className="text-sm text-white text-opacity-50">GRAND TOTAL</p>
          <p className="text-lg font-bold">$ 5,446</p>
        </div>
      </div>
      <Button full solid href="/">
        BACK TO HOME
      </Button>
    </div>
  )
}
