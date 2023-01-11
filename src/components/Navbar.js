import { useRouter } from 'next/dist/client/router'

import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  const isActive = (id) => {
    return router.asPath === id ? 'text-orange-own' : 'text-white'
  }

  return (
    <nav>
      <ul className="hidden lg:flex uppercase font-bold text-sm">
        <Link href="/">
          <a
            className={`${isActive(
              '/'
            )} mr-8 hover:text-orange-own transition-colors`}
          >
            Home
          </a>
        </Link>
        <Link href="/catalogue/headphones">
          <a
            className={`${isActive(
              '/catalogue/headphones'
            )} mr-8 hover:text-orange-own transition-colors`}
          >
            HEADPHONES
          </a>
        </Link>
        <Link href="/catalogue/speakers">
          <a
            className={`${isActive(
              '/catalogue/speakers'
            )} mr-8 hover:text-orange-own transition-colors`}
          >
            SPEAKERS
          </a>
        </Link>
        <Link href="/catalogue/earphones">
          <a
            className={`${isActive(
              '/catalogue/earphones'
            )} hover:text-orange-own transition-colors`}
          >
            EARPHONES
          </a>
        </Link>
      </ul>
    </nav>
  )
}
