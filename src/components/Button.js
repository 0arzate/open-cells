export default function Button({
  name = 'nombre',
  solid = false,
  ghost = false,
  full,
  children,
  bgColor = 'bg-orange-own',
  margin,
  onClick,
}) {
  const isFull = full ? 'w-full' : ''
  const SOLID = solid ? `${bgColor} text-white hover:bg-opacity-80` : ''
  const GHOST = ghost
    ? 'bg-transparent border border-black text-black hover:text-white hover:bg-black'
    : ''
  return (
    <button
      className={`${SOLID} ${GHOST} ${isFull} uppercase text-sm font-bold py-4 text-center mb-4 transition-colors`}
      style={{
        minWidth: '160px',
        maxHeight: '48px',
        margin: margin,
      }}
      onClick={onClick}
    >
      {children || name}
    </button>
  )
}
