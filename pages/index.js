import Header from 'components/header'
import Button from 'components/button'
import IconButton from 'components/icon-button'
import InputText from 'components/input-text'

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
        <div>
          <Button solid={true} />
          <Button ghost={true} />
          <IconButton />
          <InputText fieldLabel="input" placeholder="placeholder" />
        </div>
      </main>
    </>
  )
}
