import Select from './Select'
import { SIZE, QTY } from '../constant'
import { useState } from 'react'

const ShoeDetails = ({ shoe, onClickAdd }) => {
  const [form, setForm] = useState({ qty: null, size: null })
  return (
    <div className='flex flex-col lg:flex-row-reverse dark:text-white'>
      <div className='flex-1 lg:-mt-32 lg:ml-28 '>
        <div className='flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]'>
          <img className='animate-float' src={shoe.src} />
        </div>
      </div>

      <div className='flex-1 space-y-6'>
        <div className='text-5xl font-bold md:text-9xl '>{shoe.title}</div>
        <div className='font-medium md:text-xl dark:text-white'>
          {shoe.description}
        </div>
        <div className='flex space-x-4'>
          <div className='text-3xl font-extrabold md:text-6xl dark:text-white'>
            {shoe.price}$
          </div>
          <Select
            onChangeSelect={size => setForm({ ...form, size })}
            value={form.size}
            titles={'SIZE'}
            options={SIZE}
          />
          <Select
            onChangeSelect={qty => setForm({ ...form, qty })}
            value={form.qty}
            titles={'QTY'}
            options={QTY}
          />
        </div>
        <div className='space-x-10  '>
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className='bg-black  dark:text-black dark:bg-white btn-press-animation h-14 w-44 text-white hover:bg-gray-800 active:bg-gray-700'
          >
            Add to Bag
          </button>
          <a
            href='#'
            className='text-lg font-bold underline underline-offset-4 '
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  )
}

export default ShoeDetails
