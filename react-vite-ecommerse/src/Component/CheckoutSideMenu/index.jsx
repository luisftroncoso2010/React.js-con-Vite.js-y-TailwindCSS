import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Component/OrderCard'
import './styles.css'

const CheckOuteSideMenu = () => {
  const context = useContext(ShoppingCartContext)  
  console.log('CART:', context.cartProducts)
    
  return (
    <aside 
      className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div>
            <XMarkIcon 
              className='size-6 text-black-500 cursor-pointer' 
              onClick={() => context.closeCheckOutSideMenu()}
            />
          </div>
        </div>

        <div className='px-3 overflow-y-scroll'>
          {
            context.cartProducts.map((product) => (
              <OrderCard
                key={product.id} 
                title={product.title}
                imageUrl={product.category.image}
                price={product.price}
              />
            ))
          }
        </div>


    </aside>
  )
}

export default CheckOuteSideMenu
