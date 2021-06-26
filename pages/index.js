import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center mb-5">
        <h1 className="text-4xl">
          np Welcome to{' '}
          <a href="https://nextjs.org" className="text-blue-600">
            Next.js!
          </a>
        </h1>
      </main>
      <footer className="flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="__blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
