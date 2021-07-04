import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul className="flex uppercase font-bold text-sm leading-10">
        <Link href="/">
          <a className="mr-9">Home</a>
        </Link>
        <Link href="/headphones">
          <a className="mr-9">HEADPHONES</a>
        </Link>
        <Link href="/speakers">
          <a className="mr-9">SPEAKERS</a>
        </Link>
        <Link href="/earphones">
          <a>EARPHONES</a>
        </Link>
      </ul>
    </nav>
  )
}
