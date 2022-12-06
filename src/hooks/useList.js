import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { URL } from 'utils/constants'

export default function useRequest() {
  const [products, setProducts] = useState([])
  const { query, push } = useRouter()

  const getData = async () => {
    const product = query.id

    if (!product) {
      return false
    }

    try {
      const request = await fetch(URL + 'products/' + product)
      const response = await request.json()

      if (response.success) {
        setProducts(response.data)
      }
    } catch (error) {
      console.error('Error en el request (fetch):', error.message)
      push('/')
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return { products }
}
