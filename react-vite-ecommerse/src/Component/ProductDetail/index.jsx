import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)  
    
  return (
    <aside 
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Detail</h2>
          <div>
            <XMarkIcon 
              className='size-6 text-black-500 cursor-pointer' 
              onClick={() => context.closeProducDetail()}
            />
          </div>
        </div>
        <figure className='px-6'>
          <img className='w-full h-full rounded-lg'
            src={context.productToShow.category && context.productToShow.category.image}
            alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='fon-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='fon-medium text-md'>{context.productToShow.title}</span>
          <span className='fon-light text-sm'>{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail
