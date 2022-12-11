import ProductCard from '@components/ProductCard'
import useProducts from '@hooks/useProducts'

export default function ProductList() {
  const { products } = useProducts()

  const renderProduct = () =>
    products.map((product, key) => {
      const reverse = (key + 1) % 2 === 0
      return (
        <ProductCard
          key={product.id}
          product={product}
          reverse={reverse}
          isNew={reverse}
        />
      )
    })

  return (
    <section className="pt-40">
      <div className="w-10/12 2xl:w-8/12 mx-auto">{renderProduct()}</div>
    </section>
  )
}
