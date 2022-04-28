import InputText from '@components/InputText'
import RadioInput from '@components/RadioInput'

const paymentMethods = [
  { id: 1, name: 'emoney', label: 'e-Money' },
  { id: 2, name: 'cash', label: 'Cash on Delivery' },
]

export default function CheckoutForm() {
  return (
    <form className="text-black p-12 py-14 bg-white">
      <h2 className="mb-10 text-3xl font-bold">CHECKOUT</h2>
      <h3 className="text-orange-own text-sm mb-4 font-bold"></h3>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-14">
        <InputText fieldLabel="Name" name="name" />
        <InputText fieldLabel="Email Address" name="email" />
        <InputText fieldLabel="Phone Number" name="phone" />
      </div>
      <h3 className="text-orange-own text-sm mb-4 font-bold">shipping info</h3>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-14">
        <div className="col-span-2">
          <InputText fieldLabel="Address" name="address" />
        </div>
        <InputText fieldLabel="ZIP Code" name="cp" />
        <InputText fieldLabel="Country" name="country" />
        <InputText fieldLabel="City" name="city" />
      </div>
      <h3 className="text-orange-own text-sm mb-4 font-bold">
        payment details
      </h3>
      <div className="flex justify-between mb-8">
        <p className="text-xs font-bold">Payment Method</p>
        <RadioInput options={paymentMethods} />
      </div>
      <div className="flex">
        <img src="/img/icons/shape.png" alt="payment method" />
        <p className="font-medium text-black text-opacity-50 ml-8">
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    </form>
  )
}
