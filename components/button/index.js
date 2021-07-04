export default function Button({
  name = 'nombre',
  solid = false,
  ghost = false,
  bgColor = 'bg-orange-own',
  margin,
  onClick,
}) {
  const SOLID = solid ? `${bgColor} text-white hover:bg-opacity-80` : ''
  const GHOST = ghost
    ? 'bg-transparent border border-black text-black hover:text-white hover:bg-black'
    : ''
  return (
    <button
      className={`${SOLID} ${GHOST} uppercase text-sm leading-7 font-bold py-4 text-center mb-4`}
      style={{
        minWidth: '160px',
        maxHeight: '48px',
        margin: margin,
      }}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
