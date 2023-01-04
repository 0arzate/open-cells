import { useEffect, useState } from 'react'
import { EMPTY_STRING, METHOD_POST } from 'utils/constants'
import { request } from 'utils/request'

export function useShoppingCart(isOpenShoppingCart) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(EMPTY_STRING)

  const getProductsToShoppingCart = async () => {
    const productsInCart = await request({
      endpoint: 'shopping-cart/',
    })

    if (productsInCart.error) {
      return setError(productsInCart.message)
    }

    setProducts(productsInCart.data)
  }

  const addProductToShoppingCart = async (productId) => {
    const response = await request({
      method: METHOD_POST,
      endpoint: `shopping-cart/${productId}`,
    })

    return response
  }

  const removeProductToShoppingCart = (product) => {}

  useEffect(() => {
    getProductsToShoppingCart()
  }, [isOpenShoppingCart])

  return {
    products,
    addProductToShoppingCart,
    removeProductToShoppingCart,
    error,
  }
}
