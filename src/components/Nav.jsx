import { TbShoppingBag } from 'react-icons/tb'
import { RxHamburgerMenu } from 'react-icons/rx'
import NikeLogo from '../assets/nike-logo.svg?react'
import { useState } from 'react'

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact']

const Nav = ({ onClickCartBtn }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  return (
    <nav className='z-10 relative flex flex-wrap justify-between items-center'>
      <a href='#'>
        <NikeLogo className='h-20 w-20 dark:fill-white' />
      </a>
      <button
        onClick={() => setIsMobileMenu(!isMobileMenu)}
        className='lg:hidden dark:bg-gray-400 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 p-2 rounded-lg'
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div className={`w-full lg:w-auto lg:block ${!isMobileMenu && 'hidden'}`}>
        <ul className='lg:dark:text-white lg:space-x-8 bg-gray-50 lg:bg-transparent border border-gray-100 lg:border-none rounded-lg p-4 text-lg flex flex-col lg:flex-row'>
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:bg-transparent lg:hover:text-blue-500 px-3 py-2 cursor-pointer rounded  ${
                  i === 0
                    ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 '
                    : 'hover:bg-blue-100'
                } ${(i === 3 || i === 4) && 'lg:text-white'}`}
                key={route}
              >
                {route}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='fixed left-4 bottom-4 lg:static lg:mr-8'>
        <div
          onClick={onClickCartBtn}
          className='flex-center btn-press-animation cursor-pointer bg-white shadow-md h-12 w-12 rounded-full'
        >
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  )
}

export default Nav
