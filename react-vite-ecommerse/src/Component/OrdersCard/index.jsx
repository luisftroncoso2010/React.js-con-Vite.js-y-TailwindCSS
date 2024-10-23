import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {

  const { totalPrice, totalProducts } = props
  return (
    <div className='flex justify-between items-center mb-4 border border-black p-4 rounded-lg w-80'>     
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>0.1.02.2023</span>
          <span className='font-light'>{totalProducts} Articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='py-3 w-full rounded-lg text-xl'>Precio Total: ${totalPrice}</span>
          <ChevronRightIcon className='size-6 text-black-500 cursor-pointer' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard
