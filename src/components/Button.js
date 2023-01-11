import { useRouter } from 'next/router'
import { EMPTY_FUNCTION, EMPTY_STRING } from 'utils/constants'

export default function Button({
  name = 'nombre',
  solid = false,
  ghost = false,
  full,
  children,
  bgColor = 'bg-orange-own',
  margin,
  href,
  isCenter,
  onClick = EMPTY_FUNCTION,
  disabled,
}) {
  const { push } = useRouter()
  const IS_FULL = full ? 'w-full' : EMPTY_STRING

  const SOLID = solid
    ? `${bgColor} text-white hover:bg-opacity-80`
    : EMPTY_STRING

  const GHOST = ghost
    ? 'bg-transparent border border-black text-black hover:text-white hover:bg-black'
    : EMPTY_STRING

  const DISABLED = disabled ? 'bg-slate-200 text-slate-500' : EMPTY_STRING

  const CENTER = isCenter ? 'mx-auto block' : ''

  const handleClick = () => {
    if (href) {
      push(href)
    }

    onClick()
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={`${SOLID} ${GHOST} ${IS_FULL} ${DISABLED} ${CENTER} uppercase text-sm font-bold py-4 text-center mb-4 transition-colors`}
      onClick={handleClick}
      style={{
        minWidth: '160px',
        maxHeight: '48px',
        margin: margin,
      }}
    >
      {children || name}
    </button>
  )
}
