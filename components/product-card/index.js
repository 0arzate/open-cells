import Button from 'components/button'

export default function ProductCard({ Product = {} }) {
  return (
    <article>
      <div>
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
        <Button solid={true} />
      </div>
      <div>
        <img src={Product.img} alt={Product.name} />
      </div>
    </article>
  )
}
