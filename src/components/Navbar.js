import useCatalogues from '@hooks/useCatalogues'
import { useRouter } from 'next/dist/client/router'

import Link from 'next/link'

export default function Navbar() {
  const { catalogues } = useCatalogues()
  const router = useRouter()

  const isActive = (currentPath) => {
    return router.asPath === currentPath ? 'text-orange-own' : 'text-white'
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
        {catalogues.map((catalog) => {
          const { name, id } = catalog

          return (
            <Link
              key={id}
              href={`/catalogue/${name}`}
              className={`${isActive(
                `/catalogue/${name}`
              )} mr-8 hover:text-orange-own transition-colors`}
            >
              {name}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
