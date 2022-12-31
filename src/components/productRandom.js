import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import Button from '@components/Button'
import { URL } from 'utils/constants'

export default function ProductRandom() {
  const { push } = useRouter()
  const [products, setProducts] = useState([])

  const getData = async () => {
    const response = await fetch(URL + 'products/')
    const data = await response.json()
    setProducts(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <div className="flex w-10/12 2xl:w-8/12 mx-auto">
        {products.map((product, key) => {
          if ((key + 1) % 2 === 0) {
            return (
              <div key={product.id} className="flex flex-col items-center">
                <img
                  className="w-11/12"
                  src={product.image.desktop}
                  alt={product.name}
                />
                <h2 className="font-bold text-sm mb-8 mt-10">{product.name}</h2>
                <Button
                  name="See Product"
                  solid={true}
                  onClick={() => push(`/product/${product.id}`)}
                />
              </div>
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
