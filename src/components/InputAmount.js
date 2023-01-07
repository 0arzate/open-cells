import { useEffect, useState } from 'react'

import IconButton from '@components/IconButton'
import { DECREASE, EMPTY_FUNCTION, INCREASE, _0 } from 'utils/constants'

export default function InputAmount({
  handleChange = EMPTY_FUNCTION,
  currentAmount = _0,
}) {
  const [amount, setAmount] = useState(0)

  const increase = () => {
    setAmount((currentValue) => {
      const newValue = currentValue + 1
      handleChange({ type: INCREASE, value: newValue })
      return newValue
    })
  }

  const decrease = () => {
    setAmount((currentValue) => {
      const newValue = currentValue - 1
      handleChange({ type: DECREASE, value: newValue })
      return newValue
    })
  }

  useEffect(() => {
    setAmount(currentAmount)
  }, [currentAmount])

  return (
    <div className="h-12 max-h-max flex items-center bg-gray-own max-w-max p-4">
      <IconButton
        iconName="fas fa-minus"
        onlyIcon={true}
        onClick={decrease}
        active={amount > 0}
      />
      <input
        type="text"
        name="amountProducts"
        id="amountProducts"
        className="w-20 max-w-max text-center outline-none focus:outline-none"
        disabled
        value={amount}
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
