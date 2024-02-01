import CartItem from './CartItem'

const Cart = ({ cartItems, onClickRemove }) => {
  return (
    <div>
      <h2 className='p-8 font-bold text-4xl mb-6 dark:text-white'>Cart</h2>
      <ul className='space-y-4'>
        {cartItems.map(cartItem => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickRemove={onClickRemove} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
