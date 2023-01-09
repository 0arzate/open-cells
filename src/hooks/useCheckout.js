import { useEffect, useState } from 'react'
import { METHOD_GET } from 'utils/constants'
import { request } from 'utils/request'

export const useCheckout = () => {
  const [grandTotal, setGrandTotal] = useState({})

  const getGrandTotal = async () => {
    const response = await request({
      endpoint: 'checkout/grand-total',
      method: METHOD_GET,
    })

    setGrandTotal(response.data)

    console.log({ response })
  }

  useEffect(() => {
    getGrandTotal()
  }, [])

  return { grandTotal }
}
