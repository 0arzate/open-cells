import Header from 'components/header'
import Footer from 'components/footer'
import Modal from 'components/modal'
import { useState } from 'react'

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
        <p>Modal</p>
      </Modal>
    </section>
  )
}
