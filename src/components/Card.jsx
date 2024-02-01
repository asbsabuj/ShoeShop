const Card = ({ item, onClickNewCard }) => {
  return (
    <div
      onClick={() => onClickNewCard(item)}
      className={`${item.className} cursor-pointer max-w-xl transform hover:scale-105`}
    >
      <div className='p-8'>
        <div className='text-2xl font-bold'>{item.title}</div>
        <div className='font-semibold mt-10 underline underline-offset-4'>
          Shop Now +
        </div>
      </div>
      <img className='h-40 w-56 absolute left-[40%] top-5' src={item.src} />
    </div>
  )
}

export default Card
