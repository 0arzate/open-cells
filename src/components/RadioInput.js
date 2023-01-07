export default function RadioInput({
  value = 'emoney',
  onChange,
  options = [],
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((option) => (
        <div
          key={option.id}
          className="flex items-center border border-orange-own rounded-lg px-4 py-5 min-w-[300px]"
        >
          <input
            className="mr-6 accent-orange-own w-5 h-5"
            type="radio"
            name={option.name}
            value={option.name}
            defaultChecked={value === option.name}
            onChange={onChange}
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  )
}
