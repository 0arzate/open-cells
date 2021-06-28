export default function Button({
  name = 'nombre',
  solid = false,
  ghost = false,
  margin,
}) {
  const SOLID = solid ? 'bg-orange-own text-white hover:bg-orange-light' : ''
  const GHOST = ghost
    ? 'bg-white border border-black text-black hover:text-white hover:bg-black'
    : ''
  return (
    <button
      className={`${SOLID} ${GHOST} uppercase text-sm leading-7 font-bold py-4 text-center mb-4`}
      style={{
        minWidth: '160px',
        maxHeight: '48px',
        margin: margin,
      }}
    >
      {name}
    </button>
  )
}
