import Link from 'next/link'
import { useRouter } from 'next/router'
import { EMPTY_STRING } from 'utils/constants'

export default function Button({
  name = 'nombre',
  solid = false,
  ghost = false,
  full,
  children,
  bgColor = 'bg-orange-own',
  margin,
  href,
  onClick,
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

  const moveTo = () => {
    push(href)
  }

  const handleClick = href ? moveTo : onClick

  return (
    <button
      disabled={disabled}
      type="button"
      className={`${SOLID} ${GHOST} ${IS_FULL} uppercase text-sm font-bold py-4 text-center mb-4 transition-colors`}
      onClick={handleClick}
      style={{
        minWidth: '160px',
        maxHeight: '48px',
        margin: margin,
      }}
    >
      {href ? (
        <Link href={href}>
          <span>{children || name}</span>
        </Link>
      ) : (
        children || name
      )}
    </button>
  )
}
