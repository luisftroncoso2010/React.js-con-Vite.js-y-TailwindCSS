import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Component/OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckOuteSideMenu = () => {

  /* Uso del contexto */
  const context = useContext(ShoppingCartContext)    

  const handleDelete = (id) => {
    const filterProducts = context.cartProducts.filter(product => product.id != id)
    context.setcartProducts(filterProducts)
    context.setCount(context.count - 1)
  } 

  const handleCheckout = () => {
    /* Se crea una objeto nuevo, para cada nueva orden.*/
    const orderToAdd = {
      date: '0.1.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setcartProducts([])
  }
    
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

        <div className='px-3 overflow-y-scroll flex-1'>
          {
            context.cartProducts.map((product) => (
              <OrderCard
                key={product.id} 
                id={product.id}
                title={product.title}
                imageUrl={product.category.image}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>

        <div className='px-6 mb-6 '>
          <p className='flex justify-between items-center mb-2'>
            <span className='font-light'>Total: </span>
            <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
          </p>

          <Link to='/my-orders/last'>
            <button onClick={() => handleCheckout()} 
            className='bg-black py-3 text-white w-full rounded-lg '>CheckOut</button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckOuteSideMenu
