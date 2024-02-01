import { useEffect, useState } from 'react'
import {
  ShoeDetails,
  Nav,
  NewArrivalsSection,
  SideBar,
  Cart,
} from './components'
import { SHOE_LIST } from './constant'
import { BiSun, BiMoon } from 'react-icons/bi'

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [CurrentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode')
    if (isDarkMode === 'true') {
      window.document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark')
    localStorage.setItem(
      'isDarkMode',
      window.document.documentElement.classList.contains('dark'),
    )
  }

  const addToCart = (product, qty, size) => {
    let totalPrice = 0
    if (qty && size) {
      const updatedCartItems = [...cartItems]
      const existingItemIndex = cartItems.findIndex(
        item => item.product.id === product.id,
      )
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty
        updatedCartItems[existingItemIndex].size = size
        totalPrice += product.price * qty
      } else {
        updatedCartItems.push({ product, qty, size })
        totalPrice += product.price
      }
      setCartItems(updatedCartItems)

      const calculateTotal = item => {
        return item.product.price * qty
      }

      const grandTotal = updatedCartItems.reduce(
        total,
        item => total + calculateTotal(item),
        0,
      )

      setTotalPrice(grandTotal)
    }
  }

  const removeFromCart = product => {
    const updatedCartItems = [...cartItems]

    const existingItemIndex = cartItems.findIndex(
      item => item.product.id === product.id,
    )
    updatedCartItems.splice(existingItemIndex, 1)
    setCartItems(updatedCartItems)
  }

  return (
    <div className='p-10 xl:px-24 animate-fadeIn dark:bg-night-default'>
      <Nav onClickCartBtn={() => setIsSideBarOpen(true)} />
      <ShoeDetails shoe={CurrentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickNewShoe={setCurrentShoe} />
      <SideBar
        isOpen={isSideBarOpen}
        onClickCloseBtn={() => setIsSideBarOpen(false)}
        newPrice={totalPrice}
      >
        <Cart cartItems={cartItems} onClickRemove={removeFromCart} />
      </SideBar>
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={toggleDarkMode}
          className='bg-night-50 px-4 py-2 shadow-lg text-white rounded-full dark:bg-white dark:text-night-default'
        >
          <BiSun className='hidden dark:block' />
          <BiMoon className='dark:hidden' />
        </button>
      </div>
    </div>
  )
}

export default App
