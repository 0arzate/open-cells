import { useRouter } from 'next/dist/client/router'
import { URL_IMAGE } from 'services/path'

import Button from 'components/button'

export default function ProductCard({
  margin = '0px 0px 160px 0px',
  isNew = false,
  reverse = false,
  product = {},
}) {
  const router = useRouter()
  const NEW = isNew ? 'inline-block' : 'hidden'
  const DIRECTION = reverse ? 'flex-row-reverse' : ''
  const PADDING_IMAGE = reverse ? 'pr-48' : 'pl-48'

  const changeRoute = () => {
    router.push(`/product/${product.slug}`)
  }

  return (
    <article
      className={`${DIRECTION} flex items-center`}
      style={{
        margin: margin,
      }}
    >
      <div className="w-7/12">
        <span
          className={`${NEW} text-orange-own text-2sm leading-2md tracking-2.5 mb-4`}
        >
          NEW PRODUCT
        </span>
        <h2 className="w-5/12 uppercase text-4xl leading-5xl font-bold mb-8">
          {product.name}
        </h2>
        <p className="w-7/12 text-2sm leading-lg text-black opacity-50 mb-10">
          {product.description}
        </p>
        <Button solid={true} name="See Product" onClick={changeRoute} />
      </div>
      <div className="w-6/12">
        <img
          className={`${PADDING_IMAGE}`}
          src={URL_IMAGE + product.image.desktop}
          alt={product.name}
        />
      </div>
    </article>
  )
}
