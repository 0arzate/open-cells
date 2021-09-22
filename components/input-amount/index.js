import IconButton from 'components/icon-button'
import { useState } from 'react'

export default function InputAmount({ handleChange }) {
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount(amount + 1)
  }

  const decrease = () => {
    setAmount(amount - 1)
  }

  return (
    <div className="h-12 max-h-max flex items-center bg-gray-own max-w-max p-4 mr-8">
      <IconButton
        iconName="fas fa-minus"
        onlyIcon={true}
        onClick={decrease}
        active={amount > 1}
      />
      <input
        type="text"
        name="amountProducts"
        id="amountProducts"
        className="w-20 max-w-max text-center outline-none focus:outline-none"
        disabled
        value={amount}
        onChange={handleChange}
      />
      <IconButton
        iconName="fas fa-plus"
        onlyIcon={true}
        onClick={increase}
        active={true}
      />
    </div>
  )
}
