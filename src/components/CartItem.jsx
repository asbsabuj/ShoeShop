import { CiTrash } from 'react-icons/ci'
import Select from './Select'
import { QTY, SIZE } from '../constant'

const CartItem = ({ item: { product, qty, size }, onClickRemove }) => {
  return (
    <div className='dark:bg-night-default p-2 hover:bg-[#daffa2] cursor-pointer bg-gray-50 dark:hover:bg-gray-800'>
      <div className='space-x-2 flex'>
        <img className='h-24' src={product.src} />
        <div className='space-y-2'>
          <div className='font-bold dark:text-white'>{product.title}</div>
          <div className='text-gray-400 text-sm'>{product.description}</div>
        </div>
        <div className='font-bold dark:text-white'>{product.price}$</div>
      </div>

      <div className='flex justify-between pl-32 '>
        <div className='flex space-x-6'>
          <div>
            <div className='font-bold dark:text-white'> SIZE</div>
            <Select value={size} options={SIZE} className={'w-16 p-1'} />
          </div>
          <div>
            <div className='font-bold dark:text-white'>QTY</div>
            <Select value={qty} options={QTY} className={'w-16 p-1'} />
          </div>
        </div>

        <button onClick={() => onClickRemove(product)}>
          <CiTrash size={25} className='text-black dark:text-white' />
        </button>
      </div>
    </div>
  )
}

export default CartItem
