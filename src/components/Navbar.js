import useCatalogues from '@hooks/useCatalogues'
import { useRouter } from 'next/dist/client/router'

import Link from 'next/link'

export default function Navbar() {
  const {} = useCatalogues()
  const router = useRouter()

  const isActive = (id) => {
    return router.asPath === id ? 'text-orange-own' : 'text-white'
  }

  return (
    <nav>
      <ul className="hidden lg:flex uppercase font-bold text-sm">
        <Link
          href="/"
          className={`${isActive(
            '/'
          )} mr-8 hover:text-orange-own transition-colors`}
        >
          Home
        </Link>
        <Link
          href="/catalogue/headphones"
          className={`${isActive(
            '/catalogue/headphones'
          )} mr-8 hover:text-orange-own transition-colors`}
        >
          HEADPHONES
        </Link>
        <Link
          href="/catalogue/speakers"
          className={`${isActive(
            '/catalogue/speakers'
          )} mr-8 hover:text-orange-own transition-colors`}
        >
          SPEAKERS
        </Link>
        <Link
          href="/catalogue/earphones"
          className={`${isActive(
            '/catalogue/earphones'
          )} hover:text-orange-own transition-colors`}
        >
          EARPHONES
        </Link>
      </ul>
    </nav>
  )
}
