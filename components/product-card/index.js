import Button from 'components/button'

export default function ProductCard({ product = {} }) {
  return (
    <article>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Button solid={true} />
      </div>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
    </article>
  )
}
