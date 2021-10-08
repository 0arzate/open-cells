import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { URL_API } from '@services/path'

export default function useRequest() {
  const [data, setData] = useState([])
  const { query, push } = useRouter()

  const getData = async () => {
    const product = query.id

    if (!product) {
      return false
    }

    try {
      const request = await fetch(URL_API + product)
      const response = await request.json()

      if (response) {
        setData(response)
      } else {
        console.error('Error en request (response)')
        push('/')
      }
    } catch (error) {
      console.error('Error en el request (fetch):', error.message)
      push('/')
    }
  }

  useEffect(() => {
    getData()
  }, [query])

  return { data }
}
