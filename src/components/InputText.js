import { useState } from 'react'

export default function InputText({
  fieldLabel,
  id,
  name,
  value,
  placeholder,
  margin,
  onChange = () => {},
}) {
  const [error, setError] = useState()
  const ERROR = error ? 'text-red-own' : 'text-black'
  const ERROR_INPUT = error
    ? 'border-2 border-red-own'
    : 'border border-gray-light focus:border-orange-own'

  const validation = (e) => {
    const { name } = e.target

    if (name === 'email') {
      setError('Wrong format')
    }
    onChange(e)
  }

  return (
    <div
      className="flex flex-col"
      style={{ minWidth: '309px', margin: margin }}
    >
      <label
        className={`${ERROR} inline-flex justify-between items-center font-bold text-sm mb-2`}
        htmlFor={id}
      >
        {fieldLabel}
        <span className="font-extralight inline-block">{error}</span>
      </label>
      <input
        className={`${ERROR_INPUT} font-bold rounded-xl outline-none text-black placeholder-black placeholder-opacity-40 pl-6 py-4`}
        style={{ fontSize: '14px', lineHeight: '19px', minHeight: '56px' }}
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={validation}
      />
    </div>
  )
}
