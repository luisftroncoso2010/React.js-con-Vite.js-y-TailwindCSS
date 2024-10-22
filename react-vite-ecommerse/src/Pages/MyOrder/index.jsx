import { useContext } from "react"
import Layout from "../../Component/Layout"
import OrderCard from '../../Component/OrderCard'
import { ShoppingCartContext } from '../../Context';

const MyOrder = () => {

  const context = useContext(ShoppingCartContext)
  console.log(context.order);

  return (
    <Layout>
        My Order    
        <div className='px-3 overflow-y-scroll flex-1'>
          {
            context.order?.slice(-1)[0].products.map(product => (
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
