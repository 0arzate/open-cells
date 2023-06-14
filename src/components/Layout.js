import { useState } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Layout({ children, bgColor = 'bg-transparent' }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <section className={`${bgColor} min-h-screen font-manrope`}>
      <Header
        setOpenModal={() => setOpenModal(!openModal)}
        openModal={setOpenModal}
      />
      {children}
      <Footer />
    </section>
  )
}
