import CheckoutForm from '@components/forms/CheckoutForm'
import Layout from '@components/Layout'

export default function Checkout() {
  return (
    <Layout bgColor="bg-[#F2F2F2]">
      <div className="w-10/12 mx-auto pt-[79px] pb-[143px]">
        <CheckoutForm />
      </div>
    </Layout>
  )
}
