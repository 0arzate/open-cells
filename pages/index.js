import Header from 'components/header'

export default function Home() {
  return (
    <>
      <main className="bg-gray-own min-h-screen max-h-screen font-manrope">
        <Header />
        <div>
          <h1 className="text-4xl text-black-own">
            Welcome to{' '}
            <a
              href="https://nextjs.org"
              className="text-orange-light font-bold"
            >
              Next.js!
            </a>
          </h1>
        </div>
      </main>
    </>
  )
}
