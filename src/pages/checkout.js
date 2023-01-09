import { useState } from 'react'
import { useRouter } from 'next/router'

import CheckoutForm from '@components/forms/CheckoutForm'
import IconButton from '@components/IconButton'
import Layout from '@components/Layout'
import Summary from '@components/Summary'
import Modal from '@components/Modal'
import CheckoutSuccess from '@components/CheckoutSuccess'

export default function Checkout() {
  const [open, setOpen] = useState(false)
  const { back } = useRouter()

  return (
    <Layout bgColor="bg-[#F2F2F2]">
      <div className="w-10/12 mx-auto pt-[79px] pb-[143px]">
        <IconButton
          name="Go back"
          iconName=""
          onClick={() => back()}
          margin="0px 0px 37px 0px"
        />
        <div className="grid grid-cols-[68%_32%] gap-8">
          <CheckoutForm />
          <Summary handleContinue={() => setOpen(true)} />
        </div>
      </div>
      <Modal open={open} modalOverEverything>
        <CheckoutSuccess />
      </Modal>
    </Layout>
  )
}
