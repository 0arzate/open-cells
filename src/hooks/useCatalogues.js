import { useEffect, useState } from 'react'
import { EMPTY_STRING } from 'utils/constants'
import { request } from 'utils/request'

export default function useCatalogues() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(EMPTY_STRING)
  const [catalogues, setCatalogues] = useState()

  const getCatalogues = async () => {
    setError(EMPTY_STRING)
    setLoading(true)

    try {
      const { data, success, error } = await request({
        endpoint: '/categories',
      })

      if (error) throw new Error(error)
      setCatalogues(data)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  useEffect(() => {
    getCatalogues()
  }, [])

  return { loading, error, catalogues }
}
