export default function SectionTitle({ title = 'titulo' }) {
  return (
    <div className="bg-black py-24">
      <div className="w-10/12 2xl:w-8/12 mx-auto uppercase font-bold text-4xl text-center text-white">
        <h2>{title}</h2>
      </div>
    </div>
  )
}
