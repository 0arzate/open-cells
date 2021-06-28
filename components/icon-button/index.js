export default function IconButton({
  name = 'nombre',
  iconName = 'fas fa-chevron-right',
  margin,
  iconSize = '12px',
}) {
  return (
    <button
      className="inline-flex items-center uppercase text-black hover:text-orange-own text-opacity-50 hover:text-opacity-100"
      style={{ margin: margin }}
    >
      {name}
      <i
        className={`${iconName} text-orange-own ml-3`}
        style={{ fontSize: iconSize }}
      />
    </button>
  )
}
