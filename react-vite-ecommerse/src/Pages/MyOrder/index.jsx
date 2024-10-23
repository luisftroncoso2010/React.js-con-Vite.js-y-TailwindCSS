import { useContext } from "react"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import Layout from "../../Component/Layout"
import OrderCard from '../../Component/OrderCard'
import { ShoppingCartContext } from '../../Context';

const MyOrder = () => {

  const context = useContext(ShoppingCartContext)
  /* Buscamos la location de ese path */
  const currentPath = window.location.pathname
  /* Quitamos el resto y nos quedamos con el path */
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1
  
  return (
    <Layout>        
      <div className='flex justify-center items-center relative items-center w-80'>
        <Link to='/my-orders' className='absolute left-0'>        
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className="font-medium text-xl">My Order</h1>  
      </div>  
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id} 
              id={product.id}
              title={product.title}
              imageUrl={product.category.image}
              price={product.price}
            />
          ))
        }
      </div>   
    </Layout>
  )
}

export default MyOrder
