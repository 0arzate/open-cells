export default function IconButton({
  name = 'nombre',
  iconName = 'fas fa-chevron-right',
  margin,
  iconSize = '12px',
  onlyIcon = false,
  onClick,
  active = true,
}) {
  const isActive = active ? '' : 'text-opacity-25'
  const isOnlyIcon = onlyIcon ? 'hidden' : 'inline mr-3'

  return (
    <button
      className="inline-flex items-center uppercase text-black hover:text-orange-own text-opacity-50 hover:text-opacity-100"
      style={{ margin: margin }}
      onClick={onClick}
      disabled={!active}
    >
      <span className={isOnlyIcon}>{name}</span>
      <i
        className={`${iconName} ${
          onlyIcon ? 'text-black-light' : 'text-orange-own'
        } ${isActive}`}
        style={{ fontSize: iconSize }}
        aria-hidden="true"
      />
    </button>
  )
}
