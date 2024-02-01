import Card from './Card'

const NewArrivalsSection = ({ items, onClickNewShoe }) => {
  return (
    <div className='mt-20'>
      <div className=' flex-center'>
        <div className='dark:text-white text-4xl font-extrabold bg-center bg-[url(./assets/lines.png)]'>
          New Arrival
        </div>
      </div>
      <div className='justify-between mt-10 gap-x-6 gap-y-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {items.map(item => {
          return (
            <Card key={item.id} item={item} onClickNewCard={onClickNewShoe} />
          )
        })}
      </div>
    </div>
  )
}

export default NewArrivalsSection
