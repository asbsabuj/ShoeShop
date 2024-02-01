const SideBar = ({ children, isOpen, onClickCloseBtn, newPrice }) => {
  return (
    <div>
      <div
        className={`dark:bg-night-default overflow-scroll fixed z-50 h-full w-full bg-white right-0 top-0 md:w-[50%] lg:w-[35%] transform translation duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClickCloseBtn}
          className='absolute p-4 text-black font-bold right-4 mt-4 dark:text-white '
        >
          X
        </button>
        {children}
        <div className='font-bold text-2xl right-20 fixed'>
          Total Price: {newPrice}
        </div>
      </div>

      {isOpen && (
        <div className='overflow-hidden fixed left-0 top-0 z-20 w-full h-full bg-black opacity-50' />
      )}
    </div>
  )
}

export default SideBar
