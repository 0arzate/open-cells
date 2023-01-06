import { useEffect, useState } from 'react'
import { EMPTY_STRING, METHOD_DELETE, METHOD_POST, _0 } from 'utils/constants'
import { request } from 'utils/request'

export function useShoppingCart(isOpenShoppingCart) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(EMPTY_STRING)

  const getProductsToShoppingCart = async () => {
    setError(EMPTY_STRING)
    const productsInCart = await request({
      endpoint: 'shopping-cart/',
    })

    if (productsInCart.error) {
      setError(productsInCart.message)
    }

    setProducts(productsInCart.data)
  }

  const addProductToShoppingCart = async ({ productId, amount = _0 }) => {
    const response = await request({
      method: METHOD_POST,
      endpoint: `shopping-cart/${productId}`,
      body: {
        amount,
      },
    })

    return response
  }

  const removeProductToShoppingCart = async ({ productId, amount = _0 }) => {
    const response = await request({
      method: METHOD_DELETE,
      endpoint: `shopping-cart/${productId}`,
      body: {
        amount,
      },
    })

    return response
  }

  const removeAllProductsToShoppingCart = async () => {
    const response = await request({
      method: METHOD_DELETE,
      endpoint: 'shopping-cart/delete-all-products',
    })

    getProductsToShoppingCart()

    return response
  }

  useEffect(() => {
    getProductsToShoppingCart()
  }, [isOpenShoppingCart])

  return {
    products,
    addProductToShoppingCart,
    removeProductToShoppingCart,
    removeAllProductsToShoppingCart,
    error,
  }
}
