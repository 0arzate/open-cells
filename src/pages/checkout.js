import { useRouter } from 'next/router'

import CheckoutForm from '@components/forms/CheckoutForm'
import IconButton from '@components/IconButton'
import Layout from '@components/Layout'
import Summary from '@components/Summary'

export default function Checkout() {
  const { back } = useRouter()

  return (
    <Layout bgColor="bg-[#F2F2F2]">
      <div className="w-10/12 mx-auto pt-[79px] pb-[143px]">
        <IconButton
          name="Go back"
          iconName=""
          onClick={() => back()}
          margin="91px 0px 37px 0px"
        />
        <div className="grid grid-cols-[68%_32%] gap-8">
          <CheckoutForm />
          <Summary />
        </div>
      </div>
    </Layout>
  )
}
