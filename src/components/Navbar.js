import { useRouter } from 'next/dist/client/router'

import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  const isActive = (id) => {
    return router.asPath === id ? 'text-orange-own' : 'text-white'
  }

  return (
    <nav>
      <ul className="flex uppercase font-bold text-sm">
        <Link href="/">
          <a
            className={`${isActive(
              '/'
            )} mr-8 hover:text-orange-own transition-colors`}
          >
            Home
          </a>
        </Link>
        <Link href="/headphones">
          <a
            className={`${isActive(
              '/headphones'
            )} mr-8 hover:text-orange-own transition-colors`}
          >
            HEADPHONES
          </a>
        </Link>
        <Link href="/speakers">
          <a
            className={`${isActive(
              '/speakers'
            )} mr-8 hover:text-orange-own transition-colors`}
          >
            SPEAKERS
          </a>
        </Link>
        <Link href="/earphones">
          <a
            className={`${isActive(
              '/earphones'
            )} hover:text-orange-own transition-colors`}
          >
            EARPHONES
          </a>
        </Link>
      </ul>
    </nav>
  )
}
