export default function IconButton({
  name = 'nombre',
  iconName = 'fas fa-chevron-right',
  margin,
  iconSize = '12px',
  onClick,
}) {
  return (
    <button
      className="inline-flex items-center uppercase text-black hover:text-orange-own text-opacity-50 hover:text-opacity-100"
      style={{ margin: margin }}
      onClick={onClick}
    >
      {name}
      <i
        className={`${iconName} text-orange-own ml-3`}
        style={{ fontSize: iconSize }}
        aria-hidden="true"
      />
    </button>
  )
}
