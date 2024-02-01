import { twMerge } from 'tw-merge'

const Select = ({ titles, options, className, value, onChangeSelect }) => {
  return (
    <div>
      <select
        onChange={e => onChangeSelect(e.target.value)}
        value={value || ''}
        className={twMerge(
          `border border-gray-300 p-4 w-24 font-bold dark:text-black ${className}`,
        )}
      >
        <option className=''>{titles}</option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
