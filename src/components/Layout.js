import { useState } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Modal from '@components/Modal'
import Cart from '@components/Cart'

export default function Layout({ children }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <section className="bg-transparent min-h-screen max-h-screen font-manrope">
      <Header
        setOpenModal={() => setOpenModal(!openModal)}
        openModal={setOpenModal}
      />
      {children}
      <Footer />
      <Modal open={openModal} setOpen={() => setOpenModal(!openModal)}>
        <Cart />
      </Modal>
    </section>
  )
}
