import InputAmount from '@components/InputAmount'
import { DECREASE, INCREASE } from 'utils/constants'

export default function ProductCart({
  read,
  price,
  image,
  id,
  shortName,
  amountOnCart,
  handleRemoveProduct,
  handleAddProduct,
}) {
  const setAmountToShoppingCart = (amount) => {
    if (amount.type === DECREASE) {
      return handleRemoveProduct({ productId: id })
    }

    if (amount.type === INCREASE) {
      return handleAddProduct({ productId: id })
    }
  }

  return (
    <div className="h-[65px] flex items-center">
      <img className="max-w-[64px] mr-4" src={image.desktop} alt="producto" />
      <div className="flex items-center justify-between w-full">
        <div className="text-sm w-max">
          <p className="font-bold mb-1">{shortName}</p>
          <p className="text-opacity-50">{`$${price}`}</p>
        </div>
        {read ? (
          <p className="font-bold text-opacity-50 text-black">{`x${amountOnCart}`}</p>
        ) : (
          <InputAmount
            currentAmount={amountOnCart}
            handleChange={setAmountToShoppingCart}
          />
        )}
      </div>
    </div>
  )
}
